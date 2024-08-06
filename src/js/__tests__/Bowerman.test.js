import Bowerman from '../Bowerman';

test('should create right object', () => {
  const bob = new Bowerman("Bob", "Bowerman");

  expect(bob).toEqual({
    name: 'Bob',
    health: 100,
    level: 1,
    type: 'Bowerman',
    attack: 25,
    defence: 25
  });
});
