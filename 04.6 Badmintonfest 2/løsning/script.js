function checkAccess(){
    let alder = document.getElementById("age").value;
    let costume = document.getElementById("dress").value;
    let resultatDiv = document.getElementById("resultat");

    if( (alder >= 14 && alder <=18) && (costume==="indianer" || costume ==="cowboy") ) {
        //alert("Du må gerne komme ind");
        resultatDiv.innerHTML = "Du må gerne komme ind";
    } else {
        resultatDiv.innerHTML = "Du må ikke komme ind";
    }

}