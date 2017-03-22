<template>
  	<div>
    	<starsBg father-component="home"></starsBg>
		<section class="win8-main">
			<div class="win8-line line5">
				<div class="win8-box box22 row2 column2">1</div>
				<div class="win8-box box21 column2">2</div>
				<div class="win8-box box14 row4">3</div>
			</div>
			<div class="win8-line line4">
				<!-- <div class="empty box21 column2"></div> -->
				<div class="win8-box box11 l2e">4</div>
				<div class="win8-box box12 row2">5</div>
			</div>
			<div class="win8-line line3">
				<div class="win8-box box12 row2">6</div>
				<div class="win8-box box21 column2">7</div>
			</div>
			<div class="win8-line line2">
				<!-- <div class="empty box11"></div> -->
				<div class="win8-box box31 column3 l1e">8</div>
			</div>
		</section>
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

	$perWidth: 180px;
	$perHeight: 120px; 

	.win8-main {
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -($perHeight * 4 + 30)/2;
		margin-left: -($perWidth * 5 + 30)/2;
	}

	.win8-line {
		float: left;
		clear: both;
		position: relative;
		height: $perHeight;
		margin-bottom: 10px;

		&.line5 {
			z-index: 5;
		}
		&.line4 {
			z-index: 4;
		}
		&.line3 {
			z-index: 3;
		}
		&.line2 {
			z-index: 2;
		}

		.win8-box {
			float: left;
			width: $perWidth;
			height: $perHeight;
			margin: 0 10px 10px 0;
			color: #fff;
			border-radius: 3px;
			box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.3) inset;

			background: rgba(50, 50, 50, 0.3);
			transition: transform .2s linear;
			/*background: rgba(50, 50, 50, 0.3) -webkit-gradient(linear, left top, 45% bottom, from(rgba(255,255,255,0.7)), color-stop(0.45, rgba(255,255,255,0.2)), color-stop(0.45, rgba(255,255,255,0)) ); */
			
			&:hover {
				box-shadow: 0px 0px 0px 3px rgba(255, 0, 51, 0.5) inset;
				transform: scale(1.02);
			}
		}

		.l1e {
			margin-left: $perWidth + 10;
		}

		.l2e {
			margin-left: $perWidth * 2 + 20;
		}

		/*.empty {
			float: left;
			visibility: hidden;
			margin: 0 10px 10px 0;
		}*/

		.box22 {
			width: $perWidth * 2;
			height: $perHeight * 2;
			&.row2 {
				height: $perHeight * 2 + 10;
			}
			&.column2 {
				width: $perWidth * 2 + 10;
			}
		}
		.box21 {
			width: $perWidth * 2;
			height: $perHeight;
			&.column2 {
				width: $perWidth * 2 + 10;
			}
		}
		.box14 {
			width: $perWidth;
			height: $perHeight * 4;
			&.row4 {
				height: $perHeight * 4 + 30;
			}
		}
		.box11 {
			width: $perWidth;
			height: $perHeight;
		}
		.box12 {
			width: $perWidth;
			height: $perHeight * 2;
			&.row2 {
				height: $perHeight * 2 + 10;
			}
		}
		.box31 {
			width: $perWidth * 3;
			height: $perHeight;
			&.column3 {
				width: $perWidth * 3 + 20;
			}
		}
	}

</style>
