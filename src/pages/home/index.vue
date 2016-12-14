<style lang="less" scoped>

</style>
<template>
	<div>
		<v-header select="free"></v-header>
		<div style="padding: 50px;">{{user.name}}欢迎回家</div>
	</div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        computed: mapState({ user: state => state.user }),
    }
</script>