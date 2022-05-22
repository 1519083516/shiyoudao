<template>
	<!-- 搜索框 -->
	<view class="search-bar-wrapper">
		<view class="search-bar-box">
			<input type="text" class="search-text" placeholder="低热量" maxlength="10" focus />
			<image class="search-icon" src="../../shiyoudao/static/index-icon/sousuo.png" />
		</view>
	</view>
</template>

<script>
	export default {
		name: "searchBar",
		data() {
			return {};
		}
	}
</script>

<style scoped lang="scss">
	.search-bar-wrapper {
		width: 100%;
		height: 136rpx;
		padding-top: 68rpx;
		box-sizing: border-box;

		.search-bar-box {
			display: flex;
			background-color: #fff;
			margin: 0 auto;
			width: 656rpx;
			height: 68rpx;
			align-items: center;
			box-sizing: border-box;
			border: 2rpx solid #66AA66;
			border-radius: 34rpx;

			.search-text {
				width: 100%;
				margin-left: 30rpx;
				font-size: 14px;
				color: #959595;
			}

			.search-icon {
				width: 40rpx;
				height: 40rpx;
				padding-right: 30rpx;
				float: right;
			}
		}
	}
</style>
