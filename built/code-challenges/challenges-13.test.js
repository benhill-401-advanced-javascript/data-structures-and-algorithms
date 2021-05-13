'use strict';
// to learn more about the cheerio library and what it is doing, look at their documentation: https://www.npmjs.com/package/cheerio
var cheerio = require('cheerio');
/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

There's a typo in the markup. The Pear is misspelled Perr.
Cheerio is a alternative implementation of jQuery that works on server
Use Cheerio with jQuery syntax to fix the typo
------------------------------------------------------------------------------------------------ */
var $ = createSnippetWithJQuery("\n<ul id=\"fruits\">\n  <li class=\"apple\">Apple</li>\n  <li class=\"orange\">Orange</li>\n  <li class=\"pear\">Perr</li>\n</ul>\n");
var fixTheTypo = function () {
    // Solution code here...
    var $error = $('<li class="pear">Pear</li>');
    $('.pear').replaceWith($error);
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named firstLetters that takes in an array of strings and returns an array containing only the first letter of each string.

For example, ['this is great :)', 'wow', 'whyyyyyy :(', ':)))))'] returns ['t', 'w', 'w', ':']
------------------------------------------------------------------------------------------------ */
var firstLetters = function (arr) {
    // Solution code here...
    return arr.map(function (str) { return str.charAt(0); });
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named findHappiness that takes in an array of strings and returns an array containing only the strings from the input array that contain ":)".

For example, ['this is great :)', 'wow', 'whyyyyyy :(', ':)))))'] returns ['this is great :)', ':)))))']
------------------------------------------------------------------------------------------------ */
var findHappiness = function (arr) {
    // Solution code here...
    return arr.filter(function (str) { return str.includes(':)'); });
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named standardizePhoneNumbers that takes in an array of phone number strings in (XXX) XXX-XXXX format and returns an array with the phone number strings in XXXXXXXXXX format.

For example, (123) 456-7890 returns 1234567890
------------------------------------------------------------------------------------------------ */
var standardizePhoneNumbers = function (arr) {
    // Solution code here...
    return arr.map(function (str) { return str.substring(1, 4) + str.substring(6, 9) + str.substring(10, 14); });
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 5 - Stretch Goal

Write a function named onlyOddChars that takes in a string and returns only the odd-index characters from that string.

For example, 'abcdefg' returns 'bdf'
------------------------------------------------------------------------------------------------ */
var onlyOddChars = function (str) {
    // Solution code here...
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 - Stretch Goal

Write a function named allHappy that takes in an array of strings and returns a Boolean indicating whether all those strings contain ":)".
------------------------------------------------------------------------------------------------ */
var allHappy = function (arr) {
    // Solution code here...
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named findAnything that takes in an array of strings, along with a target string. Return an array containing only those strings from the original array that contain the target string.
------------------------------------------------------------------------------------------------ */
var findAnything = function (arr, target) {
    // Solution code here...
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function named findEvery that takes in an array of strings, along with a target string. Return a Boolean based on whether or not every string in the array contains the target string.
------------------------------------------------------------------------------------------------ */
var findEvery = function (arr, target) {
    // Solution code here...
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal

We've been testing a new course enrollment system, and we think we have the bugs worked out, but in the meantime, Brook enrolled himself in a bunch of different classes to test if it was working.

Write a function named unenrollBrook that takes in a two-dimensional array, where each array represents one course's roster and is an array of strings of the names of the people in that course.

Return a two-dimensional array with the same roster, but where anyone whose name includes Brook is removed from every course.

For example, [['Brook Testing', 'Actual Person'], ['Human Person', 'Brook again', 'still Brook']] returns [['Actual Person'], ['Human Person']]
------------------------------------------------------------------------------------------------ */
var unenrollBrook = function (arr) {
    // Solution code here...
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal

Write a function named sortByDay that takes in an array of strings, each of which represents an event's day and time.

Return a two-dimensional array that organizes those strings based on the day on which they occur. For example, all events on Monday are in the first array, all events on Tuesday are in the second array, etc.

If an event takes place on multiple days (i.e. "Dancing on Mondays and Tuesdays"), it should appear in both arrays.

For example, ['Tuesday', 'Monday', 'Wednesday and Thursday', 'Tuesday 2', 'Thursday'] returns
[
  ['Monday'],
  ['Tuesday', 'Tuesday 2'],
  ['Wednesday and Thursday'],
  ['Wednesday and Thursday', 'Thursday'],
  [],
  [],
  []
]
------------------------------------------------------------------------------------------------ */
var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var sortByDay = function (arr) {
    // Solution code here...
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 11 - Stretch Goal

Write a function named characterByIndex that takes in an array of strings and returns an array containing the first character of the first string, the second character of the second string, etc.

For example, ['abcd', 'efgh', 'ijkl', 'mnop'] returns ['a', 'f', 'k', 'p']
------------------------------------------------------------------------------------------------ */
var characterByIndex = function (arr) {
    // Solution code here...
};
/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-13.test.js

------------------------------------------------------------------------------------------------ */
describe('Testing challenge 1', function () {
    test('It should return markup with typo fixed', function () {
        fixTheTypo();
        expect($('.pear').text()).toStrictEqual('Pear');
    });
});
describe('Testing challenge 2', function () {
    test('It should return the first letter of each element of the array', function () {
        var words = ['apple', 'banana', 'cantaloupe'];
        expect(firstLetters(words)).toStrictEqual(['a', 'b', 'c']);
        expect(firstLetters(['a', 'b', 'c', 'd'])).toStrictEqual(['a', 'b', 'c', 'd']);
        expect(firstLetters([])).toStrictEqual([]);
    });
});
describe('Testing challenge 3', function () {
    test('It should return only the strings that contain smiley faces', function () {
        var words = ['things', 'apple (:)', ':)banana', 'missing that thing', 'cant:)aloupe'];
        expect(findHappiness(words)).toStrictEqual(['apple (:)', ':)banana', 'cant:)aloupe']);
        expect(findHappiness([])).toStrictEqual([]);
        expect(findHappiness(['sadness'])).toStrictEqual([]);
        expect(findHappiness([':) yay', ':( no', '', '', '', ''])).toStrictEqual([':) yay']);
    });
});
describe('Testing challenge 4', function () {
    test('It should return a standardized set of phone numbers', function () {
        var nums = ['(123) 456-7890', '(222) 222-2222'];
        expect(standardizePhoneNumbers(nums)).toStrictEqual(['1234567890', '2222222222']);
        expect(standardizePhoneNumbers([nums[0]])).toStrictEqual(['1234567890']);
    });
});
xdescribe('Testing challenge 5', function () {
    test('It should only return the odd indexed characters from the string', function () {
        expect(onlyOddChars('0123456789')).toStrictEqual('13579');
        expect(onlyOddChars('abcd')).toStrictEqual('bd');
        expect(onlyOddChars('a')).toStrictEqual('');
        expect(onlyOddChars('')).toStrictEqual('');
    });
});
xdescribe('Testing challenge 6', function () {
    test('It should correctly assess whether all the strings are happy', function () {
        var words = ['things', 'apple (:)', ':)banana', 'missing that thing', 'cant:)aloupe'];
        expect(allHappy(words)).toStrictEqual(false);
        expect(allHappy(['apple (:)', ':)banana', 'cant:)aloupe'])).toStrictEqual(true);
        expect(allHappy([])).toStrictEqual(true);
    });
});
xdescribe('Testing challenge 7', function () {
    test('It should find all the strings that contain a given string', function () {
        var words = ['things', 'apple (:)', ':)banana', 'missing that thing', 'cant:)aloupe'];
        expect(findAnything(words, ':)')).toStrictEqual(findHappiness(words));
        expect(findAnything(words, 'i')).toStrictEqual(['things', 'missing that thing']);
    });
});
xdescribe('Testing challenge 8', function () {
    test('It should determine whether all the strings contain a given string', function () {
        var words = ['things', 'apple pie (:)', ':)banana pie', 'missing that thing', 'cant:)aloupe is tasty'];
        expect(findEvery(words, 'a')).toStrictEqual(false);
        expect(findEvery(words, '')).toStrictEqual(true);
        expect(findEvery(words, 'i')).toStrictEqual(true);
    });
});
xdescribe('Testing challenge 9', function () {
    test('It should remove Brook from all courses', function () {
        var roster = [
            ['Michelle', 'Allie', 'Brook TESTING'],
            ['Brook Riggio', 'hey look it\'s Brook', 'Jennifer'],
            ['Nicholas', 'Sam', 'Scott', 'Vinicio']
        ];
        expect(unenrollBrook(roster)).toStrictEqual([
            ['Michelle', 'Allie'],
            ['Jennifer'],
            ['Nicholas', 'Sam', 'Scott', 'Vinicio']
        ]);
        expect(unenrollBrook([['Brook', 'person'], [], ['person', 'person', 'Brook']])).toStrictEqual([['person'], [], ['person', 'person']]);
        expect(unenrollBrook([])).toStrictEqual([]);
    });
});
xdescribe('Testing challenge 10', function () {
    test('It should sort events by the day on which they happen', function () {
        var events = ['Dancing on Mondays and Tuesdays', 'Meet the inventors! Monday, August 7', 'in the club on a Tuesday', 'Thursday Night Code', 'Saturday Night Fever'];
        var sortedEvents = sortByDay(events);
        expect(sortedEvents[0]).toEqual(expect.arrayContaining(['Dancing on Mondays and Tuesdays', 'Meet the inventors! Monday, August 7']));
        expect(sortedEvents[1]).toEqual(expect.arrayContaining(['Dancing on Mondays and Tuesdays', 'in the club on a Tuesday']));
        expect(sortedEvents[2]).toStrictEqual([]);
        expect(sortedEvents[3]).toStrictEqual(['Thursday Night Code']);
        expect(sortedEvents[4]).toStrictEqual([]);
        expect(sortedEvents[5]).toStrictEqual(['Saturday Night Fever']);
        expect(sortedEvents[6]).toStrictEqual([]);
        var events2 = ['Tuesday', 'Monday', 'Wednesday and Thursday', 'Tuesday 2', 'Thursday'];
        var sortedEvents2 = sortByDay(events2);
        expect(sortedEvents2[0]).toStrictEqual(['Monday']);
        expect(sortedEvents2[1]).toEqual(expect.arrayContaining(['Tuesday', 'Tuesday 2']));
        expect(sortedEvents2[2]).toStrictEqual(['Wednesday and Thursday']);
        expect(sortedEvents2[3]).toEqual(expect.arrayContaining(['Wednesday and Thursday', 'Thursday']));
        expect(sortedEvents2[4]).toStrictEqual([]);
        expect(sortedEvents2[5]).toStrictEqual([]);
        expect(sortedEvents2[6]).toStrictEqual([]);
    });
});
xdescribe('Testing challenge 11', function () {
    test('It should return the ith character of the ith string', function () {
        var words = ['apple', 'banana', 'cantaloupe'];
        expect(characterByIndex(words)).toStrictEqual(['a', 'a', 'n']);
        expect(characterByIndex(['abc', 'def', 'ghi'])).toStrictEqual(['a', 'e', 'i']);
        expect(characterByIndex(['wow', 'wow', 'wow'])).toStrictEqual(['w', 'o', 'w']);
    });
});
function createSnippetWithJQuery(html) {
    return cheerio.load(html);
}
