<template>
	<view class="wrapper">
		<view class="main">
			<view class="header">
				<text class="bold">我的空间</text>
				<image src="../../static/information/information.png"></image>
				<image src="../../static/information/add.png"></image>
			</view>
			<dynamicNews v-for="user in users" :key="user.id" :user="user" :isUserInfo="false"></dynamicNews>
		</view>
	</view>
</template>

<script>
	import dynamicNews from '../../components/dynamicNews';
	export default {
		components: {
			dynamicNews
		},
		data() {
			return {
				users: [{
					id: '001',
					title: '进击的可可粉',
					logo: require('../../static/index-icon/user1.png'),
					tag: '#点外卖健康吗',
					img: [],
					texts: ['点外卖当然健康啦'],
					time: '2022年5月22日 下午 16:25',
					zans: [],
					remarks: [{
						name: '张三',
						comment: '不健康但是总比饿死好，嘿嘿!'
					}]
				}, {
					id: '002',
					title: '营养师唐娜',
					logo: require('../../static/index-icon/user2.png'),
					tag: '#蔬果百科',
					img: [],
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
					zans: [{
							userId: '001',
							userName: '张三'
						},
						{
							userId: '002',
							userName: '李四'
						},
						{
							userId: '003',
							userName: '王五'
						},
						{
							userId: '004',
							userName: '马六'
						},
						{
							userId: '005',
							userName: '马大哈'
						}
					],
					remarks: [{
							name: '莉莉',
							comment: '学到了!!!'
						},
						{
							name: '哈利波特',
							comment: 'an apple a day keeps your enermy away.'
						},
						{
							name: '每天不一样',
							comment: '可惜公司附近没有水果的外卖'
						},
					]
				}, {
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
					zans: [{
							userId: '001',
							userName: '张三'
						},
						{
							userId: '002',
							userName: '李四'
						},
						{
							userId: '003',
							userName: '王五'
						},
						{
							userId: '004',
							userName: '马六'
						},
					],
					remarks: [{
							name: '知识就是力量',
							comment: '看起来好有食欲呀！'
						},
						{
							name: '戴安娜',
							comment: '厉害了，给你点个赞！'
						},
					]
				}]
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	/* 头部 */
	.header {
		height: 140rpx;
		position: relative;

		text {
			display: inline-block;
			position: absolute;
			top: 70rpx;
			font-size: 18px;
			color: #707070;
		}

		image {
			position: absolute;
			width: 48rpx;
			height: 48rpx;
			right: 0;
			top: calc(50% - 24rpx);
		}

		image:last-child {
			right: 90rpx;
		}
	}
</style>
