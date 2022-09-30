 <template>
  <div id="dark-theme">
    <!--========== SCROLL TOP ==========-->
    <a href="#" class="scrolltop" id="scroll-top">
      <i class="bx bx-chevron-up scrolltop__icon"></i>
    </a>
    <!--========== HEADER ==========-->
    <!-- <header class="l-header" id="header">
      <nav class="nav bd_container">
        <a href="#" class="nav__logo">Tasty</a>
        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list">
            <li class="nav__item">
              <a href="#home" class="nav__link active-link">Home</a>
            </li>
            <li class="nav__item">
              <a href="#about" class="nav__link">About</a>
            </li>
            <li class="nav__item">
              <a href="#services" class="nav__link">Services</a>
            </li>
            <li class="nav__item">
              <a href="#menu" class="nav__link">Menu</a>
            </li>
            <li class="nav__item">
              <a href="#contact" class="nav__link">Contact us</a>
            </li>

            <li><i class="bx bx-moon change-theme" id="theme-button"></i></li>
          </ul>
        </div>

        <div class="nav__toggle" id="nav-toggle">
          <i class="bx bx-menu"></i>
        </div>
      </nav>
    </header> -->
    <main class="l-main">
      <!--========== HOME ==========-->
      <section class="home" id="home">
        <div class="home-container bd_container bd_grid">
          <div class="home-data">
            <h1 class="home-title">Let's get lit</h1>
            <h2 class="home-subtitle">
              Try the best drinks in <br />
              the forest.
            </h2>
            <a href="#" class="button">View Menu</a>
          </div>

          <img src="../../assets/img/brivilla-wines-liquor-stock.jpg" alt="Brivilla Wines" class="home-img" />
        </div>
      </section>
      <!--========== ABOUT ==========-->
      <section class="about section bd_container" id="about">
        <div class="about__container bd_grid">
          <div class="about__data">
            <span class="section-subtitle about__initial">About us</span>
            <h2 class="section-title about__initial">
              We serve the best <br />
              drinks
            </h2>
            <p class="about__description">
              We have the best drinks, with excellent customer
              service, the best drinks and at the best price, visit us.
            </p>
                        <router-link to="/garden">Explore</router-link>

          </div>
          <img src="../../assets/img/bar_view.jpg" alt="" class="about__img" />
        </div>
      </section>

 <div class="app__specialMenu flex__center section__padding" id="menu">
    <div class="app__specialMenu-title">
