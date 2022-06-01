<template>
	<view class="appbar-wrapper" :style="{flexFlow:flexFlow}">
		<appBox v-for="box in boxes" :key="box._id" :box="box"></appBox>
	</view>
</template>

<script>
	import appBox from './appBox.vue'
	export default {
		name: "appBar",
		components:{
			appBox
		},
		props:{
			boxes:{
				type:Array,
				default :function(){
					return []
				}
			},
			flexFlow:{
				type:String,
				default:'row no-wrap'
			}
		},
		data() {
			return {
			};
		}
	}
</script>

<style lang="scss" scoped>
	.appbar-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
