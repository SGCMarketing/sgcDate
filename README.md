sgcDate is a simple date library that returns fomatted Date() objects back based on requests written in plan English.

[![Build Status](https://api.travis-ci.org/tj/sgcdate.js.svg?branch=master)](http://travis-ci.org/tj/sgcdate.js)
[![NPM Version](http://img.shields.io/npm/v/sgcdate.svg?style=flat)](https://www.npmjs.org/package/sgcdate)
[![NPM Downloads](https://img.shields.io/npm/dm/sgcdate.svg?style=flat)](https://npmcharts.com/compare/sgcdate?minimal=true)
[![Install Size](https://packagephobia.now.sh/badge?p=sgcdate)](https://packagephobia.now.sh/result?p=sgcdate)

## Installation

This is a [Node.js](https://nodejs.org/en/) package that can be installed from the CLI using the [`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
npm install sgcdate
```

## Using sgcDate

Once installed, sgcDate needs to be included within your project as follows:

```js
const sgcDate = require('sgcdate')
```

To make calls to the library, first initiate a `Date()` object containing the rough date you wish to manipulate and then call the various manipulation functions on that date. For example, to run functions based on today (now), just created a variable from a blank `Date()` object:

```js
// Start a new function and log a message
const now = new sgcDate(Date())
console.log(`firstDayOfMonth: ${now.firstDayOfMonth()}`)
```

You can provide a date object of any timeframe. For example, this will initiate a sgcDate object with an October 2019 date:

```js
const oct = new sgcDate('2019-10-01')
console.log(`firstDayOfMonth: ${oct.firstDayOfMonth()}`)
```

## Manipulators

The following manipulators can be called:

```js
firstDayOfMonth()
lastDayOfMonth()

firstSundayOfMonth()
firstMondayOfMonth()
firstTuesdayOfMonth()
firstWednesdayOfMonth()
firstThursdayOfMonth()
firstFridayOfMonth()
firstSaturdayOfMonth()

startOfDay()
endOfDay()

firstDayOfYear()
lastDayOfYear()
```

An example output (using '2010-10-01' as the starting date will produce):

```js
      firstDayOfMonth: Tue Oct 01 2019 00:00:00 GMT+0100 (British Summer Time)
       lastDayOfMonth: Thu Oct 31 2019 23:59:59 GMT+0100 (British Summer Time)

   firstSundayOfMonth: Sun Oct 06 2019 00:00:00 GMT+0100 (British Summer Time)
   firstMondayOfMonth: Mon Oct 07 2019 00:00:00 GMT+0100 (British Summer Time)
  firstTuesdayOfMonth: Tue Oct 01 2019 00:00:00 GMT+0100 (British Summer Time)
firstWednesdayOfMonth: Wed Oct 02 2019 00:00:00 GMT+0100 (British Summer Time)
 firstThursdayOfMonth: Thu Oct 03 2019 00:00:00 GMT+0100 (British Summer Time)
   firstFridayOfMonth: Fri Oct 04 2019 00:00:00 GMT+0100 (British Summer Time)
 firstSaturdayOfMonth: Sat Oct 05 2019 00:00:00 GMT+0100 (British Summer Time)

           startOfDay: Tue Oct 01 2019 00:00:00 GMT+0100 (British Summer Time)
             endOfDay: Tue Oct 01 2019 23:59:59 GMT+0100 (British Summer Time)

       firstDayOfYear: Tue Jan 01 2019 00:00:00 GMT+0100 (British Summer Time)
        lastDayOfYear: Tue Dec 31 2019 00:00:00 GMT+0100 (British Summer Time)
```

## Support

This package is under active development as we use it in our own products. If you experience any difficulties, please email hello@sgcmarketing.co.uk and we'll get back to you as soon as possible.
