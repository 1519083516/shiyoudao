<template>
	<view class="wrapper">
		<view class="main">
			<searchBar @confirm="addHistory" @input="change" :isSearch="true" :focus="true" bgColor="#fff"
				radius="17" placeholder="低热量">
			</searchBar>
		</view>

		<view v-if="is_history" class="history main">
			<Title text="历史搜索">
				<template v-slot:other>
					<uni-icons @click="clear" size="20" type="trash"></uni-icons>
				</template>
			</Title>
			<view v-if="historyItems.length>0" class="history-items">
				<view class="history-item radius" @click="openHistory(historyItem)" :key="index"
					v-for="(historyItem,index) in historyItems">
					{{historyItem}}
				</view>
				<view class="history-item radius" @click="showMore">
					<uni-icons type="bottom" color="#959595"></uni-icons>
				</view>
			</view>
			<view v-else class="tip-text">
				无搜索历史记录
			</view>
		</view>
		<list-scroll v-else class="list-scroll">
			<list-card mode="app" v-for="item in 2"></list-card>
			<list-card mode="base" v-for="item in 15"></list-card>
		</list-scroll>
	</view>
</template>

<script>
	// import {mapState} from 'vuex'
	import searchBar from '../../components/searchBar.vue'
	import listScroll from '../../components/list-scroll.vue'
	import listCard from '../../components/list-card.vue'
	import Title from '../../components/title.vue'
	export default {
		components: {
			searchBar,
			Title,
			listCard,
			listScroll
		},
		data() {
			return {
				is_history: true,
				searchList: [],
				mark: false,
				loading: false,
				historyItems: []
			}
		},
		computed: {
			// 扩展符
			// ...mapState(['historyItems'])
		},
		onLoad() {
			// this.getSearch()
		},
		methods: {
			clear() {
				// this.$refs["Confirm"].open({
				// 	title:'提示',
				// 	content:'确定删除所有历史搜索记录吗？',
				// 	callback:(action)=>{
				// 		console.log(action,'action');
				// 		if(action=='submit'){
				// 			console.log('点击了确定');
				// 			this.$store.dispatch('clear_history')
				// 		}else{
				// 			console.log('点击了取消');
				// 		}
				// 	}
				// })	
			},
			change(value) {
				if(value){
					this.is_history = false
				}else{
					this.is_history = true
				}
				
				// 搜索为空则不展示
				// if(!value){
				// 	clearTimeout(this.timer)
				// 	this.mark = false
				// 	this.getSearch(value)
				// 	return
				// }
				// // 做标记
				// if(!this.mark){
				// 	this.mark = true
				// 	this.timer = setTimeout(()=>{
				// 		this.mark = false
				// 		this.getSearch(value)
				// 	},1000)
				// }
			},
			addHistory(value) {
				this.historyItems.unshift(value);
				console.log('添加成功')
			},
			getSearch(value) {
				// if(!value){
				// 	this.searchList = []
				// 	this.is_history = true
				// 	return
				// }
				// this.is_history = false
				// this.$api.get_search({
				// 	value:'value',
				// }).then(res => {
				// 	const {data} = res
				// 	this.searchList = data
				// })
			},
			setHistory() {
				// this.$store.dispatch('set_history',{
				// 	name: this.value
				// })
			},

			openHistory(item) {
				// 先获取搜索词
				// this.value = item.name
				// 进行搜索
				// this.getSearch(this.value)
			}
		}
	}
</script>

<style>
	.title-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.history-items {
		display: flex;
		flex-flow: row wrap;
		height: 130rpx;
		overflow: hidden;
	}

	.history-item {
		white-space: nowrap;
		overflow: hidden;
		color: #959595;
		height: 50rpx;
		font-size: 14px;
		line-height: 50rpx;
		margin-right: 16rpx;
		margin-bottom: 16rpx;
		padding: 0 16rpx;
		text-overflow: ellipsis;
	}

	.tip-text {
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		color: #959595;
		font-size: 14px;
	}
</style>
