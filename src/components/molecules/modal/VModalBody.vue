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


</style>