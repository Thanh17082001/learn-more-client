<template>
  <!-- <button @click="loginWithGoogle">Đăng nhập với GG</button> -->
  <a href="http://localhost:3000/user/google">gg</a>
</template>

<script>
export default {
  methods:{
    async loginWithGoogle(){
      try {
        window.location.href = 'http://localhost:3000/user/google';
      } catch (error) {
        console.log(error)
      }
    },
    
  },
  
}
</script>

<style>

</style>