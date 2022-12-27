let person = {
  personWeight: 0,
  personHeight: 0,
};
let btnCalc = document.querySelector(".btn-calc");

const calcBmi = () => {
  person.personWeight = document.getElementById("weight-box").value;
  person.personHeight = document.getElementById("height-box").value;
  person.heightSquare = person.personHeight * person.personHeight;
  person.result = person.personWeight / person.heightSquare;
  printMesage();
  clearFields();
  console.log(person);
};

const printMesage = () => {
  let rowSkn = document.querySelector(".row-skn");
  let rowNormal = document.querySelector(".row-normal");
  let overWeight = document.querySelector(".row-overWeight");
  let fGradeOne = document.querySelector(".grade-1");
  let fGradeTwo = document.querySelector(".grade-2");
  let displayIcm = document.querySelector(".display-imc");
  let newCalc = document.querySelector(".btn-new-calc");
  let imc = document.querySelector(".imc");
  displayIcm.classList.add("active");
  imc.innerText = person.result.toFixed(1);

  newCalc.addEventListener("click", function () {
    displayIcm.classList.remove("active");
    rowNormal.classList.remove("active");
    overWeight.classList.remove("active");
    fGradeOne.classList.remove("active");
    fGradeTwo.classList.remove("active");
    rowSkn.classList.remove("active");
  });

  if (person.result > 18 && person.result < 25) {
    rowNormal.classList.add("active");
  } else if (person.result >= 25 && person.result < 30) {
    overWeight.classList.add("active");
  } else if (person.result >= 30 && person.result < 35) {
    fGradeOne.classList.add("active");
  } else if (person.result >= 35 && person.result < 44) {
    fGradeTwo.classList.add("active");
  } else if (person.result < 18) {
    rowSkn.classList.add("active");
  }
};

const clearFields = () => {
  const fields = document.querySelectorAll(".form-control");
  fields.forEach((field) => {
    return (field.value = "");
  });
};
