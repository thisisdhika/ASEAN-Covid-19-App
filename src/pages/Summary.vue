<route>
{
    path: '/summary',
    name: 'Summary',
    meta: {
      requiresAuth: true,
      authenticatedPath: true,
      showOnNavbar: true
    },
}
</route>

<template>
  <div class="container mt-4">
    <div class="flex flex-wrap">
      <div class="w-full">
        <div class="bg-white shadow-lg rounded-md m-1 px-4 pt-4">
          <div class="h-full" ref="summaryChart"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ASEAN_MEMBER } from '../utils/constants'
import ApexCharts from 'apexcharts'
import tailwindConfig from 'tailwind-vite'

export default {
  data: () => ({}),
  setup() {
    return {
      colors: [
        'gray',
        'red',
        'orange',
        'yellow',
        'green',
        'teal',
        'blue',
        'indigo',
        'purple',
        'pink',
      ],
    }
  },
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
  },
  mounted() {
    fetch('https://api.covid19api.com/summary', {
      method: 'GET',
      redirect: 'follow',
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        this.createSummaryChart(
          result.Countries.filter((c) => ASEAN_MEMBER.CountriesCode.includes(c.CountryCode))
        )
      })
      .catch((error) => console.log('error', error))
  },
}
</script>
