
function test(){

	var txtUname = document.getElementById("uName").value;
	var txtUmail = document.getElementById("uMail").value;
	var txtUpass = document.getElementById("uPass").value;

if (txtUname=="admin" && txtUpass=="admin" || txtUmail=="admin@hcl.com" && txtUpass=="admin1")

{
 alert("sucess")

}
else
{
	alert("faild")
}
}