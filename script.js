document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        faqItem.classList.toggle('active');
    });
});

const mainPhoto = document.getElementById('main-photo');
const thumbs = document.querySelectorAll('.clickable-thumb');

thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
        const currentMainSrc = mainPhoto.src;
        mainPhoto.src = thumb.src;
        thumb.src = currentMainSrc;
    });
});

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        faqItem.classList.toggle('active');
    });
});
