<template>
  <v-app>
    <v-app-bar
      app
      color="light"
    >
      <div class="d-flex justify-center align-center" style="width: 100%;">
        <h1>{{ object.Site_Name }}</h1>
      </div>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
/* import DashBoard from '../views/pages/DashBoard.vue'; */
import config from '../data/Config_Web_Headings'

export default {
  name: 'Main_Container',

  /* components: {
    DashBoard,
  }, */

  data() {
    return {
      object: config
    }
  }
};
</script>