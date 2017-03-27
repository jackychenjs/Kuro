<template>
  	<div>
    	<starsBg father-component="home"></starsBg>
		<div class="metro-wrap">
			<div class="metro-line">
				<div class="metro-block item">1</div>
				<div class="metro-block item">2</div>
			</div>
			<div class="metro-line">
				<div class="metro-block">
					<div class="metro-block item small">3-1</div>
					<div class="metro-block item small">3-2</div>
					<div class="metro-block item small">3-3</div>
					<div class="metro-block item small">3-4</div>
				</div>
				<div class="metro-block item">4</div>
			</div>
		</div>
		<router-view></router-view>
  	</div>
</template>

<script>

import starsBg from '../../components/common/starsBg'

export default {
	name: 'home',
	components: {
		starsBg
	}
}

</script>

<style lang='sass'>
	html, body {
		margin: 0;
		padding: 0;
		height: 100%;
		overflow: hidden;
	}

	body {
		background-color: rgb(33, 33, 33);
	}

	.metro-wrap {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: auto;  
		position: absolute;  
		top: 0; left: 0; bottom: 0; right: 0;  
		.metro-line {
			display: flex;
			justify-content: center;
			margin: 5px 0;
			.metro-block {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				align-content: space-between;
				margin: 0 5px;
				width: 350px;
				height: 200px;
				&.item {
					color: #fff;
					box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.3) inset;
					border-radius: 3px;
					transition: transform .2s linear;
					&:hover {
						box-shadow: 0px 0px 0px 3px rgba(255, 0, 51, 0.5) inset;
						transform: scale(1.02);
					}
				}
				&.small {
					margin: 0;
					width: 170px;
					height: 95px;
				}
			}
		}
	}

</style>
