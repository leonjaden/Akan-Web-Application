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





}