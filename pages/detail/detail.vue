<template>
	<view class="detail">
		<UniSwiper class='d-swiper' :banner="banner"></UniSwiper>
		<UniBaseInfo :baseInfo="baseInfo"></UniBaseInfo>
		<UniShopInfo :shopInfo="shopInfo"></UniShopInfo>
		<UniDetailInfo :detailInfo="detailInfo"></UniDetailInfo>
		<UniParamInfo :paramInfo="paramInfo"></UniParamInfo>
		<UniCommentInfo :commentInfo="commentInfo"></UniCommentInfo>
		<UniRecommendInfo :recommends="recommends"></UniRecommendInfo>
		<UniGoodsAction @selectshop="selectshop"></UniGoodsAction>
	</view>
</template>

<script>
	import UniSwiper from '../../components/uni-swiper/uni-swiper'
	import UniBaseInfo from './childCpns/base-info/base-info'
	import UniShopInfo from './childCpns/shop-info/shop-info'
	import UniDetailInfo from './childCpns/detail-info/detail-info'
	import UniParamInfo from './childCpns/param-info/param-info'
	import UniCommentInfo from './childCpns/comment-info/comment-info'
	import UniRecommendInfo from './childCpns/recommend-info/recommend-info'
	import UniGoodsAction from '../../components/uni-goodsAction/uni-goodsAction'
	import {mapActions,mapGetters} from 'vuex'
	import {
		getDetail,
		getRecommends,
		ListBaseInfo,
		ShopInfo,
		ParamInfo

	} from '../../server/detail.js'

	export default {
		computed:{
			...mapGetters(['shopcar'])
		},
		data() {
			return {
				id: '',
				banner: [],
				baseInfo: {},
				shopInfo: {},
				detailInfo: {},
				paramInfo: {},
				commentInfo: {},
				recommends: {}
			}
		},
		onLoad: function(option) {
			this.id = option.id
			this.getDetailData(this.id)
			this.getRecommendsData()
		},
		methods: {
			getDetailData(id) {
				getDetail(id).then(res => {
					let data = res.data.result
					this.banner = data.itemInfo.topImages
					this.baseInfo = new ListBaseInfo(data.itemInfo, data.columns, data.shopInfo.services,this.id)
					this.shopInfo = new ShopInfo(data.shopInfo);
					this.detailInfo = data.detailInfo;
					this.paramInfo = new ParamInfo(data.itemParams.info, data.itemParams.rule)
					if (data.rate && data.rate.cRate > 0) {
						this.commentInfo = data.rate.list[0]
					}
				})
			},
			getRecommendsData() {
				getRecommends().then(res => {
					this.recommends = res.data.data.list
				})
			},
			selectshop(){	
				this.actShopCar(this.baseInfo)
			},
			...mapActions(['actShopCar'])
		},
		components: {
			UniSwiper,
			UniBaseInfo,
			UniShopInfo,
			UniDetailInfo,
			UniParamInfo,
			UniCommentInfo,
			UniRecommendInfo,
			UniGoodsAction
		}
	}
</script>

<style>
	.detail {
		height: calc(100% - 120rpx);
		color: #777;
	}

	.d-swiper swiper {
		height: 800rpx;
	}
</style>
