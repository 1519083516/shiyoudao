<template>
	<view>
		<view v-if="mode==='app'" class="list-app radius">
			<view class="list-image">
				<image src="../static/me/logo.png"></image>
			</view>
			<view class="infos">
				<view class="title">
					热门食谱
				</view>
				<view class="description">
					热门食谱，总有一款适合你
				</view>
			</view>
		</view>
		<view v-if="mode==='base'" class="list-base">
			<uni-icons type="search" color="#666" size="25"></uni-icons>
			<text class="title">今日食谱</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "list-card",
		props: {
			mode: {
				type: String
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.list-base {
		display: flex;
		flex-direction: row;
		justify-content: left;
		align-items: center;
		background-color: transparent;
		font-size: 14px;
		height: 80rpx;
		width: 100%;
		border-bottom: 2rpx solid rgba(112, 112, 112, 0.16);
	}

	.list-app {
		display: flex;
		padding: 10rpx;
		margin: 20rpx;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		box-shadow: 0 0 2rpx 2rpx;
		box-sizing: border-box;

		.list-image {
			width: 122rpx;
			height: 122rpx;
			border-radius: 50%;
			// border: 1rpx solid darkgray;
			display: flex;
			align-items: center;
			justify-content: center;

			image {
				width: 120rpx;
				height: 120rpx;
			}
		}

	}
</style>
