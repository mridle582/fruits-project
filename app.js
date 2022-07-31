const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main() {
    mongoose.connect("mongodb://0.0.0.0:27017/fruitsDB", {
        useNewUrlParser: true
    });
    // console.log("Connected to DB\n");

    const fruitSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            min: 1,
            max: 10
        },
        review: String
    });

    const Fruit = mongoose.model("Fruit", fruitSchema);



    // Fruit.deleteOne({
    //     _id: "62e58a5dd8f76725b5ed8c21"
    // }, (err) => {
    //     err ? console.log(err) : console.log("Deleted record");
    // });

    Fruit.find((err, fruits) => {

        if (err) {
            console.log(err);
        } else {
            fruits.forEach((cFruit) => {
                console.log(cFruit);
            });
            mongoose.connection.close();
        }
    });

    // console.log(`The Contents of Fruits Collection:\n\n${fruits}`);

    // const fruit = new Fruit({
    //     name: "Peach",
    //     rating: 8,
    //     review: "Quite round :^D"
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