<template>
	<view class="wrapper">
		<view class="main">
			<!-- <searchBar /> -->
			<uni-search-bar @confirm="" @input="" bgColor="#fff" radius="17" placeholder="低热量">
				<template v-slot:searchIcon>
					<image class="search-icon" src="../../static/index-icon/sousuo.png" />
				</template>
				<template v-slot:clearIcon>
					<image class="search-icon" src="../../static/index-icon/sousuo.png" />
				</template>
			</uni-search-bar>
			<flexBox />
			<view class="title-wrapper">
				<text class="title bold">热门话题</text>
			</view>
			<scrollTag :tags1="tags1" :tags2="tags2" />
			<dynamicNews v-for="user in users" :key="user.id" :user="user"></dynamicNews>
		</view>
	</view>
</template>

<script>
	import {
		uniSearchBar
	} from '@dcloudio/uni-ui';
	import flexBox from '../../components/flexBox.vue';
	import scrollTag from '../../components/scrollTag.vue';
	import dynamicNews from '../../components/dynamicNews.vue';
	export default {
		components: {
			// searchBar
			uniSearchBar,
			flexBox,
			scrollTag,
			dynamicNews
		},
		data() {
			return {
				tags1: [{
						id: '001',
						title: '#消暑良品推荐',
						color: '#EDFDED'
					},
					{
						id: '002',
						title: '#味精的利弊',
						color: '#FEEDEF'
					},
					{
						id: '003',
						title: '#每日一问',
						color: '#FDE8FC'
					}
				],
				tags2: [{
						id: '004',
						title: '#长期吃素的人',
						color: '#EAFEFD'
					},
					{
						id: '005',
						title: '#辟谷',
						color: '#FCFCD8'
					},
					{
						id: '006',
						title: '#点外卖健康吗',
						color: '#EBE6FD'
					}
				],
				users: [{
					id: '001',
					title: '进击的可可粉',
					logo: require('../../static/index-icon/user1.png'),
					tag: '#点外卖健康吗',
					img: [],
					texts: ['点外卖当然健康啦'],
					time: '2022年5月22日 下午 16:25',
					remarks:[
						{
							name:'张三',
							comment:'不健康但是总比饿死好，嘿嘿!'
						}
					]
				}, {
					id: '002',
					title: '营养师唐娜',
					logo: require('../../static/index-icon/user2.png'),
					tag: '#蔬果百科',
					img:[],
					texts: [
						'每日至少食用400克或五份水果和蔬菜，会降低非',
						'传染性疾病发生风险，并有助于确保每日充分摄入',
						'膳食纤维。',
						'可用来增加水果和蔬菜摄入的方法有：',
						'菜肴总是配有蔬菜；',
						'将新鲜水果和生蔬菜作为零食食用；',
						'食用时令新鲜水果和蔬菜；',
						'食用各类水果和蔬菜。'
					],
					time: '2022年5月22日 上午 8:00',
					remarks:[
						{
							name:'莉莉',
							comment:'学到了!!!'
						},
						{
							name:'哈利波特',
							comment:'an apple a day keeps your enermy away.'
						},
						{
							name:'每天不一样',
							comment:'可惜公司附近没有水果的外卖'
						},
					]
				},{
					id: '003',
					title: '里德尔',
					logo: require('../../static/index-icon/user3.png'),
					tag: '#每日签到',
					imgs: [
						require('../../static/index-icon/qiandao.png'),
						require('../../static/index-icon/salad.png'),
						require('../../static/index-icon/vegetable.png'),
					],
					texts: ['冲冲冲！！'],
					time: '2022年5月21日 下午 21:00',
					remarks:[
						{
							name:'知识就是力量',
							comment:'看起来好有食欲呀！'
						},
						{
							name:'戴安娜',
							comment:'厉害了，给你点个赞！'
						},
					]
				}]
			}
		},
		onLoad() {},
	}
</script>

<style scoped>
	.search-icon {
		width: 40rpx;
		height: 40rpx;
		padding-right: 15rpx;
	}
</style>
