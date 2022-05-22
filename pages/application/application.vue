<template>
	<view class="wrapper">
		<view class="main">
			<uni-search-bar @confirm="" @input="" bgColor="#fff" radius="17" placeholder="我的数据">
				<template v-slot:searchIcon>
					<image class="search-icon" src="../../static/index-icon/sousuo.png" />
				</template>
				<template v-slot:clearIcon>
					<image class="search-icon" src="../../static/index-icon/sousuo.png" />
				</template>
			</uni-search-bar>
			<view class="app-wrapper">
				<view class="app-big radius">
					<image src="../../static/application/resourse.png"></image>
					<text class="nav-text">我的免疫系统分析</text>
				</view>
				<view class="app-mid">
					<view class="app radius">
						<image src="../../static/application/soup.png"></image>
						<text class="nav-text">今日菜单</text>
					</view>
					<view class="app radius">
						<image src="../../static/application/consult.png"></image>
						<text class="nav-text">专家咨询</text>
					</view>
					<view class="app radius">
						<image src="../../static/application/check.png"></image>
						<text class="nav-text">免疫检测</text>
					</view>
					<view class="app radius">
						<image src="../../static/application/report.png"></image>
						<text class="nav-text">我的报告</text>
					</view>
					<view class="app radius">
						<image src="../../static/application/shop.png"></image>
						<text class="nav-text">食有商城</text>
					</view>
					<view class="app radius">
						<text class="app-text nav-text">更多工具</text>
						<uni-icons type="forward" size="22" color="#515151"></uni-icons>
					</view>
				</view>
			</view>
			<view class="title-wrapper">
				<text class="title bold">大家都在看</text>
			</view>
			<view class="others">
				<view class="other radius">
					<image class="img-top" src="../../static/application/vegetable.png"></image>
					<text class="text-bottom nav-text">蔬果0元购</text>
				</view>
				<view class="other radius">
					<image class="img-left1" src="../../static/application/scale.png"></image>
					<text class="text-right1 nav-text">签到领体脂称</text>
				</view>
				<view class="other radius">
					<image class="img-left2" src="../../static/application/speech.png"></image>
					<text class="text-right2 nav-text">专家讲座</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		uniSearchBar
	} from '@dcloudio/uni-ui';
	export default {
		components: {
			uniSearchBar
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.search-icon {
		width: 40rpx;
		height: 40rpx;
		padding-right: 15rpx;
	}

	.app-big {
		height: 416rpx;
		vertical-align: middle;
		text-align: center;
		margin-top: 16rpx;

		image {
			width: 522rpx;
			height: 282rpx;
			padding-top: 66rpx;
			margin-bottom: 10rpx;
		}

		text {
			display: block;
			font-size: 13px;
		}
	}

	.app-mid {
		display: flex;
		flex-flow: row wrap;
		margin-top: 16rpx;
		justify-content: space-between;

		.app {
			width: 320rpx;
			height: 230rpx;
			background-color: #fff;
			vertical-align: middle;
			text-align: center;
			margin-bottom: 18rpx;
			padding-bottom: 5rpx;

			image {
				width: 320rpx;
				height: 176rpx;
			}

			text {
				font-size: 13px;
			}

			.app-text {
				font-size: 20px;
				padding-top: calc(50% - 65rpx);
				display: inline-block;
			}
		}
	}

	/* 大家都在看-其他 */
	.other {
		height: 208rpx;
		position: relative;
		margin-bottom: 16rpx;

		text {
			position: absolute;
			font-size: 25px;
		}

		image {
			position: absolute;
		}

		.img-top {
			top: 0px;
			width: 656rpx;
			height: 176rpx;
		}

		.img-left1 {
			left: 58rpx;
			width: 206rpx;
			height: 206rpx;
		}

		.img-left2 {
			left: 58rpx;
			width: 276rpx;
			height: 206rpx;
		}

		.text-bottom {
			top: 140rpx;
			left: 210rpx;
		}

		.text-right1 {
			left: 280rpx;
			top: 74rpx;
		}

		.text-right2 {
			left: 388rpx;
			top: 74rpx;
		}
	}
</style>
