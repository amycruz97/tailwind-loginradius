 function getElement(id) { return document.getElementById(id)}

    function handleSignup() {
       
        getElement("signup").addEventListener("click",  function(){
           
            const  name = getElement("name").value;
            const  email = document.getElementById("email").value
            const  password = getElement("password").value;
           

            if(!email || !password || !name) {alert("Missing input field")}
            if(password.length < 6) {alert("password must be at least 6 digits")}

            
         

            var authUserRegistrationModel = {
                email: [{
                    'Type': 'Primary',
                    'Value': email
                }],
                password: password,
                name: name
            };
            var sott = commonOptions.sott;
            var emailTemplate = "";
            var fields = "";
            var options = "";
            var verificationUrl = domainName;
            var welcomeEmailTemplate = "";

            LoginRadiusSDK.authenticationApi.userRegistrationByEmail(authUserRegistrationModel, sott, emailTemplate, fields, options, verificationUrl, welcomeEmailTemplate, function(error, data){

            
                if (error) {             
                    alert(error.Message);
                    
                }else{
                    window.location.href = "/tailwind/login.html"
                }
              
            });
        
        })
    
    }

    handleSignup()
