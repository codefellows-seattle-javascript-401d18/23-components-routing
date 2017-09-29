![cf](https://i.imgur.com/7v5ASc8.png) 23: Components and Routing


#### Project Description
We are creating our own note app! We'll be using client side routing. With our last lab we had all of our components in one file and now we'll be modularizing them.

#### Objectives
* We will be able to create front end routes through the use of `react-router-dom`
* We will be able to restructure their applications to use modular components
* We will be able to differentiate between view state and application state
* We will be able to lift application state to better control one way data flow

#### steps to remember:
1. babel- npm i -D babel

#### flowchart ?????
![flowchart]()

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
  * create the following component and structure it according to the diagram below:
  ```
  App
    NoteCreateForm
  ```
###### App Component
  * the app component should manage the entire **application state**
  * [x] the state should contain a notes array
  * [x] each note should have the following data
    * `id` - always should contain the result of `uuid.v1()`
    * `editing` - false by default
    * `completed` - false by default
    * `content` - user provided content

###### NoteCreateForm Component
* [x] `onSubmit` - the `NoteCreateForm` component should add a note to the application state
* **note:** in your app component, create a method for logging the state of your application when a note is added (ie: `componentDidUpdate`)
  * this should show an array of all notes that have been added to the state

* NoteList
* NoteCreateForm
* SearchForm-
* SearchResultList
* NoteUpdateForm
