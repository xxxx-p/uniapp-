<template>
	<view class='param-info'>
		<!-- 1.尺寸相关 -->
		<view class='size'>
			<block v-for="(item,index) in paramInfo.sizes" :key="index">
				<view class='size-table'>
					<block v-for="(items,indexs) in item" :key="indexs">
						<view class='size-row row'>
							<block v-for="(itemss,indexss) in items" :key="indexss">
								<view class='size-item'>{{itemss}}</view>
							</block>
						</view>
					</block>
				</view>
			</block>
		</view>

		<!-- 2.信息相关 -->
		<view class='info'>
			<block v-for="(item,index) in paramInfo.infos" :key="index">
				<view class="info-row row">
					<view class='key'>{{item.key}}</view>
					<view class='value'>{{item.value}}</view>
				</view>
			</block>
		</view>
	</view>

</template>

<script>
	export default {
		props: {
			paramInfo: {
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
	.param-info {
		padding: 40rpx 30rpx;
		font-size: 30rpx;
		border-bottom: 12rpx solid #f2f2f2;
	}

	.row {
		display: flex;
		height: 84rpx;
		line-height: 84rpx;
		border-bottom: 1px solid #f2f2f2;
	}

	.size-item {
		flex: 1;
		margin-right: 42rpx;
	}

	.info-row {
		display: flex;
	}

	.info-row .key {
		width: 160rpx;
	}

	.info-row .value {
		flex: 1;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		color: #f55777;
	}
</style>
