<template>
  <div id="app">
    <transition name="fade">
    <div id="content" :style="{'background-color': bgStyle}" :class="this.$store.theme">
      <h1 :class="['lilita-font', 'title', 'pulsing']" :style="{'color': primaryStyle}">How About This</h1>

      <div class="page">
        
        <transition name="bounceIn">
          <Loading v-if="states[state] == 'loading'" @progress="state++"></Loading>
          <Intro v-if="states[state] == 'intro'" @selectDay="setDayStyle"></Intro>
          <Location v-if="states[state] == 'location'" ></Location>

        </transition>

        <div v-if="states[state] != 'intro' && states[state] != 'loading'" class="controls">
          <button class="lilita-font" :style="{'background-color': bgStyle, 'color': primaryStyle, 'border': '3px solid ' + primaryStyle}" >Restart</button>
          <button class="lilita-font" :style="{'background-color': bgStyle, 'color': primaryStyle, 'border': '3px solid ' + primaryStyle}" >Back</button>
          <button class="lilita-font" :style="{'background-color': bgStyle, 'color': primaryStyle, 'border': '3px solid ' + primaryStyle}" >Next</button>
        </div>
      </div>
    
    <ThemePicker @changeTheme="changeTheme" :theme="this.$store.theme"></ThemePicker>
    </div>
    </transition>
  </div>
</template>

<script>
import Loading from './components/Loading.vue'
import Intro from './components/Intro.vue'
import ThemePicker from './components/ThemePicker.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Intro,
    ThemePicker,
    Loading
  },
  computed: {
    ...mapGetters([
      'primaryStyle',
      'bgStyle',
      'secondaryStyle'
    ])
  },
  methods: {
    setDayStyle(style) {
      this.day_style = style;
      this.state++
    },
    changeTheme(theme) {
      this.$store.commit('changeTheme', theme);
    },
  },
  data () {
    return {
      state: 0,
      states: ['intro', 'location'],
      day_style: '',
      loading: false
    }
  }
}
</script>

<style>


#app {
}

#content {
  padding: 20px;
  height: 100%;
}

.controls {
  text-align: center;
  margin: auto;
  width: 60vw;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 25px;
}

.controls button {
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  width: 8vw;
  height: 50px;
  border-radius: 5px;
  font-size: 1.5vw
}

.page {
  padding-left: 10vw;
  padding-right: 10vw;
}

.title {
  font-size: 3vw;
  margin-bottom: 7vh;
  transition: font-size 1s;
}

@media (max-width: 800px) {
  .title {
    font-size: 6vw;
  }


}

.title:hover {
  animation: grow .5s ease;
}

.pulsing {
  animation-name: pulsing;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

@keyframes grow {
    0% { 
      transform: scale(1);
     }
  40%  { 
      transform: scale(0.9);
     }
    60%   { 
      transform: scale(1.1);
     }   
     100% {
       transform: scale(1);
     } 
}

@keyframes pulsing {
    0% { 
      
     }
    50%  { 

     }
    100%   { 
      
     }    
}

.bounceIn-enter-active {
  animation: bounce-in 2s;
}
.bounceIn-leave-active {
  animation: bounce-out 1s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0);
  }

  75% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(0);
  }
}

</style>
