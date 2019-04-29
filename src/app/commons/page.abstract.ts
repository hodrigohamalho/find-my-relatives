import { Platform, Loading } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { Environment } from '../environment';
export class PageAbstract {

    public loading: Loading;

    public versaoDesenv: Boolean; false;
    public ambiente: Environment;

    public appName: any;
    public versionNumber: any;
    public versionCode: any;

    public isAndroid: Boolean = false;
    public isIOS: Boolean = false;
    public isCordova: Boolean = false;
    public formGroup: FormGroup;
    public emailRegex: RegExp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    public no_image_bytes = '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';
    public no_image = 'data:image/png;base64,' + this.no_image_bytes;

    public eventNotFound: string = 'assets/img/voucher_notfound.png';

    constructor(public platform: Platform) {
        this.isCordova = this.platform.is('cordova');
        this.isAndroid = this.platform.is('android');
        this.isIOS = this.platform.is('ios');
        this.setupEnvironment();
    }

    setupEnvironment(): void {
        this.ambiente = new Environment();
        this.versaoDesenv = !this.ambiente.production ? true : false;
    }


}