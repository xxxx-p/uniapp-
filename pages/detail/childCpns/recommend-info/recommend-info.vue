<template>
	<view class='recommend'>
		<view class='header'>商品推荐</view>
		<UniList :list="recommends"></UniList>
	</view>

</template>

<script>
	import UniList from '../../../../components/uni-list/uni-list'
	export default {
		props: {
			recommends: {
				type: Array
			}
		},
		data() {
			return {

			}
		},
		methods: {

		},
		components: {
			UniList
		}
	}
</script>

<style>
	.recommend {
		padding: 10rpx 0 120rpx 0;
	}

	.header {
		font-size: 40rpx;
		margin: 10rpx;
	}
</style>
