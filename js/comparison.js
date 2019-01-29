'use strict';

function testFalseLooseEqualityComparison(){
<<<<<<< HEAD
    var x = 0;
    var y = 1;
    return x == y;
}

function testTrueLooseNonEqualityComparison(){
    var x = 0;
    var y = 1;
    return x != y;
}

function testTrueLooseEqualityComparison(){
    var x = 1;
    var y = 1;
    return x == y;
}

function testFalseStrictEqualityComparison(){
    var x = 1;
    var y = "1";
    return x === y;
}

function testTrueStrictEqualityComparison(){
    var x = 1;
    var y = "1";
    return x === parseInt(y);
}
=======
  var x = 0;
  var y = 1;
  if x == y {
    return false;
  } else {
    return true;
  }
}
>>>>>>> ae761d6052b13069c3d140f83e7d4a6b030bca26
