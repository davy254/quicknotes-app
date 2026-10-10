// Select elements
const noteForm = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const noteCategory = document.querySelector("#note-category");
const notesList = document.querySelector("#notes-list");
const errorMessage = document.querySelector("#error-message");  // new
const noteCount = document.querySelector("#note-count");        // new

const MAX_LENGTH = 200;                                         // new

// Notes stored as an array of objects
let notes = [];

// Build the count message for 0, 1 and many notes             // new
function updateCount() {
  if (notes.length === 0) {
    noteCount.textContent = "You have no notes yet.";
  } else if (notes.length === 1) {
    noteCount.textContent = "You have 1 note.";
  } else {
    noteCount.textContent = "You have " + notes.length + " notes.";
  }
}

// Remove one note by id                                        // new
function deleteNote(id) {
  notes = notes.filter(function (note) {
    return note.id !== id;
  });
  render();
}

// Rebuild the list from the array
function render() {
  notesList.replaceChildren();

  notes.forEach(function (note) {
    const li = document.createElement("li");
    li.className = "note category-" + note.category;

    const text = document.createElement("p");
    text.className = "note-text";
    text.textContent = note.text;

    const label = document.createElement("span");
    label.className = "note-category";
    label.textContent =
      note.category.charAt(0).toUpperCase() + note.category.slice(1);

    const date = document.createElement("small");
    date.className = "note-date";
    date.textContent = note.createdAt;

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {           // new
      deleteNote(note.id);
    });

    li.append(text, label, date, deleteBtn);
    notesList.appendChild(li);
  });

  updateCount();                                                // new
}

// Add a note when the form is submitted
noteForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = noteInput.value.trim();

  // Validation                                                 // new
  if (text === "") {
    errorMessage.textContent = "Please type a note first.";
    return;
  }
  if (text.length > MAX_LENGTH) {
    errorMessage.textContent = "Notes must be 200 characters or fewer.";
    return;
  }

  errorMessage.textContent = "";                                // new

  const note = {
    id: Date.now(),
    text: text,
    category: noteCategory.value,
    createdAt: new Date().toLocaleString()
  };

  notes.push(note);
  render();

  noteInput.value = "";
  noteInput.focus();
});

// Show the correct count on first load                         // new
render();