
const assert = require("node:assert/strict");

// Test 1: Basic arithmetic
assert.strictEqual(1 + 1, 3);

// Test 2: String comparison
assert.strictEqual("DevOps".toLowerCase(), "devops");

// Test 3: Array length
assert.strictEqual([1, 2, 3].length, 3);

console.log("All automated tests passed!");
