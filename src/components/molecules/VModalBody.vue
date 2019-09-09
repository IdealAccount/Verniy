<template>
  <div class="v-modal-body">
    <header class="v-modal-body__header">
      <slot name="header"></slot>
    </header>
    <slot name="content"></slot>
    <p class="v-modal-body__description">
      <slot name="description"></slot>
    </p>
    <slot name="footer"></slot>
  </div>
</template>
<style lang="scss">
  .v-modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    &__header {
      text-align: center;
      font-size: 36px;
      font-weight: bold;
      color: #505050;
    }
    &__description {
      max-width: 80%;
      margin: 0 auto;
      text-align: center;
      font-size: 16px;
      color: #7d7d7d;
    }
  }

</style>