
function save(){
var mail =	$("#mail").val();
var nid  =	$("#nid").val();
var area =  $("#area").val();


if (mail){ 
	//alert("Si hay");
	localStorage.setItem('Correo', mail);
}else{
	alert("Porfavior ingrese el campo de correo");
};
if (nid){ 
	//alert("Si hay");
	localStorage.setItem('IDn', nid);
}else{
	alert("Porfavior ingrese el campo ID");
};
if (area){ 
	//alert("Si hay");
	localStorage.setItem('TextArea', area);
}else{
	alert("Porfavior ingrese el campo coment");
};

return true;
	
}
