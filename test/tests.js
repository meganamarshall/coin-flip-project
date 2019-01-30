const test = QUnit.test;
import catOrDog from '../src/cat-or-dog.js';


test('return cat if randomNumber is < 0.5', function(assert) {
    const randomNumber = 0.4;
    const result = catOrDog(randomNumber);
    const expected = 'cat';

    assert.equal(result, expected);
});

test('return dog if randomNumber is >= 0.5', function(assert) {
    const randomNumber = 0.5;
    const result = catOrDog(randomNumber);
    const expected = 'dog';

    assert.equal(result, expected);
})
