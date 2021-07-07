import setData from '../SetData.js';

describe('setData', () => {
  it('should render without crashing', () => {
    const dataObject={name: 'Mario Bros', items: [{ id: 'mariobros', image: 'data/mariobros/img/mariobros.png', bgColor: '#339933' },
    { id: 'luigi', image:'data/mariobros/img/luigi.png' , bgColor: '#339933' }], backCard:'data/mariobros/img/blockmariobros.png',};
    const containerSetData= setData(dataObject);
    expect(typeof containerSetData).toBe('object');
  });
});