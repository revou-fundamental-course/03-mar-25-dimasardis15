
//Script.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("message-form");
    const welcomeMessage = document.getElementById("welcome-note");

    const outputName = document.getElementById("output-name");
    const outputDob = document.getElementById("output-dob");
    const outputGender = document.getElementById("output-gender");
    const outputMessage = document.getElementById("output-message");
    const currentTime = document.getElementById("current-time");

    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav-links");

    // burger button
    burgerMenu.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    //Real time Clock
    function getCurrentTime() {
        // Set time zone untuk Makassar (GMT+8)
        const options = {
            weekday: 'long',  // Nama hari (misalnya: Senin)
            year: 'numeric',  // Tahun (misalnya: 2025)
            month: 'long',  // Nama bulan (misalnya: Maret)
            day: 'numeric',  // Tanggal (misalnya: 13)
            hour: '2-digit',  // Jam dalam format 2 digit
            minute: '2-digit',  // Menit dalam format 2 digit
            second: '2-digit',  // Detik dalam format 2 digit
            timeZoneName: 'short',  // Nama zona waktu (misalnya: GMT+8)
            timeZone: 'Asia/Makassar'  // Zona waktu Makassar
        };
    
        // Mendapatkan waktu saat ini sesuai dengan zona waktu Makassar
        const currentTime = new Date().toLocaleString('En', options);
        
        // Menampilkan hasil
        document.getElementById("current-time").textContent = currentTime;
    }
    
    // Memanggil fungsi untuk menampilkan waktu dan memperbaruinya setiap detik
    setInterval(getCurrentTime, 1000);
    
    // Panggil sekali untuk menampilkan waktu langsung saat halaman dimuat
    getCurrentTime();
    // function updateTime() {
    //     const now = new Date();
    //     currentTime.textContent = now.toLocaleString();
    // }

    // setInterval(updateTime, 1000);
    // updateTime();

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const dob = document.getElementById("dob").value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const message = document.getElementById("message").value.trim();
        
        if (name) {
            welcomeMessage.textContent = `Hi, ${name}! Welcome To My Website`;
        } else {
            welcomeMessage.textContent = "Hi, Welcome To My Website";
        }

        outputName.textContent = name || "-";
        outputDob.textContent = dob || "-";
        outputGender.textContent = gender ? gender.value : "-";
        outputMessage.textContent = message || "-";
        
        form.reset();
    });
});

//Banner auto-slide
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}


// Fungsi untuk menampilkan pop-up dan menyembunyikan konten utama
window.onload = function() {
    // Tampilkan pop-up saat halaman dimuat
    document.getElementById("popup").style.display = "flex";

    // Aksi ketika tombol Submit diklik
    document.getElementById("submitBtn").onclick = function() {
        // Ambil nama dari input
        var name = document.getElementById("nameInput").value;
        
        // Jika nama tidak kosong, lanjutkan
        if (name.trim() !== "") {
            // Sembunyikan pop-up dan tampilkan konten utama
            document.getElementById("popup").style.display = "none";
            document.getElementById("welcome-note").style.display = "block";

            // Menampilkan nama pengguna di konten utama
            document.getElementById("username").textContent = name;
        } else {
            alert("Please enter your name.");
        }
    };
};
