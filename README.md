# Frozen

Provides methods for stubbing time.

```
npm install frozen
```

## Example

```javascript
var freeze = require('frozen').freeze
  , melt = require('frozen').melt;

describe('Time', function() {
  afterEach(melt);

  it('is frozen', function() {
    freeze(new Date(2011, 1, 13, 8, 33, 14, 274));

    var date1 = new Date();
    sleep(30);
    var date2 = new Date();

    expect(date1.getFullYear()).to.equal(2011);
    expect(date1.getMonth()).to.equal(1);
    expect(date1.getDate()).to.equal(13);
    expect(date1.getHours()).to.equal(8);
    expect(date1.getMinutes()).to.equal(33);
    expect(date1.getSeconds()).to.equal(14);
    expect(date1.getMilliseconds()).to.equal(274);

    expect(date2.getFullYear()).to.equal(2011);
    expect(date2.getMonth()).to.equal(1);
    expect(date2.getDate()).to.equal(13);
    expect(date2.getHours()).to.equal(8);
    expect(date2.getMinutes()).to.equal(33);
    expect(date2.getSeconds()).to.equal(14);
    expect(date2.getMilliseconds()).to.equal(274);
  });
});
```

## API

#### .freeze([date]) → undefined

Freezes the current time to that of the `date` argument (which must be a `Date`), or the current datetime if no arguments are provided.

#### .melt() → undefined

Returns `Date` to the normal, native `Date`.

## License

[MIT](https://github.com/benjreinhart/frozen/blob/master/LICENSE.txt)
