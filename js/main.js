class Note {
	constructor() {
      this.notes = [];

		this.$form = document.querySelector("#form");
		this.$noteTitle = document.querySelector("#note-title");
      this.$noteText = document.querySelector("#note-text");
		this.$formButtons = document.querySelector("#form-buttons");

		this.addEventListeners();
	}

	addEventListeners() {
		document.body.addEventListener("click", (event) => {
			this.handleFormClick(event);
		});
      this.$form.addEventListener("submit", (event) => {
         event.preventDefault();
         const title = this.$noteTitle.value;   
         const text = this.$noteText.value;
         const hasNote = title || text;
         if (hasNote) {
            this.addNote({ title, text });
         }
      });
	}

	handleFormClick(event) {
		const isFormClicked = this.$form.contains(event.target);

		if (isFormClicked) {
			// open form
			this.openForm();
		} else {
			// close form
			this.closeForm();
		}
	}

	openForm() {
		this.$form.classList.add("form-open");
		this.$noteTitle.style.display = "block";
		this.$formButtons.style.display = "block";
	}

	closeForm() {
		this.$form.classList.remove("form-open");
		this.$noteTitle.style.display = "none";
		this.$formButtons.style.display = "none";
	}

   addNote(note) {
    const newNote = {
      title: note.title,
      text: note.text,
      color: 'white',
      id: this.notes.length > 0 ? this.notes[this.notes.length - 1].id + 1 : 1
    };
    this.notes = [...this.notes, newNote];
    console.log(this.notes);
  }
}

new Note();
