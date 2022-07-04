class ninja {
    constructor(name,health){
        this.name = name;
        this.health=health;
        this.speed = 3;
        this.strength=3;
}
sayName(){
    console.log("${this.name}");
}

showStats(){
    console.log("${this.name},${this.health},${this.speed},${this.strength}")
}

drinkSake(){
    this.health += 10;
}

}
class sensai extends ninja{
    constructor(name){
        super(name);
        this.name = name;
        this.health=200;
        this.speed = 10;
        this.strength=10;
        this.wisdom=10;
}
speakWisdom(){
    super.drinkSake();
    console.log("YAY")
}


}