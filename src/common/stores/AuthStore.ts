import { action, observable } from 'mobx';

// eslint-disable-next-line import/no-cycle
import RootStore from './RootStore';

export default class AuthStore {
  /**
   * Injected Store used to access the other stores
   */
  @observable rootStore: RootStore;

  /**
   * Determine if app is authenticated or not.
   */
  @observable logged: boolean = false;

  /**
   * Determine if app is authenticated or not.
   */
  @observable loading: boolean = true;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action.bound
  getLogged() {
    return this.logged;
  }

  /**
   * Check as success login
   */
  @action.bound
  setLogin() {
    this.loading = false; // Hide loading when check status is done
    this.logged = true;
  }

  /**
   * Check as fail login
   */
  @action.bound
  setLogout() {
    this.loading = false; // Hide loading when check status is done
    this.logged = false;
  }
}
