

function Animal(name,makeSoundFunction){
    this.name = name;
    this.makeSound = makeSoundFunction
}

let dog = new Animal("Fido",function(){
        document.getElementById("output").innerHTML = "WOOF"}
    );



let cat = new Animal("Garfield", function(){
    document.getElementById("output").innerHTML = "MIAOW"}
    );


//TODO Add another animal