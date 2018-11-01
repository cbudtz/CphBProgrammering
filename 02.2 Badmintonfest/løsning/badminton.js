/**
 * Created by Christian on 06-02-2018.
 */
let alder = Number(prompt("Indtast din alder"));
let costume = prompt("Skriv din udklædning");

//TODO udtænk det rigtige udtryk.
if( (alder >= 14 && alder <=18) && (costume==="indianer" || costume ==="cowboy") ) {
    alert("Du må gerne komme ind");
} else {
    alert("Du må ikke komme ind");
}