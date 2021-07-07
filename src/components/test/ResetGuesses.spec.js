import resetGuesses from "../ResetGuesses.js";

describe('resetGuesses', () => {
    document.body.innerHTML= '<div id="container" class="card flipped"></div><div class="card flipped"></div>';
    const container=document.getElementById('container');
    it('Renders with a className equal to the variant', () => {
      resetGuesses();
      expect(container.className=='card').toBe(true);
    });
  });