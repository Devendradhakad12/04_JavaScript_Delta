(async function () {
  const res = await fetch("./data.json");
  const data = await res.json();

  let employees = data;
  let selectEmployeeId = employees[0].id;
  let selectedEmployee = employees[0];

  const employeeList = document.querySelector(".employees_name--list");
  const employeeInfo = document.querySelector(".employee_single--info");

  //Add Employee logic
  const createEmpolyee = document.querySelector(".createEmpolyee");
  const addEmployeeModal = document.querySelector(".addEmployee");
  const AddEmployeeForm = document.querySelector(".addEmployee__create");
  const dataInp = document.querySelector(".dateInp");
  dataInp.max = `${new Date().getFullYear() - 18}-${new Date()
    .toISOString()
    .slice(5, 10)}`;

  createEmpolyee.addEventListener("click", () => {
    addEmployeeModal.style.display = "flex";
  });

  addEmployeeModal.addEventListener("click", (e) => {
    if (e.target.className === "addEmployee") {
      addEmployeeModal.style.display = "none";
    }
  });

  //Select Employee Logic
  employeeList.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN" && selectEmployeeId !== e.target.id) {
      selectEmployeeId = e.target.id;
      renderEmployess();
      renderSingleEmployee();
    }
    // delete Employee
    if (e.target.tagName === "BUTTON") {
      employees = employees.filter(
        (el) => String(e.target.parentNode.id) !== String(el.id)
      );
      if (String(selectEmployeeId) === e.target.parentNode.id) {
        selectEmployeeId = employees[0]?.id || -1;
        selectedEmployee = employees[0] || {};
        renderSingleEmployee();
      }
      renderEmployess();
    }
  });

  // add employee form
  AddEmployeeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(AddEmployeeForm);
    const values = [...formData.entries()];
    let empData = {};
    values.forEach((val) => {
      let id = Math.floor(Math.random() * 10000);
      empData[val[0]] = val[1];
      empData["id"] = id;
      empData["age"] = new Date().getFullYear() - parseInt(empData.DOB);
    });
    employees.push(empData);
    renderEmployess();
    AddEmployeeForm.reset();
    addEmployeeModal.style.display = "none";
    console.log(empData);
  });

  // Render All Employes Name
  const renderEmployess = () => {
    employeeList.innerHTML = "";
    employees.forEach((emp) => {
      const employee = document.createElement("span");
      employee.classList.add("employee__names--item");

      if (parseInt(selectEmployeeId, 10) === emp.id) {
        employee.classList.add("selected");
        selectedEmployee = emp;
      }
      employee.setAttribute("id", emp.id);
      employee.innerHTML = `${emp.name} <button class="employeeDelete">X</button>`;
      employeeList.append(employee);
    });
  };

  // Render Single  Employee
  const renderSingleEmployee = () => {
    if(selectEmployeeId === -1) {
      employeeInfo.innerHTML = ""
      return
    }
    employeeInfo.innerHTML = `
       <p>Name : ${selectedEmployee.name}</p>
       <p>Email : ${selectedEmployee.email}</p>
       <p>Phone : ${selectedEmployee.phone}</p>
       <p>Age : ${selectedEmployee.age}</p>

      `;
  };
  if (selectedEmployee) renderSingleEmployee();
  renderEmployess();
})();
