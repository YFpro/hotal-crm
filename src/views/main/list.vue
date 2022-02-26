<template>
    <div>
    <div class="top">
        <div class="left">&lt;</div>     <div class="right">提交订单</div>
    </div>
        <div class="tu"><img src="../../assets/zf.png" alt="">
            <p style="margin-top: 1rem;margin-bottom: 0.5rem;font-family: PingFang-SC-Heavy;
	font-size:0.7rem;">182.00元</p>
            <p style="font-size: 0.4rem; height:0.6rem;">请确认支付金额</p>
        </div>
        <div class="zhong">
           <ul >
               <li>
                   <div class="yuan" style="float: left;margin-top: 0.1rem;"></div>
                   <div style="margin-top: -0.1rem;margin-left: 0.4rem;width: 40%;">支付方式</div>
                   <div style="width: 40%;margin-top:-0.45rem;margin-left: 4.8rem;text-align: center">微信</div>
               </li>
               <li><div class="yuan" style="float: left;margin-top: 0.1rem;"></div>
                   <div style="margin-top: -0.1rem;margin-left: 0.4rem;width: 40%;">订单编号</div>
                   <div style="width: 40%;margin-top:-0.45rem;margin-left: 4rem;text-align: center">351312132533812</div></li>
               <li><div class="yuan" style="float: left;margin-top: 0.1rem;"></div>
                   <div style="margin-top: -0.1rem;margin-left: 0.4rem;width: 40%;">订单状态</div>
                   <div style="width: 40%;margin-top:-0.45rem;margin-left: 4.8rem;text-align: center">待支付</div></li>
           </ul>
        </div>
        <div class="bottom">
            <ul >
                <li>
                    <img src="../../assets/微信.png" alt="" style="float: left;margin-top: -0.17rem;width: 0.6rem;height: 0.6rem;">
                    <div style="margin-top: -0.1rem;margin-left: 0.8rem;width: 40%;">微信支付</div>
                    <div style="width:0.2rem;height: 0.2rem;margin-top:-0.4rem;margin-left: 6.4rem;background:#e05c63;border-radius: 50%;padding: 0.1rem;opacity: 0.5">
                        <div style="width:0.2rem;height: 0.2rem;background:red;border-radius: 50%;margin: auto;"></div>
                    </div>
                </li>
                <li>
                    <img src="../../assets/支付宝.png" alt="" style="float: left;margin-top: -0.17rem;width: 0.6rem;height: 0.6rem;">
                    <div style="margin-top: -0.1rem;margin-left: 0.8rem;width: 40%;">支付宝支付</div>
                    <div style="width:0.2rem;height: 0.2rem;margin-top:-0.4rem;margin-left: 6.4rem;background:#e05c63;border-radius: 50%;padding: 0.1rem;opacity: 0.5">
                        <div style="width:0.2rem;height: 0.2rem;border-radius: 50%;margin: auto;"></div>
                    </div>
                </li>
                <li>
                    <img src="../../assets/银行卡.png" alt="" style="float: left;margin-top: -0.17rem;width: 0.6rem;height: 0.6rem;">
                    <div style="margin-top: -0.1rem;margin-left: 0.8rem;width: 40%;">银行卡支付</div>
                    <div style="width:0.2rem;height: 0.2rem;margin-top:-0.4rem;margin-left: 6.4rem;background:#e05c63;border-radius: 50%;padding: 0.1rem;opacity: 0.5">
                        <div style="width:0.2rem;height: 0.2rem;border-radius: 50%;margin: auto;"></div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="momey">
             确认支付
        </div>
    </div>
</template>

<script>
    export default {
        name: "list",
        methods:{
        },
        mounted() {
        }
    }
</script>
<style scoped>
    .top {
        width: 100%;
        height: 0.6rem;
        padding: 0.4rem;
        font-family: PingFang-SC-Bold;
    }
    .top > .left{
        float: left;
        font-size: 0.5rem;
        color: #e05c63;
        margin-left: 0.2rem;
    }
    .top > .right{
        width: 2.5rem;
        height: 0.8rem;
        font-family: PingFang-SC-Bold;
        font-size: 0.45rem;
        text-align: center;
        margin-left: 3.5rem;
        opacity: 0.85;
    }
    .tu{
        width: 5rem;
        height: 5rem;
        margin: 0 auto;
        margin-top: 1rem;
    }
    .tu img{
        width: 1.8rem;
        height: 1.5rem;
       margin-left: 2rem;
    }
    .tu p{
        width: auto;
        height:1.2rem;
        margin: 0 auto;
        text-align: center;
    }
    .zhong{
        width: 7.5rem;
        height: 2.5rem;
        background-color: #ffffff;
        border-radius: 0.2rem;
        margin: auto;
        margin-top: 1rem;
        padding: 1rem 0.5rem;
        box-shadow: 0rem 1rem 2rem 1rem  rgba(240,240,240,1);
    }
    .zhong li{
        height: 0.3rem;
        margin-bottom: 0.3rem;
        padding: 0.2rem;
        font-size: 0.3rem;
    }
    .yuan{
        width: 0.15rem;
        height:0.15rem;
        background: #42b983;
        border-radius: 50%;
    }
    .bottom{
        width: 7.5rem;
        height: 2.5rem;
        margin: auto;
        margin-top: 1rem;
        padding: 1rem 0.5rem;
    }
    .bottom li{
        height: 0.3rem;
        margin-bottom: 0.3rem;
        padding: 0.2rem;
        font-size: 0.3rem;
    }
    .momey{
        width: 7rem;
        height: 0.45rem;
        background: #e05c63;
        margin: auto;
        border-radius: 1rem;
        margin-top: 2.5rem;
        text-align: center;
        font-size: 0.4rem;
        color: #ffffff;
        padding: 0.3rem 0;
        font-family: PingFang-SC-Bold;
    }
</style>