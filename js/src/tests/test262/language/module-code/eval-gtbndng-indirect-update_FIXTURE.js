// |reftest| skip -- not a test file, jstests don't yet support module tests
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

var x = 1;
export { x };

Function('return this;')().test262update = function() {
  x = 2;
};

reportCompare(0, 0);
