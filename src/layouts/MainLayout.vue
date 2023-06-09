<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>
        <q-item
          clickable
          v-for="link in linksList"
          :key="link.name"
          @click="$router.push(link.path)"
        >
          <q-item-label header> {{ link.name }} </q-item-label>
        </q-item>
      </q-list>
    </q-drawer> -->

    <q-page-container style="height: 300vh">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

import routes from "../router/routes.js";

const linksList = ref([]);

export default defineComponent({
  name: "MainLayout",

  components: {},
  setup() {
    const leftDrawerOpen = ref(false);
    console.log(routes);
    linksList.value = routes;
    console.log(linksList.value);
    return {
      linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
