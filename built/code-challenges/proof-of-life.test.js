'use strict';
function isAlive() {
    return true;
}
describe('proof of life', function () {
    it('lives', function () {
        expect(isAlive()).toBeTruthy();
    });
});
