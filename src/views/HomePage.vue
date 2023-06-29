<template>
    <div>
    <h1>Hompage</h1>
      <h1>Welcome, {{ this.$route.query}}</h1>
      <h1>Welcome, {{ user1.fullName}}</h1>
      <!-- Hiển thị thông tin người dùng đã đăng nhập -->
    </div>
  </template>
  
  <script>
  import userService from '../service/user.service'
  export default {
    data(){
      return{
        user1: {}
      }
    },
    props: ['user'],
    methods:{
      async getInfoUser(){
          this.user1 = await userService.getUser()
          console.log(this.user1)
          console.log('thienthanh')
      }
    },
    mounted(){
      this.getInfoUser()
    }
  }
  </script>