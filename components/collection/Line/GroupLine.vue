<template>
    <!-- showing the Groupline component starts here -->
    <vue-highCharts type="chart" :options="chartData" />
     <!-- showing the Groupline component ends here -->
</template>
<script setup lang="ts">
// importing the vueHighchart package
import VueHighCharts from 'vue3-highcharts'

//Describing schema for GroupLine
interface LineSchema{
    title:object,
   subtitle:object,
   yAxis:object,
   xAxis:object,
   legend:object,
   plotOptions:object,
   series:object,
   responsive:object
}

// Getting the props 
let props = defineProps<{ LineChartData:LineSchema }>()

// Assigning LineChartData data to chartdata
const chartData = computed(() => {
   return props.LineChartData
})
</script>