'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	let appboxes = await db.collection('app-boxes').get()
	//返回数据给客户端
	return {
		code:200,
		msg:'获取应用盒子数据请求成功',
		data:appboxes.data
	}
};
