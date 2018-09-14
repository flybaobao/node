<template>
  <div class="m">
    <div class="box box1"><div class="c">1</div></div>
    <div class="box box2"><div class="c">2</div></div>
    <div class="box box3"><div class="c">3</div></div>
    <div class="box box4"><div class="c">4</div></div>
    <div class="box box5"><div class="c">5</div></div>
    <div class="box box6"><div class="c">6</div></div>
    <div class="box box7"><div class="c">7</div></div>
    <div class="box box8"><div class="c">8</div></div>
    <div class="box box-btn"><div class="c">click</div></div>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
    .m{
      display: flex;
      border: 1px solid #ccc;
      flex-wrap: wrap; // 内容超出是换行
      .box{
        box-sizing: border-box;
        width:33.33%;
        color: #fff;
        height: 0;
        padding-bottom: 33.33%;
        justify-content: center;
        position: relative;
        background-color: red;
        border: 1px solid #fff;
      }
      .box1{
        order: 1;
      }
      .box2{
        order: 2;
      }
      .box3{
        order: 3;
      }
      .box4{
        order: 6;
      }
      .box5{
        order: 9;
      }
      .box6{
        order: 8;
      }
      .box7{
        order: 7;
      }
      .box8{
        order: 4;
      }
      .box-btn{
        order: 5;
      }
    }
</style>
