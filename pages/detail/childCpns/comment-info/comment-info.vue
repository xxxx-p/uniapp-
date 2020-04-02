<template>
	<view class='comment-info'>
		<view class='header'>
			<view>用户评价</view>
			<view>更多 >></view>
		</view>
		<view class='user'>
			<image :src="commentInfo.user.avatar" />
			<text>{{commentInfo.user.uname}}</text>
		</view>
		<view class='comment'>
			{{commentInfo.content}}
		</view>
		<view class='other-info'>
			<view class='time'>{{commentInfo.created}}</view>
			<view class='style'>{{commentInfo.style}}</view>
		</view>
		<view class='picture'>
			<block v-for="(item,index) in commentInfo.images" :key="index">
				<image :src="item" mode="widthFix" />
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			commentInfo: {
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
	.comment-info {
		padding: 50rpx 30rpx;
		border-bottom: 12rpx solid #f2f2f2;
	}

	.header {
		display: flex;
		justify-content: space-between;
		padding-bottom: 30rpx;
		font-size: 32rpx;
		border-bottom: 1px solid #eee;
	}

	.user {
		margin: 30rpx 0;
	}

	.user image {
		width: 84rpx;
		height: 84rpx;
		vertical-align: middle;
		border-radius: 42rpx;
	}

	.user text {
		vertical-align: middle;
		margin-left: 16rpx;
		font-size: 32rpx;
		color: #666;
	}

	.comment {
		font-size: 28rpx;
		text-indent: 1.5em;
		line-height: 1.5;
	}

	.other-info {
		display: flex;
		font-size: 24rpx;
		margin-top: 20rpx;
		color: #888;
	}

	.other-info .time {
		margin-right: 10rpx;
	}

	.picture {
		display: flex;
		justify-content: space-between;
		margin-top: 20rpx;
	}

	.picture image {
		max-width: 30%;
	}
</style>
