function validate()
{
    var fname=document.getElementById("n").value;
    var lname=document.getElementById("l").value;
    var from=document.getElementById("f").value;
    var to=document.getElementById("t").value;
    var departing=document.getElementById("d").value;
    var returning=document.getElementById("r").value;
    var children=document.getElementById("c").value;
    var adults=document.getElementById("a").value;
    if(fname && lname  && from && to && departing && returning && children && adults)
{
        alert(" Booking  successfully");
        return false;
 }
    else
 {
        alert("failed");
}
}

validate()
