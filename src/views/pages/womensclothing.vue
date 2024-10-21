<template>
  <v-container>
    <div class="mt-15">
      <p class="font-weight-bold mb-6">
        womens clothing
      </p>
      <FlashSaleComp />
    </div>
  </v-container>
</template>

<script>
import FlashSaleComp from '../../components/FlashSaleComp';

export default {
  name: 'Dash_Board',

  components: {
    FlashSaleComp
  },

  data() {
    return {}
  }
};
</script>