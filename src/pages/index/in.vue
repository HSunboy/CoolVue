<style>

	
</style>
<template>
	<div>
		<v-header title="首页">
			<router-link slot="right" v-if="user.id" to="/home">{{user.name}}</router-link>
		</v-header>
		
		
	</div>
</template>
<script>

</script>