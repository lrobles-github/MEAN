var _ = {


    // map_.map(list, iteratee, [context]) Alias: collect 
    // Produces a new array of values by mapping each value in list through a transformation function (iteratee). The iteratee is passed three arguments: the value, then the index (or key) of the iteration, and finally a reference to the entire list.

    // _.map([1, 2, 3], function(num){ return num * 3; });
    // => [3, 6, 9]
    map: function (array, callback) {
        let result = [];
        for (var i = 0; i < array.length; i++) {
            result.push(callback(array[i]));
        }
        return result;
    },



    // reduce_.reduce(list, iteratee, [memo], [context]) Aliases: inject, foldl 
    // Also known as inject and foldl, reduce boils down a list of values into a single value. Memo is the initial state of the reduction, and each successive step of it should be returned by iteratee. The iteratee is passed four arguments: the memo, then the value and index (or key) of the iteration, and finally a reference to the entire list.

    // If no memo is passed to the initial invocation of reduce, the iteratee is not invoked on the first element of the list. The first element is instead passed as the memo in the invocation of the iteratee on the next element in the list.

    // var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
    // => 6
    reduce: function () {
        // code here;
    },






    // find_.find(list, predicate, [context]) Alias: detect 
    // Looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.

    // var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
    // => 2
    find: function () {
        // code here;
    },




    // filter_.filter(list, predicate, [context]) Alias: select 
    // Looks through each value in the list, returning an array of all the values that pass a truth test (predicate).

    // var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
    // => [2, 4, 6]
    filter: function (list, callback) {

        let newList = [];
        for (var index = 0; index < list.length; index++) {
            if (callback(list[index])) {
                newList.push(list[index]);
            }
        }
        return newList;
    },





    // reject_.reject(list, predicate, [context]) 
    // Returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter.

    // var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
    // => [1, 3, 5]
    reject: function () {
        // code here;
    }
}


var mapped = _.map([1, 2, 3], function(num){ return num * 3; });
console.log(mapped); // returns [3, 6, 9]

var evens = _.filter([1, 2, 3, 4, 5, 6], function (num) {
    return num % 2 == 0;
});
console.log(evens); // if things are working right, this will return [2,4,6].