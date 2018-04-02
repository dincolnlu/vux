<template>
	<div>
        <div class="m_center_top">
            <a href="javascript:void(0);" class="refresh"><img src="../assets/images/Refresh-mer.png" alt=""></a>
            <div class="total">
                <div class="title">今日本商户收款<span>{{gatherNumber}}</span>笔，合计</div>
                <div class="money"><span class="m-icon">&yen;</span>&nbsp;<span>{{moneyNum}}</span></div>
            </div>
            <div class="m_center_top-float">
                <a href="javascript:scanQRCode();">
                    <div class="m_center_top-gather">
                        <img src="../assets/images/ico-m-center-gather.png">
                        <p>扫一扫</p>
                    </div>
                </a>
            </div>
            <div class="m_center_top-float">
                <a href="merchant.gather.create.html">
                    <div class="m_center_top-qrcode">
                        <img src="../assets/images/ico-m-center-qrcode.png">
                        <p>二维码收款</p>
                    </div>
                </a>
            </div>
        </div>
        <div class="m_center_user">
            <div class="mul">商户号: <span>{{mercode}}</span></div>
            <div class="mur">
                管理员: <span>{{account}}</span><span>[<a class="l-a" id="unbind">退出</a>]</span>
            </div>
        </div>
        <ul class="m_center-funcion">
            <li v-for="list in lists" :key=list.id>
                <a :href="list.url">
                    <img :src="list.icon">
                    <p>{{list.title}}</p>
                </a>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
import {numberComma} from 'vux'
export default{
  components: {
    numberComma
  },
  data () {
    return {
      moneyNum: numberComma(123456789 / 100),
      gatherNumber: '2',
      mercode: '123456',
      account: 'tushuai',
      lists: [
        {
          icon: require('../assets/images/merAd.png'),
          title: '网店管理',
          url: ''
        },
        {
          icon: require('../assets/images/shopInfo.png'),
          title: '商户信息',
          url: ''
        },
        {
          icon: require('../assets/images/couponAdmin.png'),
          title: '优惠管理',
          url: ''
        },
        {
          icon: require('../assets/images/merAd.png'),
          title: '网店管理',
          url: ''
        },
        {
          icon: require('../assets/images/shopInfo.png'),
          title: '商户信息',
          url: ''
        },
        {
          icon: require('../assets/images/couponAdmin.png'),
          title: '优惠管理',
          url: ''
        },
        {
          icon: require('../assets/images/merAd.png'),
          title: '网店管理',
          url: ''
        },
        {
          icon: require('../assets/images/shopInfo.png'),
          title: '商户信息',
          url: ''
        },
        {
          icon: require('../assets/images/couponAdmin.png'),
          title: '优惠管理',
          url: ''
        },
        {
          icon: require('../assets/images/mallOrder.png'),
          title: '商城订单',
          url: 'merchantOrderList'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
    body{
        background: #f5f5f5;
        line-height: 1;
    }
    .m_center_top {
        position:relative;
        background-color: #ff6633;
        height: 430px;
        overflow: hidden;
        .total{
            position: relative;
            top:30px;
            color:#fff;
            .title{
                text-align: center;
                font-size:28px;
            }
            .money{
                font-size:76px;
                font-weight: bold;
                margin:50px 0 60px;
                text-align: center;
            }
            .m-icon{
                font-size: 32px;
            }
        }
        .refresh{
            position:absolute;
            right:30px;
            top: 30px;
            img{
                width:40px;
                height: 40px;
            }
        }
        &-float {
            float: left;
            display: inline-block;
            position: relative;
            width: 50%;
            height: 100%;
            a {
                display: inline-block;
            }
        }
        &-gather,&-qrcode{
            position: absolute;
            top: 0;
            width: 140px;
            text-align: center;
            img{
                width: 80px;
                height: 80px; 
            }
            p{
                font-size: 28px;
                color: #fff;
                margin-top: 38px;
            }
        }
        &-gather {
            right: 95px;
        }
        &-qrcode {
            left: 95px;
        }
    }
    .m_center_user{
        height: 80px;
        line-height: 80px;
        padding: 0 24px;
        background-color: #fff;
        color:#999;
        overflow: hidden;
        font-size: 26px;
        span{
            color:#333;
        }
        .mul{
            float: left;
        }
        .mur{
            float: right;
            a{
                display: inline;
                color: #0099ff;
            }
        }
        
    }
    .m_center-funcion {
        background-color: #fff;
        margin-bottom: 80px;
        overflow: hidden;
        border-top: 1px solid #e1e1e1;
        li {
            float: left;
            width: 249px;
            height: 250px;
            text-align: center;
            border-bottom: 1px solid #e1e1e1;
            border-right: 1px solid #e1e1e1;
            img {
                display: inline-block;
                width: 60px;
                height: 60px;
                margin: 50px auto;
            }p {
                font-size: 28px;
                color: #222;
            }
        }
    } 
</style>
