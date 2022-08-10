function validate()
{
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var message=document.getElementById("message").value;
    if(name && email && message)
{
        alert(" successfully");
        return false;
 }
    else
 {
        alert("failed");
}
}

validate()



