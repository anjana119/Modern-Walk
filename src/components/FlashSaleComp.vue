<template>
  <div
    class="mx-auto"
    max-width="800"
  >

    <v-slide-group
      class="pa-4"
      v-if="showComp === true"
      show-arrows-on-hover
    >
      <v-slide-item
        v-for="(product, index) in filteredProductList"
        :key="index"
        v-slot="{ toggle }"
      >
        <v-card
          class="ma-4"
          height="400"
          width="300"
          elevation="3"
          :style="{ borderRadius: '20px' }"
          @click="toggle"
        >
          <SingleItemCardComponent @click="toggle" :product="product" />
        </v-card>
      </v-slide-item>
    </v-slide-group>

    <v-row v-if="showComp === false">
      <v-col
        v-for="(product, index) in filteredProductList"
        :key="index"
        cols="2.5"
      >
        <v-slide-item
          v-slot="{ toggle }"
        >
          <v-card
            class="ma-4"
            height="400"
            width="300"
            elevation="3"
            :style="{ borderRadius: '20px' }"
            @click="toggle"
          >
            <SingleItemCardComponent @click="toggle" :product="product" />
          </v-card>
        </v-slide-item>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import SingleItemCardComponent from './SingleItemCardComponent.vue';
import APIAuth from "../mixins/api";

  export default {

    name: 'Flash_Sale_Component',

    mixins: [APIAuth],

    components: {
      SingleItemCardComponent
    },

    data: () => ({
      productItemList: [],
      showComp: true
    }),

    created() {
      this.handleGetProductList();
    },

    computed: {
      // Filter products to ensure valid entries before rendering
      filteredProductList() {
        return this.productItemList.filter(product => product);
      },
    },

    methods: {
      handleGetProductList: async function() {
        try {
          let route = this.$route;
          this.productItemList = [];

          if (route.path === "/dash-board") {
            this.productItemList = await this.getProductsBySortDesc();
            this.showComp = true;
          } else if (route.path === "/mens-clothing") {
            this.productItemList = await this.getProductsByCategory("men's clothing");
            this.showComp = false;
          } else if (route.path === "/womens-clothing") {
            this.productItemList = await this.getProductsByCategory("women's clothing");
            this.showComp = false;
          }

        } catch (err) {
          console.log('Error fetching product list:', err);
        }
      }
    }
  }
</script>
  