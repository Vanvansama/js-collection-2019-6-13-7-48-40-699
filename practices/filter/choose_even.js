'use strict';

function choose_even(collection) {

  //implement here
  return collection.filter((number) => number % 2 === 0);
}

module.exports = choose_even;
