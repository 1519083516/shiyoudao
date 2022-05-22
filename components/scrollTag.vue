<template>
	<view>
		<scroll-view scroll-x="true" style="white-space: nowrap;">
			<view class="dataInfo">
				<view class="datalist">
					<view class="tag nav-text" v-for="tag1 in tags1" :key="tags1.id"
						:style="{'background-color':tag1.color}">
						{{tag1.title}}
					</view>
				</view>
				<view class="datalist">
					<view class="tag nav-text" v-for="tag2 in tags2" :key="tags2.id"
						:style="{'background-color':tag2.color}">
						{{tag2.title}}
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "scrollTag",
		data() {
			return {

			};
		},
		props: {
			tags1: {
				type: Array
			},
			tags2: {
				type: Array
			}
		}
	}
</script>

<style lang="scss" scoped>
	.datalist {
		margin-bottom: 16rpx;

		.tag {
			padding: 0 32rpx;
			font-size: 15px;
			margin-right: 16rpx;
			display: inline-block;
			border-radius: 35rpx;
			height: 90rpx;
			line-height: 90rpx;
			text-align: center;
			background-color: #fff;
		}
	}
</style>
