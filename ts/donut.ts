//showing donut chat
export  const DonutChartData={
     // To show donut 3d options and type of the chart
     chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
        },
    },
    // To show the title and subtitle
    title: {
        text: 'Beijing 2022 gold medals by country',
        align: 'left',
    },
    subtitle: {
        text: '3D donut in Highcharts',
        align: 'left',
    },
    // Data properties to be shown on the donut
    plotOptions: {
        // Donut inner diameter and size
        pie: {
            innerSize: 200,
            depth: 45,
        },
        series: {
            // Duration for the animation
            animation: {
                duration: 500,
            },
        },
    },
    // Data to be shown as sections
    series: [
        {
            name: 'Medals',
            data: [
                ['Norway', 16],
                ['Germany', 12],
                ['USA', 8],
                ['Sweden', 8],
                ['Netherlands', 8],
                ['ROC', 6],
                ['Austria', 7],
                ['Canada', 4],
                ['Japan', 3],
            ],
        },
    ],
}
