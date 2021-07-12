const resetGuesses = () => {


    let selected = document.querySelectorAll('.flipped');
    selected.forEach(card => {
      card.classList.remove('flipped');
    });
    };
    export default resetGuesses;