<template>
	<view class="news-wrapper radius">
		<userInfo :user="user" v-if="isUserInfo"></userInfo>
		<newsContent :user="user"></newsContent>
	</view>
</template>

<script>
	import newsContent from './newsContent.vue'
	import userInfo from './userInfo.vue'
	export default {
		name: "dynamicNews",
		props:{
			user: {
				type: Object,
				default:function(){
					return {}
				}
			},
			isUserInfo:{
				type: Boolean,
				default:true
			}
		},
		components:{
			userInfo,
			newsContent
		},
		data() {
			return {
			};
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	/* 动态容器 */
	.news-wrapper {
		padding: 34rpx 30rpx 16rpx 30rpx;
		margin-bottom: 16rpx;
	}
</style>
