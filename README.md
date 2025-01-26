# Unexpected NaN Comparison in JavaScript

This repository demonstrates a common, yet subtle, error in JavaScript related to comparing NaN (Not a Number) values.

## The Problem

In JavaScript, `NaN` is a special value that represents the result of an invalid numerical operation.  Intuitively, you might expect `NaN === NaN` to return `true`.  However, this is **false**.

The `bug.js` file shows this unexpected behavior.  Even using strict equality (`===`), `NaN` is never equal to itself or any other value, including another `NaN`.

## The Solution

To reliably check for `NaN`, use the `Number.isNaN()` function, which specifically tests for `NaN` values.  The `bugSolution.js` file demonstrates the correct approach. 

## How to Run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred JavaScript environment.
3. Run the code to observe the difference in the comparison results.