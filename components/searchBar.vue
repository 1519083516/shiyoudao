<template>
	<view class="search-bar">
		<view class="back-btn" v-if="isSearch" @click="back">
			<uni-icons color="#333" size="18" type="back" />
		</view>
		<view :style="{borderRadius:radius+'px',backgroundColor: bgColor}" class="searchbar-box"
			@click.stop="searchClick">
			<view class="icon-search">
				<image class="search-icon"
					src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-6bbc8131-92b5-4a74-bbbd-fe943e8403ec/0f5d1714-8489-491e-8891-647a4638fa98.png" />
			</view>
			<input v-if="isSearch" :focus="showSync" :placeholder="placeholder" :maxlength="maxlength"
				class="search-input" confirm-type="search" type="text" v-model="searchVal" @confirm="confirm"
				@blur="blur" @focus="emitFocus" />
			<text v-else class="text-placeholder">{{ placeholder }}</text>
			<view v-if="isSearch && searchVal" class="clear_btn" @click="clear">
				<slot name="clearIcon">
					<uni-icons color="#c0c4cc" size="20" type="clear" />
				</slot>
			</view>
		</view>
		<text @click="sousuo" class="sousuo-btn" v-if="isSearch">{{sousuoText}}</text>
	</view>
</template>

<script>
	/**
	 * SearchBar 搜索栏
	 * @description 搜索栏组件，通常用于搜索商品、文章等
	 * @tutorial https://ext.dcloud.net.cn/plugin?id=866
	 * @property {Number} radius 搜索栏圆角
	 * @property {Number} maxlength 输入最大长度
	 * @property {String} placeholder 搜索栏Placeholder
	 * @property {String} clearButton = [always|auto|none] 是否显示清除按钮
	 * 	@value always 一直显示
	 * 	@value auto 输入框不为空时显示
	 * 	@value none 一直不显示
	 * @property {String} cancelButton = [always|auto|none] 是否显示取消按钮
	 * 	@value always 一直显示
	 * 	@value auto 输入框不为空时显示
	 * 	@value none 一直不显示
	 * @property {String} cancelText 取消按钮的文字
	 * @property {String} bgColor 输入框背景颜色
	 * @property {Boolean} focus 是否自动聚焦
	 * @event {Function} confirm uniSearchBar 的输入框 confirm 事件，返回参数为uniSearchBar的value，e={value:Number}
	 * @event {Function} input uniSearchBar 的 value 改变时触发事件，返回参数为uniSearchBar的value，e=value
	 * @event {Function} cancel 点击取消按钮时触发事件，返回参数为uniSearchBar的value，e={value:Number}
	 * @event {Function} clear 点击清除按钮时触发事件，返回参数为uniSearchBar的value，e={value:Number}
	 * @event {Function} blur input失去焦点时触发事件，返回参数为uniSearchBar的value，e={value:Number}
	 */

	export default {
		name: "searchBar",
		props: {
			isSearch: {
				type: Boolean,
				default: false
			},
			placeholder: {
				type: String,
				default: ""
			},
			radius: {
				type: [Number, String],
				default: 5
			},
			sousuoText: {
				type: String,
				default: '搜索'
			},
			bgColor: {
				type: String,
				default: "#F8F8F8"
			},
			maxlength: {
				type: [Number, String],
				default: 25
			},
			value: {
				type: [Number, String],
				default: ""
			},
			focus: {
				type: Boolean,
				default: false
			},

		},
		data() {
			return {
				searchVal: '',
				showSync: false
			}
		},
		watch: {
			searchVal(newVal, oldVal) {
				this.$emit("input", newVal)
				// #ifdef VUE3
				this.$emit("update:modelValue", newVal)
				// #endif
			},
			focus: {
				immediate: true,
				handler(newVal) {
					if (newVal) {
						this.$nextTick(() => {
							this.showSync = true
						})
					}
				}
			}
		},
		methods: {
			searchClick() {
				if (this.isSearch) {
					return
				}
				uni.navigateTo({
					url: '../../pages/searchDetails/searchDetails'
				})
			},
			back() {
				uni.switchTab({
					url: '../../pages/application/application',
				})
			},
			clear() {
				this.$emit("clear", {
					value: this.searchVal
				})
				this.searchVal = ""
				this.$nextTick(() => {
					this.showSync = true
				})
			},
			sousuo() {
				this.$emit("sousuo", {
					value: this.searchVal
				});
				// #ifndef APP-PLUS
				uni.hideKeyboard()
				// #endif
				// #ifdef APP-PLUS
				plus.key.hideSoftKeybord()
				// #endif
			},
			confirm() {
				// #ifndef APP-PLUS
				uni.hideKeyboard();
				// #endif
				// #ifdef APP-PLUS
				plus.key.hideSoftKeybord()
				// #endif
				this.showSync = false
				this.$emit("confirm", this.searchVal)
			},
			blur() {
				// #ifndef APP-PLUS
				uni.hideKeyboard();
				// #endif
				// #ifdef APP-PLUS
				plus.key.hideSoftKeybord()
				// #endif
				this.$emit("blur", {
					value: this.searchVal
				})
			},
			emitFocus() {
				// this.$emit("focus", e.detail)
			}
		}
	};
</script>

<style lang="scss">
	$uni-searchbar-height: 36px;

	.search-bar {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		// position: relative;
		padding: 68rpx 0rpx 0rpx 0rpx;
		box-sizing: border-box;
		margin-bottom: 24rpx;

		.back-btn {
			line-height: $uni-searchbar-height;
			padding-right: 10px;
		}

		.searchbar-box {
			/* #ifndef APP-NVUE */
			display: flex;
			box-sizing: border-box;
			/* #endif */
			overflow: hidden;
			border: 2rpx solid #66AA66;
			// position: relative;
			flex: 1;
			flex-direction: row;
			align-items: center;
			height: $uni-searchbar-height;
			padding: 5px 8px 5px 0px;

			.icon-search {
				/* #ifndef APP-NVUE */
				display: flex;
				/* #endif */
				flex-direction: row;
				// width: 32px;
				padding: 0 8px;
				color: #B3B3B3;

				.search-icon {
					width: 40rpx;
					height: 40rpx;
				}
			}

			.search-input {
				flex: 1;
				font-size: 14px;
				color: #333;
			}

			.text-placeholder {
				font-size: 14px;
				color: #B3B3B3;
				// margin-left: 5px;
			}

			.sousuo-btn {
				align-items: center;
				line-height: 24px;
				padding-left: 8px;
				/* #ifdef H5 */
				cursor: pointer;
				/* #endif */
			}
		}
	}

	.sousuo-btn {
		padding-left: 10px;
		line-height: $uni-searchbar-height;
		font-size: 14px;
		color: #333333;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}
</style>
