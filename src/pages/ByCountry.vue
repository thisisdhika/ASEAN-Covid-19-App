<route>
{
    path: '/by-country',
    name: 'ByCountry',
    meta: {
      requiresAuth: true,
      showOnNavbar: true,
      navbarOrder: 1,
    },
}
</route>

<template>
  <div class="container pt-6">
    <h1 class="text-2xl font-bold text-gray-800">Data Kasus Berdasarkan Negara</h1>
    <div class="flex flex-wrap mb-4">
      <h4 class="text-lg font-bold text-gray-800 w-full">Filters</h4>
      <div class="relative rounded-md shadow-sm bg-gray-100 px-5 py-2 w-1/4">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span class="text-gray-500 sm:text-sm sm:leading-5">
            <i class="fas fa-calendar"></i>
          </span>
        </div>
        <input ref="dateRangePicker" class="form-input block w-full pl-4 sm:text-sm sm:leading-5" />
      </div>
      <div class="relative w-1/4 ml-4">
        <span class="inline-block w-full rounded-md shadow-sm">
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
            class="cursor-default relative w-full rounded-md border border-gray-300 bg-gray-100 pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            @click="showCountrySelect = !showCountrySelect"
          >
            <div class="flex items-center space-x-3">
              <img
                :src="`https://www.countryflags.io/${
                  countriesCode[countriesSlug.findIndex((c) => c == countrySelectValue)]
                }/flat/64.png`"
                alt=""
                class="flex-shrink-0 h-6 w-6"
              />
              <span class="block truncate capitalize"> {{ countrySelectValue }} </span>
            </div>
            <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
        </span>

        <transition v-bind="selectTransition">
          <div
            v-if="showCountrySelect"
            class="absolute mt-1 w-full rounded-md bg-gray-100 shadow-lg"
          >
            <ul
              tabindex="-1"
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-item-3"
              class="max-h-56 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
            >
              <li
                id="listbox-item-0"
                role="option"
                class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
                v-for="(cc, i) in countriesCode"
                :key="cc"
                @click="countrySelectValue = countriesSlug[i]"
              >
                <div class="flex items-center space-x-3">
                  <img
                    :src="`https://www.countryflags.io/${cc}/flat/64.png`"
                    alt=""
                    class="flex-shrink-0 h-6 w-6"
                  />
                  <span class="block truncate capitalize"> {{ countriesSlug[i] }} </span>
                </div>

                <span
                  v-if="countrySelectValue === countriesSlug[i]"
                  class="absolute inset-y-0 right-0 flex items-center pr-4"
                >
                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    class="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider"
                    v-for="head in tableHead"
                    :key="head.key"
                  >
                    {{ head.title }}
                  </th>
                </tr>
              </thead>
              <tbody v-if="tableData.length" class="bg-white divide-y divide-gray-200">
                <tr v-for="dataState in pagination.shown * pagination.current" :key="dataState">
                  <td
                    class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900"
                    v-for="head in tableHead"
                    :key="dataState + head.key"
                    v-html="tableData[dataState][head.key]"
                  ></td>
                </tr>

                <!-- More rows... -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenLite } from 'gsap'
import flatpickr from 'flatpickr'
import ID from 'flatpickr/dist/l10n/id'
import { ASEAN_MEMBER } from '../utils/constants'
import tailwindConfig from 'tailwind-vite'

export default {
  data: () => ({
    isReady: false,
    showCountrySelect: false,
    countriesCode: ASEAN_MEMBER.CountriesCode,
    countriesSlug: ASEAN_MEMBER.CountriesSlug,
    countrySelectValue: 'indonesia',
    dateRange: '',
    tableHead: [
      {
        title: 'Negara',
        key: 'Country',
      },
      {
        title: 'Latitude',
        key: 'Lat',
      },
      {
        title: 'Longitude',
        key: 'Lon',
      },
      {
        title: 'Jumlah Kasus',
        key: 'Cases',
      },
      {
        title: 'Tanggal',
        key: 'Date',
      },
    ],
    tableData: [],
    pagination: {
      current: 1,
      shown: 10,
    },
  }),
  setup() {
    const selectTransition = {
      css: false,
      onBeforeEnter(el) {
        TweenLite.set(el, {
          scaleX: 0.8,
          scaleY: 1.2,
          opacity: 0,
          translateY: '-100%',
        })
      },
      onEnter(el, done) {
        TweenLite.to(el, {
          duration: 1,
          scaleX: 1,
          scaleY: 1,
          opacity: 1,
          translateY: '0%',
          ease: 'elastic.inOut(2.5, 1)',
          onComplete: done,
        })
      },
      onLeave(el, done) {
        TweenLite.to(el, {
          duration: 0.2,
          opacity: 0,
          onComplete: done,
        })
      },
    }

    return {
      selectTransition,
    }
  },
  methods: {
    fetchByCountry(queryDateTimeRange, countrySlug = 'indonesia', status = 'confirmed') {
      fetch(
        `https://api.covid19api.com/total/country/${countrySlug}/status/${status}${
          queryDateTimeRange || ''
        }`,
        {
          method: 'GET',
          redirect: 'follow',
        }
      )
        .then((response) => {
          this.isReady = true
          return response.json()
        })
        .then((result) => {
          this.tableData = result.map((d) => ({
            ...d,
            Lat:
              parseFloat(d.Lat) !== 0
                ? d.Lat
                : '<span class="text-gray-500">Tidak Diketahui</span>',
            Lon:
              parseFloat(d.Lon) !== 0
                ? d.Lon
                : '<span class="text-gray-500">Tidak Diketahui</span>',
            Date: this.moment(d.Date).format('YYYY-MM-DD HH:mm'),
            Cases: `<span class="font-black">${d.Cases}</span> Kasus`,
          }))
        })
        .catch((error) => console.log('error', error))
    },
  },
  watch: {
    countrySelectValue: {
      immediate: true,
      handler(country) {
        this.fetchByCountry(
          `?from=${this.moment()
            .subtract(1, 'months')
            .format('YYYY-MM-DD')}T00:00:00Z&to=${this.moment().format('YYYY-MM-DD')}T00:00:00Z`,
          country
        )
      },
    },
  },
  mounted() {
    flatpickr(this.$refs.dateRangePicker, {
      locale: ID.Indonesian,
      mode: 'range',
      enableTime: true,
      defaultDate: [
        this.moment().subtract(1, 'months').format('YYYY-MM-DD'),
        this.moment().format('YYYY-MM-DD'),
      ],
      onClose: (selectedDates) => {
        if (selectedDates.length > 1) {
          this.fetchByCountry(
            `?from=${this.moment(selectedDates[0])
              .subtract(1, 'months')
              .format('YYYY-MM-DD')}T00:00:00Z&to=${this.moment(selectedDates[1]).format(
              'YYYY-MM-DD'
            )}T00:00:00Z`
          )
        }
      },
    })
  },
}
</script>
