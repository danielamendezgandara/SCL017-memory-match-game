const match = () => {
    const selected = document.querySelectorAll('.flipped');
    selected.forEach(card => {
      card.classList.add('match');
    });
    };
    export default match;