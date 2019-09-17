<template>
  <v-screen-5>
    <v-modal-qr v-if="$route.params.id === 'qrcode'"></v-modal-qr>
  </v-screen-5>
</template>
<script>
import VScreen5 from "./VScreen5";
import VModalQr from "../molecules/modal/VModalQr";

export default {
  components: { VScreen5, VModalQr },
};
</script>