<div style="margin-bottom: 1rem">
<p className="p__cormorant">Menu that fits your palatte</p>
<img src="../../assets/img/spoon.png" alt="spoon_image" className="spoon__img" />
</div>      <h1 class="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div class="app__specialMenu-menu">
      <div class="app__specialMenu-menu_wine  flex__center">
        <p class="app__specialMenu-menu_heading">Mocktails</p>
          <div class="app__specialMenu_menu_items" v-bind:key="cocktail.id" v-for="cocktail in cocktails.slice(0, 5)">
          <MenuItem v-bind:cocktail="cocktail" />
        </div>
      </div>

      <div class="app__specialMenu-menu_img">
        <img src="../../assets/img/menu.png" alt="menu__img" />
      </div>

  <!-- <div class="app__specialMenu-menu_cocktails  flex__center">
        <p class="app__specialMenu-menu_heading">Cocktails</p>
       <div class="app__specialMenu_menu_items" v-bind:key="drink.id" v-for="drink in drinks.cocktails">
          <MenuItem v-bind:drink="drink" />
        </div>
      </div> -->
      <div class="app__specialMenu-menu_cocktails  flex__center">
        <p class="app__specialMenu-menu_heading">Cocktails</p>
         <div class="app__specialMenu_menu_items" v-bind:key="cocktail.id" v-for="cocktail in cocktails.slice(6, 10)">
          <MenuItem v-bind:cocktail="cocktail" />
        </div>
        <!-- <div v-for="cocktail in cocktails" v-bind:key="cocktail.id">
      <h2>{{ cocktail.name }}</h2>
      <p>{{ cocktail.selling_price }}</p>

      </div> -->
    </div>
    </div>
    <div style="margin-top: 15">
      <button type="button" class="custom__button">View More</button>
    </div>
  </div>

      <!--========== SERVICES ==========-->
      <ServicesItem />
      <!--========== MENU ==========-->
      <section class="menu section bd_container" id="menu">
        <span class="section-subtitle">Special</span>
        <h2 class="section-title">Shots of the week</h2>
        <div class="menu__container bd_grid">
          <div class="menu__content">
            <img src="../../assets/img/brivilla-wines-liquor-stock.jpg" alt="Brivilla Steak" class="menu__img" />
            <h3 class="menu__name">Barbecue salad</h3>
            <span class="menu__detail">Delicious dish</span>
            <span class="menu__preci">$22.00</span>
            <a href="#" class="button menu__button"
              ><i class="bx bx-cart-alt"></i
            ></a>
          </div>
          <div class="menu__content">
            <img src="../../assets/img/brivilla_jack_daniels.jpg" alt="Brivilla Chicken" class="menu__img" />
            <h3 class="menu__name">Salad with fish</h3>
            <span class="menu__detail">Delicious dish</span>
            <span class="menu__preci">$12.00</span>
            <a href="#" class="button menu__button"
              ><i class="bx bx-cart-alt"></i
            ></a>
          </div>
          <div class="menu__content">
            <img src="../../assets/img/brivilla_clear_cocktail.jpg" alt="Brivilla Salads" class="menu__img" />
            <h3 class="menu__name">Spinach salad</h3>
            <span class="menu__detail">Delicious dish</span>
            <span class="menu__preci">$9.50</span>
            <a href="#" class="button menu__button"
              ><i class="bx bx-cart-alt"></i
            ></a>
          </div>
        </div>
      </section>
      <!--===== MEALS =======-->
      <section class="app section bd-offers-container">
        <div class="app__container bd_grid">
          <div class="app__data">
            <span class="section-subtitle app__initial">Sherehe</span>
            <h2 class="section-title app__initial">Great drinks</h2>
            <p class="app__description">
              At the Forest, come feast on ddelicious steaks, roasted meat and all kinds of meals.
            </p>
          </div>

          <img src="../../assets/img/bar_back.jpg" alt="Brivilla Meat" class="steak__img" />
        </div>
      </section>
      <!--========== CONTACT US ==========-->
      <section class="contact section bd_container" id="contact">
        <div class="contact__container bd_grid">
          <div class="contact__data">
            <span class="section-subtitle contact__initial">Let's talk</span>
            <h2 class="section-title contact__initial">Contact us</h2>
            <p class="contact__description">
              If you want to reserve a table in our restaurant, contact us and
              we will attend you quickly, with our 24/7 chat service.
            </p>
          </div>
          <div class="contact__button">
            <a href="#" class="button">Contact us now</a>
          </div>
        </div>
      </section>
    </main>
    <!--========== FOOTER ==========-->
    <footer class="footer section bd_container">
      <div class="footer__container bd_grid">
        <div class="footer__content">
          <a href="#" class="footer__logo">Fine drinks</a>
          <span class="footer__description">Restaurant</span>
          <div>
            <a href="#" class="footer__social"
              ><i class="bx bxl-facebook"></i
            ></a>
            <a href="#" class="footer__social"
              ><i class="bx bxl-instagram"></i
            ></a>
            <a href="#" class="footer__social"
              ><i class="bx bxl-twitter"></i
            ></a>
          </div>
        </div>
        <div class="footer__content">
          <h3 class="footer__title">Services</h3>
          <ul>
            <li><a href="#" class="footer__link">Delivery</a></li>
            <li><a href="#" class="footer__link">Pricing</a></li>
            <li><a href="#" class="footer__link">Book drinks</a></li>
            <li><a href="#" class="footer__link">Reserve your spot</a></li>
          </ul>
        </div>
        <div class="footer__content">
          <h3 class="footer__title">Information</h3>
          <ul>
            <li><a href="#" class="footer__link">Event</a></li>
            <li><a href="#" class="footer__link">Contact us</a></li>
            <li><a href="#" class="footer__link">Privacy policy</a></li>
            <li><a href="#" class="footer__link">Terms of services</a></li>
          </ul>
        </div>
        <div class="footer__content">
          <h3 class="footer__title">Address</h3>
          <ul>
            <li>Lima - Peru</li>
            <li>Jr Union #999</li>
            <li>999 - 888 - 777</li>
            <li>brivilla@email.com</li>
          </ul>
        </div>
      </div>
      <p class="footer__copy">&#169; 2020 Bedimcode. All right reserved</p>
    </footer>
     <!-- 'name',
        'supplier_id',
        'category_id',
        'quantity',
        'selling_price',
        'discount_rate',
        'offer_status',
        'volume',
        'description',
        'alcohol_percentage' -->
    <!-- <div v-for="product in products" v-bind:key="product.id">
      <h2>{{ product.name }}</h2>
      <p>{{ product.selling_price }}</p>
    </div> -->
  </div>
