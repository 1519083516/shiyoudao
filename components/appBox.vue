<template>
	<view class="app-box" :style="{backgroundColor:bgColor,width:width+'rpx',height:height+'rpx',borderRadius:radius+'rpx'}">
		<image v-if="isImage" :src='box.url' :style="{marginBottom:interval+'rpx',width:imgWidth+'rpx',height:imgHeight+'rpx'}"></image>
		<view class="text-area">
			<text class="nav-text" :style="{fontSize:fontSize+'px'}">{{box.title}}</text>
			<slot name="forword"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: "appBox",
		props:{
			box:{
				type:Object,
				default:function(){
					return {}
				}
			},
			isImage:{
				type:Boolean,
				default:true
			},
			width:{
				type:[Number,String],
				default:153
			},
			height:{
				type:[Number,String],
				default:153
			},
			radius:{
				type:[Number,String],
				default:34
			},
			imgWidth:{
				type:[Number,String],
				default:85
			},
			imgHeight:{
				type:[Number,String],
				default:90
			},
			interval:{
				type:[Number,String],
				default:0
			},
			bgColor:{
				type:String,
				default:'#fff'
			},
			fontSize:{
				type:[Number,String],
				default:12
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.app-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
