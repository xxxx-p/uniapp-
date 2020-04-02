class setshoplist {
	constructor(carlist) {
		this.id = carlist.id
		this.imageURL = carlist.imageURL
		this.title = carlist.title
		this.desc = carlist.desc
		this.price = carlist.realPrice
		this.count = carlist.count
		this.checked = false
	}
}

export const actShopCar = function({
	commit,
	state
}, carlist) {
	let shoplist = state.shopcar
	let sign = false
	let list = new setshoplist(carlist)
	if (!shoplist.length) {
		list.count++
		shoplist.push(list)
	} else {
		shoplist.forEach(item => {
			if (item.id == list.id) {
				item.count++
				sign = true
				return
			}
		})
		if (!sign) {
			list.count++
			shoplist.push(list)
		}
	}

	commit('SET_SHOPCAR', shoplist)
}
