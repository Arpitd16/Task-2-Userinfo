var box = document.getElementById("cards");
var API = async () => {
  var response = await fetch("https://reqres.in/api/users?page=1");
  var file = await response.json();
  var info = file.data
    .map((element) => {
      return `
<div class="row card-row"">
  <div class="card m-3 shadow text-black col-lg-12 bagCo">
  <div class="row">
    <div class="col-lg-12">
      <img src="${element.avatar}" class="img-fluid rounded-circle m-3" alt="user Image">
    </div>
    <div class="col-lg-12">
      <div class="card-body">
        <h5 class="card-title">Name : ${element.first_name} ${element.last_name}</h5>
        <p class="card-text">E-mail : ${element.email}</p>
        <p class="card-text"><small class="text-muted">User ID: ${element.id}</small></p>
      </div>
    </div>
  </div>
</div>
</div>
  `;
    })
    .join("");
  cards.innerHTML = info;
};

var navBtn = document.getElementById("nav-btn");
navBtn.addEventListener("click", () => {
  cards.innerHTML = `
  <div class="text-data">
  <hr>
  <h2 class='load'>Fetching Users Data....</h2>
  <hr>
  `;
  setTimeout(() => {
    API();
  }, 2500);
});