<template>
  <div id="app">
    {{code}}
    <div v-html='styleCode'></div>
  </div>
  
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      code: '',
      finalCode:  `
      body {
        background: lightblue
      }
      `,
      styleCode: ''
    }
  },
  created() {
    var string = '123456789'
    var n = 0
    setInterval(()=>{
      this.code = this.finalCode.substring(0, n)
      this.styleCode = '<style>' + this.code + '</style>'
      n += 1
    }, 50)
  },
  // computed: {
  //   styleCode(){
  //     return '<style>' + this.code + '</style>'
  //   }
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
