<template>
	<view class="header">
		<view class="left">
			<view class="logo">
				<image :src="user.logo"></image>
			</view>
			<view class="user-name  highlight">
				{{user.title}}
			</view>
		</view>
		<view class="btn" :class="changeClass" @click="guanzhu">{{changeText}}</view>
	</view>
</template>

<script>
	export default {
		name: "userInfo",
		props: {
			user: {
				type: Object
			}
		},
		data() {
			return {
				changeClass: 'concern-btn',
				changeText: '关注'
			};
		},
		methods: {
			guanzhu() {
				this.changeText = '已关注';
				this.changeClass = 'concern-btn-fill';
			}
		}
	}
</script>

<style lang="scss" scoped>
	/* 头部 */
	.header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		height: 70rpx;
		line-height: 70rpx;
		overflow: hidden;

		.left {
			display: flex;
			flex-direction: row;
			/* 用户头像 */
			.logo {
				width: 70rpx;
				height: 70rpx;
				margin-right: 14rpx;

				image {
					width: 70rpx;
					height: 70rpx;
				}
			}

			/* 用户名 */
			.user-name {
				font-size: 15px;
			}
		}

		/* 关注按钮 */
		.btn{
			text-align: center;
			color: #fff;
			width: 116rpx;
			height: 44rpx;
			line-height: 44rpx;
			font-size: 15px;
			border-radius: 22rpx;
		}
		.concern-btn {
			background-color: #CAFF66;
		}

		/* 已关注按钮 */
		.concern-btn-fill {
			background-color: #3DA800;
		}
	}
</style>
