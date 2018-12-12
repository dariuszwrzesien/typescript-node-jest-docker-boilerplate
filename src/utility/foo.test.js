"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const foo_1 = require("./foo");
test('if return zero when missing parameters', () => {
    expect(foo_1.sum()).toBe(0);
});
test('return expected result when add to number', () => {
    expect(foo_1.sum(1, 2)).toBe(3);
});
//# sourceMappingURL=foo.test.js.map