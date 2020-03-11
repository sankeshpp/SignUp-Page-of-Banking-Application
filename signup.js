function check()
{
  var name=document.getElementById("firstName").value
  var mobileNumber=document.getElementById("mobNum").value

  var oldPassword3=document.getElementById("password")
  var oldConfirmPassword=document.getElementById("confirmPwd")

    if(name.length==0)
    {
       document.getElementById("nameMsg").innerHTML="**Please Enter Your Name"
      return false
    }

    else
    if(name.length<3)
    {
      document.getElementById("nameMsg").innerHTML="**First Name Should be of minimum 3 characters"
      return false
    }


    if(mobileNumber.length<10)
    {
      document.getElementById("mobNumber").innerHTML="**Please Enter Correct Mobile Number"
      return false
    }

    if(mobileNumber.charAt(0)<6)
    {
     document.getElementById("mobNumber").innerHTML="**Mobile Number Should Starts with 6 , 7 , 8 or 9 only"
     return false
    }
    
    if(oldPassword3!=oldConfirmPassword)
    {
      document.getElementById("confirmPwdMsg").innerHTML="**Password Mismatch, Please check again"
      return false
    }
    else
    if(oldPassword3==oldConfirmPassword)
    {
      document.getElementById("green2").innerHTML=" "
      return true
    }


}


