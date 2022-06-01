'use strict';
const db = uniCloud.database()
const table = db.collection('app_boxes2')
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	let appBig = await table.where({
		type:'big'
	}).get()
	//返回数据给客户端
	return {
		code:200,
		msg:'获取大号应用盒子信息成功',
		data: appBig.data[0]
	}
};
