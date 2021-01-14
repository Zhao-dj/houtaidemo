<template>
    <div class="page">
        <router-view name="header"></router-view>
        <div class="content">
             <router-view name="nav"></router-view>
              <router-view name="main"></router-view>
              
        </div>
          <router-view name="bottom"></router-view>
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
.page{
        display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
}
.content{
     display: flex;
    width: 100%;
    flex: 1;
}
</style>
