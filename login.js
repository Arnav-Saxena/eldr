function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      window.location.href = "main.html";
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
}

function signupUser() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      window.location.href = "main.html";
    })
    .catch((error) => {
      alert("Signup failed: " + error.message);
    });
}
