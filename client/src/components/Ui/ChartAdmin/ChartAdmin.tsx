import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const ChartAdmin = ({ data }: { data: { [key: string]: number } }) => {

    const options: ApexOptions = {
        chart: {
            id: "basic-bar",
            type: 'bar', // Ensure this matches the type below
            parentHeightOffset: 0 // important to adjust height dynamically
        },
        xaxis: {
            categories: Object.keys(data),
            labels: {
                style: {
                    colors: Object.keys(data).map(()=>'#A6ADBB'),
                    fontSize: '13px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 300,
                    cssClass: 'apexcharts-xaxis-label',
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: ['#A6ADBB', '#A6ADBB', '#A6ADBB', '#A6ADBB', '#A6ADBB', '#A6ADBB', '#A6ADBB',],
                    fontSize: '11px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 300,
                    cssClass: 'apexcharts-xaxis-label',
                },
            },
        },
        responsive: [
            {
                breakpoint: 640,
                options: {
                    chart: {
                        width: '100%'
                    }
                }
            },
            {
                breakpoint: 1024,
                options: {
                    chart: {
                        width: '100%'
                    }
                }
            },
            {
                breakpoint: 1280,
                options: {
                    chart: {
                        width: '100%'
                    }
                }
            },
            {
                breakpoint: 1536,
                options: {
                    chart: {
                        width: '100%'
                    }
                }
            }
        ],
    };

    const series = [
        {
            name: "Total Booked",
            data: Object.values(data)
        }
    ];

    return (
        <div className="app">
            <div className="row">
                <div className="mixed-chart">
                    <Chart
                        options={options}
                        series={series}
                        type="bar" // Ensure this matches the type in options
                    />
                </div>
            </div>
        </div>
    );
};

export default ChartAdmin;
