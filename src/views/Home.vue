<template>
  <div class="home">
    
    <h2>Goran Karan</h2>
  
    <h3 class="fadeIn wait-1s">Web Developer</h3>
    
    
    <div class="home_a fadeIn wait-2s">
      <img class="first" src="../assets/address.svg">
      <p> Belgrade, Serbia</p>
    </div>
   
    <div class="home_a fadeIn wait-2s">
      <img class="first" src="../assets/mobile.svg">
      <p> +38164 2337248</p>
    </div>

    <div class="home_a fadeIn wait-2s">
      <img class="first" src="../assets/email.svg">
      <p> gkaran555@gmail.com</p>
    </div>
  
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
    	
    } 
  }
}
</script>
<style lang="scss" scoped>

.home {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Crimson Text', serif;
  text-align: center;
  .home_a {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 10%;
    }
  }
}

h2 {
  width: 18ch;
  animation: type 1s steps(11), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid;
  color: #28bc83;
  letter-spacing: 8px;
  font-weight: 300;
}  
h3 {
  color: #28bc83;
  font-weight: 300;
}
p {
  color: #c0963c;
  font-size: 1.1rem;
  line-height: 0.7;
  margin-left: 5px;
}
  
@keyframes type {
  from {
    width: 0;
  }
}
 
 @keyframes blink {
  50% {
    border-color: transparent;
  }
}  
  
.fadeIn {
  animation: fadeIn 1s;
  animation-fill-mode: both;
}
   
.wait-1s {
  animation-delay: 1s;
}
  
  
.wait-2s {
   animation-delay: 2s;
}

   
@keyframes fadeIn {
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
} 
  

</style>


