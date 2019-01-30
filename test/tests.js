const test = QUnit.test;

function catOrDog(randomNumber) {
    if(randomNumber < 0.5) {
        return 'cat';
    }
}


test('return cat if randomNumber is < 0.5', function(assert) {
    const randomNumber = 0.4;
    const result = catOrDog(randomNumber);
    const expected = 'cat';

    assert.equal(result, expected);
});
