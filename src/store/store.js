import Vue from 'vue'
import Vuex from 'vuex'

import cake from '../assets/cake.jpg'
import noodles from '../assets/noodles.jpg'
import fries from '../assets/fries.jpg'
import macroni from '../assets/macroni.jpg'
import pizza from '../assets/pizza.jpg'
import salad from '../assets/salad.jpg'
import samosa from '../assets/samosa.jpg'
import soup from '../assets/soup.jpg'
import tacos from '../assets/tacos.jpg'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      topRated: [{id: 1, name: 'Cake', price: 100, url: cake, desc:'Very Tasty cake', rate: 4.1},
         {id:2, name: 'Noodles', price: 200, url: noodles, desc: 'Chilly', rate: 4.1},
        {id: 3, name:'Fries', price: 70, url: fries, desc: "Crispy", rate: 4.2}],

     allCategories: [{id: 4, name: 'Macroni', price: 150, url:macroni, desc: "Yummy", rate: 4.5},
     {id: 5, name: 'Pizza', price: 400, url: pizza, desc: "Very testy", rate: 4.0},
     {id: 6, name: 'Salad', price:60, url: salad, desc: "Very tasty", rate: 4.2}
                                                                                 ],
     dishesNearYou: [{id:7, name: 'Samosa', price: 20, url: samosa, desc: "Very tasty", rate: 4.2},
      {id: 8, name: 'Soup', price: 50, url: soup, desc: "Delicious", rate: 4.2},
      {id: 9, name:'Tacos', price: 110, url: tacos, desc: "Super", rate: 4.4}
    ]  ,
     
    cartItemCount: 0,
    cartItems: []

    },
    
  
})