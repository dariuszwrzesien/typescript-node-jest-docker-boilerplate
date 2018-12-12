const packageJson = require('./package');

test('Package.json content verify', () => {
    expect(packageJson.name).not.toBeUndefined();
    expect(packageJson.version).not.toBeUndefined();
    expect(packageJson.description).not.toBeUndefined();
});
