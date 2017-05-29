<script language="javascript" type="text/javascript">
<!--
function return Vaildation(){
if (document.getElementById('firstname').value=="")
{
alert("Enter FirstName");
document.getElementById('firstname').focus();
   return false;
}
if(document.getElementById('userName').value=="")
	{
		alert("Enter User Name");
		document.getElementById('UserName').focus();
		return false;
	}

	if(document.getElementById('passWord').value=="")
	{
		alert("Enter Password:");
		document.getElementById('passWord').focus();
		return false;
	}
	if(document.getElementById('cpassWord').value=="")
	{
		alert("Enter Confirm Password:");
		document.getElementById('cpassWord').focus();
		return false;
	}
var choice=false;
for(counter=0; counter<form1.sex.length; counter++)
{
if(form1.sex[counter].checked)
choice=true;
}
if(!choice)
{
alert("Please select Gender.")
return (false);
}
if(document.getElementById('email').value=="")
	{
		alert("Enter email:");
 document.getElementById('email').focus();
return false;
var mob=document.getElementById('telephone').value;
if(mob=="")
{
  alert("Enter Mobile No");
  document.getELementById('telephone').focus();
 return false;
}
if(mob.length!==10)
{
alert("Mobile no Invalid");
return false;
}
var city=document.getElementById('myselect');
alert(city);
if(city.selectedIndex=="0"){
alert("Please select Degree");
return false;
}
if (document.form1.cb1.checked==false && document.form1.cb2.checked == false)
{
alert('select skillset');
return false;
}
return true;
}
//-->
</script>