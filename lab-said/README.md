#### Project Description
The is a React used app that has a form allowing us to enter a note and displays a list of entered notes.
This project is for us to practice state! As well as passing data from parent component to child component through the use of props!

#### Objectives  
* We will be able to manage controlled inputs
* We will learn to pass data from parent components to child components through the use of `props`

#### Configuration  
* * [x] `README.md`
* * [x] `.gitignore`
* * [x] `.eslintrc.json`
* * [x] `.babelrc`
* * [x] `package.json`
* * [x] `webpack.config.js`
* * [x] `src/**`
  * * [x] `src/main.js`
  * * [x] `src/index.html`
  * * [x] `src/style`
  * * [x] `src/style/main.scss`

#### Feature Tasks
* create the following components and structure them according to the diagram below:
```
App
 NoteForm
 NodeList
```
###### App Component
* [x] should contain all of the **application state**
* [x] should contain methods for modifying the application state
* [x] the state should have a notes array for holding the results of the entered notes into the form input.

###### The NodtForm Component
* [] should contain a text input for the user to supply a note.
* [] `onSubmit` button.
  * [] on success, it should pass the results to the application state

###### NoteList Component
* [] should inherit all search results through `props`
  [] this component does not need to have its own state!
* [] if there are topics listed in the application state, it should display an unordered list of topics
