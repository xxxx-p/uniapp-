<template>
	<view class="van-sidebar-con">
		<van-sidebar active-key="activeKey">
			<van-sidebar-item @tap="selectItem(index)" :title="item.title" v-for="(item,index) in categories" :key="index" />
		</van-sidebar>
	</view>
</template>

<script>
	export default {
		props: {
			categories: {
				type: Array,
				value: []
			}
		},
		data() {
			return {
				activeKey: 0
			}
		},
		methods: {
			selectItem(index) {
				this.$emit("selectCat", index)
			}
		}
	}
</script>

<style>
	.van-sidebar-con {
		overflow: auto;
		width: 25vw;
		height: 100vh;
	}

	.van-sidebar-item {
		text-align: center;
	}
</style>
