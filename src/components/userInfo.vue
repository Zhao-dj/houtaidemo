<template>
<div>
    <h1>用户详情页面</h1>
    <!-- <p>编号：{{$route.params.uid}}</p> -->
    <p>编号：{{$route.query.id}} </p>
    <p>手机号：{{$route.query.phone}} </p>
    <p>姓名：{{$route.query.name}} </p>
</div>
</template>

<script>
export default {
  
  mounted () {
     
  },
}
</script> 

<style scoped>

</style>
