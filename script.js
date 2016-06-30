$(document).ready(function(){

	$("div").each(function(index,element){
		console.log("changing color yellow to red");
		$(element).removeClass("yellow");
		$(element).addClass("red");//these kind of changes are not much wise. As when someone see html, they find yellow, but due to script red color is implemented, so this is small script, but in large scripts it can led to problem.
		//so here we can use both this as well as element. Both work in same way. If i want to use this then i can write it as $("div").each(function(index){}); where index is index of each element in each. But problem with this is that this can change its loyality in case of nested this. like as shown below, in that case element works

		var bcolor=$(this).css("background-color");
		var red="rgb(255, 0, 0)";
		if(bcolor==red){
			console.log("changing color red to yellow");
			$("div").each(function(index,nelement){
				$(nelement).removeClass("red");
				$(nelement).addClass("yellow");
				if(element==nelement){
					return false;//returning false will behave as break, and return true will behave as continue
				}
			});/*It is not must to write this each. I have write it so that u can understand importance of using element*/
		} 
	});
	var str="";
	$.each(["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"],function(index,value){
		str+="Month "+(index+1)+": "+value+" <br/>";
	});
	$("div#count1to10").html(str);
});