</template>

<script>
import MenuItem from '../Restaurant/MenuItem.vue'
import ServicesItem from './ServicesItem.vue'
export default {
  name: 'AppRestaurant',
  components: {
    MenuItem,
    ServicesItem
  },
  computed: {
    // products () {
    //   return this.$store.getters.products
    // },
    cocktails () {
      return this.$store.getters.cocktails
    }
  },
  created () {
    this.$store.dispatch('loadCocktails')
    // this.$store.dispatch('loadCocktails')
  }
}

</script>
<style lang="scss">
/*===== GOOGLE FONTS =====*/
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

/*===== VARIABLES CSS =====*/
:root {
  --header-height: 3rem;

  /*========== Colors ==========*/
  --first-color: #069C54;
  --first-color-alt: #048654;
  --title-color: #393939;
  --text-color: #707070;
  --text-color-light: #A6A6A6;
  --body-color: #FBFEFD;
  --container-color: #FFFFFF;

  /*========== Font and typography ==========*/
  --body-font: 'Poppins', sans-serif;
  --biggest-font-size: 2.25rem;
  --h1-font-size: 1.5rem;
  --h2-font-size: 1.25rem;
  --h3-font-size: 1rem;
  --normal-font-size: .938rem;
  --small-font-size: .813rem;
  --smaller-font-size: .75rem;

  /*========== Font weight ==========*/
  --font-medium: 500;
  --font-semi-bold: 600;

  /*========== Margenes ==========*/
  --mb-1: .5rem;
  --mb-2: 1rem;
  --mb-3: 1.5rem;
  --mb-4: 2rem;
  --mb-5: 2.5rem;
  --mb-6: 3rem;

  /*========== z index ==========*/
  --z-tooltip: 10;
  --z-fixed: 100;
}

@media screen and (min-width: 768px){
  :root{
    --biggest-font-size: 4rem;
    --h1-font-size: 2.25rem;
    --h2-font-size: 1.5rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: .875rem;
    --smaller-font-size: .813rem;
  }
}

/*========== BASE ==========*/
*,::before,::after{
  box-sizing: border-box;
}

html{
  scroll-behavior: smooth;
}

/*========== Variables Dark theme ==========*/
#dark-theme{
  --title-color: #F1F3F2;
  --text-color: #C7D1CC;
  --body-color: #04170e;
  background-color: #000000;
}

/*========== Button Dark/Light ==========*/
.change-theme{
  position: absolute;
  right: 1rem;
  top: 1.8rem;
  color: var(--text-color);
  font-size: 1rem;
  cursor: pointer;
}

.headtext__cormorant {
    font-family: 'Cormorant Upright', serif;
    color: #443e79;
    font-size: 64px;
    line-height: 83.2px;
    letter-spacing: 0.04em;
    text-transform: capitalize;
}
.p__cormorant {
  font-family: 'Cormorant Upright', serif;
  color: #fff;
  line-height: 29.9px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  font-size: 23px;
}

body{
  margin: var(--header-height) 0 0 0;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  background-color: var(--body-color);
  color: var(--text-color);
  line-height: 1.6;
}

h1,h2,h3,p,ul{
  margin: 0;
}

ul{
  padding: 0;
  list-style: none;
}

a{
  text-decoration: none;
}

.app__specialMenu {
    flex-direction: column;
    margin: 2rem;
    font: 'Cormorant Upright', serif;
    background: var(--color-black);
}

.app__specialMenu-title {
    margin-bottom: 2rem;
    text-align: center;
}

.app__specialMenu-menu {
    width: 100%;
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
}

.app__specialMenu-menu_heading {
    font-family: 'Cormorant Upright', serif;
    font-weight: 600;
    font-size: 45px;
    line-height: 58.5px;
    letter-spacing: 0.04em;
    color: #fff;
}

.app__specialMenu-menu_wine,
.app__specialMenu-menu_cocktails {
    flex: 1;
    width: 100%;
    flex-direction: column;
}

