'use strict';

function grouping_count(collection) {

  //implement here
  return collection.reduce((key,value) => (key[value]++ || (key[value] = 1),key),{});
}


module.exports = grouping_count;
