<template>
    <div class="bar-chart-page">
        <div class="bar-chart-canvas"></div>
    </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";

let chart: echarts.ECharts | undefined;

const resize = () => {
    chart?.resize();
};

onMounted(() => {
    chart = echarts.init(document.querySelector(".bar-chart-canvas")!);
    chart.setOption({
        title: {
            text: "Bar",
        },
        tooltip: {
            trigger: "axis",
        },
        xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: "bar",
            },
        ],
    });

    window.addEventListener("resize", resize);
});

onBeforeUnmount(() => {
    window.removeEventListener("resize", resize);
});
</script>

<style lang="scss">
.bar-chart {
    &-canvas {
        width: 100%;
        height: 100%;
    }
}
</style>
