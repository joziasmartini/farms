<template>
  <div id="interface">
    <h1>My Farmland Monitor</h1>
    <Grid :plots="plots" />
  </div>
</template>

<script>
import Grid from './components/Grid.vue';

export default {
  name: 'App',
  components: {
    Grid,
  },
  data: () => ({
    plots: [
      {
        _id: 1,
        name: 'Corn',
        height: '243px',
        width: '243px',
        soilColor: '#996C1C',
        rainLikelihoodPerSecond: 0.1233,
      },
      {
        _id: 2,
        name: 'Bean',
        height: '300px',
        width: '400px',
        soilColor: '#F2BE40',
        rainLikelihoodPerSecond: 0.5343,
        harvestOn: {
          seconds: 1644578475,
          nanoseconds: 112000000,
        },
        witherOn: {
          seconds: 1644578475,
          nanoseconds: 112000000,
        },
      },
      {
        _id: 5,
        name: 'Wheat',
        height: '200px',
        width: '200px',
        soilColor: '#F2BE40',
        rainLikelihoodPerSecond: 0.6548,
        harvestOn: {
          seconds: 1644578475,
          nanoseconds: 112000000,
        },
        witherOn: {
          seconds: 1644578475,
          nanoseconds: 112000000,
        },
      },
      {
        _id: 6,
        name: 'Rice',
        height: '300px',
        width: '400px',
        soilColor: '#F2BE40',
        rainLikelihoodPerSecond: 0.6656,
      },
      {
        _id: 7,
        name: 'Wheat',
        height: '300px',
        width: '400px',
        soilColor: '#F2BE40',
        rainLikelihoodPerSecond: 0.1313,
        harvestOn: {
          seconds: 1644578475,
          nanoseconds: 112000000,
        },
        witherOn: {
          seconds: 1644578475,
          nanoseconds: 112000000,
        },
      },
      {
        _id: 3,
        name: 'Wheat',
        height: '123px',
        width: '123px',
        soilColor: '#996C1C',
        rainLikelihoodPerSecond: 0.6788,
        harvestOn: {
          seconds: 50578475,
          nanoseconds: 342000000,
        },
        witherOn: {
          seconds: 1234578475,
          nanoseconds: 112000000,
        },
      },
      {
        _id: 4,
        name: 'Rice',
        height: '123px',
        width: '123px',
        soilColor: '#F2BE40',
        rainLikelihoodPerSecond: 0.4564,
        harvestOn: {
          seconds: 1641490161,
          nanoseconds: 998000000,
        },
        witherOn: {
          seconds: 1641491126,
          nanoseconds: 998000000,
        },
      },
      {
        _id: 1,
        name: 'Corn',
        height: '243px',
        width: '243px',
        soilColor: '#996C1C',
        rainLikelihoodPerSecond: 0.1233,
        harvestOn: {
          seconds: 1641490161,
          nanoseconds: 998000000,
        },
        witherOn: {
          seconds: 1641491126,
          nanoseconds: 998000000,
        },
      },
      {
        _id: 2,
        name: 'Bean',
        height: '300px',
        width: '400px',
        soilColor: '#F2BE40',
        rainLikelihoodPerSecond: 0.5343,
      },
      {
        _id: 5,
        name: 'Wheat',
        height: '200px',
        width: '200px',
        soilColor: '#F2BE40',
        rainLikelihoodPerSecond: 0.6548,
        harvestOn: {
          seconds: 1644578475,
          nanoseconds: 112000000,
        },
        witherOn: {
          seconds: 1644578475,
          nanoseconds: 112000000,
        },
      },
      {
        _id: 6,
        name: 'Rice',
        height: '300px',
        width: '400px',
        soilColor: '#F2BE40',
        rainLikelihoodPerSecond: 0.6656,
      },
      {
        _id: 7,
        name: 'Wheat',
        height: '300px',
        width: '400px',
        soilColor: '#F2BE40',
        rainLikelihoodPerSecond: 0.1313,
        harvestOn: {
          seconds: 1644578475,
          nanoseconds: 112000000,
        },
        witherOn: {
          seconds: 1644578475,
          nanoseconds: 112000000,
        },
      },
      {
        _id: 3,
        name: 'Wheat',
        height: '123px',
        width: '123px',
        soilColor: '#996C1C',
        rainLikelihoodPerSecond: 0.6788,
        harvestOn: {
          seconds: 50578475,
          nanoseconds: 342000000,
        },
        witherOn: {
          seconds: 1234578475,
          nanoseconds: 112000000,
        },
      },
      {
        _id: 4,
        name: 'Rice',
        height: '123px',
        width: '123px',
        soilColor: '#F2BE40',
        rainLikelihoodPerSecond: 0.4564,
        harvestOn: {
          seconds: 1641490161,
          nanoseconds: 998000000,
        },
        witherOn: {
          seconds: 1641491126,
          nanoseconds: 998000000,
        },
      },
      {
        _id: 1,
        name: 'Corn',
        height: '243px',
        width: '243px',
        soilColor: '#996C1C',
        rainLikelihoodPerSecond: 0.1233,
      },
      {
        _id: 2,
        name: 'Bean',
        height: '300px',
        width: '400px',
        soilColor: '#F2BE40',
        rainLikelihoodPerSecond: 0.5343,
        harvestOn: {
          seconds: 1644578475,
          nanoseconds: 112000000,
        },
        witherOn: {
          seconds: 1644578475,
          nanoseconds: 112000000,
        },
      },
      {
        _id: 5,
        name: 'Wheat',
        height: '200px',
        width: '200px',
        soilColor: '#F2BE40',
        rainLikelihoodPerSecond: 0.6548,
        harvestOn: {
          seconds: 1644578475,
          nanoseconds: 112000000,
        },
        witherOn: {
          seconds: 1644578475,
          nanoseconds: 112000000,
        },
      },
      {
        _id: 6,
        name: 'Rice',
        height: '300px',
        width: '400px',
        soilColor: '#F2BE40',
        rainLikelihoodPerSecond: 0.6656,
      },
      {
        _id: 7,
        name: 'Wheat',
        height: '300px',
        width: '400px',
        soilColor: '#F2BE40',
        rainLikelihoodPerSecond: 0.1313,
        harvestOn: {
          seconds: 1644578475,
          nanoseconds: 112000000,
        },
        witherOn: {
          seconds: 1644578475,
          nanoseconds: 112000000,
        },
      },
      {
        _id: 3,
        name: 'Wheat',
        height: '123px',
        width: '123px',
        soilColor: '#996C1C',
        rainLikelihoodPerSecond: 0.6788,
        harvestOn: {
          seconds: 50578475,
          nanoseconds: 342000000,
        },
        witherOn: {
          seconds: 1234578475,
          nanoseconds: 112000000,
        },
      },
      {
        _id: 4,
        name: 'Rice',
        height: '123px',
        width: '123px',
        soilColor: '#F2BE40',
        rainLikelihoodPerSecond: 0.4564,
        harvestOn: {
          seconds: 1641490161,
          nanoseconds: 998000000,
        },
        witherOn: {
          seconds: 1641491126,
          nanoseconds: 998000000,
        },
      },
      {
        _id: 1,
        name: 'Corn',
        height: '243px',
        width: '243px',
        soilColor: '#996C1C',
        rainLikelihoodPerSecond: 0.1233,
        harvestOn: {
          seconds: 1641490161,
          nanoseconds: 998000000,
        },
        witherOn: {
          seconds: 1641491126,
          nanoseconds: 998000000,
        },
      },
      {
        _id: 2,
        name: 'Bean',
        height: '300px',
        width: '400px',
        soilColor: '#F2BE40',
        rainLikelihoodPerSecond: 0.5343,
      },
      {
        _id: 5,
        name: 'Wheat',
        height: '200px',
        width: '200px',
        soilColor: '#F2BE40',
        rainLikelihoodPerSecond: 0.6548,
        harvestOn: {
          seconds: 1644578475,
          nanoseconds: 112000000,
        },
        witherOn: {
          seconds: 1644578475,
          nanoseconds: 112000000,
        },
      },
      {
        _id: 6,
        name: 'Rice',
        height: '300px',
        width: '400px',
        soilColor: '#F2BE40',
        rainLikelihoodPerSecond: 0.6656,
      },
      {
        _id: 7,
        name: 'Wheat',
        height: '300px',
        width: '400px',
        soilColor: '#F2BE40',
        rainLikelihoodPerSecond: 0.1313,
        harvestOn: {
          seconds: 1644578475,
          nanoseconds: 112000000,
        },
        witherOn: {
          seconds: 1644578475,
          nanoseconds: 112000000,
        },
      },
      {
        _id: 3,
        name: 'Wheat',
        height: '123px',
        width: '123px',
        soilColor: '#996C1C',
        rainLikelihoodPerSecond: 0.6788,
        harvestOn: {
          seconds: 50578475,
          nanoseconds: 342000000,
        },
        witherOn: {
          seconds: 1234578475,
          nanoseconds: 112000000,
        },
      },
      {
        _id: 4,
        name: 'Rice',
        height: '123px',
        width: '123px',
        soilColor: '#F2BE40',
        rainLikelihoodPerSecond: 0.4564,
        harvestOn: {
          seconds: 1641490161,
          nanoseconds: 998000000,
        },
        witherOn: {
          seconds: 1641491126,
          nanoseconds: 998000000,
        },
      },
    ],
  }),
  computed: {
    function() {
      return 'ok';
    },
  },
  methods: {
    functionTwo() {
      return 'ok';
    },
  },
};
</script>

<style lang="scss">
#interface {
  text-align: center;
}
</style>
