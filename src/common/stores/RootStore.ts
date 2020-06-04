// eslint-disable-next-line import/no-cycle
import AuthStore from './AuthStore';

export default class RootStore {
  // appStore: AppStore;
  authStore: AuthStore;

  constructor() {
    // this.appStore = new AppStore();
    this.authStore = new AuthStore(this);
  }
}
