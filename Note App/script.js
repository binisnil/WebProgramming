const addBtn = document.getElementById('add');
addBtn.addEventListener('click', () => {
    addNewNote();
});

function addNewNote(){
    const note = document.createElement('div');
    note.classList.add('note');
    
    document.body.appendChild('note');
}

const notesE1 = document.querySelector('.notes');
const editBtn = document.querySelector('.edit');
const deletBtn = document.querySelector('.delete');

const main = notesE1.querySelector('.main');
const textArea = notesE1.querySelector('.textarea');

editBtn.addEventListener('click', () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
});

textArea.addEventListener('input', (e) => {
    const {value} = e.target;

   main.innerHTML = marked(value);
});

{/* <div class="notes">
        <div class="tools">
            <button class="edit">
                <i class="fas fa-edit"></i>
            </button>
            <button class="delete">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
        <div class="main hidden"></div>
        <textarea></textarea>

       </div> */}