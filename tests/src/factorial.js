factorial = {
  current: 0,

  getFactorialIteratively: function() {
    //for (var i = 0, len = arguments.length; i < len; i++) {
    //  this.current = arguments[i];
    //}
    this.current = arguments[0];

    var factorial = 1;
    for (var c = 1; c <= this.current; ++c) {
      factorial *= c;
    }
    return factorial;
  },

  getFactorialRecursively: function() {
    this.current = arguments[0];
    // base case
    if(this.current <= 1 ){
      return 1;
    }
    return this.current * this.getFactorialRecursively(this.current-1);
  }
}
