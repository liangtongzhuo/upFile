// canvas.js
/**
 * rect{
 * 	left:left,
 * 	top:top,
 * 	width:width,
 * 	height:height
 * }
 * len{
 * 	width:width,
 *  height:height
 * }要保存的图片的像素大小
 */
function cutImg(rect,len){
	var imgUrl = "";//原图片的src属性
	var imgData = (function(result,width,rect){
		var quality = Math.floor((len.width/rect.width)*10)/10;
		var img = new Image();
		var canvas = document.createElement("canvas");
		var drawer = canvas.getcontext("2d");
		x = 0;
		y = 0;
		img.src = result;
		//设置画布的常和宽
		canvas.width = width;
		canvas.height = height;
		/**
		 * context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
		 * img	规定要使用的图像、画布或视频。
		 * sx	可选。开始剪切的 x 坐标位置。
         * sy	可选。开始剪切的 y 坐标位置。
         * swidth	可选。被剪切图像的宽度。
         * sheight	可选。被剪切图像的高度。
         * x	在画布上放置图像的 x 坐标位置。
         * y	在画布上放置图像的 y 坐标位置。
         * width	可选。要使用的图像的宽度。（伸展或缩小图像）
         * height	可选。要使用的图像的高度。（伸展或缩小图像）
		 */
		drawer.drawImage(img,rect.left,rect.top,rect.width,rect.height,x,y,width,width);
		img.src = canvas.toDataURL(drawer,quality);
		return img.src;
	})(imgUrl,len,rect)
	return imgData;
}