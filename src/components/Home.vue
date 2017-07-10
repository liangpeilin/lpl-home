<template>
  <div class="home">
    <div class="box">
    <div class="beijing" :style="beijing2"></div>
    <div class="neirong">
      <div class="ltlinks">
        <img class="js-logo" src="../assets/logo.png" alt="">
      </div>
      <ul class="menu">
        <li><a href="javascript:void(0);"  :class="aClass">首页</a></li>
        <li><a href="javascript:void(0);"  :class="aClass">简介</a></li>
        <li><a href="javascript:void(0);"  :class="aClass">画风</a></li>
        <li><a href="javascript:void(0);"  :class="aClass">其他</a></li>
      </ul>
    </div>
    </div>
    <img src="../assets/2.png" />
  </div>
</template>

<script>
  export default {
    name: 'home',
    data: function () {
      return {
        scrolled: false,
        beijing2: {opacity: 0},
        aClass: 'scrolledCss1'
      }
    },
    mounted: function () {
      let vm = this
      window.addEventListener('scroll', function () {
        vm.scrolled = document.body.scrollTop > 0
        if (vm.scrolled) {
          vm.beijing2.opacity = 1
          vm.aClass = 'scrolledCss'
        } else {
          vm.beijing2.opacity = 0
          vm.aClass = 'scrolledCss1'
        }
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@fullWidth: 100%;
.dingwei {
  top: 0;
  left: 0;
}
.publicCss{
  text-decoration: none;
  display: inline-block;
  position: relative;
  font-size: 20px;
  font-weight: 500;
  &::after{
    content: '';
    width: 0;
    position: absolute;
    height: 1px;
    bottom: -6px;
    left: 0;
    transition: width .3s cubic-bezier(.82,0,.12,1), background-color .15s linear;
  }
}
.home {
  .box{
    width: @fullWidth;
    position: fixed;
    .dingwei;
    z-index:100;
    border-top: none;
    padding: 0 135px;
    box-sizing: border-box;
    margin: 0 auto;
    .beijing{
      .dingwei;
      height: 97px;
      width: @fullWidth;
      position: fixed;
      background-color: #fff;
      transition: opacity .4s ease-out;
    }
    .neirong{
      position: relative;
      .dingwei;
      height: 97px;
      .ltlinks{
        position: absolute;
        top: 20px;
        left: 0;
        width: 198px;
        height: 40px;
        img{
          width:110px;
          height:40px;
        }
      }
      .menu{
        position: absolute;
        list-style-type: none;
        overflow: hidden;
        padding-bottom: 1px;
        top: 13px;
        right: 0;
        li {
          display: inline-block;
          margin: 5px 50px;
          .scrolledCss{
            .publicCss;
            color: #585c60;
            &:hover::after{
              width: @fullWidth;
              background-color: #585c60;
            }
          }
          .scrolledCss1{
            .publicCss;
            color: #fff;
            &:hover::after{
              width: @fullWidth;
              background-color: #fff;
            }
          }
        }
      }
    }
  }
  &>img{
    width: @fullWidth;
    height: 730px;
  }
}
</style>
