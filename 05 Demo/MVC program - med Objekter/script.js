//MODEL
//Administratorer - "Databasen"

let model = {
    users: {"admin": "123456"},
// Applikations-tilstand
    loggedInState: false,
    user: null
}

//---------------------------
//CONTROLLER
//EventHandler for login();

let controller = {
    login: function()
{
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    //Slå brugeren op i "Databasen"
    if (model.users[username] === password) {
        //Opdatér applikationens tilstand!!
        model.loggedInState = true;
        model.user = username;
    }
    //Opdatér Brugergrænsefladen
    this.render();
},

//EventHandler for logout();
logout: function() {
    //Opdatér applikationens tilstand
    model.user = null;
    model.loggedInState = false;
    //Opdatér brugergrænsefladen
    this.render();

},

//-- render fukntion til at opdatere VIEW'et
render: function() {
    if (model.loggedInState === false) {
        // Vis Login side og skjul resten
        document.getElementById("loggedindiv").hidden = true;
        document.getElementById("logindiv").hidden = false;

    } else {
        //Skjul login side - og vis resten
        document.getElementById("logindiv").hidden = true;
        document.getElementById("loggedindiv").hidden = false;
        document.getElementById("usernamediv").innerHTML = model.user;
    }
}
}