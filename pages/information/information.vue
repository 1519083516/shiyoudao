<template>
	<view class="wrapper">
		<view class="main">
			<view class="header">
				<text class="bold title">消息通知</text>
				<image src="../../static/information/add.png"></image>
				<image src="../../static/information/search.png"></image>
			</view>
			<view class="content">
				<view class="new-infos radius" v-for="newInfo in newInfos">
					<view class="logo">
						<image :src="newInfo.logo"></image>
					</view>
					<view class="text-num">
						<view class="text">
							<text class="normal">{{newInfo.text}}</text>
						</view>
						<view class="num">
							{{newInfo.num}}
						</view>
					</view>
					<view class="time">
						<text class="time-text">{{newInfo.time}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newInfos: [{
						id: '001',
						logo: require('../../static/information/friend1.png'),
						text: '欢迎来到食有道!',
						time: '12:28',
						num: '1'
					},
					{
						id: '002',
						logo: require('../../static/information/friend2.png'),
						text: '不饱和脂肪酸是保护我们人体健康的，而且不饱和脂肪酸对心脑血管有很好的保护作用，植物油里含不饱和脂肪酸较多，胆固醇含量较低，可以适当选择植物油，少吃动物油和内脏。低盐、低脂、少油、低糖的饮食起到保护血管内膜的作用。',
						time: '12:28',
						num: '4'
					},
					{
						id: '003',
						logo: require('../../static/information/friend3.png'),
						text: '所以我最近可能不会吃虾了',
						time: '11:56',
						num: '2'
					},
					{
						id: '004',
						logo: require('../../static/information/friend4.png'),
						text: '你好，需要什么帮助吗？',
						time: '11:33',
						num: '1'
					}
				]
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

	/* 内容 */
	.new-infos {
		height: 144rpx;
		width: 100%;
		margin-bottom: 12rpx;
		position: relative;

		.logo {
			width: 112rpx;
			height: 112rpx;
			position: absolute;
			left: 16rpx;
			top: 16rpx;

			image {
				width: 112rpx;
				height: 112rpx;
			}
		}

		.text-num {
			width: 430rpx;
			position: absolute;
			height: 48rpx;
			top: 48rpx;
			left: 176rpx;

			.text {
				font-size: 15px;
				width: 400rpx;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}

			.num {
				background-color: #F63131;
				width: 30rpx;
				height: 30rpx;
				line-height: 30rpx;
				text-align: center;
				position: absolute;
				right: 0rpx;
				top: 10rpx;
				color: #fff;
				border-radius: 15rpx;
				font-size: 9px;
			}
		}

		.time {
			font-size: 9px;
			width: 48rpx;
			height: 18rpx;
			position: absolute;
			right: 24rpx;
			top: 8rpx;
		}
	}
</style>
