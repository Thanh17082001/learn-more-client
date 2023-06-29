<template>
  <!-- <button @click="loginWithGoogle">Đăng nhập với GG</button> -->
  <a href="http://localhost:3000/user/google">gg</a>
</template>

<script>
import userService from '../service/user.service'
export default {
  methods:{
    async loginWithGoogle(){
      try {
        window.location.href = 'http://localhost:3000/user/google';
      } catch (error) {
        console.log(error)
      }
    },

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

<style>

</style>