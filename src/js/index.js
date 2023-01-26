const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal")
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternaModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternaModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () =>{
    alternaModal();
    video.setAttribute("src", "");
});