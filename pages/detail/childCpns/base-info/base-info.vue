<template>
	<view class='base-info'>
		<view class='title'>{{baseInfo.title}}</view>
		<view class='price-info'>
			<text class='new-price'>{{baseInfo.newPrice}}</text>
			<text class='old-price'>{{baseInfo.oldPrice}}</text>
			<text class='discount'>{{baseInfo.discount}}</text>
		</view>
		<view class='sell-info'>
			<block v-for="(item,index) in baseInfo.columns" :key="index">
				<view class='sell-item'>{{item}}</view>
			</block>
		</view>
		<view class='service'>
			<block v-for="(item,index) in baseInfo.services" :key="index">
				<!-- 延误必赔是否显示? -->
				<block v-if="index !== 0">
					<view class='service-item'>
						<image class='icon' :src="item.icon" />
						<text class='name'>{{item.name}}</text>
					</view>
				</block>
			</block>
		</view>
	</view>

</template>

<script>
	export default {
		props: {
			baseInfo: {
				type: Object
			}
		},
		data() {
			return {
				index: 0
			}
		},
		methods: {

		}
	}
</script>

<style>
	.base-info {
		padding: 16rpx;
		margin-top: 10rpx;
		border-bottom: 12rpx solid #f2f2f2;
	}

	.title {
		font-size: 32rpx;
	}

	.price-info {
		margin-top: 8rpx;
	}

	.new-price {
		color: #ff5777;
		margin-left: 10rpx;
	}

	.old-price {
		margin-left: 20rpx;
		font-size: 28rpx;
		text-decoration: line-through;
	}

	.discount {
		background: #ff5777;
		color: #fff;
		margin-left: 16rpx;
		padding: 4rpx 6rpx;
		font-size: 24rpx;
		border-radius: 16rpx;
		position: relative;
		bottom: 12rpx;
	}

	.sell-info {
		display: flex;
		justify-content: space-between;
		font-size: 26rpx;
		margin-top: 30rpx;
		padding-bottom: 16rpx;
		border-bottom: 1px solid rgba(200, 200, 200, .6);
	}

	.sell-item {
		/* flex: 1; */
		text-align: center;
	}

	.service {
		display: flex;
		justify-content: space-between;
		/* flex-wrap: wrap; */
		font-size: 24rpx;
		padding: 30rpx 0;
	}

	.service .icon {
		width: 24rpx;
		height: 24rpx;
		position: relative;
		top: 2rpx;
		right: 6rpx;
	}

	.service-item {
		/* flex: 1; */
		text-align: center;
	}
</style>
