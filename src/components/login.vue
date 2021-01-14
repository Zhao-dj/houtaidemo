<template>
<div>
    <h1>登录页面</h1>
    <form>
        <div>
            <input type="text" placeholder="请输入用户名" v-model="info.username">
        </div>
        <div>
            <input type="password" placeholder="请输入密码" v-model="info.password">
        </div>
        <div>
            <button type="button" @click="dologin">登录</button>
        </div>
    </form>
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
    return {
        info:{
            username:'',
            password:''
        }
    }
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
      dologin(){
          if(this.info.username==''||this.info.password==''){
              alert('请输入用户名或密码');
          }else{
              localStorage.setItem('userinfo',JSON.stringify(this.info))
              this.$router.replace('/')
          }
      }
  },
  mounted () {
  },
}
</script> 

<style scoped>
input{
    margin-top: 10px;
    width: 300px;
    height: 40px;
    border: 1px solid #666;
}

</style>
