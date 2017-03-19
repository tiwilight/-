

/*元素上下左右移动*/

function doMove(obj,attr,dis,stp,endFn) {
			dis = parseInt(getStyle(obj,attr)) < stp?dis:-dis
			clearInterval(obj.time);
			obj.time = setInterval(function () {
				var dista = parseInt(getStyle(obj,attr)) + dis;
				if (dista > stp && dis>0 || dista < stp && dis<0) {
					dista = stp;
				}
				obj.style[attr] = dista +'px';

				if (dista == stp) {
					clearInterval(obj.time);
				}
				// if (endFn) {
				// 	endFn()
				// }
				endFn && endFn()
			},60)
		}
		function getStyle(obj,attr) {
			return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
		}


/*抖动*/
function shake(obj,idr,endFn) {
		var dis = parseInt(getStyle(oDiv,idr))
		var arr = [];
		oDiv.timer = null;
		num = 0;
		for (var i =20; i > 0; i-=2) {
			arr.push(i,-i)
		}
		arr.push(0)
		clearInterval(oDiv.time);
		oDiv.timer = setInterval(function () {
			oDiv.style[idr] = dis + arr[num] +'px';
			num++;
			if (num == arr.length) {clearInterval(oDiv.time)}
		},30)
		endFn && endFn()
		function getStyle(obj,attr) {
			return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
		}
	}