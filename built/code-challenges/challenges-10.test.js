'use strict';
/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Build a simple express server. Connect a '/hello' route that sends a greeting of your  choice. Connect a '/aboutme' route that sends a short bio about you to the front-end. Finally, connect a '/favoritefoods' route that sends an array to the front-end of your favorite foods. All other routes should respond with a status of 404.
------------------------------------------------------------------------------------------------ */
var createServer = function () {
    // Solution code here...
    var express = require('express');
    var app = express();
    //Routes
    app.get('/hello', getGreeting);
    app.get('/aboutme', getBio);
    app.get('/favoritefoods', getFood);
    function getGreeting(request, response) {
        response.status(200).send('hello');
    }
    function getBio(request, response) {
        response.status(200).send('My name is Ben');
    }
    function getFood(request, response) {
        var array = ['sushi', 'tacos', 'steak'];
        response.status(200).send(array);
    }
    var server = app.listen(3301, function () {
        var port = server.address().port;
        console.log('Example app listening at port', port);
    });
    return server;
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named count that, given an integer and an array of arrays, uses either filter, map, or reduce to count the amount of times the integer is present in the array of arrays.

Note: You might need to use the same method more than once.

For example, count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]]) returns 4.
------------------------------------------------------------------------------------------------ */
var count = function (target, input) {
    // Solution code here...
    return input.map(function (arr) { return arr.filter(function (val) { return val === target; }); }).reduce(function (acc, arr) { return acc += arr.length; }, 0);
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function that, given an array of integer arrays as input, calculates the total sum of all the elements in the array.

You may want to use filter, map, or reduce for this problem, but are not required to. You may need to use the same method more than once.

For example, [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]] returns 66.
------------------------------------------------------------------------------------------------ */
var totalSum = function (input) {
    // Solution code here...
    return input.map(function (arr) { return arr.reduce(function (acc, val) { return acc += val; }); }, 0).reduce(function (acc, val) { return acc += val; }, 0);
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named divisibleByFiveTwoToThePower that accepts an array of arrays as input.

This function should first remove any elements that are not numbers or are not divisible by five.

This function should then raise 2 to the power of the resulting numbers, returning an array of arrays.

For example, [ [0,2,5,4], [2,4,10], [] ] should return [ [1, 32], [1024], [] ].
------------------------------------------------------------------------------------------------ */
var divisibleByFiveTwoToThePower = function (input) {
    // Solution code here...
    return input.map(function (arr) { return arr.filter(function (val) { return (typeof val === 'number' && val % 5 === 0); }); }).map(function (arr) { return arr.map(function (val) { return Math.pow(2, val); }); });
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 5 - Stetch Goal

Write a function named findMaleAndFemale that, given the Star Wars data, below,
returns the names of the characters whose gender is either male or female.

The names should be combined into a single string with each character name separated by "and".

For example, "C-3PO and Luke Skywalker".
------------------------------------------------------------------------------------------------ */
var starWarsData = [{
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '19BBY',
        gender: 'male',
    },
    {
        name: 'C-3PO',
        height: '167',
        mass: '75',
        hair_color: 'n/a',
        skin_color: 'gold',
        eye_color: 'yellow',
        birth_year: '112BBY',
        gender: 'n/a'
    },
    {
        name: 'R2-D2',
        height: '96',
        mass: '32',
        hair_color: 'n/a',
        skin_color: 'white, blue',
        eye_color: 'red',
        birth_year: '33BBY',
        gender: 'n/a'
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        hair_color: 'none',
        skin_color: 'white',
        eye_color: 'yellow',
        birth_year: '41.9BBY',
        gender: 'male'
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        hair_color: 'brown',
        skin_color: 'light',
        eye_color: 'brown',
        birth_year: '19BBY',
        gender: 'female'
    }];
var findMaleAndFemale = function (data) {
    // Solution code here...
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 - Stretch Goal

Write a function named findShortest that, given the Star Wars data from Challenge 6, uses any combination of filter, map and reduce to return the name of the shortest character.
------------------------------------------------------------------------------------------------ */
var findShortest = function (data) {
    // Solution code here...
};
/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-10.test.js

------------------------------------------------------------------------------------------------ */
describe('Testing challenge 1', function () {
    var request = require('supertest');
    var server;
    beforeAll(function () {
        server = createServer();
    });
    afterAll(function () {
        server.close();
    });
    test('responds to /hello', function testHello(done) {
        request(server)
            .get('/hello')
            .expect(200, done);
    });
    test('responds to /aboutme', function testAboutMe(done) {
        request(server)
            .get('/aboutme')
            .expect(200, done);
    });
    test('responds to /favoritefoods', function testFavoriteFoods(done) {
        request(server)
            .get('/favoritefoods')
            .expect(200, done);
    });
    test('responds to /foo', function testNotFound(done) {
        request(server)
            .get('/foo')
            .expect(404, done);
    });
});
describe('Testing challenge 2', function () {
    test('It should return the number of times the input is in the nested arrays', function () {
        expect(count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(4);
        expect(count(3, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(2);
        expect(count(12, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(0);
    });
    test('It should work on empty arrays', function () {
        expect(count(5, [[1, 3, 5, 7, 9], [], [5, 5, 5], [1, 2, 3], []])).toStrictEqual(4);
        expect(count(5, [])).toStrictEqual(0);
    });
});
describe('Testing challenge 3', function () {
    test('It should add all the numbers in the arrays', function () {
        var nums = [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]];
        expect(totalSum(nums)).toStrictEqual(66);
    });
});
describe('Testing challenge 4', function () {
    test('It should return numbers divisible by five, then raise two to the power of the resulting numbers', function () {
        expect(divisibleByFiveTwoToThePower([[10, 20, 5, 4], [5, 6, 7, 9], [1, 10, 3]])).toStrictEqual([[1024, 1048576, 32], [32], [1024]]);
    });
    test('It should return an empty array if none of the numbers are divisible by five', function () {
        expect(divisibleByFiveTwoToThePower([[1, 2, 3], [5, 10, 15]])).toStrictEqual([[], [32, 1024, 32768]]);
    });
    test('It should return an empty array if the values are not numbers', function () {
        expect(divisibleByFiveTwoToThePower([['one', 'two', 'five'], ['5', '10', '15'], [5]])).toStrictEqual([[], [], [32]]);
    });
});
xdescribe('Testing challenge 5', function () {
    test('It should return only characters that are male or female', function () {
        expect(findMaleAndFemale(starWarsData)).toStrictEqual('Luke Skywalker and Darth Vader and Leia Organa');
        expect(findMaleAndFemale([{ name: 'person', gender: 'female' }, { gender: 'lol' }, { name: 'persontwo', gender: 'male' }])).toStrictEqual('person and persontwo');
    });
});
xdescribe('Testing challenge 6', function () {
    test('It should return the name of the shortest character', function () {
        expect(findShortest(starWarsData)).toStrictEqual('R2-D2');
    });
});
