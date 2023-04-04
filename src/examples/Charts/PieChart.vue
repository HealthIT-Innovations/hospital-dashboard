<template>
  <div class="p-3 pb-0 card-header">
    <h6>{{ title }}</h6>
    <!-- eslint-disable vue/no-v-html -->
    <p v-if="description" class="text-sm" v-html="description" />
  </div>
  <div class="p-3 card-body d-flex justify-content-center">
    <div class="chart">
      <canvas :id="id" class="chart-canvas" :height="height"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import colorLib from "@kurkle/color";
export default {
  name: "PieChart",
  props: {
    id: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      default: "300",
    },
    title: {
      type: String,
      default: "",
    },
    legendPositon: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    chart: {
      type: Object,
      required: true,
      labels: Array,
      datasets: {
        type: Array,
        label: String,
        data: Array,
      },
    },
  },

  mounted() {
    var ctx = document.getElementById(this.id).getContext("2d");

    let chartStatus = Chart.getChart(this.id);
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }

    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["United Health", "SwaziMed", "SRIC", "Lidwala", "Govt"],
        datasets: [
          {
            label: this.chart.datasets[0].label,
            data: this.chart.datasets[0].data,
            backgroundColor: Object.values(this.CHART_COLORS),
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: this.chart.legendPositon,
          },
        },
      },
    });
  },
  data() {
    return {
      CHART_COLORS: {
        red: "rgb(255, 99, 132)",
        orange: "rgb(255, 159, 64)",
        yellow: "rgb(255, 205, 86)",
        green: "rgb(75, 192, 192)",
        blue: "rgb(54, 162, 235)",
        purple: "rgb(153, 102, 255)",
        grey: "rgb(201, 203, 207)",
      },
    };
  },
  methods: {
    colorize(opaque, hover, ctx) {
      const v = ctx.parsed;
      const c =
        v < -50
          ? "#D60000"
          : v < 0
          ? "#F46300"
          : v < 50
          ? "#0358B6"
          : "#44DE28";

      const opacity = hover
        ? 1 - Math.abs(v / 150) - 0.2
        : 1 - Math.abs(v / 150);

      return opaque ? c : this.transparentize(c, opacity);
    },

    hoverColorize(ctx) {
      return this.colorize(false, true, ctx);
    },
    transparentize(value, opacity) {
      var alpha = opacity === undefined ? 0.5 : 1 - opacity;
      return colorLib(value).alpha(alpha).rgbString();
    },
  },
};
</script>

<style scoped>
.chart {
  width: 55%;
}
</style>
