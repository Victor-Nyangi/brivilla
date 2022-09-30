<template>
      <div class="app__header app__wrapper section__padding" id="home">
    <div class="app__wrapper_info">
      <div style="margin-bottom: 1rem">
    <p class="p__cormorant">Chase the new flavour</p>
    <img src="../../assets/img/spoon.png" alt="spoon_image" class="spoon__img" />
  </div>
      <h1 class="app__header-h1">The Key To Fine Dining</h1>
      <p class="p__opensans" style="margin: 2rem 0">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type="button" class="custom__button">Explore Menu</button>
    </div>

    <div class="app__wrapper_img">
      <img src="../../assets/img/at-the-water.jpg" alt="header_img" />
    </div>
  </div>
</template>

<script type="ts">
export default {
  name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
.section__padding {
  padding: 4rem 6rem;
}

.app__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-height: 100vh;
}

.p__cormorant {
    font-family: 'Cormorant Upright', serif;
    color: #fff;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    font-feature-settings: 'tnum' on, 'lnum' on;
    line-height: 29.9px;
    font-size: 23px;
}

.app__wrapper_info {
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}

.app__wrapper_img {
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 2rem;
}

.app__wrapper_img-reverse {
  justify-content: flex-start;
  margin-right: 2rem;
}

.app__wrapper_img img {
  width: 80%;
}

.custom__button {
  background-color: var(--color-crimson);
    color: var(--color-black);
    font-family: var(--font-base);
    font-weight: 700;
    letter-spacing: 0.04em;
    line-height: 28px;
    font-size: 16px;
    padding: 0.5rem 1.5rem;
    border-radius: 1px;
    border: none;
    outline: none;
    cursor: pointer;
}

.app__header {
    background-color: #000;
}

.app__header-h1 {
    font-family: 'Cormorant Upright', serif;
    color: #DCCA87;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    line-height: 117px;
    font-size: 90px;
}

.app__header-img img {
    width: 80%;
}

@media screen and (min-width: 2000px) {
    .app__header-h1 {
        font-size: 180px;
        line-height: 210px;
    }
}

@media screen and (max-width: 1150px) {
    .app__header-h1 {
        font-size: 90px;
    }
}

@media screen and (max-width: 650px) {
    .app__header-h1 {
        font-size: 70px;
        line-height: 87px;
    }
}

@media screen and (max-width: 450px) {
    .app__header-h1 {
        font-size: 50px;
        line-height: 70px;
    }
}
</style>
