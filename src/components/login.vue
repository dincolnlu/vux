<template>
  <div>
    <group style="padding:15px;"  class="weui-cells_form">
      <x-input title="手机号/人员编号" mask="999 9999 9999"  keyboard="number" is-type="china-mobile" placeholder="请输入手机号">
        <img slot="label" style="padding-right:10px;display:block;" src="../assets/images/account.png" width="24" height="24">
      </x-input>
      <x-input title="验证码" class="weui-cell_vcode"  placeholder="请输入图片验证码">
        <img slot="label" style="padding-right:10px;display:block;" src="../assets/images/checkCode.png" width="24" height="24">
        <img slot="right" class="weui-vcode-img" :src="pic" @click="genCaptchaKey">
      </x-input>
      <x-input title="发送验证码" class="weui-vcode"  placeholder="请输入短信验证码">
        <img slot="label" style="padding-right:10px;display:block;" src="../assets/images/msgIcons.png" width="24" height="24">
        <x-button @click.native="getCode" slot="right" type="default" mini class="we">
          <span v-show="show" >获取验证码</span>
          <span v-show="!show" class="count">已发送 {{count}} s</span>
        </x-button>
      </x-input>
    </group>

    <div style="padding:15px;">
      <x-button :gradients="['#ff6633', '#ff6633']" type="primary">登录</x-button>
    </div>
  </div>
</template>

<script>
import { XInput, Group, XButton, Cell } from 'vux'
import api from '../util/api'
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
      TIME_COUNT: 60,
      pic: require('../assets/images/refresh.png')
    }
  },
  created: function () {
    this.genCaptchaKey()
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
    },
    genCaptchaKey () {
      const that = this
      this.$http.get(api.genCaptchaKey)
      .then(respone => {
        that.getCaptcha(respone.data.retval)
      })
      .catch(error => {
        console.log(error)
      })
    },
    getCaptcha (key) {
      const that = this
      this.$http.get(api.Captcha, {
        params: { 'key': key },
        responseType: 'arraybuffer'
      })
      .then(response => {
        return 'data:image/png;base64,' + btoa(
        new Uint8Array(response.data)
          .reduce((data, byte) => data + String.fromCharCode(byte), '')
      )
      })
      .then(data => {
        that.pic = data
      })
      .catch(error => {
        console.log(error)
      })
    }

  }
}
</script>
<style lang="scss">
  body {
    background-color: #fff;
  }
  .weui-cell{
    height:120px;
    padding:0 15px !important;
    font-size: 32px !important;
    &:before{
      border-color:#b4b4b4b4 !important;
    }
  }
  .weui-btn{
    height:80px;
    font-size: 36px !important;
  }
  button.weui-btn{
    font-size: 24px !important;
    @include border-1px(#ff6633 );
  }
  .weui-vcode-img{
    width:220px !important;
    height:66px !important;
  }
  .weui-icon-clear{
    font-size:32px !important;
  }
  .vux-x-input{ 
    .vux-input-icon{
      font-size:32px !important;
    }
  }
  .vux-input-icon.weui-icon-warn:before, .vux-input-icon.weui-icon-success:before{
    font-size:32px !important;
  }
</style>