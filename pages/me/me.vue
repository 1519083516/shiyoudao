<template>
	<view class="wrapper">
		<view class="header">
			<view class="ellipse">
			</view>
			<view class="header-info">
				<view class="logo">
					<image src="../../static/me/logo.png"></image>
				</view>
				<view class="text">
					<view class="huiyuan">
						<text class="title">食有道官方</text>
						<image src="../../static/me/huiyuan@2x.png"></image>
						<text class="block-no">1</text>
					</view>
					<text class="block-yes" style="color: #959595;">ID : 12401220511</text>
					<text class="block-yes"
						style="color: #040303;">关注&nbsp;&nbsp;11&nbsp;&nbsp;&nbsp;粉丝&nbsp;&nbsp;102</text>
				</view>
				<view class="setting">
					<uni-icons custom-prefix="iconfont" type="icon-shezhi" size="32" color="#707070"></uni-icons>
				</view>
			</view>
			<view class="header-bar">
				<uni-icons custom-prefix="iconfont" type="icon-shoucang" size="35" color="#707070"></uni-icons>
				<uni-icons custom-prefix="iconfont" type="icon-wendang" size="30" color="#707070"></uni-icons>
				<uni-icons custom-prefix="iconfont" type="icon-lishi" size="30" color="#707070"></uni-icons>
				<uni-icons type="wallet" size="30" color="#707070"></uni-icons>
			</view>
		</view>
		<view class="main">
			<view class="opts-wrapper radius">
				<view class="opt" v-for="opt in opts" :key="opt.id">
					<uni-icons custom-prefix="iconfont" :type="opt.type" :size="opt.size" color="#CAFF66"></uni-icons>
					<text class="nav-text">{{opt.text}}</text>
				</view>
			</view>
			<view class="list-wrapper radius">
				<view class="item line" v-for="item in list" :key="item.id">
					<text class="nav-text">{{item.title}}</text>
					<uni-icons type="forward" size="18" color="rgba(112,112,112,0.5)"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				opts: [{
						id: '001',
						type: 'icon-Diagnosis-sheet',
						text: '诊断单',
						size: '35'
					},
					{
						id: '002',
						type: 'icon-daocha',
						text: '食谱',
						size: '35'
					},
					{
						id: '003',
						type: 'icon-yiyuan',
						text: '医院挂号',
						size: '40'
					},
					{
						id: '004',
						type: 'icon-jiangzhang',
						text: '荣誉墙',
						size: '40'
					},
					{
						id: '005',
						type: 'icon-shuben',
						text: '营养百科',
						size: '35'
					},
					{
						id: '006',
						type: 'icon-gouwuche',
						text: '购物车',
						size: '40'
					},
					{
						id: '007',
						type: 'icon-jianshenfang',
						text: '运动健身',
						size: '40'
					},
					{
						id: '008',
						type: 'icon-tijian',
						text: '体检预约',
						size: '40'
					},
					{
						id: '009',
						type: 'icon-jiangzuoguanli',
						text: '专家讲座',
						size: '40'
					},
					{
						id: '010',
						type: 'icon-mianfeizixun',
						text: '免费咨询',
						size: '40'
					},
				],
				list: [{
						id: '001',
						title: '数据报告'
					},
					{
						id: '002',
						title: '健身方案'
					},
					{
						id: '003',
						title: '饮食方案'
					},
					{
						id: '004',
						title: '上周小结'
					},
					{
						id: '005',
						title: '联系客服'
					}
				]
			}
		},
		methods: {}
	}
</script>

<style scoped lang="scss">
	.wrapper {

		/* 头部 */
		.header {
			height: 360rpx;
			position: relative;
			width: 100%;


			/* 椭圆背景 */
			.ellipse {
				position: absolute;
				height: 500rpx;
				width: 240%;
				/* 居中 */
				left: calc(50% - 120%);
				top: -140rpx;
				background-color: #CAFF66;
				border-radius: 50%;
			}

			/* 头部信息 */
			.header-info {
				position: relative;
				height: 220rpx;

				.logo {
					width: 136rpx;
					height: 136rpx;
					position: absolute;
					top: 52rpx;
					left: 48rpx;

					image {
						width: 136rpx;
						height: 136rpx;
					}
				}

				.text {
					position: relative;
					left: 220rpx;
					top: 64rpx;

					.huiyuan {
						position: relative;

						.title {
							color: #080808;
							font-size: 20px;
							margin-right: 10rpx;
						}

						image {
							width: 28rpx;
							height: 28rpx;
						}

						.block-no {
							font-size: 12px;
							color: #FFC61C;
							position: absolute;
							left: 236rpx;
							bottom: 6rpx;
						}
					}

					.block-yes {
						display: block;
						font-size: 13px;
						margin-top: 6rpx;
					}

				}

				.setting {
					position: absolute;
					right: 36rpx;
					top: 68rpx;
				}

			}

			/* 头部导航 */
			.header-bar {
				position: absolute;
				left: calc(50% - 290rpx);
				top: 220rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 580rpx;
				height: 80rpx;
			}
		}

		.main {

			/* 功能选择容器 */
			.opts-wrapper {
				margin-top: 30rpx;
				margin-bottom: 30rpx;
				background-color: #fff;
				height: 272rpx;
				display: flex;
				flex-flow: row wrap;
				justify-content: space-around;
				align-content: space-around;

				.opt {
					width: 118rpx;
					height: 118rpx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					text-align: center;

					text {
						font-size: 12px;
						display: inline-block;
						margin-top: 6rpx;
					}
				}
			}

			/* 列表容器 */
			.list-wrapper {
				padding: 0 40rpx;
				background-color: #fff;

				.item {
					padding-left: 10rpx;
					padding-top: 10rpx;
					height: 92rpx;
					font-size: 15px;
					display: flex;
					justify-content: space-between;
					align-items: center;
				}
			}
		}
	}
</style>
