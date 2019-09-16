<template>
  <div class="v-input-code-wrap"
       :class="{valid: isValid, 'no-valid': noValid}"
  >
    <input
      class="v-input-code"
      type="text"
      maxlength="1"
      v-model="codeNum"
      v-focus
    >
  </div>
</template>
<script>
  export default {
    props: {
      isValid: Boolean,
      noValid: Boolean
    },
    data() {
      return {
        codeNum: ''
      }
    }
  }
</script>
<style lang="scss">
  .v-input-code-wrap {
    position: relative;
    width: 95px;
    height: 84px;
    &:not(:last-child) {
      margin-right: 40px;
    }
    &:before {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 0;
      display: block;
      width: 100%;
      height: 6px;
      background: #777;
    }
    &.valid:before {
      background: #ffb600;
    }
    &.no-valid:before {
      background: #ff0000;
    }
  }
  .v-input-code {
    width: 100%;
    height: 100%;
    font-size: 60px;
    color: #000;
    background: none;
    border: none;
    text-align: center;
  }
</style>