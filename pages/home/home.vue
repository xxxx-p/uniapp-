<template>
	<view>
		<view v-show='showTabControl'>
			<UniTab class='tab-control-temp' :titles="titles" @tabclick="tabClick"></UniTab>
		</view>
		<UniSwiper :banner="banner"></UniSwiper>
		<UniRecommend :recommend="recommend"></UniRecommend>
		<UniFeature></UniFeature>
		<UniTab @tabclick="tabClick" :titles="titles" id="w-tab"></UniTab>
		<UniList @selectShop="selectShop" :list="list[currentType].list"></UniList>
		<UniTopback v-if="topBack" @tap="selectTop"></UniTopback>
	</view>
</template>

<script>
	import UniSwiper from '../../components/uni-swiper/uni-swiper'
	import UniRecommend from './childCpns/recommend/recommend'
	import UniFeature from './childCpns/feature/feature'
	import UniTab from '../../components/uni-tab/uni-tab'
	import UniList from '../../components/uni-list/uni-list'
	import UniTopback from '../../components/uni-topback/uni-topback'
	import {
		POP,
		SELL,
		NEW
	} from '../../common/const'
	import {
		Getmultidata,
		GetData
	} from '../../server/home'
	export default {
		data() {
			return {
				banner: [],
				recommend: [],
				titles: ["流行", "新款", "精选"],
				list: {
					[POP]: {
						page: 1,
						list: []
					},
					[NEW]: {
						page: 1,
						list: []
					},
					[SELL]: {
						page: 1,
						list: []
					},
				},
				currentType: 'pop',
				topBack: false,
				showTabControl: false,
				top: 0
			}
		},
		onLoad() {
			this.Getbanner()
			this.Getlist(POP)
			this.Getlist(NEW)
			this.Getlist(SELL)
		},
		onReachBottom() {
			this.Getlist(this.currentType)
		},
		onReady() {
			this.tabTop()
		},
		onPageScroll(options) {
			this.istopBack(options)
			this.isshowTabControl(options)
		},
		methods: {
			Getbanner() {
				Getmultidata().then(res => {
					let banner = res.data.data.banner.list.map(item => {
						return item.image
					})
					let recommend = res.data.data.recommend.list
					this.banner = banner
					this.recommend = recommend
				})
			},
			Getlist(type) {
				let page = this.list[type].page
				GetData({
					type,
					page
				}).then(res => {
					let data = res.data.data.list
					let lists = this.list
					lists[type].list.push(...data)
					lists[type].page += 1
					this.list = lists
				})
			},
			tabClick(index) {
				this.currentType = Object.keys(this.list)[index]
			},
			selectTop() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				})
			},
			istopBack(options) {
				if (options.scrollTop > 1300) {
					this.topBack = true
				} else {
					this.topBack = false
				}
			},
			isshowTabControl(options) {
				let show = (options.scrollTop > this.top)
				if (!show == this.showTabControl) {
					this.showTabControl = show
				}
			},
			tabTop() {
				const query = uni.createSelectorQuery()
				query.select('#w-tab').boundingClientRect()
				query.exec((res) => {
					this.top = res[0].top
				})
			},
			selectShop(id){
				uni.navigateTo({url:`/pages/detail/detail?id=${id}`})
			}
		},
		components: {
			UniSwiper,
			UniRecommend,
			UniFeature,
			UniTab,
			UniList,
			UniTopback
		}
	}
</script>

<style>
	.home {
		height: 100%;
	}

	.content {
		height: 100%;
	}

	.tab-control-temp {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 9;
		background: #fff;
	}
</style>
