<template>
  <v-container>  
    <v-row>
      <v-col
        v-for="(item, index) in 2"
        :key="index"
        style="height: 350px;"
        class="mt-3"
        lg="6"
        md="6"
        sm="12"
      >
        <v-btn
          block
          :style="[getButtonStyle(index), { height: 'inherit' }]"
          elevation="2"
          large
          @click="handleNavigation(index)"
        >
          <span class="text-h4 white--text font-weight-bold">
            {{ index === 0 ? object.Category_option_Men.text : object.Category_option_Women.text }}
          </span>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import config from '../data/Config_Web_Headings'

export default {
  name: 'Category_Component',
  data() {
    return {
      object: config
    }
  },
  methods: {
    getButtonStyle(index) {
      return {
        background: index === 0 
          ? this.object.Category_option_Men.bg_color 
          : this.object.Category_option_Women.bg_color
      };
    },
    handleNavigation(index) {
      let route = index === 0 ? '/mens-clothing' : '/womens-clothing';
      this.$router.push(route);
    }
  }
}
</script>
