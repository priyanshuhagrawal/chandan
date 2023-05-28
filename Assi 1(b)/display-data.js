$(document).ready(function () {
    getData();
  });
  
  function getData() {
    let localStorageData = localStorage.getItem("student");
    let studentObj = JSON.parse(localStorageData);
    console.log(studentObj);
   
    $("#FirstName").text(studentObj.FirstName);
    $("#LastName").text(studentObj.LastName);
    $("#EmailID").text(studentObj.EmailID);
    $("#MobileNumber").text(studentObj.MobileNumber);
    $("#Gender").radio(studentObj.Gender);
    $("#DOB").text(studentObj.DOB);
    $("#Address").text(studentObj.Address);
    
  }

