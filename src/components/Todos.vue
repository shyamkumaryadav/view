<template>
	<div>
		<div :key="item.id" v-for="item in items" >
			<Todo :item="item" />
		</div>
	</div>
</template>

<script>
import Todo from './Todo.vue'

export default{
	name:"Todos",
	props:['itmes'],
	components:{
		Todo
	}
}
</script>

<style scoped>
	
</style>