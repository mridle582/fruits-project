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

    const personSchema = new mongoose.Schema ({
        name: String,
        age: Number,
        favFruit: fruitSchema
    });

    const Person = mongoose.model("Person", personSchema);

    const plum = new Fruit({
        name: "Plum",
        score: 5,
        review: "Meh imo"
    });

    // Fruit.deleteOne({name: "Plum"}, (err) => {
    //     err ? console.log(err) : console.log("Deleted record");
    // });

    // pineapple.save();
    plum.save();

    // Person.deleteOne({name: "Amy"}, (err) => {
    //         err ? console.log(err) : console.log("Deleted record");
    // });

    // const person = new Person({
    //     name: "Amy",
    //     age: 12,
    //     favFruit: pineapple
    // });

    // person.save();

    Person.updateOne({name:"John"}, {favFruit: plum}, (err) => {
        err ? console.log(err) : console.log("Updated record");
    });

    // mongoose.connection.close();
}

    // Fruit.deleteOne({
    //     _id: "62e58a5dd8f76725b5ed8c21"
    // }, (err) => {
    //     err ? console.log(err) : console.log("Deleted record");
    // });

    // Fruit.find((err, fruits) => {

    //     if (err) {
    //         console.log(err);
    //     } else {
    //         fruits.forEach((cFruit) => {
    //             console.log(cFruit);
    //         });
    //         mongoose.connection.close();
    //     }
    // });

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
