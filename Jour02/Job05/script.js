document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-search-student');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email-search-student').value;

        mySearchStudent(email);
    });

    function mySearchStudent(email) {
        fetch(`request.php?email=${email}`)
            .then(response => response.json())
            .then(data => {
                const resultDiv = document.getElementById('result');
                resultDiv.innerHTML = ''; 
                if (data.length > 0) {
                    const table = document.createElement('table');
                    const headerRow = table.insertRow(0);

                    for (const key in data[0]) {
                        if (data[0].hasOwnProperty(key)) {
                            const headerCell = document.createElement('th');
                            headerCell.textContent = key;
                            headerRow.appendChild(headerCell);
                        }
                    }

                    data.forEach(student => {
                        const row = table.insertRow();
                        for (const key in student) {
                            if (student.hasOwnProperty(key)) {
                                const cell = row.insertCell();
                                cell.textContent = student[key];
                            }
                        }
                    });

                    resultDiv.appendChild(table);
                } else {
                    resultDiv.textContent = 'Aucun étudiant trouvé.';
                }
            })
            .catch(error => console.error('Erreur :', error));
    }
});