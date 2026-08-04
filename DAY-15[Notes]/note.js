const noteInput = document.getElementById("noteInput");
const addItem = document.getElementById("addItem");
const notesContainer = document.getElementById("notesContainer");
let notes = JSON.parse(localStorage.getItem("notes")) || [];
displayNotes();
addItem.addEventListener("click", () => {
    if (noteInput.value.trim() === "") {
        alert("Please enter a note");
        return;
    }
    notes.push(noteInput.value);
    localStorage.setItem("notes", JSON.stringify(notes));
    noteInput.value = "";
    displayNotes();
});
function displayNotes() {
    notesContainer.innerHTML = "";
    notes.forEach((note, index) => {
        const noteDiv = document.createElement("div");
        noteDiv.className = "note";
        const noteText = document.createElement("p");
        noteText.textContent = note;
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => {
            const updatedNote = prompt("Edit your note:", note);
            if (updatedNote !== null && updatedNote.trim() !== "") {
                notes[index] = updatedNote.trim();
                localStorage.setItem("notes", JSON.stringify(notes));
                displayNotes();
            }
        });
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            notes.splice(index, 1);
            localStorage.setItem("notes", JSON.stringify(notes));
            displayNotes();
        });
        noteDiv.appendChild(noteText);
        noteDiv.appendChild(editBtn);
        noteDiv.appendChild(deleteBtn);
        notesContainer.appendChild(noteDiv);
    });
}
