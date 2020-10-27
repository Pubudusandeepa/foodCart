<template>
    <div class="d-flex food-details-outer">
       <Header />
       <div class="food-details">
         <div class="container mb-5">
           <h4 class="my-4 fw-600">Add Item To cart</h4>
           <div class="row">
              <div class="col-md-4" style="cursor: pointer">
                  <img :src="details.url" width="300px" height="300px" style="border-radius: 15px"/>

              </div>
              <div class="col-md-4" style="cursor: pointer">
                <h5 class="my-4 fw-600">Name:{{details.name}}</h5>
                <h5 class="my-4 fw-600">Price:{{details.price}}</h5>
                <h5 class="my-4 fw-600">Description: {{details.desc}}</h5>
                <h5 class="my-4 fw-600">Rating:{{details.rate}}</h5>
                <div>
                    <button @click="goToCart" class="btn btn-primary">Go to Cart</button>
                    <button class="btn btn-success">Add Item</button>
                    <button class="btn btn-danger">Remove Item</button>
                </div>
              </div>
           </div>

         </div>
       </div>
       <Footer />
    </div>
</template>

<script>
import Header from './common/Header'
import Footer from './common/Footer'
export default {
    name: "FoodDetails",
    components: {
        Header,
        Footer
    },
    data() {
        return {
           
             details: this.$route.params
        }
      
    },
    methods: {
        goToCart() {
            this.$router.push("/cart")
        }
    },
    created() {
        if(this.$route.params.id !== undefined) {
            localStorage.setItem("details", JSON.stringify(this.$route.params))
        }
    },
    mounted() {
        this.details = JSON.parse(localStorage.getItem("details"))
       
    }


}
</script>

<style scoped>
.food-details-outer {
    flex-direction: column;
    height: 100vh;
}
.food-details {
    background: #efe9e2;
    flex: 1;
    overflow-y: auto;
}
.fw-600 {
    font-weight: 600;
}
</style>