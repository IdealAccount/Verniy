<template>
  <div class="modal-body">
    <header class="modal-body__header">
      <slot name="header"></slot>
    </header>
    <slot name="content"></slot>
    <p class="modal-body__description">
      <slot name="description"></slot>
    </p>
    <slot name="footer"></slot>
  </div>
</template>
<style lang="scss">
  .modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
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