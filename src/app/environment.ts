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
    baseUrl: 'http://www.mocky.io'
  };

  public desenv = {
    apiUrl: 'http://www.mocky.io/v2',
    baseUrl: 'http://www.mocky.io'
  };

  public getApiUrl(): string {
    return (this.production ? this.prod.apiUrl : this.desenv.apiUrl);
  }

  public getBaseUrl(): string {
    return (this.production ? this.prod.baseUrl : this.desenv.baseUrl);
  }

  public getAppDeviceNative(): Boolean {
    return (this.device_native);
  }

}