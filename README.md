# Character Manager

## Description

Character Manager is a simple web application that allows you to manage your characters for your favorite role-playing games.
This project is build with vanilla JavaScript, HTML and scss.

## information about the project

development: 8-11-2022 15-11-2022

team members: 
* [Christophe Danniau Crimsm](https://github.com/Crimsm)
* [TanguyC0](https://github.com/TanguyC0)

link to the project: [Character Manager](https://startling-heliotrope-f56c15.netlify.app)
## Objectives of this project

* Use best JS practices
* Read documentation and test a REST API
* Use a REST API with HTTP requests
* Create a typical asynchronous flow : send asynchronous (promises or async/await) requests to a remote server and process the results
* DOM manipulation: changing the DOM based on results of HTTP requests

## The features

### Characters list page

This page will be the first one displayed when you open the app. Display the list of all the characters contained inside the database. You can use a table or a list of cards to display them, at your convenience.

display for the page:

* characters
* a button to add a new character
* [optional] a search bar to filter the characters

display for each character:

* the name of the character
* a short description of the character
* an image of the character
* a link to the character details page

### Character details page

This page will display the details of a character. It will be accessible by clicking on a character in the list of characters.

This page will display:

* the name of the character
* an image of the character
* a short description of the character
* a description of the character
* a link to the character edit page
* buttons to delete the character
    * [optional] a display delete confirmation modal

### Character creation/modification page

This page will allow you to create a new character. It will be accessible by clicking on the "add a new character" button on the characters list page.

The elements to display on this page are:

* a form to create a new character
    * input name
    * input image
    * input short description
    * textarea description
* a button to create the character
* [only for modification] a button to cancel the creation