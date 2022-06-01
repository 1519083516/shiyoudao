<template>
	<view>
		<view class="scroll">
			<scroll-view scroll-y="true" class="list-scroll">
				<slot></slot>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"list-scroll",
		components:{
			// listCard,
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>