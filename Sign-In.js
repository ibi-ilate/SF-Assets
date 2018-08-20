function check(form);/*function to check userid & password*/
{
 
        var emailadd = document.forms["myform"]["emailadd"].value;
        var password = document.forms["myform"]["password"].value;
/*the following code checkes whether the entered email and password are matching*/

if ( emailadd == "ibi@email.com" && password == "trial"){
    alert("Login Successful");
window.open('signedin.html'); // Redirecting to other page.
  } 
 else
 {
   alert("Password or Username Incorrect");/*displays error message*/
  }
}