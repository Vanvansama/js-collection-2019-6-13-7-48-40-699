'use strict';

function grouping_count(collection) {

  //implement here
  // return collection.reduce((key,value) => (key[value]++ || (key[value] = 1),key),{});
  return collection.reduce((object,collectionItem) => {
    if (object[collectionItem]) {
      object[collectionItem]++;
    } else {
      object[collectionItem] = 1;
    }
    return object
  },{});
}


module.exports = grouping_count;
