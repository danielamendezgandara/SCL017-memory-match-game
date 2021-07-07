import match from "../Match.js";

describe('match', () => {
    document.body.innerHTML= '<div id="container" class="card flipped"></div><div class="card flipped"></div>';
    const container=document.getElementById('container');
    it('Renders with a className equal to the variant', () => {
      match();
      expect(container.className=='card flipped match').toBe(true);
    });
  });