<template>
  <div class="image-swapper floating">
    <transition name="bounceIn" v-on:after-enter="hideImage" v-on:after-leave="showImage">
      <img v-if="image_shown" ref="imageElement" class="floating" :src="getImage()">
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ImageSwapper',
  props: {
    images: Array,
    width: Number,
    height: Number
  },
  data () {
    return {
      current_index: 0,
      image_shown: false,
      loaded: []
    }
  },
  methods: {
    getImage() {
      return this.images.length > 0 ? this.images[this.current_index] : null
    },
    hideImage: function (el) {
      console.log('now hide' + el)
      this.image_shown = false
        this.current_index++
    },
    showImage: function (el) {
      if (this.current_index >= this.images.length) {
        this.current_index = 0
      }
      console.log('now show' + el)
      this.image_shown = true
    }
  },
  mounted () {
    
    for (let image in this.images) {
      var img = new Image();
      img.src = image
      this.loaded.push(img);
    }

    this.image_shown = true;
    console.log('image')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.image-swapper {
  width: 100%;
  max-width: 800px;
  min-width: 300px;
  margin: auto;
  height: 460px;
  transition: height 1s;
}

@media (max-width: 600px) {
  .image-swapper {
    height: 300px;
  }


}

.image-swapper img {
  width: 100%;
}

.floating {  
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}

.bounceIn-enter-active {
  animation: bounce-in 1s;
}
.bounceIn-leave-active {
  animation: bounce-out 5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
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
  80% {
    transform: scale(1);
  }
  90% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(0);
  }
}
  
@keyframes floating {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 10px); }
    100%   { transform: translate(0, -0px); }    
}
</style>
