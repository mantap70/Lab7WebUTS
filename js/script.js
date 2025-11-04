const formLogin = document.getElementById("loginForm");
const lupaPwBtn = document.getElementById("lupaPwBtn");
const daftarBtn = document.getElementById("daftarBtn");

const modalLupaPw = document.getElementById("modalLupaPw");
const modalDaftar = document.getElementById("modalDaftar");
const closeLupaPw = document.getElementById("closeLupaPw");
const closeDaftar = document.getElementById("closeDaftar");

formLogin.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const user = dataPengguna.find(
    (pengguna) => pengguna.email === email && pengguna.password === password
  );

  if (user) {
    alert(`Selamat datang, ${user.nama}!`);
    window.location.href = "dashboard.html";
  } else {
    alert("Email atau password yang anda masukkan salah!");
  }
});

lupaPwBtn.onclick = () => {
  modalLupaPw.style.display = "block";
};
closeLupaPw.onclick = () => {
  modalLupaPw.style.display = "none";
};

daftarBtn.onclick = () => {
  modalDaftar.style.display = "block";
};
closeDaftar.onclick = () => {
  modalDaftar.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modalLupaPw) modalLupaPw.style.display = "none";
  if (event.target === modalDaftar) modalDaftar.style.display = "none";
};

const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Pendaftaran berhasil! Silakan login menggunakan akun baru.");
  modalDaftar.style.display = "none";
  registerForm.reset();
});
