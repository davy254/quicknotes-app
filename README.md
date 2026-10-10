# Notes App

A simple notes app built with HTML, CSS and JavaScript. You can write short notes, sort them into categories, search through them and delete the ones you no longer need. Notes are saved in the browser, so they are still there after a refresh.

## Features

- Add notes with a category (Personal, Work or Study)
- Each note shows its text, category label, date and time and a Delete button
- Validation is done by empty notes and notes over 200 characters show an error message
- Delete any note with one click
- Live search that filters notes as you type (not case-sensitive)
- A "No notes match your search." message when nothing is found
- A note count that reads correctly for zero, one and many notes
- Notes saved to `localStorage`, so they survive a page refresh
- Colour-coded category cards and a responsive layout for small screens

## How to run locally

1. Clone the repository:
```bash
   git clone https://github.com/davy254/quicknotes-app.git
```
2. Open the project folder:
```bash
   cd YOUR-REPO
```
3. Open `index.html` in your browser (double-click it, or use a tool like the VS Code Live Server extension).



## What I learned

- How to structure a page with semantic HTML (`header`, `main`, `section`, `footer`) and link every `label` to its input.
- How to build the UI from an array of objects with `createElement` and `textContent`.
- How to save and load data with `localStorage`, using `JSON.stringify` and `JSON.parse`.
- How to use Flexbox for the form and a media query to stack it on small screens.
- How to break a project into small tasks and commit after each one to keep a clear Git history.