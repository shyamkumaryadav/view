<template>
	<div>
		<div :key="item.id" v-for="item in itmes" >
			<Todo :item="item" />
			<h1>This is Todo Elements</h1>
		</div>
	</div>
</template>

<script>
import Todo from './Todo'

export default{
	name:"Todos",
	// props:['itmes'],
	components:{
		Todo
	},
	data(){
    return {
      itmes: [
        {
          id:1,
          name: "shyam",
          is_done: true
        },
        {
          id:2,
          name: "shyam kumar yadav",
          is_done: false
        },
        {
          id:2,
          name: "asasasasasas",
          is_done: true
        }
      ]
    }}
}
</script>

<style scoped>

</style>
