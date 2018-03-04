
let animals = []; //No animals in array yet...

function Animal(type, sound){
    this.type = type;
    this.makeSound = function(){alert("the " + type + " says: " + sound)}

}

//TODO make some more animals and fill them into the array!
animals.push(new Animal("cat", "Miuow"));


//Print something interesting to the DOM
for (let i = 0; i<animals.length;i++) {
    //adds a button with an onclick eventhandler that makes a sound!
    document.getElementById("animaldiv").innerHTML +=
        "<BR><button onclick='animals[" + i + "].makeSound()'>" + animals[i].type + "</button> "

}