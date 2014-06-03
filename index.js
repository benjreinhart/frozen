var NativeDate = global.Date;

exports.freeze = function(date) {
  date || (date = new Date);

  global.Date = function() {
    if (!(this instanceof NativeDate))
      return NativeDate.apply(this, arguments);
    switch (arguments.length) {
    case 0:
      return copy(date);
    case 1:
      return new NativeDate(arguments[0]);
    case 2:
      return new NativeDate(arguments[0], arguments[1]);
    case 3:
      return new NativeDate(arguments[0], arguments[1], arguments[2]);
    case 4:
      return new NativeDate(arguments[0], arguments[1], arguments[2], arguments[3]);
    case 5:
      return new NativeDate(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    case 6:
      return new NativeDate(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    case 7:
      return new NativeDate(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]);
    }
  }

  Object.keys(NativeDate).forEach(function(prop) {
    Date[prop] = NativeDate[prop];
  });

  Date.now = function() {
    return date.valueOf();
  }

  Date.prototype = Object.create(NativeDate.prototype);
  Date.prototype.constructor = NativeDate;
}

exports.melt = function() {
  global.Date = NativeDate;
};

function copy(date) {
  return new NativeDate(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  );
}
