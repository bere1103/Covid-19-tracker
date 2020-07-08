


const buildChartData = (data) => {
    let chartData = [];
    for(let date in data.cases){
        let newDataPoint = {
            x: date,
            y: data.cases[date]
        }
        chartData.push(newDataPoint);
    }
    return chartData;
}

const buildPieChart = (data) => {
    var ctx = document.getElementById('myPieChart').getContext('2d');
    var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
    datasets: [{
        data: [
                  
                data.active, 
                data.recovered, 
                data.deaths
            ],

        backgroundColor: [

            data.active = '#330033',
            data.recovered = '#660066',
            data.deaths  ='#996699'
        ]

    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Active',
        'Recovered',
        'Deaths'
    ]
},
    options: {
		responsive: true
			}
});

}

const buildChart = (chartData) => {
    console.log("All is good");
    var timeFormat = 'MM/DD/YY';
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            datasets: [{
                label: 'Total Cases',
                backgroundColor: '#1d2c4d',
                borderColor: '#1d2c4d',
                data: chartData
            }]
        },

        // Configuration options go here
        options: {
            maintainAspectRatio: false,
            tooltips: {
                mode: 'index',
                intersect: false
            },
            scales:     {
                xAxes: [{
                    type: "time",
                    time: {
                        format: timeFormat,
                        tooltipFormat: 'll'
                    }
                }],
                yAxes: [{
                    ticks: {
                        // Include a dollar sign in the ticks
                        callback: function(value, index, values) {
                            return numeral(value).format('0,0');
                        }
                    }
                }]
            }
        }
    });
}