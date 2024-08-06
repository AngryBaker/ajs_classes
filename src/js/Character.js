export default class Character {
  constructor(name, type){
    if (typeof name === "string" && name.length > 1 && name.length < 11) {
        this.name = name; 
        this.health = 100;
        this.level = 1;
    } else {
        throw new Error("Некорректные данные")
    }

    if (typeof type === "string" && (type === "Bowerman" || type === "Swordsman" || type === "Magician" || type === "Daemon" || type === "Undead" || type === "Zombie")) {
        this.type = type;
    }
    
  } 
  
}