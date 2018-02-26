/*const Foo = {template: '<div>foo</div>'}
const Bar = {template: '<div>bar</div>'}


const routes = [
	{path: '/foo', component: Foo},
	{path: '/bar', component: Bar}
]

const router = new VueRouter({
	routes//相当于routes: routes
})*/

//动态路由
const User = {
	template: `<div>User {{ $route.params.id }}</div>`
}

const router = new VueRouter({
	routes:[
	{ path: '/user/:id', component: User }
	]
})

const app = new Vue({
	router
}).$mount('#app')