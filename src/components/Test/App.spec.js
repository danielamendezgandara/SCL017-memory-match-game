  
import App from '../App.js';

describe('App', () => {
  it('should render without crashing', () => {
    const array=[['mariobros', 'data/mariobros/img/mariobros.png'],[ 'luigi', 'data/mariobros/img/luigi.png'],['mariobros', 'data/mariobros/img/mariobros.png'],[ 'luigi', 'data/mariobros/img/luigi.png']];
    const data={
      name: 'MarioBros',
      items: [
        { id: 'mariobros', image: 'data/mariobros/img/mariobros.png', bgColor: '#339933' },
        { id: 'luigi', image:'data/mariobros/img/luigi.png' , bgColor: '#339933' },
        { id: 'yoshi', image:'data/mariobros/img/yoshi.png' , bgColor: '#339933' },
        { id: 'princessPeach', image:'data/mariobros/img/princessPeach.png' , bgColor: '#339933' },
        { id: 'toad', image:'data/mariobros/img/toad.png' , bgColor: '#339933' },
        { id: 'bowser', image: 'data/mariobros/img/bowser.png' , bgColor: '#339933' },
        { id: 'toadette', image: 'data/mariobros/img/toadette.png' , bgColor: '#339933' },
        { id: 'goomba', image: 'data/mariobros/img/goomba.png' , bgColor: '#339933' },
        { id: 'koopaTroopa', image: 'data/mariobros/img/koopaTroopa.png' , bgColor: '#339933' },
        { id: 'bulletBill', image: 'data/mariobros/img/bulletBill.png' , bgColor: '#339933' }
      ],
      backCard:'data/mariobros/img/blockmariobros.png',
    };
    const container = App(array,data);
    expect(container instanceof HTMLElement).toBe(true);
  });
});
