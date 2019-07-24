<template>
    <div class="spark-content">
        <div class="spark-title">
        <h1>折线图</h1>
        </div>
        <div class="spark-line">
             <kendo-chart ref="chart"
                 :title-text="'Gross domestic product growth \n /GDP annual %/'"
                 :legend-position="'bottom'"
                 :chart-area-background="''"
                 :series-defaults-type="'line'"
                 :series-defaults-style="'smooth'"
                 :value-axis-labels-format="'{0}%'"
                 :value-axis-line-visible="false"
                 :value-axis-axis-crossing-value="'-10'"
                 :category-axis-categories="categories"
                 :category-axis-major-grid-lines-visible="false"
                 :category-axis-labels-rotation="'auto'"
                 :tooltip-visible="true"
                 :tooltip-format="'{0}%'"
                 :tooltip-template="tooltiptemplate"
                 :theme="'sass'">
        <kendo-chart-series-item :name="'init'"
                                 :data="indiaData"
                                 :k-style="'step'">
        </kendo-chart-series-item>
        <kendo-chart-series-item :name="'word'" :data="worldData"></kendo-chart-series-item>
        <kendo-chart-series-item :name="'hait'" :data="haitiData"></kendo-chart-series-item>
    </kendo-chart>
        </div>
    </div>
</template>
<script>
export default {
     data: function() {
        return {
            tooltiptemplate: '#= series.name #: #= value #',
            indiaData: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855],
            worldData: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727],
            haitiData: [-0.253, 0.362, -3.519, 1.799, 2.252, 3.343, 0.843, 2.877, -5.416, 5.590],
            categories: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011]
        }
    }
}
</script>
<style>
.spark-content{
    width: 100%;
}
</style>


