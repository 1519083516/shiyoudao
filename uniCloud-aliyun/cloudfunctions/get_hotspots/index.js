'use strict';
const db = uniCloud.database();
const table = db.collection('hot-spots');
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	let hotSpots =await table.get()
	//返回数据给客户端
	return {
		code:200,
		msg:'热点已成功获取',
		data:hotSpots.data
	}
};
