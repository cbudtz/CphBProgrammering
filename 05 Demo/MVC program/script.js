//MODEL
    //Administratorer - "Databasen"
    let users = {"admin":"123456"}

    // Applikations-tilstand
    let loggedInState = false;
    let user = null;

//---------------------------
//CONTROLLER
    //EventHandler for login();
function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    //Slå brugeren op i "Databasen"
    if (users[username] === password){
        //Opdatér applikationens tilstand!!
        loggedInState = true;
        user = username;
    }
    //Opdatér Brugergrænsefladen
    render();
}
    //EventHandler for logout();
function logout() {
    //Opdatér applikationens tilstand
    user = null;
    loggedInState = false;
    //Opdatér brugergrænsefladen
    render();

}
//-- render fukntion til at opdatere VIEW'et
function render(){
    if (loggedInState === false){
        // Vis Login side og skjul resten
        document.getElementById("loggedindiv").hidden = true;
        document.getElementById("logindiv").hidden = false;

    } else {
        //Skjul login side - og vis resten
        document.getElementById("logindiv").hidden = true;
        document.getElementById("loggedindiv").hidden = false;
        document.getElementById("usernamediv").innerHTML = user;
    }
}