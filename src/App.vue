<template>
  <div id="app" v-cloak>
    <header>      
			  <nav class="site-nav">	      
			        <p><router-link to="/goranb" exact>Home</router-link></p>
			        <p><router-link to="/about" exact>Skill</router-link></p>
              <p><router-link to="/projects" exact>Examples</router-link></p>
              <p><router-link to="/gallery" exact>Gallery</router-link></p>
              <p><router-link to="/social" exact>Social</router-link></p>            
			  </nav>  
		  </header>
    
    <div class="wraper">
       <transition name="slide" mode="out-in">
           <router-view/>
       </transition>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
    	
      
    } 
  }
}
</script>
<style lang="scss">
@import './global.scss';

[v-cloak] {
	display: none !important;
}

#app {
  max-width: 500px;
  margin: 130px auto; 
  @media only screen and (max-width: 450px) {
    margin: 35px auto;
  }
}

nav {
  margin-bottom: 10px;
  font-family: 'Crimson Text', serif;
  font-size: 1.3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
    color: black;
    padding: 5px;
  }
  p{
    margin: 7px;
  }
  .is-active {
    color: #c0963c;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.5);
    transition: 0.5s;
    
  }
  
}

.wraper {
  box-shadow: 0 5px 20px 0 rgba(0,0,0, .25);
}

.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
    from {
        transform: translateX(-30px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slide-out {
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(-30px);
        opacity: 0;
    }
}


</style>
