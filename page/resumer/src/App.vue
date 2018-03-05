<template>
  <!-- <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div> -->
  <div>
    <p>{{text}}</p>
    <Topbar/>
    <ResumerEditor/>
    <ResumerPreview/>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import ResumerEditor from './components/ResumerEditor'
import ResumerPreview from './components/ResumerPreview'
export default {
  name: 'App',
  data: function () {
    return {
      text: '你好'
    }
  },
  components: {Topbar, ResumerEditor, ResumerPreview}
}
</script>

<style>
p {
  color: red;
}
</style>
