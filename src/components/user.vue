
<template>
  <div class="container">
    <h1>用户管理界面</h1>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in arr" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.phone }}</td>
          <td><button @click="toInfo(item)"  class="btn btn-primary">编辑</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      arr: [
        {
          id: "1",
          name: "张三",
          phone: "1234578",
        },
        {
          id: "2",
          name: "李四",
          phone: "1234578",
        },
        {
          id: "3",
          name: "王五",
          phone: "1234578",
        },
      ],
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
   beforeRouteLeave(to,from,next){
    console.log(to,1111111);
    console.log(from,222222);
    console.log(next,333333);
    if(window.confirm('确定要离开此页面吗？')){
     next()
    }
  },
  methods: {
      toInfo(uid){
        //   通过$router进行页面跳转
        //   this.$router.push('/user/'+uid)
        //   this.$router.push('/user/'+uid.id+'/'+uid.phone)
       //    this.$router.push('/user/info?id='+uid.id+'&phone='+uid.phone)
       //     console.log(qs.stringify(uid))
        this.$router.push('/user/info?' + qs.stringify(uid))
        // this.$router.push({name:'xiangqing',query:uid})
      
      }
  },
 
  mounted() {},
};
</script> 
<!-- 最新版本的 Bootstrap 核心 CSS 文件 -->



<style scoped>
th,td{
    text-align: center;
}
</style>
