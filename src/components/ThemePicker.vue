<template>
  <div :class="['theme-picker']" :style="{ 'border': '4px solid ' + primaryStyle}">
    <div @click="clickTheme(t)" class="theme-option" :style="{ 'background-color': 'var(--' + t + '-bg)', 'border': '4px solid var(--' + t + '-primary)'}" v-for="t in themes" :key="t">
      
    </div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
  name: 'ThemePicker',
  props: {
    theme: String,
  },
  computed: {
    ...mapGetters([
      'primaryStyle',
      'bgStyle',
      'secondaryStyle'
    ])
  },
  data () {
    return {
      themes: [
        'default',
        'forest',
        'sun',
        'water'
      ]
    }
  },
  methods: {
    clickTheme(theme) {
      this.$emit('changeTheme', theme);
    },
    getThemeColours() {
      return {
        border: "2px solid var(--" + this.theme + "-bg)"
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.theme-picker {
  position: fixed;
  bottom: 10px;
  right: 10px;
  border: 2px solid black;
  padding: 5px;
  padding-right: 0px;
  
}

.theme-option {
  margin: auto;
  width: 30px;
  height: 30px;
  margin-right: 5px;
  float: left
}
</style>
