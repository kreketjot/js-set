import Magician from '../Magician';

const character = new Magician('Kate');

test('test Magician name', () => expect(character.name).toBe('Kate'));
test('test Magician type', () => expect(character.type).toBe('Magician'));
test('test Magician health', () => expect(character.health).toBe(100));
test('test Magician level', () => expect(character.level).toBe(1));
test('test Magician attack', () => expect(character.attack).toBe(10));
test('test Magician defence', () => expect(character.defence).toBe(40));
