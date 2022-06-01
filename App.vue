<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>
<style lang="scss">
	@import '@/uni_modules/uview-ui/index.scss'; 
	@import '@/static/iconfont.css';
	/*每个页面公共css */
	/* 页面共同颜色 */
	page {
		background-color: #FFF9F1;
	}
	/* main部分水平居中 */
	.wrapper {
		width: 100%;
	}
	.main {
		width: 656rpx;
		margin: 0 auto;
	}
	
	/* 解决高度塌陷和外边距重合问题 */
	.clearfix::before,
	.clearfix::after{
		content:'';
		display:table;
		clear:both;
	}
	
	/* 文字 */
	/* 加粗字体 */
	.bold{
		font-weight: 700;
	}
	/* 文字高亮 */
	.highlight{
		color: #3DA800;
	}
	/* 普通文字 */
	.normal{
		color: #000;
	}
	/* 标题 */
	.title-wrapper{
		padding: 32rpx 0 20rpx 0;
		font-size: 15px;
	}
	.title{
		color: #707070;
	}
	/* 时间 */
	.time-text{
		color: rgba(112, 112, 112, 0.5);
	}
	/* 导航文字 */
	.nav-text{
		color: #515151;
	}
	/* 文字间隔 */
	.interval{
		margin-right: 8rpx;
	}
	/* 分割线--下边框 */
	.line{
		border-bottom: 1rpx solid rgba(112, 112, 112, 0.16);
	}
	.line:last-child{
		border-bottom: none;
	}
	
	/* 带圆角容器 */
	.radius{
		border-radius: 34rpx;
		background-color: #fff;
	}
</style>
