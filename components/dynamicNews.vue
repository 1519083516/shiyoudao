<template>
	<view class="news-wrapper radius">
		<view class="header">
			<view class="logo">
				<image :src="user.logo"></image>
			</view>
			<view class="user-name  highlight">
				{{user.title}}
			</view>
			<view :class="changeClass" @click="guanzhu">{{changeText}}</view>
		</view>
		<view class="content">
			<view class="text-content" v-show="user.texts">
				<text class="normal" v-for="text in user.texts">{{text}}</text>
			</view>
			<view class="img-content" v-show="user.imgs">
				<view class="img-box" v-for="img in user.imgs">
					<image :src="img"></image>
				</view>
			</view>
			<view class="tag-content">
				<text class="highlight">{{user.tag}}</text>
			</view>
		</view>
		<view class="footer clearfix">
			<view class="time time-text">
				{{user.time}}
			</view>
			<view class="interact">
				<view class="icon">
					<uni-icons type="hand-up-filled" size="22" :color="changeColor" @click="dianzan"></uni-icons>
				</view>
				<view class="icon middle">
					<uni-icons type="chatbubble-filled" size="22" color="#707070"></uni-icons>
				</view>
				<view class="icon">
					<uni-icons type="redo-filled" size="22" color="#707070"></uni-icons>
				</view>
			</view>
		</view>
		<view class="remarks-wrapper">
			<view class="zan highlight line">
				<uni-icons class="interval" type="hand-up-filled" size="18" color="#3DA800" @click="dianzan">
				</uni-icons>
				<text>张三，李四，王五</text>
			</view>
			<view class="remark" v-for="remark in user.remarks">
				<text class="highlight interval">{{remark.name}}:</text><text class="normal">{{remark.comment}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "dynamicNews",
		data() {
			return {
				changeClass: 'concern-btn',
				changeText: '关注',
				changeColor: '#707070'
			};
		},
		props: {
			user: {
				type: Object
			}
		},
		methods: {
			guanzhu() {
				this.changeText = '已关注';
				this.changeClass = 'concern-btn-fill';
			},
			dianzan() {
				this.changeColor = '#3DA800';
			}
		}
	}
</script>

<style lang="scss" scoped>
	/* 动态容器 */
	.news-wrapper {
		padding: 34rpx 30rpx 16rpx 30rpx;
		margin-bottom: 16rpx;

		/* 头部 */
		.header {
			position: relative;
			height: 70rpx;
			line-height: 70rpx;
			width: 100%;

			/* 用户头像 */
			.logo {
				width: 70rpx;
				height: 70rpx;
				float: left;
				margin-right: 16rpx;

				image {
					width: 70rpx;
					height: 70rpx;
				}
			}

			/* 用户名 */
			.header .user-name {
				font-size: 15px;
				float: left;
			}

			/* 关注按钮 */
			.concern-btn {
				color: #fff;
				position: absolute;
				right: 0rpx;
				/* 使元素垂直居中*/
				top: calc(50% - 22rpx);
				width: 116rpx;
				height: 44rpx;
				line-height: 44rpx;
				text-align: center;
				font-size: 15px;
				border-radius: 22rpx;
				background-color: #CAFF66;
			}

			/* 已关注按钮 */
			.concern-btn-fill {
				color: #fff;
				position: absolute;
				right: 0rpx;
				/* 使元素垂直居中 */
				top: calc(50% - 22rpx);
				width: 116rpx;
				height: 44rpx;
				line-height: 44rpx;
				text-align: center;
				font-size: 15px;
				border-radius: 22rpx;
				background-color: #3DA800;
			}
		}

		/* 内容区 */
		.content {
			.text-content {
				margin: 30rpx 0 44rpx 0;
				font-size: 13px;

				/* 文字内容 */
				text {
					display: block;
				}
			}

			/* 图片内容 */
			.img-content {
				display: flex;
				margin-bottom: 22rpx;
				padding-left: 14rpx;
				flex-flow: row wrap;
				justify-content: flex-start;
				align-content: space-between;

				.img-box {
					padding-right: 14rpx;
					width: 180rpx;
					height: 180rpx;

					image {
						width: 180rpx;
						height: 180rpx;
					}
				}
			}

			/* 标签内容 */
			.tag-content {
				font-size: 13px;
			}
		}

		/* 底部 */
		/* 互动栏 */
		.footer {
			.time {
				height: 44rpx;
				line-height: 44rpx;
				float: left;
				font-size: 12px;
			}

			.interact {
				float: right;

				.icon {
					display: inline-block;
					width: 44rpx;
					height: 44rpx;
				}

				.middle {
					margin: 0 28rpx;
				}
			}
		}

		/* 评论区 */
		.remarks-wrapper {
			margin-top: 30rpx;
			font-size: 12px;

			.zan {
				padding-bottom: 12rpx;
				margin-bottom: 12rpx;
			}
			.remark {
				margin-bottom: 12rpx;
			}
		}
	}
</style>
