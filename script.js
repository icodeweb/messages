let messages = [
    {
        id: null,
        type: "text",
        message: "Hey there 👋"
    }, {
        id: null,
        type: "text",
        message: "I'm Julian"
    }, {
        id: null,
        type: "text",
        message: "I design and code things on the web"
    }, {
        id: null,
        type: "text",
        message: "I'm currently working on anime.js v4"
    }, {
        id: null,
        type: "text",
        message: "You can find me on X, Bluesky and GitHub"
    }, {
        id: null,
        type: "text",
        message: "Or contact me directly at hello@julian.gr"
    }, {
        id: null,
        type: "text",
        message: "Have a nice day"
    }, {
        id: null,
        type: "text",
        message: "~ J."
    }
]

messages.forEach((message, index) => {
    setTimeout(() => {
        let messageElemnt = document.createElement("p");
        messageElemnt.classList.add("message", "loading");
        messageElemnt.innerText = message.message;
        document.querySelector(".container").appendChild(messageElemnt);
        setTimeout(() => {
            messageElemnt.classList.remove("loading");
        }, 1000);
    }, (index) * 2000);
});

