'use strict';

function EmployeeInformation(employeeID,fullName,department,level,imageURL){
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department=department;
    this.level=level;
    this.imageURL = imageURL;
    //this.imageURL = /assets/$; this.name .jpg;
    this.salary = this.salary()*0.925;
    EmployeeInformation.Employee.push(this);
}

EmployeeInformation.Employee = [];

function employeeID() {
    if ( typeof(employeeID) !== "undefined" && some_variable !== null ) {
        return Math.floor(Math.random() * (9999 - 1000)) + 1000;
      }
   
}

EmployeeInformation.prototype.salary = function () {
    if (this.level=='Senior'){
       return Math.floor(Math.random()*(2000 - 1500))+ 1500; 
    }
    else if (this.level=='Junior')
    {
       return Math.floor(Math.random()*(1000 - 500))+ 500; 
    }
    else if (level=='Mid-Senior')
    {
       return Math.floor(Math.random()*(1500 - 1000))+ 1000; 
    }
};


EmployeeInformation.prototype.render = function()
{
    let mySection = document.getElementById('mySection');
    for(let i =0; i<EmployeeInformation.Employee.length;i++){
        let allInfo = EmployeeInformation.Employee[i];
        console.log(mySection);
    }

    let divEl = document.createElement('div');
    mySection.appendChild(divEl);
    mySection.style= "background-color: green; width:100px ;"

    let imgEl = document.createElement('imgURL');
    divEl.appendChild(imgEl);
    imgEl.setAttribute('src', this.imageURL); 
    imgEl.setAttribute('alt',this.name);
    imgEl.style= "width:80px; margin 5px ;"
  
    let h4El = document.createElement('department');
    divEl.appendChild(h4El)
    h4El.textContent = this.name;
  
    let pEl = document.createElement('level');
    divEl.appendChild(pEl);
    pEl.textContent = this.name;
    
    let pE2 = document.createElement('employeeID');
    divEl.appendChild(pE2);
    pE2.textContent = this.name;
  }

  function calculateAverage(array) {
    var total = 0;
    var count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });

    return total / count;
}

function calculateTotal(array) {
    var total = 0;
    var count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });

    return total;
}

///////////////////////////////////////////////////////////
  let tableEL = document.createElement('table');
  mySection.appendChild(tableEL);

  let trEl = document.createElement('tr');
  tableEL.appendChild(trEl);

  let thEL = document.createElement('th');
  trEl.appendChild(thEL);
  thEL.textContent= "Department Name";

  let th1EL = document.createElement('th');
  trEl.appendChild(th1EL);

  th1EL.textContent= "# of Emloyee";

  let th2EL = document.createElement('th');
  trEl.appendChild(th2EL);
  th2EL.textContent= "Avg Salary";

  let th3EL = document.createElement('th');
  trEl.appendChild(th3EL);
  th3EL.textContent= "Total Salary";

//fullName,department,level,imageURL

  for(let i=0; i<EmployeeInformation.Employee.length;i++){
    let allInfo = EmployeeInformation.Employee[i];

    let trEl = document.createElement('tr');
    tableEL.appendChild(trEl);

    let tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = allInfo.department;

    let td1El = document.createElement('td');
    trEl.appendChild(td1El);
    tdEl.textContent = allInfo.calculateAverage(salary);

    let td2El = document.createElement('td');
    trEl.appendChild(td2El);
    tdEl.textContent = allInfo.calculateTotal(salary);

  }
  
  let emloyeeForm= document.getElementById('emloyeeForm');
  emloyeeForm.addEventListener('submit', addNewEmolyee);
  
  function addNewEmolyee(event){
      event.preventDefault();
      let employeeID = event.target.employeeID.value;
      let fullName = event.target.fullName.value;
      let department = event.target.department.value;
      let level = event.target.level.value;
      let imageURL = event.target.imageURL.value;
      
      let newEmloyee = new EmployeeInformation(employeeID,fullName,department,level,imageURL);
      newEmloyee.salary();
      newEmloyee.render();
      //console.log(newEmloyee);
      render();
      settingItem();
    }

let ghazi = EmployeeInformation ('1000','Ghazi Samer','Administration','Senior');
let lana = EmployeeInformation ('1001','Lana Ali','Finance','Senior');
let tamara = EmployeeInformation ('1002','Tamara Ayoub','Marketing','Senior');
let safi = EmployeeInformation ('1003','Safi Walid','Administration','Mid-Senior');
let omar = EmployeeInformation ('1004','Omar Zaid','Development','Senior');
let rana = EmployeeInformation ('1005','Rana Saleh','Development','Junior');
let hadi = EmployeeInformation ('1006','Hadi Ahmad','Finance','Mid-Senior');

const employeeArr = [ghazi,lana,tamara,safi,omar,rana,hadi]
  for (let i=0; i<employeeArr.length; i++){
  employeeArr[i].render();
  }

  console.log( EmployeeInformation.Employee);


render();

ghazi.render();
lana.render();
tamara.render();
safi.render();
omar.render();
rana.render();
hadi.render();


function settingItem(){
    let data = JSON.stringify(EmployeeInformation.Employee);
    localStorage.setItem('employees',data)
  
  }
  

  function gettingItem(){
    let stringObj = localStorage.getItem('employees');
    let parsObj = JSON.parse(stringObj);
    if (parsObj !== null){
      EmployeeInformation.Employee = parsObj
    }
  
    render();
  
  }
  gettingItem()


