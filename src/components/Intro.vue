<template>
  <div class="intro">
      <ImageSwapper :images="images"></ImageSwapper>
      
      <h2 class="oswald-font" :style="{'color': primaryStyle}">What kind of day do you fancy?</h2>

      <div class="what-kind-of-day">
      <div class="option-container">
        <div @click="selectOption('hungry')" :style="{'background-color': primaryStyle, 'color': secondaryStyle}" class="option lilita-font">
          Hungry
        </div>
        <div @click="selectOption('relaxing')" :style="{'background-color': primaryStyle, 'color': secondaryStyle}" class="option lilita-font">
          Relaxing
        </div>
        <div @click="selectOption('active')" :style="{'background-color': primaryStyle, 'color': secondaryStyle}" class="option lilita-font">
          Active
        </div>
      </div>

  
      <div class="option-container">
        <div @click="selectOption('social')" :style="{'background-color': primaryStyle, 'color': secondaryStyle}" class="option lilita-font">
          Social
        </div>
        <div @click="selectOption('nature')" :style="{'background-color': primaryStyle, 'color': secondaryStyle}" class="option lilita-font">
          Nature
        </div>
        <div @click="selectOption('me')" :style="{'background-color': primaryStyle, 'color': secondaryStyle}" class="option lilita-font">
          Just a me day
        </div>
      </div>
      </div>

  </div>
</template>

<script>
import ImageSwapper from './ImageSwapper.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Intro',
  props: {
  },
  computed: {
    ...mapGetters([
      'primaryStyle',
      'bgStyle',
      'secondaryStyle'
    ])
  },
  methods: {
    selectOption(option) {
      this.$emit('selectDay', option)
    }
  },
  data () {
    return {
      images: [
        '../images/running.png',
        '../images/7467.png',
        '../images/7139.png',
        '../images/8753.png'
      ]
    }
  },
  components: {
    ImageSwapper
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


h2 {
  text-align: center;
  margin-top: 10vh;
  font-size: 30px;
}

.what-kind-of-day {
  text-align: center;
}

.option-container {
  margin: auto;
  margin-bottom: 15px;
}

.option {
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 20px;
  padding: 8px;
  width: 17vw;
  font-size: 2.8vw;
}

@media (min-width: 1024px) {
  .option {
    font-size: 2vw
  }
}

.option:hover {

}
</style>
