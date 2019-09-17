<template>
  <div class="v-icon">
    <img :src="src" />
  </div>
</template>
<script>
export default {
  props: ["icon"],
  data() {
    return {
      src: "../../assets/img/error.png"
    };
  }
};
</script>
<style lang="scss">
.v-icon {
  width: 30px;
  height: 30px;
}
</style>
