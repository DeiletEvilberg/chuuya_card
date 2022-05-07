let cards = document.querySelectorAll('.card');

VanillaTilt.init(cards, {
    max: 15,  // Максимальный угол поворота карточки
    glare: true,  // Включаем эффект блика
    'max-glare': 0.5,  // Регулируем интенсивность блика
    easing:  "cubic-bezier(.03,.98,.52,.99)",
});