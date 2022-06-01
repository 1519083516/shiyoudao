<template>
	<view class="wrapper">
		<view class="main">
			<searchBar bgColor="#fff" radius="17" placeholder="我的数据">
			</searchBar>

			<view class="app-area">
				<view class="app-big radius">
					<image :src="appBig.url"></image>
					<view class="text-area">
						<text class="nav-text">{{appBig.title}}</text>
					</view>
				</view>
				<view class="app-mid">
					<appBox v-for="mid in mids" :box="mid" :key="mid._id" width="320" height="230" imgWidth="320"
						imgHeight="176" fontSize="13"></appBox>
					<appBox :box="noImage" width="320" height="230" fontSize="20" :isImage="false">
						<template v-slot:forword>
							<uni-icons type="forward" size="22" color="#515151"></uni-icons>
						</template>
					</appBox>
				</view>
			</view>

			<Title text="大家都在看"></Title>
			
			<view class="others">
				<view class="other radius">
					<image class="img-top" v-if="hotSpots[0]" :src="hotSpots[0].url"></image>
					<text class="text-bottom nav-text" v-if="hotSpots[0]">{{hotSpots[0].title}}</text>
				</view>
				<view class="other radius">
					<image class="img-left1" v-if="hotSpots[1]" :src="hotSpots[1].url"></image>
					<text class="text-right1 nav-text" v-if="hotSpots[0]">{{hotSpots[1].title}}</text>
				</view>
				<view class="other radius">
					<image class="img-left2" v-if="hotSpots[2]" :src="hotSpots[2].url"></image>
					<text class="text-right2 nav-text" v-if="hotSpots[0]">{{hotSpots[2].title}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import searchBar from '../../components/searchBar.vue';
	import Title from '../../components/title.vue';
	import appBox from '../../components/appBox.vue';
	export default {
		components: {
			searchBar,
			Title,
			appBox
		},
		data() {
			return {
				appBig: {},
				noImage: {},
				mids: [],
				hotSpots:[]
			}
		},
		onLoad() {
			this.getAppBig()
			this.getAppMid()
			this.getAppNoImg()
			this.getHotSpots()
		},
		methods: {
			getAppBig() {
				this.$api.get_appbig({}).then(res => {
					console.log(res)
					const {
						data
					} = res
					console.log(data)
					this.appBig = data
				})
			},
			getAppMid() {
				this.$api.get_appmid({}).then(res => {
					console.log(res)
					const {
						data
					} = res
					console.log(data)
					this.mids = data
				})
			},
			getAppNoImg() {
				this.$api.get_appnoimg({}).then(res => {
					console.log(res)
					const {
						data
					} = res
					console.log(data)
					this.noImage = data
				})
			},
			getHotSpots(){
				this.$api.get_hotspots({}).then(res=>{
					console.log(res)
					const{data} = res
					console.log(data)
					this.hotSpots = data
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	// 大盒子应用
	.app-big {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		height: 400rpx;
		box-sizing: border-box;
		image {
			padding-top: 40rpx;
			width: 522rpx;
			height: 282rpx;
		}
		.text-area{
			font-size: 13px;
		}
	}
	// 中型盒子应用
	.app-mid {
		display: flex;
		flex-flow: row wrap;
		height: 722rpx;
		align-items: center;
		align-content: space-between;
		justify-content: space-between;
		margin-top: 16rpx;
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
