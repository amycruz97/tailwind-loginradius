function getElement(id) { return document.getElementById(id)}

function handleLogin() {
   
    getElement("login").addEventListener("click",  function(){
              
        const  email = document.getElementById("email").value
        const  password = getElement("password").value;
       

        if(!email || !password ) {alert("Missing input field")}
        if(password.length < 6) {alert("password must be at least 6 digits")}


        var emailAuthenticationModel = {
            email: email,
            password: password,
            action: "loginByEmail"
        };
        var emailTemplate = "";
        var fields = "";
        var loginUrl = window.location.href;
        var verificationUrl = "";

        LoginRadiusSDK.authenticationApi.loginByEmail(emailAuthenticationModel, emailTemplate, fields, loginUrl, verificationUrl, function(error, data){
        
            if (error) {             
                alert(error.Message);
                
            }
            if(data){
                alert("login successful")
            }

        });

    
    })

}

handleLogin()

// function handleLogin() {
//     $('#btn-minimal-login').on('click', function () {
//         $("#minimal-login-errorMsg").text("");
//         if ($('#minimal-login-email').val().trim() == '') {
//             $("#minimal-login-errorMsg").text("The Email Id field is required.");
//             return;
//         } else if ($('#minimal-login-password').val().trim() == '') {
//             $("#minimal-login-errorMsg").text("The Password field is required.");
//             return;
//         }
//         $("#lr-loading").show();
//         var emailAuthenticationModel = {
//             email: $("#minimal-login-email").val(),
//             password: $("#minimal-login-password").val(),
//             action: "loginByEmail"
//         };
//         var emailTemplate = "";
//         var fields = "";
//         var loginUrl = window.location.href;
//         var verificationUrl = "";

//         LoginRadiusSDK.authenticationApi.loginByEmail(emailAuthenticationModel, emailTemplate, fields, loginUrl, verificationUrl, function(error, data){
//             $("#lr-loading").hide();
//             if(error){
//                 $("#minimal-login-errorMsg").text(error.Message);
//             }
//             if (data) {
//                 $("#minimal-login-email").val("");
//                 $("#minimal-login-password").val("");
//                 getProfile(data.access_token, data.Profile.Uid);
//             }
//         });
//     });
// }
