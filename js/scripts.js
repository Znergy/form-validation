$(document).ready(function () {
  
  function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([az]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
  };
  
  function isValidNumber(number) {
    if($.isNumeric(number)) {
      return true;
    } else {
      return false;
    }
  };
  
  // submit is clicked
  $("#formValidation").submit(function(event) {
    var errorMessage = "";
    var userEmail = $("#email").val();
    var userPhone = $("#number").val();
    var pass1 = $("#password1").val();
    var pass2 = $("#password2").val();
    
    
    
    if(!isValidEmailAddress(userEmail)) {
      errorMessage = errorMessage + "<br />Please enter a valid email";
    }
    
    if (!isValidNumber(userPhone)) {
      errorMessage = errorMessage + "<br />Please enter valid number";
    }
    
    if (pass1 != pass2) {
      alert("passwords don't match");
      errorMessage = errorMessage + "<br />Passwords don't match";
    }
    
    if(errorMessage === "") {
      alert("Success!");
    } else {
      $("#error").html(errorMessage);
    }
    
    event.preventDefault();
    
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//  console.log("javascript loaded");
//  
//  function isValidEmail(email) {
//    if (email.includes("@")) {
//      return true;
//    } else {
//      return false;
//    }
//  }
//  
//  function isValidNumber(number) {
//    var digit = parseInt(number);
//    if (digit > 0) {
//      return true;
//    } else {
//      return false;
//    }
//  }
//  
//  function passwordMatches(pass1, pass2) {
//    if (pass1 === pass2) {
//      return true;
//    } else {
//      return false;
//    }
//  }
//  
//  function isValidPassword(password) {
//    if (password.length > 8) {
//      return true;
//    } else {
//      return false;
//    }
//  }
//
//  
//  $("#formValidation").submit(function (event) {
//    console.log("button clicked");
//    var errorMessage = "";
//    var pass1, pass2;
//  
//    var choices = ["email", "number", "password1", "password2"];
//    
//    choices.forEach(function (choice) {
//      
//      var userInput = $("#" + choice).val();
//      
//      if (userInput !== "") {
//        if (choice === "email") {
//          // nothing to do here built in email validation
//        } else if (choice === "number") {
//          console.log("choice == number");
//          if (isValidNumber(choice) === false) {
//            console.log("number isn't valid");
//           errorMessage += " <br />Enter a valid phone number.";
//          }
//        } else if (choice === "password1") {
//          console.log("choice == pw1");
//          if (userInput.length < 8) {
//            console.log("password not valid");
//            errorMessage += " <br /> Enter a valid password.";
//          }
//        } else if (choice === "password2") {
//          console.log("choice == pw2");
//          if (userInput.length < 8) {
//            console.log("pw2 not valid");
//            errorMessage += " <br /> Confirm your password.";
//          }
//        }
//      } else {
//        $("#error").html("You didn't enter anything");
//      }
//      $("#error").html(errorMessage);
//    });
//    event.preventDefault();
//  });
});