<template>
     <!-- showing the Donut component starts here -->
    <vue-highCharts type="chart" :options="chartData" />
     <!-- showing the Donut component ends here -->
</template>
<script setup lang="ts">
// importing the vueHighchart package
import VueHighCharts from 'vue3-highcharts'

//Describing schema for Donut
interface  DonutSchema{
   chart:object,
   title:object,
   subtitle:object,
   plotOptions:object,
   series:object
}

// Getting the props 
let props = defineProps<{ DonutChartData:DonutSchema }>()

// Assigning DonutChartData data to chartdata
const chartData = computed(() => {
   return props.DonutChartData
})
</script>