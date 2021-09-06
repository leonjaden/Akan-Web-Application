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

  const yY = ccString.charAt(2) + ccString.charAt(3);
  const YY = parseInt(yY);






}