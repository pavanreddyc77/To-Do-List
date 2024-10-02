document.getElementById('addButton')
         .addEventListener('click', function() {
   const input = document.getElementById('input');
   const taskValue = input.value.trim();
   if (taskValue) {
       const List = document.getElementById('List');
       const li = document.createElement('li');
       const checkbox = document.createElement('input');
       checkbox.type = 'checkbox';
       checkbox.addEventListener('change', function() {
           li.classList.toggle('completed', this.checked);
       });
       const taskText = document.createTextNode(taskValue);
       const deleteButton = document.createElement('button');
       deleteButton.textContent = 'Delete';
       deleteButton.className = 'deleteButton';
       deleteButton.addEventListener('click', function() {
           List.removeChild(li);
       });
       li.appendChild(checkbox);
       li.appendChild(taskText);
       li.appendChild(deleteButton);
       List.appendChild(li);
       input.value = ''; 
   } 
   else {
       alert("Please enter a task.");
       }
});