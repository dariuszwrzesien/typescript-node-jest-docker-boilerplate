import { sum } from './foo';

test('if return zero when missing parameters', () => {
    expect(sum()).toBe(0);
});

test('return expected result when add to number', () => {
    expect(sum(1, 2)).toBe(3);
});
