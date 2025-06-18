const userDataArray = [];
let isSorted = false;

document.getElementById('btn').addEventListener('click', function (e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let num = document.getElementById('number').value;
    let age = document.getElementById('age').value;
    let city = document.getElementById('city').value;

    const newUser = {
        name,
        num,
        age,
        city
    };
    userDataArray.push(newUser);
    console.log("userDataArray===>", userDataArray);
    renderTable(userDataArray);


    document.getElementById('name').value = '';
    document.getElementById('number').value = '';
    document.getElementById('age').value = '';
    document.getElementById('city').value = '';

    
    
    function renderTable(dataArray) {
        const tbody = document.getElementById('table-body');
        tbody.innerHTML = '';

        dataArray.forEach((user, index) => {
            let newRow = document.createElement('tr');

            let nameTd = document.createElement('td');
            nameTd.textContent = user.name;
            
            let numTd = document.createElement('td');
            numTd.textContent = user.num;
            
            let ageTd = document.createElement('td');
            ageTd.textContent = user.age;
            
            let cityTd = document.createElement('td');
            cityTd.textContent = user.city;

            const actionTd = document.createElement('td');
            const editBtn = document.createElement('button');
            const deleteBtn = document.createElement('button');

            editBtn.textContent = 'Edit';
            deleteBtn.textContent = 'Delete';
            
            editBtn.addEventListener('click', function () {
                document.getElementById('name').value = nameTd.textContent;
                document.getElementById('number').value = numTd.textContent;
                document.getElementById('age').value = ageTd.textContent;
                document.getElementById('city').value = cityTd.textContent;
                
                newRow.remove();
            });
            deleteBtn.addEventListener('click', function () {
                newRow.remove();
            });
            
            actionTd.appendChild(editBtn);
            actionTd.appendChild(deleteBtn);
            
            newRow.appendChild(nameTd);
            newRow.appendChild(numTd);
            newRow.appendChild(ageTd);
            newRow.appendChild(cityTd);
            newRow.appendChild(actionTd);
            
            tbody.appendChild(newRow);
        });
    }
    document.getElementById('sort-btn').addEventListener('click', function () {
        if (!isSorted) {
            const sortedArray = [...userDataArray].sort((a, b) => a.name.localeCompare(b.name));
            renderTable(sortedArray);
            this.textContent = 'Unsort';
        } else {
            renderTable(originalOrder);
            this.textContent = 'Sort by Name';
        }
        isSorted = !isSorted;
    });
});