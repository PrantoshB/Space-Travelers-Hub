import dragonsService from '../../services/dragons';

describe('Get Dragons', () => {
  test('gets the correct data', async () => {
    const data = await dragonsService.getAllDragons();
    expect(data).toBeInstanceOf(Array);
    expect(data[0]).toBeInstanceOf(Object);
    expect(data[0].id).not.toBeNull();
  });
});
