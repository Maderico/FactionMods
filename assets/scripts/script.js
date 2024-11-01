var modpackURL = "https://cdn.discordapp.com/attachments/1184670516234158140/1302035835637469324/Faction_Network_-_DedSafio_3.zip?ex=6726a6dd&is=6725555d&hm=14a1b38aa3ffe89dba4aca4584a0cbbd5df6da5078971900e6d6c75e4c96a7b6&";
var tutorialURL = "https://youtu.be/_jbrxuqU-HQ";
var discordURL = "https://discord.faction.es/";
var tiendaURL = "https://tienda.faction.es/";

document.querySelector(".modpack").addEventListener("click", function () {
  window.open(modpackURL);
  Swal.fire({
    icon: "success",
    title: "¡Has abierto el Mod!",
    text: "Mira la otra pestaña.",
    showCancelButton: true,
    confirmButtonText: "OK",
    cancelButtonText: "Tutorial",
    reverseButtons: true,
    customClass: {
      cancelButton: "order-third",
    },
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.cancel) {
      window.open(tutorialURL);
    }
  });
});

document.getElementById("btnDiscord").addEventListener("click", function () {
  window.open(discordURL);
});

document.getElementById("btnTienda").addEventListener("click", function () {
  window.open(tiendaURL);
});

window.addEventListener("load", function () {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    const content = document.querySelector('.content-wrapper');
    
    setTimeout(() => {
        loaderWrapper.classList.add('fadeOut');
        content.style.display = 'block';
        document.body.style.overflow = 'auto';

        loaderWrapper.addEventListener('animationend', () => {
            loaderWrapper.style.display = 'none';
        });
    }, 1500);
});
