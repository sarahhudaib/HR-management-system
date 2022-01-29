'use strict';

function EmployeeInformation(employeeID,fullName,department,level,imageURL,salary){
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department=department;
    this.level=level;
    this.imageURL = imageURL;
    //this.imageURL = /assets/$; this.name .jpg;
    this.salary = this.salary()*0.925;
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
    let mySection = document.getElementById('empolyees');
    let divEl = document.createElement('div');
    mySection.appendChild(divEl);
    mySection.style= "background-color: green; width:100px ;"

    let imgEl = document.createElement('img');
    divEl.appendChild(imgEl);
    imgEl.setAttribute('src', this.imageURL); 
    imgEl.setAttribute('alt',this.name);
    imgEl.style= "width:80px; margin 5px ;"
  
    let h4El = document.createElement('h4');
    divEl.appendChild(h4El)
    h4El.textContent = this.name;
  
    let pEl = document.createElement('p');
    divEl.appendChild(pEl);
    pEl.textContent = this.name;
  

  
  }
  
  let emloyeeForm= document.getElementById('emloyeeForm');
  emloyeeForm.addEventListener('submit', addNewEmolyee);
  
  function addNewEmolyee(event){
      event.preventDefault();
      let employeeID = event.target.employeeID.value;
      let fullName = event.target.fullName.value;
      let department = event.target.department.checked;
      let level = event.target.level.checked;
      let imageURL = event.target.imageURL.value;
      
      let newEmloyee = new EmployeeInformation(employeeID,fullName,department,level,imgURL);
      newEmloyee.salary();
      newEmloyee.render();
      console.log(newEmloyee);
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

ghazi.render();
lana.render();
tamara.render();
safi.render();
omar.render();
rana.render();
hadi.render();
