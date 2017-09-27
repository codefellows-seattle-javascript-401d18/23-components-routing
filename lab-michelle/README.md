# Lab 23

Using react to make some note type thing


App Component

    the app component should manage the entire application state
    the state should contain a notes array
    each note should have the following data
        id - always should contain the result of uuid.v1()
        editing - false by default
        completed - false by default
        content - user provided content

NoteCreateForm Component

    onSubmit - the NoteCreateForm component should add a note to the application state
    note: in your app component, create a method for logging the state of your application when a note is added (ie: componentDidUpdate)
        this should show an array of all notes that have been added to the state
