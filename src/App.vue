<template>
  <div id="app">
    <vHeader />
    <router-view />
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import vHeader from "./components/header/Header.vue";
export default defineComponent({
  components: { vHeader }
});
</script>
