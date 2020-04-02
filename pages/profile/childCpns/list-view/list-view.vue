<template>
	<view class='list-view'>
		<block v-for="(item,index) in infos" :key="index">
			<view class='list-item'>
				<image :src="`/static/images/profile/{{item.icon}}`" />
				<text>{{item.info}}</text>
			</view>
		</block>
	</view>

</template>

<script>
	export default {
		props: {
			infos: {
				type: Array
			}
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.list-view {
		border-top: 36rpx solid #f8f8f8;
	}

	.list-item {
		height: 100rpx;
		line-height: 100rpx;
		background: #fff;
		font-size: 32rpx;
		margin-left: 30rpx;
		border-bottom: 1px solid #f8f8f8;
	}

	.list-item:last-child {
		border-bottom: none;
	}

	.list-item image {
		width: 40rpx;
		height: 40rpx;
		vertical-align: middle;
	}

	.list-item text {
		vertical-align: middle;
		margin-left: 16rpx;
	}
</style>
