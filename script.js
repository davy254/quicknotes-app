// Select elements
const noteForm = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const noteCategory = document.querySelector("#note-category");
const notesList = document.querySelector("#notes-list");

// Notes stored as an array of objects
let notes = [];

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
    label.textContent = "Category : " +
      note.category.charAt(0).toUpperCase() + note.category.slice(1);

    const date = document.createElement("small");
    date.className = "note-date";
    date.textContent = note.createdAt;

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.textContent = "Delete";
    deleteBtn.dataset.id = note.id;

    li.append(text, label, date, deleteBtn);
    notesList.appendChild(li);
  });
}

// Add a note when the form is submitted
noteForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const note = {
    id: Date.now(),
    text: noteInput.value.trim(),
    category: noteCategory.value,
    createdAt: new Date().toLocaleString()
  };

  notes.push(note);
  render();

  noteInput.value = "";
  noteInput.focus();
});