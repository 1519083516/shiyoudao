'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	let tags =await db.collection('tags').get()
	//返回数据给客户端
	return {
		code:200,
		msg:'获取标签数据请求成功',
		data:tags.data
	}
};
