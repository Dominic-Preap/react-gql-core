import { action, computed, observable } from 'mobx';

interface Character {
  id: number;
  name: string;
  image: string;
  selected: boolean;
}
export default class CharacterStore {
  @observable characters: Character[] = [];

  @action.bound
  add(c: Character[]) {
    this.characters = c;
  }

  @action.bound
  select(id: number) {
    const char = this.characters.find((x) => x.id === id);
    if (char) {
      char.selected = true;
    }
  }

  @action.bound
  unselect(id: number) {
    const char = this.characters.find((x) => x.id === id);
    if (char) {
      char.selected = false;
    }
  }

  @computed
  get selectedCharacters() {
    return this.characters.filter((x) => x.selected);
  }

  @computed
  get unselectedCharacters() {
    return this.characters.filter((x) => !x.selected);
  }
}
