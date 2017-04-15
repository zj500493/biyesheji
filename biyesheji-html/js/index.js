window.onload = function(){
//选择课程列表模式
	var switchAll = document.getElementById("switch_all");
	var subSwitch = switchAll.getElementsByTagName("li")
	var model1 = document.getElementById("m1")
	var model2 = document.getElementById("m2")
	subSwitch[0].onclick = function(){
		model1.style.display = "block";
		model2.style.display = "none";
	}
	subSwitch[1].onclick = function(){
		model2.style.display = "block";
		model1.style.display = "none";
	}
	
//点击登陆注册
	var regist = document.getElementById("regist");
	var login = document.getElementById("login");
	var cover = document.getElementById("cover");
	var coverMain = document.getElementById("cover_main");
	var coverLogin = document.getElementById("cover_login");
	regist.onclick = function(){
		cover.style.display="block";
		coverMain.style.display="block";
	}
	login.onclick = function(){
		cover.style.display="block";
		coverLogin.style.display="block";
	}
	cover.onclick = function(){
		cover.style.display="none";
		coverMain.style.display="none";
		coverLogin.style.display="none";
	}
}

