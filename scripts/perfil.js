const editBtn = document.getElementById('edit-btn');
const saveBtn = document.getElementById('save-btn');
const editableFields = document.querySelectorAll('.editable');
const textFields = document.querySelectorAll('span');

editBtn.addEventListener('click', () => {
    // Mostrar los inputs y ocultar los textos
    textFields.forEach((text, index) => {
        text.style.display = 'none';
        editableFields[index].style.display = 'block';
    });
    
    editBtn.style.display = 'none';
    saveBtn.style.display = 'block';
});

saveBtn.addEventListener('click', () => {
    // Guardar los valores de los inputs en los textos
    editableFields.forEach((input, index) => {
        textFields[index].textContent = input.value;
        input.style.display = 'none';
        textFields[index].style.display = 'block';
    });
    
    saveBtn.style.display = 'none';
    editBtn.style.display = 'block';
});
