<template>
    <v-container>
      <div class="mt-15">
        <p class="font-weight-bold mb-6">
          {{ object.Heading_1 }}
        </p>
        <FlashSaleComp />
      </div>
      <div class="mt-15 mb-15">
        <p class="font-weight-bold mb-6">
          {{ object.Heading_2 }}
        </p>
        <CategoryComp />
      </div>
    </v-container>
  </template>
  
  <script>
  import CategoryComp from '../../components/CategoryComp';
  import FlashSaleComp from '../../components/FlashSaleComp';
  import config from '../../data/Config_Web_Headings';
  
  export default {
    name: 'Dash_Board',
  
    components: {
      CategoryComp,
      FlashSaleComp
    },
  
    data() {
      return {
        object: config
      }
    }
  };
  </script>