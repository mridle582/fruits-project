const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main() {
    mongoose.connect("mongodb://0.0.0.0:27017/fruitsDB", { useNewUrlParser: true });
    // console.log("Connected to DB\n");

    const fruitSchema = new mongoose.Schema ({
        name: String,
        rating: Number,
        review: String
    });

    const Fruit = mongoose.model("Fruit", fruitSchema);

    Fruit.find((err, fruits) => {
        // mongoose.connection.close(); 
        fruits.forEach((cFruit) => {
            console.log(cFruit.name);
        });
        mongoose.connection.close(); 
    });
    
    // console.log(`The Contents of Fruits Collection:\n\n${fruits}`);

    // const fruit = new Fruit({
    //     name: "Apple",
    //     rating: 7,
    //     review: "Pretty Solid Fruit"
    // });

    // fruit.save();

    // const kiwi = new Fruit({
    //     name: "Kiwi",
    //     score: 10,
    //     review: "The Best Fruit!!"
    // });

    // const orange = new Fruit({
    //     name: "Orange",
    //     score: 4,
    //     review: "Too sour for me"
    // });
    
    // const banana = new Fruit({
    //     name: "Banana",
    //     score: 3,
    //     review: "Weird texture"
    // });

    // Fruit.insertMany([kiwi, orange, banana]);

    // const personSchema = new mongoose.Schema ({
    //     name: String,
    //     age: Number
    // });

    // const Person = mongoose.model("Person", personSchema);

    // const person = new Person({
    //     name: "John",
    //     age: 37
    // });

    // person.save();

}
