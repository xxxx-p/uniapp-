<template>
	<view class='tab-control'>
		<view :class="index==currentIndex?'active tab-item':'tab-item'" @click="itemClick(index)" v-for="(item,index) in titles"
		 :key="index">
			<text>{{item}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			titles: {
				type: Array,
				value: []
			}
		},
		data() {
			return {
				currentIndex: 0
			}
		},
		methods: {
			itemClick(index) {
				this.currentIndex = index
				this.$emit("tabclick", index)
			}
		}
	}
</script>

<style>
.tab-control {
  display: flex;
  margin-bottom: 16rpx;
}

.tab-item {
  flex: 1;
  text-align: center;
  height: 80rpx;
  line-height: 80rpx;
  font-size: 32rpx;
}

.active {
  color: #ff5777;
}

.tab-item.active text {
  padding: 16rpx 10rpx;
  border-bottom: 6rpx solid #ff5777;
}

</style>
