<template>
  <!-- <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div> -->
  <div class="page">
    <header>
      <Topbar/>
    </header>
    <main>
      <ResumerEditor/>
      <ResumerPreview/>
    </main>
  </div>
</template>

<script>
import 'normalize.css/normalize.css'
import './assets/reset.css'
import Topbar from './components/Topbar'
import ResumerEditor from './components/ResumerEditor'
import ResumerPreview from './components/ResumerPreview'
import './assets/iconfont.js'

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
.page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #eaebec;
}
.page>main {
  flex-grow: 1;
}
.page>main {
  min-width: 1024px;
  max-width: 1440px;
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  align-self: center;
  width: 100%;
}
#resumerPreview {
  width: 61.667%;
  background: #777;
  flex-grow: 1;
  margin-left: 16px;
}
#resumerEditor {
  width: 35%;
  background: #444;
}
</style>
