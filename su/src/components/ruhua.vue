<template>
  <div class="hello">
    <div class="title" style="text-align: center">元宇宙女友生成器</div>
    <el-divider />
    <div class="content">
      <el-form-item label="选择性别：">
        <el-select v-model="value1" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="选择年龄：">
        <el-select v-model="value1" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="选择职业：">
        <el-select v-model="value1" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="选择性格：">
        <el-select v-model="value1" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="选择穿着：">
        <el-select v-model="value1" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
    </div>
    <el-divider />
    <div class="title" @click="showPopup" style="text-align: center">元宇宙女友生成器</div>

    <el-dialog :show-close="true" fullscreen width="80%" v-model="show">
      <div style="height: 120px; overflow: hidden">
        <div v-show="isShow" class="sk-folding-cube">
          <div class="sk-cube1 sk-cube"></div>
          <div class="sk-cube2 sk-cube"></div>
          <div class="sk-cube4 sk-cube"></div>
          <div class="sk-cube3 sk-cube"></div>
        </div>
        <div v-show="isShow" style="text-align:center; font-size: 18px;">AI正在为您生成元宇宙女友形象，请稍后...</div>
      </div>
      <div style="height: 36px">
        <div class="t1" style="text-align:center;">您的元宇宙女友形象为：</div>
      </div>
      <img class="img" width="350" height="300" src="../assets/image/ruhua.jpg" alt="">
      <!-- <div class="t2" style="text-align:center; margin-top: 20px">结果准确率: <span style="color: red; font-size: 20px">90%</span></div> -->
    </el-dialog>
  </div>
</template>

<script>
import { ElNotification } from 'element-plus'
import {reactive} from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    let data = reactive({
      value1: '',
      value2: '',
      res: '',
      sum: null,
      reset: null,
      show: false,
      showPopup: null,
      isShow: true,
      isShow2: false,
    })
    data.sum = () => {
      data.show = true;
      setTimeout(() => {
        data.show = false;
        if (data.value1 == '广东人' && data.value2 == "福建人") {
          data.res = '广东人'
        } else {
          data.res = data.value1 + data.value2
        }
      }, 2000);
    }
    data.reset = () => {
      data.res = ''
      data.value1 = ''
      data.value2 = ''
    }
    data.showPopup = () => {
      data.show = true;
      data.isShow = true
      data.isShow2 = false
      setTimeout(() => {
        data.isShow = false
        data.isShow2 = true
      }, 3000)
      setTimeout(() => {
        ElNotification({
          title: '结果准确率: ',
          dangerouslyUseHTMLString: true,
          message:'<div class="t2"><span style="color: red; font-size: 20px">93%</span></div>',
        })        
      }, 4500)
    }
    return data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    width: 100%;
    height: 100vh;
    background: #fff;
    overflow: hidden;
  }
  .title {
    width: 80%;
    height: 40px;
    line-height: 40px;
    border-radius: 8px;
    box-shadow: 0 0 4px #ccc;
    margin: 0 auto;
    margin-top: 20px;
    background: rgba(200, 107, 143, 0.616);
    color: #fff;
    font-size: 18px;
  }
  .plus {
    text-align: center;
    font-size: 30px;
    margin: 10px 0;
  }
  .res-box {
    height: 100px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
  }
  .loading {
    width: 200px;
    height: 100px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .content {
    padding: 0 20px;
  }

.sk-folding-cube {
  margin: 20px auto;
  width: 40px;
  height: 40px;
  position: relative;
  -webkit-transform: rotateZ(45deg);
          transform: rotateZ(45deg);
}

.sk-folding-cube .sk-cube {
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
          transform: scale(1.1); 
}
.sk-folding-cube .sk-cube:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(200, 107, 143, 0.616);
  -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
          animation: sk-foldCubeAngle 2.4s infinite linear both;
  -webkit-transform-origin: 100% 100%;
      -ms-transform-origin: 100% 100%;
          transform-origin: 100% 100%;
}
.sk-folding-cube .sk-cube2 {
  -webkit-transform: scale(1.1) rotateZ(90deg);
          transform: scale(1.1) rotateZ(90deg);
}
.sk-folding-cube .sk-cube3 {
  -webkit-transform: scale(1.1) rotateZ(180deg);
          transform: scale(1.1) rotateZ(180deg);
}
.sk-folding-cube .sk-cube4 {
  -webkit-transform: scale(1.1) rotateZ(270deg);
          transform: scale(1.1) rotateZ(270deg);
}
.sk-folding-cube .sk-cube2:before {
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
}
.sk-folding-cube .sk-cube3:before {
  -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s; 
}
.sk-folding-cube .sk-cube4:before {
  -webkit-animation-delay: 0.9s;
          animation-delay: 0.9s;
}
@-webkit-keyframes sk-foldCubeAngle {
  0%, 10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
            transform: perspective(140px) rotateX(-180deg);
    opacity: 0; 
  } 25%, 75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
            transform: perspective(140px) rotateX(0deg);
    opacity: 1; 
  } 90%, 100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
            transform: perspective(140px) rotateY(180deg);
    opacity: 0; 
  } 
}

@keyframes sk-foldCubeAngle {
  0%, 10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
            transform: perspective(140px) rotateX(-180deg);
    opacity: 0; 
  } 25%, 75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
            transform: perspective(140px) rotateX(0deg);
    opacity: 1; 
  } 90%, 100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
            transform: perspective(140px) rotateY(180deg);
    opacity: 0; 
  }
}
.t1 {
  font-size: 20px;
  color: rgba(221, 51, 116);
  font-weight: bold;
}
.t2 {
  width: 50%;
  background-color: rgba(240, 165, 28, 0.397);
  margin: 0 auto;
  color: rgb(0, 110, 132);
  line-height: 36px;
  border-radius: 6px;
}
.img {
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(221, 51, 116, 0.616);
  /* filter: blur(100px); */
  animation: a 4s;
  margin-top: 10px;
}
@keyframes a {
  from {
    filter: blur(500px);
  }
  to {
    filter: blur(0);
  }
}
</style>
