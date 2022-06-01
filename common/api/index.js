const get_appboxes = (data) => {

	return new Promise((reslove, reject) => {
		uniCloud.callFunction({
			name: 'get_appboxes',
			data,
			success(res) {
				reslove(res.result)
			},
			fail(err) {
				reject(err)
			}
		})
	})
}

const get_tags = (data) => {

	return new Promise((reslove, reject) => {
		uniCloud.callFunction({
			name: 'get_tags',
			data,
			success(res) {
				reslove(res.result)
			},
			fail(err) {
				reject(err)
			}
		})
	})
}

const get_appbig = (data) =>{
	return new Promise((resolve,reject)=>{
		uniCloud.callFunction({
			name: 'get_appbig',
			data,
			success(res) {
				resolve(res.result)
			},
			fail(err) {
				reject(err)
			}
		})
	})
}
const get_appmid = (data) =>{
	return new Promise((resolve,reject)=>{
		uniCloud.callFunction({
			name: 'get_appmid',
			data,
			success(res) {
				resolve(res.result)
			},
			fail(err) {
				reject(err)
			}
		})
	})
}
const get_appnoimg = (data) =>{
	return new Promise((resolve,reject)=>{
		uniCloud.callFunction({
			name: 'get_appnoimg',
			data,
			success(res) {
				resolve(res.result)
			},
			fail(err) {
				reject(err)
			}
		})
	})
}
const get_hotspots = (data)=>{
	return new Promise((resolve,reject)=>{
		uniCloud.callFunction({
			name:'get_hotspots',
			data,
			success(res){
				resolve(res.result)
			},
			fail(err) {
				reject(err)
			}
		})
	})
}
export default {
	get_appboxes,
	get_appbig,
	get_appmid,
	get_appnoimg,
	get_hotspots,
	get_tags
}
