<template>
	<view class="goods">
		<block v-for="(item,index) in list" :key="index">
			<view class='goods-item' @tap='itemClick(item.iid)'>
				<image class='image' :src="item.image || item.img || item.show.img" mode='widthFix' />
				<view class='desc-info'>
					<view class='title'>{{item.title}}</view>
					<view class='info'>
						<text class='price'>¥{{item.price}}</text>
						<image class='icon' src="/static/images/common/favor.png" />
						<text class='cfav'>{{item.cfav}}</text>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				value: []
			}
		},
		data() {
			return {

			}
		},
		methods: {
			itemClick(id) {
				this.$emit("selectShop",id)
			}
		}
	}
</script>

<style>
	.goods {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 8rpx;
	}

	.goods-item {
		/* width: 200rpx; */
		position: relative;
		width: 48%;
		margin-top: 20rpx;
		text-align: center;
		color: #333;
		padding-bottom: 85rpx;
	}

	.image {
		width: 100%;
		border-radius: 10rpx;
	}

	.desc-info {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 5rpx;
	}

	.title {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 28rpx;
	}

	.info {
		font-size: 26rpx;
	}

	.info .price {
		color: #ff5777;
		/* padding-right: 10rpx; */
	}

	.info .icon {
		width: 30rpx;
		height: 30rpx;
		padding: 0 6rpx 0 10rpx;
		position: relative;
		top: 4rpx;
	}

	.cfav {
		/* padding-left: 10rpx; */
		position: relative;
	}
</style>
