<template>
  <div class="skill">
    <div>
        <p>HTML, CSS, SCSS, Modular CSS</p>
        <p>JavaScript, ES6, TypeScript</p>
        <p>Vue.js, Pinia, Nuxt, jQuery</p>
        <p>PHP, Drupal, MySQL</p>
        <p>Responsive Design, Progressive Web App</p>
        <p>Greensock, Bootstrap, Chart, SVG, Adobe XD</p>
        <p>GIT, SPA, SEO</p>
        <p>Agile Methodology</p>
        <p>Deployment, Testing</p>
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

