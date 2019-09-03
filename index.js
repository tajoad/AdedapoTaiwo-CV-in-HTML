function validate(){
    var name = document.getElementById("name").value;
    var title = document.getElementById("title").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 4){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(title.length < 3){
      text = "Please Enter a Correct Title";
      error_message.innerHTML = text;
      return false;
    }
   
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 20){
      text = "Please Enter atleast 20 characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }
  //Function To Display Popup
function div_show() {
  document.getElementById('wrapper').style.display = "block";
  }
  //Function to Hide Popup
  function div_hide(){
  document.getElementById('wrapper').style.display = "none";
  }