.app__specialMenu-menu_img {
    width: 410px;
    margin: 0 2rem;
}

.app__specialMenu-menu_img img {
    width: 100%;
    height: auto;
}

.app__specialMenu_menu_items {
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
    width: 100%;
}

@media screen and (min-width: 2000px) {
    .app__specialMenu-menu_img {
        width: 650px;
    }
    .app__specialMenu-menu_img img {
        height: 920px;
    }
}

@media screen and (max-width: 1150px) {
    .app__specialMenu-menu {
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    .app__specialMenu-menu_img {
        margin: 3rem 0;
    }
}

@media screen and (max-width: 650px) {
    .app__specialMenu-menu_img {
        width: 100%;
    }
    .app__specialMenu-menu_heading {
        font-size: 35px;
        line-height: 48.5px;
    }
}

img{
  max-width: 100%;
  height: auto;
}

/*========== CLASS CSS ==========*/
.section{
  padding: 4rem 0 2rem;
}

.section-title, .section-subtitle{
  text-align: center;
}

.section-title{
  font-size: var(--h1-font-size);
  color: var(--title-color);
  margin-bottom: var(--mb-3);
}

.section-subtitle{
  display: block;
  color: var(--first-color);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb-1);
}

/*========== LAYOUT ==========*/
.bd_container{
  max-width: 960px;
  width: calc(100% - 2rem);
  margin-left: var(--mb-2);
  margin-right: var(--mb-2);
}

.bd-offers-container{
  max-width: 1080px;
  width: calc(100% - 2rem);
  margin-left: var(--mb-2);
  margin-right: var(--mb-2);
}

.bd_grid{
  display: grid;
  gap: 1.5rem;
}

.l-header{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--body-color);
}

/*========== NAV ==========*/
.nav{
  max-width: 1024px;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 768px){
  .nav__menu{
    position: fixed;
    top: -100%;
    left: 0;
    width: 100%;
    padding: 1.5rem 0 1rem;
    text-align: center;
    background-color: var(--body-color);
    transition: .4s;
    box-shadow: 0 4px 4px rgba(0,0,0,.1);
    border-radius: 0 0 1rem 1rem;
    z-index: var(--z-fixed);
  }
}

.nav__item{
  margin-bottom: var(--mb-2);
}

.nav__link, .nav__logo, .nav__toggle{
  color: var(--text-color);
  font-weight: var(--font-medium);
}

.nav__logo:hover{
  color: var(--first-color);
}

.nav__link{
  transition: .3s;
}

.nav__link:hover{
  color: var(--first-color);
}

.nav__toggle{
  font-size: 1.3rem;
  cursor: pointer;
}

/* Show menu */
.show-menu{
  top: var(--header-height);
}

/* Active menu */
.active-link{
  color: var(--first-color);
}

/* Change background header */
.scroll-header{
  box-shadow: 0 2px 4px rgba(0,0,0,.1);
}

/* Scroll top */
.scrolltop{
  position: fixed;
  right: 1rem;
  bottom: -20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .3rem;
  background: rgba(6,156,84,.5);
  border-radius: .4rem;
  z-index: var(--z-tooltip);
  transition: .4s;
  visibility: hidden;
}

.scrolltop:hover{
  background-color: var(--first-color-alt);
}

.scrolltop__icon{
  font-size: 1.8rem;
  color: var(--body-color);
}

/* Show scrolltop */
.show-scroll{
  visibility: visible;
  bottom: 1.5rem;
}

/*========== HOME ==========*/
.home-container{
  height: calc(100vh - var(--header-height));
  align-content: center;
}

.home-title{
  font-size: var(--biggest-font-size);
  color: var(--first-color);
  margin-bottom: var(--mb-1);
}

.home-subtitle{
  font-size: var(--h1-font-size);
  color: var(--title-color);
  margin-bottom: var(--mb-4);
}

.home-img{
  width: 400px;
  border-radius: 5px;
  justify-self: center;
}

.app__menuitem {
    width: 100%;
    margin: 1rem 0;

    display: flex;
    flex-direction: column;
}

/*========== BUTTONS ==========*/
.button{
  display: inline-block;
  background-color: var(--first-color);
  color: #FFF;
  padding: .75rem 1rem;
  border-radius: .5rem;
  transition: .3s;
}

.button:hover{
  background-color: var(--first-color-alt);
}

