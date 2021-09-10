import Character from './Characters/Character';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (!(member instanceof Character)) {
      throw new Error('Only characters can be added');
    }
    if (this.members.has(member)) {
      throw new Error('This member has already been added');
    }
    this.members.add(member);
    return this.members;
  }

  addAll(...members) {
    members.forEach((member) => this.members.add(member));
    return this.members;
  }

  toArray() {
    return [...this.members];
  }
}
