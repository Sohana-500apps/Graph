<template>
 <!-- showing the different graph list start here -->
   <div>
      <div class="text-center divide-y-2 border-y">
         <h1 class="text-3xl">Graph list</h1>
       </div>
       <!-- showing Group Bar component starts here -->
       <div class="text-center">
         <h1 class="text-3xl">Group Bar</h1>
         <CollectionBarGroupBar :BarChartData="BarChartData"/>
       </div>
           <!-- showing Group Bar component ends here -->
         <!-- showing Group Line component starts here -->
       <div class="text-center">
         <h1 class="text-3xl">Group Line</h1>
         <CollectionLineGroupLine :LineChartData="LineChartData"/>
       </div>
        <!-- showing Group Line component ends here -->
        <!-- showing the donut component starts here -->
       <div class="text-center">
         <h1 class="text-3xl">Donut</h1>
         <CollectionDonut :DonutChartData="DonutChartData"/>
       </div>
     <!-- showing the donut component ends here -->
   </div>
    <!-- showing the different graph list ends here -->
</template>
<script setup lang="ts">

//Describe schema for GroupBar
interface BarSchema{
   chart:object,
   title:object,
   xAxis:object,
   yAxis:object,
   tooltip:object,
   plotOptions:object,
   series:object
}
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
//Describing schema for Donut
interface  DonutSchema{
   chart:object,
   title:object,
   subtitle:object,
   plotOptions:object,
   series:object
}

// Getting the props 
let props = defineProps<{ BarChartData:BarSchema,LineChartData:LineSchema,DonutChartData:DonutSchema }>()

</script>