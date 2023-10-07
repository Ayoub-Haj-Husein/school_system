document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("studentInformation");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let fullName = document.getElementById("fullName").value;
    let dateOfBirth = document.getElementById("dateOfBirth").value;
    let gender = document.getElementById("gender").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let grade = document.getElementById("grade").value;

    let table = document
      .getElementById("studentTable")
      .getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(table.rows.length);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    cell5.classList.add("gradePercentage");

    cell1.innerHTML = fullName;
    cell2.innerHTML = dateOfBirth;
    cell3.innerHTML = gender;
    cell4.innerHTML = phoneNumber;
    cell5.innerHTML = grade;
  });
});
