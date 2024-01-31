const EventEmitter = require("events");
const event = new EventEmitter();

event.on("sayMyName", () => {
    console.log("Your nname is Nima");
})

event.on("sayMyName", () => {
    console.log("Your nname is Mani");
})

event.on("sayMyName", () => {
    console.log("Your nname is Nimahu");
})

event.emit("sayMyName")

event.on("checkPage", (sc ,msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
})

event.emit("checkPage" , 200 , "OK")