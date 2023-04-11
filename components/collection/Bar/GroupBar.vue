<template>
     <!-- showing the Bar component starts here -->
    <vue-highCharts type="chart" :options="chartData" />
     <!-- showing the Bar component ends here -->
</template>
<script setup lang="ts">
// importing the vueHighchart package
import VueHighCharts from 'vue3-highcharts'

//Describing the schema of BarSchema
interface BarSchema{
   chart:object,
   title:object,
   xAxis:object,
   yAxis:object,
   tooltip:object,
   plotOptions:object,
   series:object

}

// Getting the props 
let props = defineProps<{ BarChartData:BarSchema }>()
// Assigning Barchardata data to chartdata
const chartData = computed(() => {
   return props.BarChartData
})
</script>