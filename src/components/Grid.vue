<template>
  <div class="interface">
    <div class="grid-container">
      <!-- Iterate the plots and set styles -->
      <div
        v-for="plot in plots" :key="plot.index"
        class="grid-item"
        :style="{
          'background-color' : plot.soilColor,
          'width' : plot.width,
          'height' : plot.height
        }"
      >
        <span class="grid-item-text tooltip">
          <!-- Text in grid item -->
          {{ cropStatus(plot) }}
          <span class="item-name">{{ plot.name }}</span>
          <span class="item-time">Harvest: {{ timeToHarvest(plot) }} days</span>
          <span class="item-time">Water: {{ timeToWater(plot) }} days</span>

          <!-- Text in tooltip -->
          <span class="tooltiptext">
            <span>Harvest: {{ timeToHarvest(plot) }} days</span><br/>
            <span>Water: {{ timeToWater(plot) }} days</span><br/>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    plots: Array,
  },
  data: () => ({

  }),
  methods: {
    rainTime(rainPerSecond) {
      return `Rain: ${rainPerSecond}`;
    },
    timeToWater(plot) {
      if (plot.witherOn && plot.witherOn.seconds) {
        return Math.floor(plot.witherOn.seconds / 86400);
      }
      return 'Empty information';
    },
    timeToHarvest(plot) {
      if (plot.harvestOn && plot.harvestOn.seconds) {
        return Math.floor(plot.harvestOn.seconds / 86400);
      }
      return 'Empty information';
    },
    cropStatus(plot) {
      if (!plot.harvestOn) {
        return '⌛';
      }
      return (Math.random() >= 0.5) ? '❌' : '✅';
    },
  },
};
</script>

<style scoped lang="scss">
.grid-container {
  margin: 0 auto;
  max-width: 80%;
  max-height: 700px;
  overflow: auto;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  background-color: #EEE;
  padding: 10px;

  .grid-item {
    text-align: center;

    .grid-item-text {
      display: block;
      text-align: center;
      font-size: 30px;
      margin: 25%;
    }

    .item-name {
      display: block;
    }

    .item-time {
      display: block;
      font-size: 16px;
    }
  }
}

.tooltip {
  cursor: pointer;
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 220px;
  max-height: 240px;
  overflow: auto;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  font-size: 20px;
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

</style>
