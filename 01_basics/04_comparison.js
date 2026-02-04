console.log("2">1);
console.log("02">1);

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

// NOTE:
// Relational operators (> < >= <=) convert null to 0,
// but loose equality (==) treats null specially (only equal to undefined).
// Hence:
// null > 0   → false
// null == 0  → false
// null >= 0  → true
// Always prefer strict equality (===) to avoid such confusing behavior.

console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined >= 0)

// ===
console.log("2"==2)
console.log("2"===2)

