<template>
  <app-restaurant v-bind:drinks='drinks'/>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import AppRestaurant from '../components/Restaurant/AppRestaurant.vue'

export default defineComponent({
  name: 'RestaurantView',
  components: {
    AppRestaurant
  },
  data () {
    return {
      drinks: {
        wines: [
          {
            id: 1,
            title: 'Chapel Hill Shiraz',
            price: '$56',
            tags: 'AU | Bottle'
          },
          {
            id: 2,
            title: 'Catena Malbee',
            price: '$59',
            tags: 'AU | Bottle'
          },
          {
            id: 3,
            title: 'La Vieillw Rose',
            price: '$44',
            tags: 'FR | 750 ml'
          },
          {
            id: 4,
            title: 'Rhino Pale Ale',
            price: '$31',
            tags: 'CA | 750 ml'
          },
          {
            id: 5,
            title: 'Irish Guinness',
            price: '$26',
            tags: 'IE | 750 ml'
          }
        ]
        // cocktails: [
        //   {
        //     id: 1,
        //     title: 'Aperol Sprtiz',
        //     price: '$20',
        //     tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml'
        //   },
        //   {
        //     id: 2,
        //     title: 'Dark N Stormy',
        //     price: '$16',
        //     tags: 'Dark rum | Ginger beer | Slice of lime'
        //   },
        //   {
        //     id: 3,
        //     title: 'Daiquiri',
        //     price: '$10',
        //     tags: 'Rum | Citrus juice | Sugar'
        //   },
        //   {
        //     id: 4,
        //     title: 'Old Fashioned',
        //     price: '$31',
        //     tags: 'Bourbon | Brown sugar | Angostura Bitters'
        //   },
        //   {
        //     id: 5,
        //     title: 'Negroni',
        //     price: '$26',
        //     tags: 'Gin | Sweet Vermouth | Campari | Orange garnish'
        //   }
        // ]
      }
    }
  }
})
</script>
