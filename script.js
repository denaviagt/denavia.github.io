let i = 0,
     nama;
nama = "Anggita Denavia "
let letter = "";
const text = document.getElementById("Nama");

function typing() {

     // letter = nama.slice(0, ++i);
     if (i < nama.length) {
          text.textContent += nama.charAt(i);
          // document.getElementById("Nama").textContent = letter;
          i++;
          // i = 0;
          setTimeout(typing, 300);
     } else {
          setTimeout(erase, 1000);
     }
}

typing();

const navSilde = () => {
     const icon = document.querySelector(".icon");
     const nav = document.querySelector('.navbar');
     const navLinks = document.querySelectorAll('.navbar li')

     icon.addEventListener('click', () => {
          nav.classList.toggle('nav-active');

          navLinks.forEach((link, index) => {
               if (link.style.animation) {
                    link.style.animation = '';
               } else {

                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
               }
          });
     });

     if (navLinks.onClick()) {
          nav.classList.toggle('nav-deactive');
     }
}

navSilde();