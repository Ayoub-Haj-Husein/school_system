// Consractor

class StudentInformation {
  constructor(fullName, DateOfBirth, gender, major, image, PhoneNumber) {
    this.fullName = fullName;
    this.DateOfBirth = DateOfBirth;
    this.gender = gender;
    this.major = major;
    this.image = image;
    this.PhoneNumber = PhoneNumber;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("studentInformation");
  const sectionCards = document.getElementById("cards");
  let h1 = document.createElement("h1");
  let main = document.createElement("main");
  let studentsArray = [];

  h1.classList.add("heading");
  main.classList.add("box-container");

  h1.innerHTML = "Students Cards";

  sectionCards.appendChild(h1);
  sectionCards.appendChild(main);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let fullName = document.getElementById("fullName").value;
    let dateOfBirth = document.getElementById("dateOfBirth").value;
    let gender = document.getElementById("gender").value;
    let major = document.getElementById("major").value;
    let linkImage = document.getElementById("image").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let newObject = new StudentInformation(
      fullName,
      dateOfBirth,
      gender,
      major,
      linkImage,
      phoneNumber
    );

    studentsArray.push(newObject);
    localStorage.setItem("students", JSON.stringify(studentsArray));

    let newDiv = document.createElement("div");
    let image = document.createElement("img");
    let h3 = document.createElement("h3");
    let pDateOfBirth = document.createElement("p");
    let pGender = document.createElement("p");
    let pMajor = document.createElement("p");
    let pPhoneNumber = document.createElement("p");

    image.setAttribute("src", newObject.image);
    h3.textContent = newObject.fullName;
    pDateOfBirth.textContent = newObject.DateOfBirth;
    pGender.textContent = newObject.gender;
    pMajor.textContent = newObject.major;
    pPhoneNumber.textContent = newObject.PhoneNumber;

    newDiv.classList.add("box");

    main.appendChild(newDiv);
    newDiv.appendChild(image);
    newDiv.appendChild(h3);
    newDiv.appendChild(pDateOfBirth);
    newDiv.appendChild(pGender);
    newDiv.appendChild(pMajor);
    newDiv.appendChild(pPhoneNumber);

    form.reset();
  });
});
