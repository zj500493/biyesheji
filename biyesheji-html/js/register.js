$(function(){
	//学生注册
	$("#go_student").click(function(){
		$(".select-type").css("display","none");
		$(".xy_student").css("display","block");
	})
	//教师注册
	$("#go_teacher").click(function(){
		$(".select-type").css("display","none");
		$(".xy_teacher").css("display","block");
	})
	//返回上一步
	$("#prev_xy").click(function(){
		$(".select-type").css("display","block");
		$(".xy_student").css("display","none");
	})
	$("#prev_xy1").click(function(){
		$(".select-type").css("display","block");
		$(".xy_teacher").css("display","none");
	})
	
//表单验证
	var regs = {
		email:/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
		mobile:/^1[3|4|5|7|8]\d{9}$/,
		pwd:/^.{6,20}&/
	}
	
	
})
