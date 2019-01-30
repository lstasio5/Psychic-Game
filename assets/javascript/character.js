function Character (name, profession, gender, age, strength,hp)
{
    this.name = name,
    this.profession = profession,
    this.gender = gender,
    this.age = age,
    this.strength = strength,
    this.hp = hp,
    this.printStats= function() {
        console.log("Name: " + this.name);
        console.log("Profession: " + this.profession);
        console.log("Gender: " + this.gender);
        console.log("Age: " + this.age);
        console.log("Strength: " + this.strength);
        console.log("HP: " + this.hp);
    }

}

