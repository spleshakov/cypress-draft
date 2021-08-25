# cypress-draft
cypress sample project

## Installation

The project relies on a locally installed cypress, so `npm i` might be needed once the repository is checked out

## Running tests

Use `cypress run` to execute all tests in headless mode

OR

`npm run tests` to start cypress and run tests from the application

OR

in order to run tests in docker environment use this command

``` SPEC="01-header.spec.js" sh run-tests.sh ```

where spec can be a name of particular file, or 'ALL' for all specs

NOTE, this has been made for linux based environments and may not work on windows

## File structure

Methods and locators are separated from specs into component objects for reusability, 
and are located under `cypress/component-objects`

## NOTES

Comments marked with `// TODO` indicate redundant code, and explain why I shouldn't be doing this way, and why I did 
