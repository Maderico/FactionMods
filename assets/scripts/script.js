var modpackURL = "https://cdn.discordapp.com/attachments/1269073093310283959/1302021322058235954/Faction_Network_-_DedSafio_3.zip?ex=67269959&is=672547d9&hm=0ad5d412f2663d31cb58e916f98139b464ebd3afe5aa7f3763dad6f667db4bd2&";
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
