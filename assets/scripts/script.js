var modpackURL = "https://cdn.discordapp.com/attachments/1269073093310283959/1301999264699777024/DedSafio_3_-_Faction_Network.rar?ex=672684ce&is=6725334e&hm=cc2641c675e7f4684b60f0a954d8cf14f996443e839a9c5b9152e6e2a2079a76&";
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
