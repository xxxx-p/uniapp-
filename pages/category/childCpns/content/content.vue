<template>
	<scroll-view class='content' scroll-y>
		<view class='subcategory'>
			<view class='item' v-for="(item,index) in subcategories" :key="index">
				<image :src="item.image" mode='widthFix' />
				<view>{{item.title}}</view>
			</view>
		</view>
		<view class='detail'>
			<UniList @selectShop="selectShop" :list="categoryDetail"></UniList>
		</view>
	</scroll-view>
</template>

<script>
	import UniList from '../../../../components/uni-list/uni-list'
	export default {
		props: {
			subcategories: {
				type: Array,
				value: []
			},
			categoryDetail: {
				type: Array,
				value: []
			}
		},
		data() {
			return {

			}
		},
		methods: {
			selectShop(id) {
				uni.navigateTo({
					url: `/pages/detail/detail?id=${id}`
				})
			}
		},
		components: {
			UniList
		}
	}
</script>

<style>
	.content {
		height: 100vh;
		width: 75vw;
	}

	.subcategory {
		display: flex;
		flex-wrap: wrap;
		padding: 20rpx;
		margin-top: 30rpx;
	}

	.subcategory .item {
		width: 33.33%;
		text-align: center;
	}

	.subcategory .item image {
		width: 80%;
	}

	.subcategory .item view {
		font-size: 28rpx;
		margin: 30rpx 0;
	}

	.detail {
		width: 100%;
	}
</style>
