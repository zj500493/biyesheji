//通过class获取元素
function getByClass(oParent, sClass) {
	var aEle = oParent.getElementsByTagName("*");
	var aResult = [];
	for(var i=0; i<aEle.length; i++) {
		if(aEle[i].className == sClass) {
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}

//获取非行内样式
function getStyle(obj, name) {
	if(window.getComputedStyle) {
		return getComputedStyle(obj, null)[name];
	} else {
		return obj.currentStyle[name]
	}
}

//导入共用的html页面
//url：页面的路径
//id：将要导入的内容放在什么地方
function loadHtml(url,id){
	$.ajax({
		url:url,
		async:false,
		success:function(data){
			$("#"+id).html(data);
		}
	});
}


