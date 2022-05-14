<template>
    <div class="line-chart-page">
        <div class="line-chart-canvas"></div>
    </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";

let chart: echarts.ECharts | undefined;

const resize = () => {
    chart?.resize();
};

onMounted(() => {
    chart = echarts.init(document.querySelector(".line-chart-canvas")!);
    chart.setOption({
        title: {
            text: "Line",
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
                data: [150, 230, 224, 218, 135, 147, 260],
                type: "line",
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
.line-chart {
    &-canvas {
        width: 100%;
        height: 100%;
    }
}
</style>
