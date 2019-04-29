export class Environment {

  constructor() {
  }

  /**
   * Utilizar o ambiente de producao ou desenvolvimento 
   */
  public production: Boolean = false;

  /**
   * Utilizar mobile nativo, emulado browser ou emulado ionic-dev 
   */
  public device_native: Boolean = true;

  public prod = {
    apiUrl: 'http://www.mocky.io/v2',
    baseUrl: 'http://www.mocky.io',
    appFacebookID: 2125320834418888,
  };

  public desenv = {
    apiUrl: 'http://www.mocky.io/v2',
    baseUrl: 'http://www.mocky.io',
    appFacebookID: 240537426696177,
  };

  public getApiUrl(): string {
    return (this.production ? this.prod.apiUrl : this.desenv.apiUrl);
  }

  public getBaseUrl(): string {
    return (this.production ? this.prod.baseUrl : this.desenv.baseUrl);
  }

  public getAppFacebookID(): number {
    return (this.production ? this.prod.appFacebookID : this.desenv.appFacebookID);
  }

  public getAppDeviceNative(): Boolean {
    return (this.device_native);
  }

}