<template>
  <div class="hello">
    <h3  style="text-align: center">人工智能计算器</h3>
    <van-divider :style="{ borderColor: '#999', }" />
    <van-cell-group inset>
      <van-field v-model="value1" placeholder="请输入内容" />
    </van-cell-group>
    <div class="plus">+</div>
    <van-cell-group inset>
      <van-field v-model="value2" placeholder="请输入内容" />
    </van-cell-group>
    <van-button class="mt-4" style="width: 90%; margin: 0 auto; margin-top: 20px" type="primary" block @click="sum">AI智能计算</van-button>
    <van-button class="mt-4" style="width: 90%; margin: 0 auto; margin-top: 20px" type="danger" block @click="reset">重置</van-button>
    <van-cell-group class="mt-4" inset>
      <div class="res-box">
        {{ res }}
      </div>
    </van-cell-group>
    <!-- 弹出层 -->
    <van-popup v-model:show="show">
      <div class="loading">
        <span style="margin-bottom: 10px">AI努力计算中...</span>
        <van-loading type="spinner" color="#1989fa"  />
      </div>
    </van-popup>
  </div>
</template>

<script>
import {reactive, } from 'vue'
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
      showPopup: null
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
    padding-top: 20px;
    background-color: #F7F8FA;
  }
  .plus {
    text-align: center;
    font-size: 30px;
    margin: 10px 0;
  }
  .res-box {
    height: 100px;
    padding: 10px;
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
</style>
