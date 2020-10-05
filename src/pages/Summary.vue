<route>
{
    path: '/summary',
    name: 'Summary',
    meta: {
      requiresAuth: true,
      authenticatedPath: true,
      showOnNavbar: true,
      navbarOrder: 0,
    },
}
</route>

<template>
  <div v-if="isReady" class="container flex flex-wrap pt-6">
    <div class="w-1/3 mb-3">
      <div class="bg-white shadow-lg rounded-md m-1 px-4 py-4">
        <div class="h-full" ref="NewRecovered"></div>
      </div>
    </div>
    <div class="w-1/3 mb-3">
      <div class="bg-white shadow-lg rounded-md m-1 px-4 py-4">
        <div class="h-full" ref="NewConfirmed"></div>
      </div>
    </div>
    <div class="w-1/3 mb-3">
      <div class="bg-white shadow-lg rounded-md m-1 px-4 py-4">
        <div class="h-full" ref="NewDeaths"></div>
      </div>
    </div>
    <div class="w-full">
      <div class="bg-white shadow-lg rounded-md m-1 px-4 pt-4">
        <div class="h-full" ref="summaryChart"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ASEAN_MEMBER } from '../utils/constants'
import ApexCharts from 'apexcharts'
import tailwindConfig from 'tailwind-vite'

export default {
  data: () => ({
    isReady: false,
  }),
  methods: {
    createSummaryChart(countries) {
      const options = {
        chart: {
          height: 500,
          type: 'area',
          background: 'transparent',
          offsetY: 10,
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        stroke: {
          curve: 'smooth',
        },
        colors: [
          tailwindConfig.theme.colors.indigo['600'],
          tailwindConfig.theme.colors.red['600'],
          tailwindConfig.theme.colors.green['500'],
        ],
        series: [
          {
            name: 'Total Terkonfirmasi',
            data: countries.map((c) => c.TotalConfirmed),
          },
          {
            name: 'Total Kematian',
            data: countries.map((c) => c.TotalDeaths),
          },
          {
            name: 'Total Dipulihkan',
            data: countries.map((c) => c.TotalRecovered),
          },
        ],
        fill: {
          type: 'gradient',
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: 'vertical',
            opacityFrom: 0.9,
            opacityTo: 0.6,
            stops: [0, 100, 100, 100],
          },
        },
        title: {
          text: 'Ringkasan',
          align: 'left',
          offsetX: 20,
          style: {
            fontSize: '32px',
            fontWeight: 'bold',
          },
        },
        subtitle: {
          text: 'Ringkasan kasus baru dan total per negara diperbarui setiap hari.',
          offsetY: 45,
          offsetX: 22,
        },
        markers: {
          size: 0,
          style: 'hollow',
          strokeWidth: 8,
          strokeColor: '#fff',
          strokeOpacity: 0.25,
        },
        grid: {
          show: false,
          padding: {
            left: 80,
            right: 80,
          },
        },
        yaxis: {
          show: false,
        },
        labels: countries.map((c) => c.Country),
        xaxis: {
          type: 'category',
          tooltip: {
            enabled: false,
          },
          labels: {
            trim: true,
          },
        },
        legend: {
          offsetY: -50,
          position: 'top',
          horizontalAlign: 'right',
        },
      }

      new ApexCharts(this.$refs.summaryChart, options).render()
    },
    createSpark(id, title, color, data) {
      const options = {
        chart: {
          id,
          type: 'line',
          height: 160,
          sparkline: {
            enabled: true,
          },
          group: 'sparklines',
        },
        series: [
          {
            name: title,
            data: data.map((c) => c[id]),
          },
        ],
        stroke: {
          curve: 'smooth',
        },
        markers: {
          size: 0,
        },
        tooltip: {
          fixed: {
            enabled: true,
            position: 'right',
          },
        },
        title: {
          text: title,
          style: {
            fontSize: '20px',
          },
        },
        subtitle: {
          text: data.reduce((prevVal, currVal) => currVal[id] + prevVal, 0),
          style: {
            fontSize: '26px',
          },
        },
        labels: data.map((c) => c.Country),
        xaxis: {
          type: 'category',
          tooltip: {
            enabled: false,
          },
          labels: {
            trim: true,
          },
        },
        colors: [color],
      }

      new ApexCharts(this.$refs[id], options).render()
    },
  },
  created() {
    window.showPageLoader()
  },
  mounted() {
    fetch('https://api.covid19api.com/summary', {
      method: 'GET',
      redirect: 'follow',
    })
      .then((response) => {
        this.isReady = true
        return response.json()
      })
      .then((result) => {
        const aseanData = result.Countries.filter((c) =>
          ASEAN_MEMBER.CountriesCode.includes(c.CountryCode)
        )

        this.createSummaryChart(aseanData)

        this.createSpark(
          'NewConfirmed',
          'Total Kasus Baru Terkonfirmasi',
          tailwindConfig.theme.colors.indigo['600'],
          aseanData
        )

        this.createSpark(
          'NewDeaths',
          'Total Kasus Kematian Baru',
          tailwindConfig.theme.colors.red['600'],
          aseanData
        )

        this.createSpark(
          'NewRecovered',
          'Total Kasus Terpulihkan Baru',
          tailwindConfig.theme.colors.green['500'],
          aseanData
        )

        setTimeout(() => {
          window.hidePageLoader()
        }, 1500)
      })
      .catch((error) => console.log('error', error))
  },
}
</script>
