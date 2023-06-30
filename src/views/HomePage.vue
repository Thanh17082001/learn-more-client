<template>
    <div>
    <h1>Hompage</h1>
      <h3>Welcome, {{ user1.fullName}}</h3>
      <button @click="logout">Đăng xuất</button>
      <router-link to="/login" > Đăng nhập</router-link>
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
    
    methods:{
      async getInfoUser(){
          const user = await userService.getUser()
          console.log(user)
          if(user){
            this.user1=user
            localStorage.setItem('user', this.user1)
          }else{
            localStorage.removeItem('user')
            console.log('lỗi');
          }
      },
      async logout(){
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        const logout = await userService.logout();
        this.$router.push({path:'home'})
        console.log(logout)
      }
    },
    mounted(){
      this.getInfoUser()
      window.addEventListener('storage', this.getInfoUser)
    }
  }
  </script>