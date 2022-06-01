<template>
	<view class="title-wrapper">
		<text class="title bold">
			{{text}}
		</text>
		<slot name="other">
		</slot>
	</view>
</template>

<script>
	export default {
		name:"Title",
		props:{
			text:{
				type:String
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.title-wrapper{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>