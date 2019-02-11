import { action, observable } from 'mobx';

export default class LeftBarStore {
  @observable public isOpen = false;

  @action public openLeftBar = () => {
    this.isOpen = true;

  }

  @action public closeLeftBar = () => {
    this.isOpen = false;
  }
}