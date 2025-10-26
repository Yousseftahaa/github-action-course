function greet(name) {
    return `Hello, ${name}!`; // استخدم backticks مش single quotes
}

module.exports = greet;

// الصح إنك تكتب require.main === module
if (require.main === module) {
    console.log(greet("world"));
}
