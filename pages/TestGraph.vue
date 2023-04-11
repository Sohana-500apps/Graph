<template>
    <!--Showing charts in main starts-->
    <CollectionMain type="chart" :BarChartData="BarChartData" :DonutChartData="DonutChartData" :LineChartData="LineChartData"/>
    <!--Showing charts in main ends-->
</template>
<script setup lang="ts">
// Getting all the chartdata like BarChartData,donutline and linechart from ts and importing them
import { BarChartData }  from '../ts/bar'
import { DonutChartData }  from '../ts/donut'
import { LineChartData } from '../ts/line'

</script>

