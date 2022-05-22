<template>
	<view class="flex-wrapper">
		<view class="box" v-for="box in boxs" :key="box.id">
			<image :src='box.url'></image>
			<view class="text-area">
				<text class="nav-text">{{box.title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "flexBox",
		data() {
			return {
				boxs: [{
						id: '001',
						title: '我的数据',
						url: require('../static/index-icon/dataline.png')
					},
					{
						id: '002',
						title: '设备连接',
						url: require('../static/index-icon/phone.png')
					},
					{
						id: '003',
						title: '饮食百科',
						url: require('../static/index-icon/book.png')
					},
					{
						id: '004',
						title: '热门食谱',
						url: require('../static/index-icon/recipe.png')
					},
				]
			};
		}
	}
</script>

<style lang="scss" scoped>
	.flex-wrapper {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		height: 154rpx;
		margin-top: 24rpx;

		.box {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			background-color: #fff;
			width: 153rpx;
			height: 153rpx;
			border-radius: 34rpx;

			image {
				width: 85rpx;
				height: 90rpx;
			}

			.text-area {
				height: 20px;
				text-align: center;

				text {
					font-size: 12px;
				}
			}
		}
	}
</style>
