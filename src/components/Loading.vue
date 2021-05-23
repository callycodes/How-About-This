<template>
  <div id="loading">
      
    <div class="indicator">
      
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Loading',
  props: {
  },
  computed: {
    ...mapGetters([
      'primaryStyle',
      'bgStyle',
      'secondaryStyle'
    ])
  },
  mounted () {
    setTimeout(() => this.$emit('progress'), 1500);
  },
  components: {
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.indicator {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 20px dotted;
  margin: auto;
  animation: spin 1.5s infinite linear;
}

@keyframes spin {
  0% {
    transform: rotate(0deg) scale(1);
  }
  35% {
    transform: rotate(180deg) scale(1);
  }
  70% {
    transform: rotate(360deg) scale(1);
  }
  80% {
    transform: rotate(360deg);
    transform: scale(0.8);
  }
  90% {
    transform: rotate(360deg);
    transform: scale(1.2);
  }
  100% {
    transform: rotate(360deg);
    transform: scale(1);
  }
}

</style>
