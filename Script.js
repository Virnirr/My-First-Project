function checker()
{
    var check1 = document.getElementById("Roger").checked;
    var check2 = document.getElementById("fisher").checked;
    var check3 = document.getElementById("slingshot").checked;
    var num = 0;
    if (check1)
    {
        num++;
    }
    if (check2)
    {
        num++;
    }
    if (check3)
    {
        num++;
    }
    
    if (num == 3)
    {
        alert("CONGRATUATION YOU GOT ALL 3 CORRECT");
    }
    else
    {
        alert("You Got " + num + " Correct")
    }
}
