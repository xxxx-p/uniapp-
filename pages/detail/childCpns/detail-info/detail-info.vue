<template>
	<view class='detail-info'>
		<view class='header'>
			<view class='start line'></view>
			<view class='desc'>{{detailInfo.desc}}</view>
			<view class='end line'></view>
		</view>
		<view class='content'>
			<block v-for="(item,index) in detailInfo.detailImage" :key="index">
				<view class='title'>{{item.key}}</view>
				<block v-for="(items,index) in item.list" :key="index">
					<image :src="items" mode='widthFix' />
				</block>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			detailInfo: {
				type: Object
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
	.detail-info {
		border-bottom: 12rpx solid #f2f2f2;
	}

	.header {
		position: relative;
		padding: 10rpx 30rpx;
		font-size: 32rpx;
	}

	.header .line {
		width: 180rpx;
		height: 1px;
		background: #666;
		margin: 30rpx 0;
		position: relative;
	}

	.header .end {
		float: right;
	}

	.header .start::before,
	.header .end::after {
		content: "";
		position: absolute;
		width: 10rpx;
		height: 10rpx;
		background: #333;
	}

	.header .start::before {
		bottom: 0;
	}

	.header .end::after {
		bottom: 0;
		right: 0;
	}

	.content .title {
		margin: 50rpx 0 30rpx 30rpx;
		font-size: 32rpx;
	}

	.content image {
		width: 100%;
	}
</style>
