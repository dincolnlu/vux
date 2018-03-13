<template>
  <div>
    <group style="padding:15px;"  class="weui-cells_form">
      <x-input title="手机号/人员编号" mask="999 9999 9999"  keyboard="number" is-type="china-mobile" placeholder="请输入手机号">
        <img slot="label" style="padding-right:10px;display:block;" src="../assets/images/account.png" width="24" height="24">
      </x-input>
      <x-input title="验证码" class="weui-cell_vcode"  placeholder="请输入图片验证码">
        <img slot="label" style="padding-right:10px;display:block;" src="../assets/images/checkCode.png" width="24" height="24">
        <img slot="right" class="weui-vcode-img" src="https://i.loli.net/2017/09/18/59bf7f32425d5.jpg" width="48">
        <img slot="right" class="weui-vcode-img" src="https://i.loli.net/2017/09/18/59bf7f32425d5.jpg" width="24" height="24">
      </x-input>
      <x-input title="发送验证码" class="weui-vcode"  placeholder="请输入短信验证码">
        <img slot="label" style="padding-right:10px;display:block;" src="../assets/images/msgIcons.png" width="24" height="24">
        <x-button @click.native="getCode" slot="right" type="default" mini >
          <span v-show="show">获取验证码</span>
         <span v-show="!show" class="count">{{count}} s</span>
        </x-button>
      </x-input>
    </group>

    <div style="padding:15px;">
      <x-button :gradients="['#ff6633', '#ff6633']" :disabled="true" type="primary">登录</x-button>
    </div>

  </div>
</template>

<script>
import { XInput, Group, XButton, Cell } from 'vux'
export default {
  components: {
    XInput,
    XButton,
    Group,
    Cell
  },
  data () {
    return {
      show: 'true',
      count: '',
      timer: '',
      TIME_COUNT: 60
    }
  },
  methods: {
    getCode (formData) {
      if (!this.timer) {
        this.count = this.TIME_COUNT
        this.show = false
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= this.TIME_COUNT) {
            this.count--
          } else {
            this.show = true
            clearInterval(this.timer)
            this.timer = ''
          }
        }, 1000)
      }
    }
  }
}
</script>
<style lang="scss">
  body {
    background-color: #fff;
  }
  .weui-cell{
    height:80px;
    padding:0 15px !important;
    &:before{
      border-color:#b4b4b4b4 !important;
    }
  }
  .weui-cells{
    &:before{
      border-top: none !important;
    }
    &:after{
      left:15px !important;
      border-color:#b4b4b4b4 !important;
    }
  }
  .weui-btn{
    height:50px;
  }
</style>