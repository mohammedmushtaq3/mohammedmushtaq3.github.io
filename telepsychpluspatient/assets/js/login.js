function signInButton() {
  var authenticationData = {
    Username: document.getElementById("inputUsername").value,
    Password: document.getElementById("inputPassword").value,
  };

  var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
    authenticationData
  );

  var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

  var userData = {
    Username: document.getElementById("inputUsername").value,
    Pool: userPool,
  };

  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  var sessionUserAttributes = "";
  var User = "";
  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
      User.accessToken = result.getAccessToken().getJwtToken();
      console.log(`Login - Response :` + JSON.stringify(result));

      if (!result.idToken.payload.hasOwnProperty("cognito:groups")) {
        window.location.href = "./home.html";
      } else {
        window.location.href =
          "https://overlord-mmorpg.github.io/telepsychplus/";
      }
    },

    onFailure: function (err) {
      document.getElementsByClassName(".error-msg").text = err.message;
      console.log(err.message || JSON.stringify(err));
    },
    newPasswordRequired: function (userAttributes) {
      delete userAttributes.email_verified;
      sessionUserAttributes = userAttributes;
      $.showModal({
        title: "Set New Password",
        body:
          '<form style="padding: 0px 10px">' +
          '<div class="form-group row">' +
          '<label for="text" class="col-form-label">Name</label>' +
          '<input type="text" class="form-control" id="given-name" required/>' +
          "</div>" +
          '<div class="form-group row">' +
          '<label for="text" class="col-form-label">Set New Passoword</label>' +
          '<input type="text" class="form-control" id="newPassword" required/>' +
          "</div>" +
          "</form>",
        footer:
          '<button type="button" class="btn btn-link" data-dismiss="modal">Cancel</button><button type="submit" class="btn btn-primary">SUBMIT</button>',
        onCreate: function (modal) {
          // create event handler for form submit and handle values
          $(modal.element).on(
            "click",
            "button[type='submit']",
            function (event) {
              event.preventDefault();
              var newPass = document.getElementById("newPassword").value;
              var givenName = document.getElementById("given-name").value;
              sessionUserAttributes.name = givenName;
              cognitoUser.completeNewPasswordChallenge(
                newPass,
                sessionUserAttributes
              );
              // var $form = $(modal.element).find("form")
              modal.hide();
            }
          );
        },
      });
    },
  });
}

// function handleNewPassword(newPassword) {
//   cognitoUser.completeNewPasswordChallenge(newPassword, sessionUserAttributes);
// }

function signUpButton() {
  var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

  var attributeList = [];

  var dataEmail = {
    Name: "email",
    Value: ".........",
  };

  var dataPhoneNumber = {
    Name: "phone_number",
    Value: "....................",
  };
  var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(
    dataEmail
  );
  var attributePhoneNumber = new AmazonCognitoIdentity.CognitoUserAttribute(
    dataPhoneNumber
  );

  attributeList.push(attributeEmail);
  attributeList.push(attributePhoneNumber);

  userPool.signUp(
    "username",
    "password",
    attributeList,
    null,
    function (err, result) {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      var cognitoUser = result.user;
      console.log("user name is " + cognitoUser.getUsername());
    }
  );
}
