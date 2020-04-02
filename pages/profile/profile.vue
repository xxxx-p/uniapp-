<template>
	<view>
		<UniHeader></UniHeader>
		<UniInfo></UniInfo>
		<UniListView :infos="orderList"></UniListView>
		<UniListView :infos="serviceList"></UniListView>
	</view>
</template>

<script>
	import UniHeader from './childCpns/header/header'
	import UniInfo from './childCpns/info/info'
	import UniListView from './childCpns/list-view/list-view'
	export default {

		data() {
			return {
				orderList: [{
						icon: 'message.png',
						info: '我的消息'
					},
					{
						icon: 'pointer.png',
						info: '积分商城'
					},
					{
						icon: 'vip.png',
						info: '会员卡'
					},
				],
				serviceList: [{
						icon: 'cart.png',
						info: '我的购物车'
					},
					{
						icon: 'app.png',
						info: '下载购物APP'
					},
				]
			}
		},
		methods: {

		},
		components: {
			UniHeader,
			UniInfo,
			UniListView
		}
	}
</script>

<style>
	.profile {
		height: 100%;
	}
</style>
