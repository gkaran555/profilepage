<template>
  <div class="skill">
    <div>
        <p>html, css, sass, stylus</p>
        <p>javascript, es6 (vue-vuex, jquery)</p>
        <p>converting psd, responsive design</p>
        <p>css animations, greensock, chart, svg</p>
        <p>flexbox, css grid, bem</p>
        <p>vuetify, quasar, element, gridsome, nuxt…</p>
        <p>bootstrap, foundation, bulma…</p>
        <p>ajax, apollo-graphql, websocket</p>
        <p>git, spa, seo, pwa, ssr, vsc, cms</p>
        <p>test, jwt-auth, chat, moment, jamstack</p>
        <p>firebase, php-laravel, node-express, mysql</p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>
<style lang="scss" scoped>
@import '../global.scss';

.skill {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  font-family: 'Crimson Text', serif;
  div::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    mix-blend-mode: difference;
  }
  div::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    mix-blend-mode: difference;
    transition: 2s;
  }
  div:hover::after {
    transform: scale(0);
  }
}

p {
  font-size: 1.2rem;
  line-height: 1;
  font-weight: 300;
  color: #838383;
}

</style>

