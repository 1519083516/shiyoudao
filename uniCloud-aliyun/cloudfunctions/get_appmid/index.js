'use strict';
const db = uniCloud.database()
const table = db.collection('app_boxes2')
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	
	let appMid = await table.where({
		type:/^mid/g
	}).get()
	//返回数据给客户端
	return {
		code:200,
		msg:'获取中号应用盒子信息成功',
		data: appMid.data
	}
};
