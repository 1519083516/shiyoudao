import $http from '../http.js'

export const get_label = (data) => {
	return $http({
		url:'get_lable',
		data
	})
}

export const get_list = (data) => {
	return $http({
		url:'get_list',
		data
	})
}

// update_like是函数名，和cloudfunctions里面的文件夹的名字要保持一致
export const update_like = (date) = > {
	return $http({
		url:'update_like',
		data
	})
}

// api注册后，才可以调用
export const get_search = (date) = > {
	return $http({
		url:'get_search',
		data
	})
}