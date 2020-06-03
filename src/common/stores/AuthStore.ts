import { action, observable } from 'mobx';

export default class AuthStore {
  /**
   * Injected Store used to access the other stores
   */
  // @observable rootStore: RootStore;

  /**
   * Determine if app is authenticated or not.
   */
  @observable logged: boolean = false;

  /**
   * Determine if app is authenticated or not.
   */
  @observable loading: boolean = true;

  /**
   * User profile object when login.
   */
  // @observable profile?: Profile | null = null;
  /**
   * constructor (Duh !!!)
   */
  // constructor() {
  //   // this.rootStore = rootStore;

  //   // Check user profile from electron
  //   // if (profile) this.updateProfile(profile, true);
  //   // else {
  //   //   this.updateProfile(null, false);
  //   //   this.loading = false;
  //   // }
  // }
  /**
   * Check account status. If false, send to login screen and remove data store
   */
  @action.bound
  async checkProfile(): Promise<boolean> {
    // const { error } = await this.rootStore.apiStore.checkStatus();

    // // If checking return false, set profile to null and set to login screen
    // if (error) this.logout();

    // // Hide loading when check status is done
    this.updateLoading(false);
    // return error;
    return true;
  }
  /**
   * Update and store user profile object after login
   */
  // @action.bound
  // setProfile(p: Profile): void {
  //   const vpnUsers = [
  //     ...p.VPNUser.map((x, i) => ({ ...x, isSelect: i === 0 })),
  //     ...p.VPNGuestUsers.map(x => ({ ...x, isSelect: p.VPNUser.length ? false : true }))
  //   ];

  //   this.updateProfile(p, true);
  //   this.rootStore.appStore.setVpnUsers(vpnUsers);
  // }
  /**
   * NOTE: Disconnect vpn connection before logout
   */
  // @action.bound
  // logout(): void {
  //   this.updateProfile(null, false);
  //   ipcRenderer.send(DISCONNECTED);
  //   ipcRenderer.send(SET_KIDS_MODE, false);
  //   ipcRenderer.send(LOGOUT);
  // }
  /**
   * Update user profile in electron store and set flag as authenticated or not
   */
  @action.bound
  updateProfile(/* p: Profile | null, */ l: boolean): void {
    this.logged = l;
    // this.profile = p;
  }
  /**
   * Update user profile in electron store and set flag as authenticated or not
   */
  @action.bound
  private updateLoading(l: boolean): void {
    this.loading = l;
  }
}
