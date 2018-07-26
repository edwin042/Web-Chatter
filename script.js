$(document).ready(function(){
	$("button").click(function(){
	var textMe = $("#sendMessage").val();
		if(textMe != ""){
			var message = $("<p></p>").text(textMe);
			$(".messages").append(message);
			$("#sendMessage").val("");
		}
	});
	$("#menu").click(function(){
		$(".sideBar").fadeToggle(800);
	});
	$(".myProfile").click(function(){
		alert("Application in progress");
	});
	$(".off").click(function(){
		$(".name").css("background","red");
		$(".name").text("offline");
	});
	$(".on").click(function(){
		$(".name").css("background","green");
		$(".name").text("online");
	});
	$(".about").click(function(){
		$("#aboutMe").toggle(800);
	});
});