<template>
  <div :class="['v-rules-agree', type]">
      <input
        class="checkbox-input"
        :id="type"
        type="checkbox"
        hidden
      >
      <label class="checkbox-label" :for="type">
        <span>Я ознакомлен с <a href="#!">правилами</a></span>
        <br>
        <slot></slot>
      </label>
  </div>
</template>
<script>
  export default {
    props: ['type']
  }
</script>
<style lang="scss">
  .v-rules-agree {
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 auto;
    &.modal {
      margin-top: 27px;
      .checkbox-input:checked ~ .checkbox-label:before {
        background: red;
      }
      .checkbox-label {
        margin-left: 24px;
        font-size: 14px;
        color: #7d7d7d;
        line-height: 16px;
        &:before {
          width: 24px;
          height: 24px;
          border-color: #f37032;
          border-radius: 4px;
          box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.1);
        }
        a {
          color: #7d7d7d;
          &:before {
            background: #7d7d7d;
          }
        }
      }
    }
    &.game {
      margin-top: 55px;
      .checkbox-input:checked ~ .checkbox-label:before {
        background: orange;
      }
      .checkbox-label {
        margin-left: 28px;
        font-size: 26px;
        color: #fff3e9;
        line-height: 30px;
        &:before {
          width: 50px;
          height: 50px;
          border-color: #eaaa00;
          border-radius: 6px;
        }
        a {
          color: #fff3e9;
          &:before {
            background: #fff3e9;
          }
        }
      }
    }
  }

  .checkbox {
    &-label {
      display: block;
      cursor: pointer;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-100%, -50%);
        display: flex;
        align-items: center;
        justify-content: center;
        background: #FFF3E9;
        border: 2px solid;
        cursor: pointer;
      }
      a {
        position: relative;
        display: inline-block;
        &:before {
          position: absolute;
          content: '';
          display: block;
          bottom: -2px;
          height: 2px;
          width: 100%;
        }
      }
    }
  }
</style>