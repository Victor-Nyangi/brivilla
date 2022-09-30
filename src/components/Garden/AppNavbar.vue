<template>
    <nav class="app__navbar">
      <div class="app__navbar-logo">
        <img src="../../assets/img/gericht.png" alt="app__logo" />
      </div>
      <ul class="app__navbar-links">
        <li class="p__opensans"><a href="#home">Home</a></li>
        <li class="p__opensans"><a href="#about">About</a></li>
        <li class="p__opensans"><a href="#menu">Menu</a></li>
        <li class="p__opensans"><a href="#awards">Awards</a></li>
        <li class="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div class="app__navbar-login">
        <a href="#login" class="p__opensans">Log In / Registration</a>
        <div />
        <a href="/" class="p__opensans">Book Table</a>
      </div>
      <div class="app__navbar-smallscreen">
        <!-- <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && ( -->
          <!-- <div class="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} class="overlay__close"  />
            <ul class="app__navbar-smallscreen_links">
              <li><a href="#home" >Home</a></li>
              <li><a href="#about" >About</a></li>
              <li><a href="#menu" >Menu</a></li>
              <li><a href="#awards" >Awards</a></li>
              <li><a href="#contact" >Contact</a></li>
            </ul>
          </div> -->
        <!-- )} -->
      </div>
    </nav>
</template>

<script type="ts">
export default {
  name: 'AppNavbar'
}
</script>

<style lang="scss" scoped>
.app__navbar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #000;

    padding: 1rem 2rem;
}

.p__opensans {
    font-family: 'Open Sans', sans-serif;
    color: #fff;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    line-height: 28px;
    font-size: 16px;
}

.app__navbar-logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.app__navbar-logo img {
    width: 150px;
}

.app__navbar-links {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
}

.app__navbar-links li {
    margin: 0 1rem;
    cursor: pointer;
}

.app__navbar-links li:hover {
    color: #060606;
}

.app__navbar-login {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.app__navbar-login a {
    margin: 0 1rem;
    text-decoration: none;
    transition: .5s ease;
}

.app__navbar-login a:hover {
    border-bottom: 1px solid #443e79;
}

.app__navbar-login div {
    width: 1px;
    height: 30px;
    background: #060606;
}

.app__navbar-smallscreen {
    display: none;
}

.app__navbar-smallscreen_overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #000;
    transition: .5s ease;
    flex-direction: column;
    z-index: 5;
}

.app__navbar-smallscreen_overlay .overlay__close {
    font-size: 27px;
    color: #060606;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
}

.app__navbar-smallscreen_links {
    list-style: none;
}

.app__navbar-smallscreen_links li {
    margin: 2rem;
    cursor: pointer;
    color: #fff;
    font-size: 2rem;
    text-align: center;
    font-family: 'Cormorant Upright', serif;
}

.app__navbar-smallscreen_links li:hover {
    color: #fff;
}

@media screen and (min-width: 2000px) {
    .app__navbar-logo img {
        width: 210px;
    }
}

@media screen and (max-width: 1150px) {
    .app__navbar-links {
        display: none;
    }

    .app__navbar-smallscreen {
        display: flex;
    }
}

@media screen and (max-width: 650px) {
    .app__navbar {
        padding: 1rem;
    }

    .app__navbar-login {
        display: none;
    }

    .app__navbar-logo img {
        width: 110px;
    }
}
</style>
