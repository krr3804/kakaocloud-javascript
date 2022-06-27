let hello = function hello() {
    return "hello js";
}

let start = () => {
    return "start";
}

exports.test = hello;
exports["test1"] = start;