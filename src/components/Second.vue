<template>
  <div class="Second">
    <div class="bg">
      <img src="../assets/1.png"/>
    </div>
  </div>
</template>

<style scoped lang="less">
  .bg{
    overflow: hidden;
      img{
        width: 100%;
        position: relative;
        &:hover{
          animation: turnOn .8s .5s ease both;
        }
      }
  }
  @keyframes turnOn {
    /*100% {transform:skew(45deg,15deg);}*/
  }

</style>
