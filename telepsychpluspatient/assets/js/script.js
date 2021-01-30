/*jshint esversion: 6 */
/*jshint esversion: 8 */

var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
var cognitoUser = userPool.getCurrentUser();
if (cognitoUser != null) {
  cognitoUser.getSession(function (err, session) {
    if (err) {
      //   alert(err);
      console.log("error -", err);
      return;
    }

    if (!session.isValid()) {
      signOut();
    }

    console.log("session validity: ", session.isValid());
    console.log("session: " + JSON.stringify(session));
    sessionStorage.setItem("uid", session.idToken.payload.sub);
    sessionStorage.setItem("email", session.idToken.payload.email);
    // Set the profile info
    cognitoUser.getUserAttributes(function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("userAttributes" + JSON.stringify(result));
    });
  });
} else {
  window.location.href = "./login.html";
}

function getUserGroups() {
  cognitoUser.getSession(function (err, session) {
    if (err) {
      //   alert(err);
      console.log(err);
      return null;
    }
    return result.idToken.payload.hasOwnProperty("cognito:groups")
      ? result.idToken.payload["cognito:groups"][0]
      : "patient";
  });
}

function signOut() {
  sessionStorage.clear();
  if (cognitoUser != null) {
    cognitoUser.signOut();
  }
  window.location.href = "./login.html";
}
