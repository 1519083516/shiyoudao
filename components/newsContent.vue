<template>
	<view>
		<view class="content">
			<!-- 文字区 -->
			<view class="text-content" v-if="user.texts">
				<text class="normal" v-for="text in user.texts">{{text}}</text>
			</view>
			<!-- 照片区 -->
			<view class="img-content" v-if="user.imgs">
				<view class="img-box" v-for="img in user.imgs">
					<image :src="img"></image>
				</view>
			</view>
			<!-- 标签（必要） -->
			<view class="tag-content">
				<text class="highlight">{{user.tag}}</text>
			</view>
		</view>
		<view class="footer">
			<view class="time time-text">
				{{user.time}}
			</view>
			<view class="interact">
					<uni-icons type="hand-up-filled" size="22" :color="changeColor" @click="dianzan"></uni-icons>
					<uni-icons type="chatbubble-filled" size="22" color="#707070"></uni-icons>
					<uni-icons type="redo-filled" size="22" color="#707070"></uni-icons>
			</view>
		</view>
		<view class="remarks-wrapper" v-if="user.zans.length>0">
			<view class="zan highlight line" >
				<uni-icons class="interval" type="hand-up-filled" size="18" color="#3DA800" @click="dianzan">
				</uni-icons>
				<text>{{zanNames}}</text>
			</view>
			<view class="remark" v-for="remark in user.remarks" v-if="remark">
				<text class="highlight interval">{{remark.name}}:</text><text class="normal">{{remark.comment}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "newsContent",
		props:{
			user:{
				type:Object
			}
		},
		data() {
			return {
				changeColor: '#707070'
			};
		},
		computed:{
			zanNames(){
				let userNames = []
				for (let i in this.user.zans) {
					userNames.push(this.user.zans[i].userName)
				}
				return userNames.join(', ')
			}
		},
		methods:{
			dianzan() {
				this.changeColor = '#3DA800';
			}
		}
	}
</script>

<style lang="scss" scoped>
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
 .footer {
	 display: flex;
	 flex-direction: row;
	 justify-content: space-between;
 	.time {
 		height: 44rpx;
 		line-height: 44rpx;
 		font-size: 12px;
 	}
	/* 互动栏 */
 	.interact {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 188rpx;
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
</style>
