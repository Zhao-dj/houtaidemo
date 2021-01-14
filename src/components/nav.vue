<template>
<div class="left">
        <router-link to="/" class="item" exact-active-class="active">首页</router-link>
        <router-link to="/user" class="item" active-class="active">用户管理</router-link>
        <router-link to="/profile" class="item" active-class="active">个人中心</router-link>
   
</div>
</template>

<script>
export default {
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data () {
    return {}
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {},
  mounted () {
  },
}
</script> 

<style scoped>
.left{
    width:200px;
    background-color: #000;
    color: #fff;
    display: flex;
    flex-direction: column;
   
}
.item {
    text-align: center;
    line-height: 70px;
    color: #fff;
    font-size: 24px;
    border-radius: 35px;
}
.active{
    background-color: darkmagenta;
}


</style>
