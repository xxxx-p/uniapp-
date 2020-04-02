<template>
	<van-goods-action>
		<van-goods-action-icon icon="chat-o" text="客服" />
		<van-goods-action-icon icon="shop-o" text="店铺" />
		<van-goods-action-button text="加入购物车" type="warning" @tap="onClickButton" />
		<van-goods-action-button text="立即购买" @tap="onClickButton" />
	</van-goods-action>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			onClickButton() {
				this.$emit('selectshop')
				uni.showToast({
				    title: '加入购物车成功',
				    duration: 2000
				});
			}

		}
	}
</script>

<style>

</style>
