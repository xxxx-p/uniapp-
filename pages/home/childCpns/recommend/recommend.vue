<template>
	<view class='recommend'>
		<view class='recommend-item' v-for="(item,index) in recommend" :key="index">
			<image :src="item.image" />
			<view>
				<text>{{item.title}}</text>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		props:{
			  recommend: {
			      type: Array,
			      value: []
			    }
		}
	}
</script>

<style>
	.recommend {
		display: flex;
		margin-top: 40rpx;
		padding-bottom: 40rpx;
		border-bottom: 16rpx solid #eee;
		height: 220rpx;
	}

	.recommend-item {
		flex: 1;
		text-align: center;
	}

	.recommend-item image {
		width: 160rpx;
		height: 160rpx;
	}

	.recommend-item text {
		font-size: 28rpx;
	}
</style>
