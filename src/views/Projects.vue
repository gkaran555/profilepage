<template>
  <md-card>

    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide>
            <a target="_blank" href="https://gkaran555.github.io/TheParallaxView/">
            <div class="infoimg">
              <p>Film store with <br>
                 focus on Parallax </p>
           </div> 
           </a>         
        </swiper-slide>
        <swiper-slide>
            <a target="_blank" href="https://gkaran555.github.io/VueGitHub/#/user">
            <div class="infoimg">
              <p>VueGitHub <br>
                 Search over GitHub and <br>
                 find Repositories <br></p>
           </div> 
           </a>         
        </swiper-slide>  
        <swiper-slide>
            <a target="_blank" href="https://github.com/gkaran555/chat">
            <div class="infoimg">
              <p>Chat with Vue.js <br>
                and Socket.io</p>
           </div> 
           </a>         
        </swiper-slide>
        <swiper-slide>
            <a target="_blank" href="https://github.com/gkaran555/ordertrack">
            <div class="infoimg">
              <p>Real time order status with <br>
                 Laravel Websockets package <br>
                 and Vue </p>
           </div> 
           </a>         
        </swiper-slide>
         <swiper-slide>
            <a target="_blank" href="https://github.com/gkaran555/Pbook">
            <div class="infoimg">
              <p>Vue-Laravel phonebook app <br>
                 with Bulma</p>
           </div> 
           </a>         
        </swiper-slide>
         <swiper-slide>
            <a target="_blank" href="https://gkaran555.github.io/Vue-shop/">
            <div class="infoimg">
              <p>Vue.js E-commerce Example</p>
           </div> 
           </a>         
        </swiper-slide>
           <swiper-slide>
            <a target="_blank" href="https://gkaran555.github.io/Location/#/">
            <div class="infoimg">
              <p>Vue-google-map <br>
                choose location</p>
           </div> 
           </a>         
        </swiper-slide>
          <swiper-slide>
            <a target="_blank" href="https://github.com/gkaran555/laravel_cm">
            <div class="infoimg">
              <p>Contacts manager app <br>
                 written in Laravel </p>
           </div> 
           </a>         
        </swiper-slide>
        <swiper-slide>
            <a target="_blank" href="https://github.com/gkaran555/vezbanja">
            <div class="infoimg">
              <p>CMS written in Codeigniter</p>
           </div> 
           </a>         
        </swiper-slide>
        
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </md-card-media>
  </md-card>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 2,
          centeredSlides: true,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
          // when window width is <= 370px
          370: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .swiper-slide {
    margin-bottom: 23px !important;
  }
 .infoimg {
   height: 120px;
   margin: 10px;
   display: flex;
   align-items: center;
   justify-content: center;
   box-shadow: 0 1px 2px 0 rgba(0,0,0,.5);
   p {
     text-align: center;
     font-family: 'Crimson Text', serif;
     font-size: 1.1rem;
     line-height: 1.5;
     font-weight: 300;
     color: #838383;
     
   }
   &:hover p {
     color: #c0963c;
     transition: 0.7s;
   }
 }
 
</style>