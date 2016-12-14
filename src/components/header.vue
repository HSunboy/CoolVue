<style lang="less" scoped>
.menu{
		position:fixed;
		bottom:0;
		left:0;
		width:100%;
		height:50px;
		font-size:14px;

		.menuitem{
			width:20%;
			height:50px;
			display:inline-block;
			background:#ECECEC;
			color:#FFF;
			.selectu{
				color:#B74242 !important;

			}
			.menuitemtext{
				height:20px;
				text-align:center;
				color:#666;
				line-height:20px;

			}
			img{
				display:block;
				height:20px;
				width:20px;
				margin:5px auto;
			}
		}

	}
@media screen and(max-width:375px){
	.menu{
		font-size:12px;
	}
}
@media screen and(min-width:500px){
	.menu{
		font-size:18px;
	}
}



	
</style>
<template>
	<div class="menu">
		<router-link to="/index">
		<div class="menuitem">
			<img v-if="select=='index'" src="./images/index_s.png"/>
			<img v-else src="./images/index.png"/>

			<div class="menuitemtext"  :class="select=='index'?'selectu':''" >

				首页
			</div>
		</div>
		</router-link><router-link to="/bill">
		<div class="menuitem">
			<img v-if="select=='bill'" src="./images/bill_s.png"/>
			<img v-else src="./images/bill.png"/>
			<div class="menuitemtext"  :class="select=='bill'?'selectu':''" >
				分类
			</div>
		</div>
		</router-link><router-link to="/free">
		<div class="menuitem">
			<img v-if="select=='free'" src="./images/free_s.png"/>
			<img v-else src="./images/free.png"/>
			<div class="menuitemtext"  :class="select=='free'?'selectu':''" >
				免费
			</div>
		</div>
		</router-link><router-link to="/buycar">
		<div class="menuitem">
			<img v-if="select=='buycar'" src="./images/buycar_s.png"/>
			<img v-else src="./images/buycar.png"/>
			<div class="menuitemtext"  :class="select=='buycar'?'selectu':''" >
				购物车
			</div>
		</div>
		</router-link><router-link to="/person">
		<div class="menuitem">
			<img v-if="select=='person'" src="./images/person_s.png"/>
			<img v-else src="./images/person.png"/>
			<div class="menuitemtext"  :class="select=='person'?'selectu':''" >
				个人中心

			</div>
		</div>
		</router-link>
	</div>
</template>
<script>

    export default {
        props: {
            select: {
                type: String,
                default: ''
            }

        }
    }
</script>