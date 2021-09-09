import Team from '../Team';
import Swordsman from '../Characters/Swordsman';
import Daemon from '../Characters/Daemon';
import Magician from '../Characters/Magician';

const poveq = new Swordsman('Poveq');
const kwent = new Magician('Kwent');
const reenf = new Magician('Reenf');
const klaty = new Swordsman('Klaty');
const eavyrlong = new Daemon('Eavyrlong');

test('creating empty team', () => {
  const team = new Team();
  expect(team.members.size).toBe(0);
});

test('adding not character to team', () => {
  const team = new Team();
  expect(() => team.add(-4)).toThrow('Only characters can be added');
});

test('adding new character to team', () => {
  const team = new Team();
  const result = team.add(poveq) && team.members.has(poveq) && team.members.size === 1;
  expect(result).toBe(true);
});

test('adding existing character to team', () => {
  const team = new Team();
  team.add(poveq);
  expect(() => team.add(poveq)).toThrow('This member has already been added');
});

test('adding characters (new and existing) to team at once', () => {
  const team = new Team();
  team.add(kwent);
  team.addAll(eavyrlong, klaty, kwent, reenf);
  expect(team.members.size).toBe(4);
});

test('get team in Array', () => {
  const team = new Team();
  const expected = [reenf, klaty];
  team.addAll(...expected);
  expect(team.toArray()).toEqual(expected);
});
