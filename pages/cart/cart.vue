<template>
	<view>
		<scroll-view scroll-y>
			<view class="shop" v-for="(item,index) in shopcar" :key='index' @tap="selectShopItem(index)">
				<uni-icons :type="item.checked?'checkbox-filled':'circle'" size="25" :color="item.checked?'blue':'pink'" @tap.stop="selectIcon(index)"></uni-icons>
				<view class="item-img">
					<image :src="item.imageURL"></image>
				</view>
				<view class="item-right">
					<text class="title">{{item.title}}</text>
					<text class="desc">{{item.title}}</text>
					<view class="item-right-bottom">
						<text class="text-price">{{item.price}}</text>
						<text class="text-count">x{{item.count}}</text>
					</view>
				</view>
			</view>
		</scroll-view>
		<van-submit-bar :price="price " button-text="提交订单" @tap="onSubmit">
			<uni-icons :type="selectAll?'checkbox-filled':'circle'" size="25" :color="selectAll?'blue':'pink'" @tap="onChange"></uni-icons>
			<text class="icon-text">全选</text>
		</van-submit-bar>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import {
		mapGetters,
		mapMutations
	} from 'vuex'
	export default {
		computed: {
			...mapGetters(['shopcar', 'selectShop']),
			price() {
				let price = 0;
				this.selectShop.forEach(item => {
					price += Number(item.price * item.count)
				})
				this.SET_PRICE(price)
				return price * 100
			}
		},
		watch: {
			shopcar: {
				handler() {
					let sign = true
					let selectshop = []
					this.shopcar.forEach((item => {
						if (item.checked == false) {
							this.selectAll = false
							sign = false
							return
						} else {
							selectshop.push(item)
						}
					}))
					this.SET_SELECTSHOP(selectshop)
					if (sign) {
						this.selectAll = true
					}
				},
				deep: true
			},

		},
		data() {
			return {
				selectAll: false
			}
		},
		methods: {
			onChange() {
				let sign = false
				let list = this.shopcar
				list.forEach((item => {
					if (item.checked == false) {
						sign = true
						return
					}
				}))
				if (sign) {
					list.forEach((item => {
						item.checked = true
					}))
				} else {
					list.forEach((item => {
						item.checked = false
					}))
				}
				this.SET_SHOPCAR(list)
				this.selectAll = !this.selectAll
			},
			selectIcon(index) {
				let list = this.shopcar
				this.$set(list[index], 'checked', !list[index].checked)
				this.SET_SHOPCAR(list)
			},
			selectShopItem(index) {
				uni.navigateTo({
					url: `/pages/detail/detail?id=${this.shopcar[index].id}`
				})
			},
			onSubmit() {
				if (!this.selectShop.length) {
					uni.showToast({
						icon: 'none',
						title: '购物车为空！',
						duration: 2000
					});
				} else {
					uni.showToast({
						icon: 'none',
						title: '暂未实现！',
						duration: 2000
					});
				}
			},
			...mapMutations({
				'SET_SHOPCAR': 'SET_SHOPCAR',
				'SET_PRICE': 'SET_PRICE',
				'SET_SELECTSHOP': 'SET_SELECTSHOP'
			})
		},
		components: {
			uniIcons
		}
	}
</script>

<style>
	.item-img {
		width: 200rpx;

	}

	scroll-view .shop:last-child {
		margin-bottom: 50rpx;
	}

	.item-img image {
		width: 180rpx;
		height: 240rpx;
		border-radius: 16rpx;

	}

	.title {
		font-size: 34rpx;
		font-weight: 700;
		color: #333;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.desc {
		font-size: 28rpx;
		margin-top: 20rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

	}

	.item-right {
		width: 300rpx;
		flex: 1;
	}

	.item-right-bottom {
		display: flex;
		margin-top: 40rpx;
		justify-content: space-between;
	}

	.shop {
		display: flex;
		padding: 20rpx;
		align-items: center;
		border: 1px solid #eee;
	}

	.item-right {
		display: flex;
		flex-direction: column;
	}

	.item-right-bottom {
		display: flex;
		margin-top: 40rpx;
		justify-content: space-between;

	}

	.text-price {
		color: #ff5777;
		font-size: 40rpx;

	}

	.cart {
		height: 100%;
	}

	.cart-list {
		height: calc(100% - 88rpx);
	}

	.icon-text {
		margin-left: 20rpx;
	}
</style>
