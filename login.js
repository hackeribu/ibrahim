function validate()
{
    var username=document.getElementById("username").value;
    var userpassword=document.getElementById("userpassword").value;
    if(username && userpassword)
{
        alert("login successfully");
        return false;
 }
    else
 {
        alert("login failed");
}
}

validate()



