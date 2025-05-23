const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// mpdal open function

const openModal = ()=>{
    console.log('modal khool gya ')
    modal.classList.add("active");
    overlay.classList.add("overlayactive")
};

const closeModal = ()=>{
    console.log('modal band ho gya ')
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};