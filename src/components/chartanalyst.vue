<template>
<div class="chart-content">
    <div class="chart-title">
        <h1>图表展示</h1>
    </div>
    <div class="chart-analyst">
    <kendo-chart :render-as="'canvas'"
                 :data-source="chartData"
                 :series="series"
                 :pannable-lock="'y'"
                 :zoomable-mousewheel-lock="'y'"
                 :zoomable-selection-lock="'y'"
                 :category-axis="categoryAxis"
                 :theme="'sass'">
    </kendo-chart>
    </div>
    </div>
</template>
<script>
// 可以滚动查看的图表，适合数据量大的时候
export default {
    data: function() {
        return {
            chartData: this.chartValues(),
            series: [{
                type: "column",
                field: "value",
                categoryField: "category"
            }],
            valueAxis: [{
                 max: 140000,
                line: {
                    visible: false
                },
                minorGridLines: {
                    visible: true
                },
                labels: {
                    rotation: "auto"
                }
            }],
            categoryAxis: {
                min: 0,
                max: 30,
                labels: {
                    rotation: "auto"
                }
            },
            tooltip: {
                visible: true,
                template: "#= series.name #: #= value #"
            }
        }
    },
    methods: {
        chartValues: function() {
            var data = [];
            for (var i = 0; i < 20; i++) {
                var val = Math.round(Math.random() * 10);
                data.push({
                    category: "C" + i,
                    value: val
                });
            }

            return data;
        }
    }
}
</script>
<style>
.chart-content{
    width: 100%;
}
</style>

