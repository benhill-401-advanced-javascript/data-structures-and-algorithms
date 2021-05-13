'use strict';
// to learn more about the cheerio library and what it is doing, look at their documentation: https://www.npmjs.com/package/cheerio
var cheerio = require('cheerio');
var Mustache = require('mustache');
/* ------------------------------------------------------------------------------------------------

CHALLENGE 1 - Review

Use the characters data below for all of the challenges except challenge 2.

Write a function named templatingWithMustache that uses mustache to create the markup templates for each of the characters. Use the snippet as your guide for creating your templates. Return an array of template strings. Note: this function does not need to actually append the markup to the DOM.

------------------------------------------------------------------------------------------------ */
var characters = [
    {
        name: 'Eddard',
        spouse: 'Catelyn',
        children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
        house: 'Stark'
    },
    {
        name: 'Jon A.',
        spouse: 'Lysa',
        children: ['Robin'],
        house: 'Arryn'
    },
    {
        name: 'Cersei',
        spouse: 'Robert',
        children: ['Joffrey', 'Myrcella', 'Tommen'],
        house: 'Lannister'
    },
    {
        name: 'Daenarys',
        spouse: 'Khal Drogo',
        children: ['Drogon', 'Rhaegal', 'Viserion'],
        house: 'Targaryen'
    },
    {
        name: 'Mace',
        spouse: 'Alerie',
        children: ['Margaery', 'Loras'],
        house: 'Tyrell'
    },
    {
        name: 'Euron',
        spouse: null,
        children: [],
        house: 'Greyjoy'
    },
    {
        name: 'Jon S.',
        spouse: null,
        children: [],
        house: 'Snow'
    }
];
var $ = createSnippetWithJQuery("\n<script id=\"template\" type=\"x-tmpl-mustache\">\n<h2>{{ name }}</h2>\n<h3>{{ spouse }}</h3>\n{{#children}}\n* {{.}}\n{{/children}}\n<p> {{ house }} </p>\n</script>\n");
var templatingWithMustache = function () {
    // Solution code here...
    var array = [];
    Object.values(characters).forEach(function (person) {
        var $template = $('#template').html();
        var rendered = Mustache.render($template, person);
        array.push(rendered);
    });
    return array;
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named getCourseKeys that takes in the courseInfo object and returns an array containing the keys for the courseInfo object.

For example: (['name', 'duration', 'topics', 'finalExam']).
------------------------------------------------------------------------------------------------ */
var courseInfo = { name: 'Code 301', duration: { dayTrack: '4 weeks', eveningTrack: '8 weeks' },
    topics: ['SMACSS', 'APIs', 'NodeJS', 'SQL', 'jQuery', 'functional programming'],
    finalExam: true
};
var getCourseKeys = function (obj) {
    // Solution code here...
    return Object.keys(obj);
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named getHouses that returns a new array containing the names of all of the houses in the data set.
------------------------------------------------------------------------------------------------ */
var getHouses = function (arr) {
    var houses = [];
    // Solution code here...
    arr.forEach(function (obj) {
        houses.push(obj.house);
    });
    return houses;
};
/*------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named hasChildrenValues that uses Object.values to determine if any given character in the data set has children.

This function should take in an array of data and a character name and return a Boolean.

For example:
hasChildrenValues(characters, 'Cersei') will return true
hasChildrenValues(characters, 'Sansa') will return false
------------------------------------------------------------------------------------------------ */
var hasChildrenValues = function (arr, character) {
    // Solution code here...
    for (var i = 0; i < arr.length; i++) {
        if (Object.values(arr[i]).includes(character)) {
            return arr[i].children.length !== 0;
        }
    }
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 5 - Stretch Goal

Write a function named hasChildrenEntries that is similar to your hasChildrenValues function from challenge 3, but uses the data's entries instead of its values.

The input and output of this function are the same as the input and output from challenge 3.
------------------------------------------------------------------------------------------------ */
var hasChildrenEntries = function (arr, character) {
    // Solution code here...
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 - Stretch Goal

Write a function named totalCharacters that takes in an array and returns the number of characters in the array.
------------------------------------------------------------------------------------------------ */
var totalCharacters = function (arr) {
    // Solution code here...
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named houseSize that takes in the array of characters and creates an object for each house containing the name of the house and the number of members.

All of these objects should be added to an array named "sizes". Return the "sizes" array from the function.

For example: [{ house: 'Stark', members: 7 }, { house: 'Arryn', members: 3 }, ... ].
------------------------------------------------------------------------------------------------ */
var houseSize = function (arr) {
    var sizes = [];
    // Solution code here...
    return sizes;
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

As fans are well aware, "When you play the game of thrones, you win or you die. There is no middle ground."

We will assume that Alerie Tyrell is deceased. She missed her daughter's wedding. Twice.

Write a function named houseSurvivors. You may modify your houseSize function from challenge 6 to use as the basis of this function.

This function should create an object for each house containing the name of the house and the number of members. If the spouse is deceased, do not include him/her in the total number of family members.

All of these objects should be added to an array named "survivors". Return the "survivors" array from the function.

For example: [ { house: 'Stark', members: 6 }, { house: 'Arryn', members: 2 }, ... ].
------------------------------------------------------------------------------------------------ */
var deceasedSpouses = ['Catelyn', 'Lysa', 'Robert', 'Khal Drogo', 'Alerie'];
var houseSurvivors = function (arr) {
    var survivors = [];
    // Solution code here...
    return survivors;
};
/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-06.test.js

------------------------------------------------------------------------------------------------ */
describe('Testing challenge 1', function () {
    test('It should return html markup with the character', function () {
        var filledTemplates = templatingWithMustache();
        var $ = cheerio.load(filledTemplates[0]);
        expect($('h2').text()).toStrictEqual('Eddard');
    });
});
describe('Testing challenge 2', function () {
    test('It should return the keys from an object', function () {
        expect(getCourseKeys(courseInfo)).toStrictEqual(['name', 'duration', 'topics', 'finalExam']);
    });
});
describe('Testing challenge 3', function () {
    test('It should return an array of the names of the houses', function () {
        expect(getHouses(characters)).toStrictEqual(['Stark', 'Arryn', 'Lannister', 'Targaryen', 'Tyrell', 'Greyjoy', 'Snow']);
        expect(getHouses(characters).length).toStrictEqual(7);
    });
});
describe('Testing challenge 4', function () {
    test('It should return true for characters that have children', function () {
        expect(hasChildrenValues(characters, 'Daenarys')).toBeTruthy();
    });
    test('It should return false to characters who do not have children', function () {
        expect(hasChildrenValues(characters, 'Sansa')).toBeFalsy();
    });
});
xdescribe('Testing challenge 5', function () {
    test('It should return true for characters that have children', function () {
        expect(hasChildrenEntries(characters, 'Eddard')).toBeTruthy();
    });
    test('It should return false to characters who do not have children', function () {
        expect(hasChildrenEntries(characters, 'Jon S.')).toBeFalsy();
    });
});
xdescribe('Testing challenge 6', function () {
    test('It should return the number of characters in the array', function () {
        expect(totalCharacters(characters)).toStrictEqual(26);
    });
});
xdescribe('Testing challenge 7', function () {
    test('It should return an object for each house containing the name and size', function () {
        expect(houseSize(characters)).toStrictEqual([{ house: 'Stark', members: 7 }, { house: 'Arryn', members: 3 }, { house: 'Lannister', members: 5 }, { house: 'Targaryen', members: 5 }, { house: 'Tyrell', members: 4 }, { house: 'Greyjoy', members: 1 }, { house: 'Snow', members: 1 }]);
        expect(houseSize(characters).length).toStrictEqual(7);
    });
});
xdescribe('Testing challenge 8', function () {
    test('It should not include any deceased spouses', function () {
        expect(houseSurvivors(characters)).toStrictEqual([{ house: 'Stark', members: 6 }, { house: 'Arryn', members: 2 }, { house: 'Lannister', members: 4 }, { house: 'Targaryen', members: 4 }, { house: 'Tyrell', members: 3 }, { house: 'Greyjoy', members: 1 }, { house: 'Snow', members: 1 }]);
    });
});
function createSnippetWithJQuery(html) {
    return cheerio.load(html);
}
