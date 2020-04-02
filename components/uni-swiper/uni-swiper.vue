<template>
	<view>
		<swiper class="swiper" indicator-dots='true' indicator-active-color='#ff5777' circular>
			<swiper-item v-for="(item,index) in banner" :key="index">
				<image class="swiper-image" :src="item" mode='widthFix' />
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: {
			banner: {
				type: Array,
				value: []
			}
		},
		methods: {

		},
	
	}
</script>

<style>
	.swiper {
		height: 360rpx;
	}

	.swiper-image {
		width: 100%;
	}
</style>
