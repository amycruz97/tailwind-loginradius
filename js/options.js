/ LoginRadius V2 JS configuration
var stringVariable = window.location.href;
var domainName = stringVariable.substring(0, stringVariable.lastIndexOf('/'));
var commonOptions = {};
commonOptions.apiKey = '733d15ec-46d1-4e8f-b2c4-727ce574e8d1';
commonOptions.appName = 'login-form';
commonOptions.hashTemplate = true;
commonOptions.sott = '6lYcY+Eknz1VEBj55+N5qIgsqq7Wp9ttie8bZfMdWwIReyWN6dPIdHmaHjrR/8C/DkBTbOBqDIpP2fUNkyrRuBSxAOZiVTOzrU7Vf4o8hkw=*ec6fde2f895263faab4d99036a94831d';
commonOptions.formValidationMessage = true;
commonOptions.verificationUrl = domainName + '/loginscreen.html';
commonOptions.resetPasswordUrl = domainName + '/loginscreen.html';
var LRObject = new LoginRadiusV2(commonOptions);


// HTML 5 SDK initilization
var sdkoptions = {
    "apiKey": commonOptions.apiKey,
    "debugMode": true
  }
LoginRadiusSDK.initSDK(sdkoptions);
