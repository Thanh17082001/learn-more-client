<template>
    <div>
    <h1>Hompage</h1>
      <h3>Welcome, {{ user1.fullName}}</h3>
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
          this.user1 = await userService.getUser()
      }
    },
    mounted(){
      this.getInfoUser()
    }
  }
  </script>