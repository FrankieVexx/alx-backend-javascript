const countStudents = require('./3-read_file_async');

countStudents("database.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });
console.log("After!");

/** 
 * Using asynchronous 
 * callbacks is the preferred way to write code in Node to avoid blocking threads
 */