<template>
	<view class='info'>
		<view class='info-money info-item'>
			<view>
				<text class='count'>0.00</text>
				<text>元</text>
			</view>
			<view>我的余额</view>
		</view>
		<view class='info-discount info-item'>
			<view>
				<text class='count'>0</text>
				<text>个</text>
			</view>
			<view>我的优惠</view>
		</view>
		<view class='info-pointer info-item'>
			<view>
				<text class='count'>0</text>
				<text>分</text>
			</view>
			<view>我的积分</view>
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

		}
	}
</script>

<style>
.info {
  display: flex;
  font-size: 28rpx;
  text-align: center;
  justify-content: space-between;
  background: #f8f8f8;
}

.info-item {
  width: 33%;
  background: #fff;
  padding: 50rpx 0;
}

.count {
  color: #ff5f3e;
  font-size: 40rpx;
  font-weight: 700;
  line-height: 1.5;
}

</style>
