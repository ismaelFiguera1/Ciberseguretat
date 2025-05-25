const d = document,
  user = "ifiguera",
  pass = "fi6043fi";

d.addEventListener("submit", (e) => {
  console.log(e);
  let u = d.querySelector("#user");
  let c = d.querySelector("#con");

  if (u.value === user && c.value === pass) {
    window.location.href = "ok.html";
  } else {
    alert("Credencials erronies");
  }
});
