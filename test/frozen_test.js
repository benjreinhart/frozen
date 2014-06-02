var expect = require('chai').expect
  , freeze = require('../').freeze
  , melt = require('../').melt
  , NativeDate = global.Date;

function sleep(ms) {
  var now = NativeDate.now()
    , until = now + ms;
  while (NativeDate.now() < until);
}

describe('Frozen', function() {
  var t1, t2;

  before(function() {
    t1 = NativeDate.now();
  });

  // Sanity check that `melt` is working
  after(function() {
    t2 = NativeDate.now();
    expect(t1).to.not.equal(t2);
    expect(t1 < t2).to.be.true;
  });

  afterEach(melt);

  describe('.freeze', function() {
    it('stubs the time to a fixed value', function() {
      var date1, date2;

      freeze(new Date(2010, 5, 2, 17, 33, 12, 438));

      date1 = new Date;
      sleep(30);
      date2 = new Date;

      expect(date1.getFullYear()).to.equal(2010);
      expect(date1.getMonth()).to.equal(5);
      expect(date1.getDate()).to.equal(2);
      expect(date1.getHours()).to.equal(17);
      expect(date1.getMinutes()).to.equal(33);
      expect(date1.getSeconds()).to.equal(12);
      expect(date1.getMilliseconds()).to.equal(438);

      expect(date2.getFullYear()).to.equal(2010);
      expect(date2.getMonth()).to.equal(5);
      expect(date2.getDate()).to.equal(2);
      expect(date2.getHours()).to.equal(17);
      expect(date1.getMinutes()).to.equal(33);
      expect(date1.getSeconds()).to.equal(12);
      expect(date2.getMilliseconds()).to.equal(438);
    });

    it('stubs the time to the current time', function() {
      var date1, date2;

      freeze();

      date1 = new Date;
      sleep(30);
      date2 = new Date;

      expect(date1.getFullYear()).to.equal(date2.getFullYear());
      expect(date1.getMonth()).to.equal(date2.getMonth());
      expect(date1.getDate()).to.equal(date2.getDate());
      expect(date1.getHours()).to.equal(date2.getHours());
      expect(date1.getMinutes()).to.equal(date2.getMinutes());
      expect(date1.getSeconds()).to.equal(date2.getSeconds());
      expect(date1.getMilliseconds()).to.equal(date2.getMilliseconds());
    });

    it('stubs `Date.now`', function() {
      var date1, date2;

      freeze(new Date(2010, 5, 2, 17, 33, 12, 438));

      date1 = Date.now();
      sleep(30);
      date2 = Date.now();

      expect(date1).to.equal(date2);
    });
  });
});
