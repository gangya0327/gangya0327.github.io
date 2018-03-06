<template>
<div id="resumerEditor">
  <div class="sidebar">
  	<ul>
  	  <li>
  	  	<svg class="icon" aria-hidden="true">
  	  		<use xlink:href='#icon-id'></use>
  	  	</svg>
  	  </li>
  	  <li></li>
  	  <li></li>
  	  <li></li>
  	</ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'ResumerEditor'
}
</script>

<style>
#resumerEditor {
  background: #fff;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25);
  display: flex;
  flex-direction: row;
}
.sidebar {
	width: 80px;
	background: #000;
}
.sidebar li {
	background: #000;
	width: 80px;
	height: 48px;
	margin: 16px 0;
	display: flex;
	justify-content: center;
	align-items: center;
}
.sidebar li:hover {
	background: #fff;
}
.sidebar li .icon {
	width: 24px;
}
</style>
