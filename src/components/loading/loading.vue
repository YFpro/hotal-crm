<template>
    <div class="box" v-show="isshow">
      <div class="box1">
     <div class="box1-item">
        <div class="line"></div>
    </div>
          <div class="box1-item">
              <div class="line"></div>
          </div>
          <div class="box1-item">
              <div class="line"></div>
          </div>
          <div class="box1-item">
              <div class="line"></div>
          </div>
          <div class="box1-item">
              <div class="line"></div>
          </div>
          <div class="box1-item">
              <div class="line"></div>
          </div>
          <div class="box1-item">
              <div class="line"></div>
          </div>
          <div class="box1-item">
              <div class="line"></div>
          </div>
          <div class="box1-item">
              <div class="line"></div>
          </div>
          <div class="box1-item">
              <div class="line"></div>
          </div>
          <div class="box1-item">
              <div class="line"></div>
          </div>
          <div class="box1-item">
              <div class="line"></div>
          </div>
      </div>
    </div>
</template>
<script>
    export default {
        name: "loading",
        props:{
            isshow:{
                type:Boolean,
                default:false
            }
        }
    }
</script>

<style scoped>
.box {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background:rgba(0,0,0,0.8);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box1{
        position: relative;
        width: 200px;
        height: 200px;
    }
    .box1-item{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }
    .box1-item:nth-child(2){
        transform: rotateZ(30deg);

    }
.box1-item:nth-child(3){
    transform: rotateZ(60deg);

}
.box1-item:nth-child(4){
    transform: rotateZ(90deg);

}
.box1-item:nth-child(5){
    transform: rotateZ(120deg);

}
.box1-item:nth-child(6){
    transform: rotateZ(150deg);

}
.box1-item:nth-child(7){
    transform: rotateZ(180deg);

}
.box1-item:nth-child(8){
    transform: rotateZ(210deg);
}
.box1-item:nth-child(9){
    transform: rotateZ(240deg);
}
.box1-item:nth-child(10){
    transform: rotateZ(270deg);
}
.box1-item:nth-child(11){
    transform: rotateZ(300deg);
}
.box1-item:nth-child(12){
    transform: rotateZ(330deg);
}
.box1-item:nth-child(1){
    transform: rotateZ(360deg);
}
.box1-item:nth-child(1) .line{
    animation-delay: 0ms;
}
.box1-item:nth-child(2) .line{
    animation-delay: 100ms;
}
.box1-item:nth-child(3) .line{
    animation-delay: 200ms;
}
.box1-item:nth-child(4) .line{
    animation-delay: 300ms;
}
.box1-item:nth-child(5) .line{
    animation-delay: 400ms;
}
.box1-item:nth-child(6) .line{
    animation-delay: 500ms;
}
.box1-item:nth-child(7) .line{
    animation-delay: 600ms;
}
.box1-item:nth-child(8) .line{
    animation-delay: 700ms;
}
.box1-item:nth-child(9) .line{
    animation-delay: 800ms;
}
.box1-item:nth-child(10) .line{
    animation-delay: 900ms;
}
.box1-item:nth-child(11) .line{
    animation-delay: 1000ms;
}
.box1-item:nth-child(12) .line{
    animation-delay:1100ms;
}


    .line{
        position: absolute;
        width: 3px;
        height: 50px;
        left: 99px;
        top: 0;
        background: silver;
        animation: loading 1.2s infinite linear;
    }
    @keyframes loading {
        from{
            opacity: 0;
        }
        to{
           opacity: 1;
        }

    }
</style>