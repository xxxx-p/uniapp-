<template>
	<view class="cate">
		<UniCate :categories="categories" @selectCat="selectCat"></UniCate>
		<UniSub :subcategories="subcategories" :categoryDetail="categoryDetail"></UniSub>
	</view>
</template>

<script>
	import UniCate from './childCpns/menu/menu'
	import UniSub from './childCpns/content/content'
	import {
		getCategory,
		getSubcategory,
		getCategoryDetail
	} from '../../server/category.js'
	export default {
		data() {
			return {
				categories: [],
				subcategories: [],
				categoryDetail: []
			}
		},
		onLoad() {
			this.getCategoryData()
				.then(res => {
					let categories = res.data.data.category.list
					this.categories = categories
					this.getSubcategoryData(this.categories[0].maitKey)
					this.getCategoryDetailData(this.categories[0].miniWallkey)
				})

		},
		methods: {
			getCategoryData() {
				return getCategory()
			},
			getSubcategoryData(key) {
				getSubcategory(key).then(res => {
					this.subcategories = res.data.data.list
				})
			},
			getCategoryDetailData(key,type='pop'){
				getCategoryDetail(key,type).then(res => {
					this.categoryDetail = res.data
				})
			},
			selectCat(index) {
				this.getSubcategoryData(this.categories[index].maitKey)
				this.getCategoryDetailData(this.categories[index].miniWallkey)
			}
		},
		components: {
			UniCate,
			UniSub
		}
	}
</script>

<style>
	.cate {
		display: flex;
	}
</style>
