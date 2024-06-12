function testVarScope() {
    const constant = 0;
    var varVariable = 0;
    let letVariable = 0;
}

testVarScope();

console.log(constant); // ReferenceError: constant is not defined
console.log(varVariable); // ReferenceError: varVariable is not defined
console.log(letVariable); // ReferenceError: letVariable is not defined