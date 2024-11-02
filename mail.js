const firebaseConfig = {
    apiKey: "AIzaSyDbREhUz2kM-V9bXCUowgRB9ChyJVP8jsc",
    authDomain: "message-me-5b34a.firebaseapp.com",
    databaseURL: "https://message-me-5b34a-default-rtdb.firebaseio.com",
    projectId: "message-me-5b34a",
    storageBucket: "message-me-5b34a.appspot.com",
    messagingSenderId: "1047092447100",
    appId: "1:1047092447100:web:56132b92cbe8dfcd5046f9",
    measurementId: "G-0R9KFJXJ33"
};
//   initialise fire base
firebase.initializeApp(firebaseConfig);


function submit() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mess = document.getElementById("Message").value;

    if (name == "" && email == "" && mess == "") {
        alert("Check the input.....!");
    }
    else {
        const MessageMe = firebase.database().ref("MessageMe").push();
        MessageMe.set({
            Name: name,
            Email: email,   
            MessageData: mess,
        });
        document.getElementById("span").style.visibility="visible";
        setTimeout(() => {
            location.reload();
        }, 2000);
    }

}



