import App from '../App.js';

describe('App', () => {
  it('should render without crashing', () => {
    const dataObject={name: 'Mario Bros', items: [{ id: 'mariobros', image: 'data/mariobros/img/mariobros.png', bgColor: '#339933' },
    { id: 'luigi', image:'data/mariobros/img/luigi.png' , bgColor: '#339933' }], backCard:'data/mariobros/img/blockmariobros.png',};
    const arrayData=[['mariobros','data/mariobros/img/mariobros.png'],['luigi','data/mariobros/img/luigi.png' ]];
    const container = App(arrayData,dataObject);
    expect(container instanceof HTMLElement).toBe(true);
  });
});
