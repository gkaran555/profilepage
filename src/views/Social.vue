<template>
      <div class="social">
          <div>
            <a target="_blank" href="https://github.com/gkaran555">
              <img class="first" src="../assets/if_5347_-_Github_1218857.svg">
              <p class="second">github</p>
            </a>
          </div>
          <div>
            <a target="_blank" href="https://www.goodreads.com/review/list/58376175-goran?view=covers">
              <img class="first" src="../assets/if_11.Notebook_290139.svg">
              <p class="second">book</p>
            </a>
          </div>
          <div>
            <a target="_blank" href="https://rs.linkedin.com/in/goran-karan-05331395?trk=prof-samename-name">
              <img class="first" src="../assets/linkedin.svg">
              <p class="second">linked.in</p>
            </a>
          </div>
          <div>
            <a target="_blank" href="https://www.last.fm/user/gkaran/library/artists">
              <img class="first" src="../assets/if_5335_-_Lastfm_1218756.svg">
              <p class="second">last.fm</p>
            </a>
          </div>
          <div>
            <a target="_blank" href="https://www.facebook.com/goran.karan.10">
              <img class="first" src="../assets/facebook.svg">
              <p class="second">facebook</p>
            </a>
          </div>
          <div>
            <a target="_blank" href="https://soundcloud.com/user-835587341/likes">
              <img class="first" src="../assets/if_5328_-_Soundcloud_1218763.svg">
              <p class="second">soundcl.</p>
            </a>
          </div>
      </div>
</template>


<style lang="scss" scoped>
.social {
  display: grid;
  grid-gap: 7px;
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  img {
    width: 100%;
  }
  p {
    text-align: center;
    font-size: 1.1rem;
    font-weight: 300;
    color: #28bc83;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.5);
    overflow: hidden;
    .second {
      display: none;
    }
    &:hover .first{
      display: none;
      animation: slide-down .2s ease-out;
    }
    &:hover .second{
      display: block;
      animation: slide-down .2s ease-out;
    }
  }
}


@keyframes slide-down {
      0% { opacity: 0; transform: translateY(-100%); }   
    100% { opacity: 1; transform: translateY(0); }
}

</style>
  