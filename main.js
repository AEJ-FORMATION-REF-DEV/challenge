/* déclaration des constatntes pour les actions d'afficharge de mot de passe */


const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

const togglePasswordConfirm = document.querySelector('#togglePasswordConfirm');

const passwordConfirm = document.querySelector('#passwordConfirm');


/* action pour afficher le mot de passe */

togglePassword.addEventListener('click', function (e) {
    // basculer l'attribut 
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // basculer l'icône œil / barre oblique
    this.classList.toggle('bi-eye');
});


togglePasswordConfirm.addEventListener('click', function (e) {
    // basculer l'attribut 
    const type = passwordConfirm.getAttribute('type') === 'passwordConfirm' ? 'text' : 'passwordConfirm';
    passwordConfirm.setAttribute('type', type);
    // basculer l'icône œil / barre oblique
    this.classList.toggle('bi-eye');
});


/*  Condition de validation  

$(document).ready(function(){
    $(function() {
    // Setup form validation on the #register-form element
   $("form[name='inscription-form']").validate({   //#register-form is form id
       // Specify the validation rules
  rules: {
           nomComplet: "required", //firstname is corresponding input name   
           email: {               //email is corresponding input name
            required: true,
            email: true
        },

        password: { //passowrd:  is corresponding input name
          required: true,
          minlength: 6
        },
           
       },
       // Specify the validation error messages
  messages: {
           nomComplet: "Enter First Name",
           email: "Enter Passowrd",
           password: "Enter Valid Email ID"
       },
       submitHandler: function(form) {
           form.submit();
       }
   });
  
    });
  })
  */


 /* 
  $(function() {
  
    $("#myForm").validator();
  
    // when the form is submitted
    $("#myForm").on("submit", function(e) {
      // if the validator does not prevent form submit
      if (!e.isDefaultPrevented()) {
        var url = "inscription.php";
  
        var messageAlert = "alert-success";
        var messageText =
          "Your message was sent, thank you. I will get back to you soon.";
  
        // let's compose Bootstrap alert box HTML
        var alertBox =
          '<div class="alert ' +
          messageAlert +
          ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
          messageText +
          "</div>";
  
        // If we have messageAlert and messageText
        if (messageAlert && messageText) {
          // inject the alert to .messages div in our form
          $("#contact-form").find(".messages").html(alertBox);
          // empty the form
          $("#contact-form")[0].reset();
        }
  
        return false;
      }
    });
  });

  */

  /*********   test    
var formValid = document.getElementById('bouton_envoi');
var prenom = document.getElementById('nomComplet');

*/
