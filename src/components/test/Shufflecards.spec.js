import shuffle from "../Shufflecards.js";

describe('Shufflecards', () => {
    it('should shuffle an array', () => {
      const unshuffled= [['mariobros','data/mariobros/img/mariobros.png'],['luigi','data/mariobros/img/luigi.png'],
      ['yoshi','data/mariobros/img/yoshi.png'] ,['princessPeach','data/mariobros/img/princessPeach.png'],
        ['toad','data/mariobros/img/toad.png'] ,['bowser', 'data/mariobros/img/bowser.png'],
        ['toadette', 'data/mariobros/img/toadette.png'],['goomba','data/mariobros/img/goomba.png'] ,
         ['koopaTroopa','data/mariobros/img/koopaTroopa.png'],['bulletBill','data/mariobros/img/bulletBill.png']];
      const element=6;
      const shuffled= shuffle(unshuffled,element);
      expect(shuffled).not.toStrictEqual(unshuffled);
    });
  });