/*========== ABOUT ==========*/
.about__data{
  text-align: center;
}

.about__description{
  margin-bottom: var(--mb-3);
}

.about__img{
  width: 280px;
  border-radius: .5rem;
  justify-self: center;
}
/*========== MENU ==========*/
.menu__container{
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
}

.menu__content{
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--container-color);
  border-radius: .5rem;
  box-shadow: 0 2px 4px rgba(3,74,40,.15);
  padding: .75rem;
}

.menu__img{
  width: 100px;
  align-self: center;
  margin-bottom: var(--mb-2);
}

.menu__name, .menu__preci{
  font-weight: var(--font-semi-bold);
  color: #000;
}

.menu__name{
  font-size: var(--normal-font-size);
}

.menu__detail, .menu__preci{
  font-size: var(--small-font-size);
}

.menu__detail{
  margin-bottom: var(--mb-1);
}

.menu__button{
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  padding: .625rem .813rem;
  border-radius: .5rem 0 .5rem 0;
}

/*========== APP ==========*/
.app__data{
  text-align: center;
}

.app__description{
  margin-bottom: var(--mb-5);
}

.app__stores{
  margin-bottom: var(--mb-4);
}

.app__store{
  width: 120px;
  margin: 0 var(--mb-1);
}

.steak__img{
  width: 230px;
  justify-self: center;
}

/*========== CONTACT ==========*/
.contact__container{
  text-align: center;
}

.contact__description{
  margin-bottom: var(--mb-3);
}

/*========== FOOTER ==========*/
.footer__container{
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  row-gap: 2rem;
}

.footer__logo{
  font-size: var(--h3-font-size);
  color: var(--first-color);
  font-weight: var(--font-semi-bold);
}

.footer__description{
  display: block;
  font-size: var(--small-font-size);
  margin: .25rem 0 var(--mb-3);
}

.footer__social{
  font-size: 1.5rem;
  color: var(--title-color);
  margin-right: var(--mb-2);
}

.footer__title{
  font-size: var(--h2-font-size);
  color: var(--title-color);
  margin-bottom: var(--mb-2);
}

.footer__link{
  display: inline-block;
  color: var(--text-color);
  margin-bottom: var(--mb-1);
}

.footer__link:hover{
  color: var(--first-color);
}

.footer__copy{
  text-align: center;
  font-size: var(--small-font-size);
  color: var(--text-color-light);
  margin-top: 3.5rem;
}

/*========== MEDIA QUERIES ==========*/
@media screen and (min-width: 576px){
  .home-container,
  .about__container,
  .app__container{
    grid-template-columns: repeat(2,1fr);
    align-items: center;
  }

  .about__data, .about__initial,
  .app__data, .app__initial,
  .contact__container, .contact__initial{
    text-align: initial;
  }

  .about__img, .steak__img{
    width: 780px;
    border-radius: 10px;
    order: -1;
  }

  .contact__container{
    grid-template-columns: 1.75fr 1fr;
    align-items: center;
  }
  .contact__button{
    justify-self: center;
  }
}

@media screen and (min-width: 768px){
  body{
    margin: 0;
  }

  .section{
    padding-top: 8rem;
  }

  .nav{
    height: calc(var(--header-height) + 1.5rem);
  }
  .nav__list{
    display: flex;
  }
  .nav__item{
    margin-left: var(--mb-5);
    margin-bottom: 0;
  }
  .nav__toggle{
    display: none;
  }

  .change-theme{
    position: initial;
    margin-left: var(--mb-2);
  }

  .home-container{
    height: 100vh;
    justify-items: center;
  }

  .services__container,
  .menu__container{
    margin-top: var(--mb-6);
  }

  .menu__container{
    grid-template-columns: repeat(3, 210px);
    column-gap: 4rem;
  }
  .menu__content{
    padding: 1.5rem;
  }
  .menu__img{
    width: 130px;
  border-radius: 5px;
  }

  .app__store{
    margin: 0 var(--mb-1) 0 0;
  }
}

@media screen and (min-width: 960px){
  .bd_container, .bd-offers-container{
    margin-left: auto;
    margin-right: auto;
  }

  .home-img{
    width: 500px;
  }

  .about__container,
  .app__container{
    column-gap: 7rem;
  }
}

/* For tall screens on mobiles y desktop*/
@media screen and (min-height: 721px) {
    .home-container {
        height: 640px;
    }
}
</style>
