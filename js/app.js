const akanChecker = (e) => {
  e.preventDefault();

  const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  const form = document.querySelector("#formAkans");

  const fd = new FormData(form);

  const gender = fd.get("gender");
  const DD = document.getElementById("date").value;
  const MM = document.getElementById("month").value;
  const yearOfBirth = document.getElementById("year").value;

  if (DD<=0 || DD>31 || MM<=0 || MM>12){
    alert("Enter Valid Date");
      return;
  }

  const ccString = yearOfBirth.toString();
  const cC = ccString.charAt(0) + ccString.charAt(1);
  const CC = parseInt(cC);

  const yY = yearOfBirth.charAt(2) + yearOfBirth.charAt(3);
  const YY = parseInt(yY);


  const dayOfWeek = ( ( (CC/4) -((2*CC)-1)) + (5*YY/4)  + ((26*(MM+1)/10)) + DD ) % 7;

  const d = Math.ceil(dayOfWeek);
  
  console.log(d);

  if (d){
  
    if (gender === "Male") {
    alert("Your Akan Name is " + maleNames[d] );
    } else {
      alert("Your Akan Name is " + femaleNames[d]);    
    }  
  }else {
      alert("Please Enter Your Date Of Birth"); 
  }




location.reload();

}

document.querySelector("#formAkans").addEventListener('submit', akanChecker);