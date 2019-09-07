<template>
  <div :class="['v-rules-agree', type]">
    <div class="checkbox-wrapper">
      <input
        class="checkbox-input"
        :id="type"
        type="checkbox"
        hidden
      >
      <label class="checkbox-custom"
        :for="type"
      ></label>
    </div>
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
    display: flex;
    align-items: center;
    margin: 0 auto;
    &.modal {
      margin-top: 27px;
      .checkbox-input:checked ~ .checkbox-custom {
        background: red;
      }
      .checkbox-custom {
        width: 24px;
        height: 24px;
        border-color: #f37032;
        border-radius: 4px;
      }
      .checkbox-label {
        margin-left: 15px;
        font-size: 14px;
        color: #7d7d7d;
        span {
          line-height: 16px;
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
      .checkbox-input:checked ~ .checkbox-custom {
        background: orange;
      }
      .checkbox-custom {
        width: 50px;
        height: 50px;
        border-color: #eaaa00;
        border-radius: 6px;
      }
      .checkbox-label {
        margin-left: 28px;
        font-size: 26px;
        color: #fff3e9;
        span {
          line-height: 30px;
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
    &-custom {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #FFF3E9;
      border: 2px solid;
      cursor: pointer;
    }
    &-label {
      cursor: pointer;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
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