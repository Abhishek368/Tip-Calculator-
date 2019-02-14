function calc(){
	var bill=document.getElementById("ba").value;
	var list=document.getElementById("form").value;
	var peoples=document.getElementById("pep").value;
	if(list==1){
		var ans=(bill*(15/100))/peoples;
	}
	else if(list==2){
		ans=(bill*(10/100)/peoples);
	}
	else if(list==3){
		ans=(bill*(5/100)/peoples);
	}
	else if(list==4){
		ans=(bill*(3/100)/peoples);
	}
	else if(list==5){
		ans=(bill*(2/100)/peoples);
	}
	else{
		alert ("Give proper Inputs");
	}
	var finalans=Math.round(ans);
	document.getElementById("Answer").value=" "+finalans+" Rs. per person";
	
}