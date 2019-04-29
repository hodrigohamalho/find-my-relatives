import { Injectable } from '@angular/core';
import { AlertController, Loading, LoadingController } from "ionic-angular";
import { Message } from './message';

@Injectable()
export class ScreenProvider {

  constructor(private loadingController: LoadingController,
    private alertController: AlertController) {

  }

  startLoading(): Loading {
    let loading: Loading = this.loadingController.create({
      content: 'Aguarde ...'
    });

    loading.present();

    return loading;
  }

  stopLoading(loading: Loading): void {
    if (loading !== null) {
      loading.dismiss();
    }
  }

  alert(message: string): void {
    this.alertController.create({
      title: 'Alerta',
      message: message,
      buttons: ['OK']
    }).present();
  }

  alertMessage(message: Message): void {
    this.alertController.create({
      title: 'Alerta',
      message: message.text + (message.detail ? (': ' + message.detail) : ''),
      buttons: ['OK']
    }).present();
  }

  showConfirm(ask: string, title: string): any {
    let promise = new Promise((resolve, reject) => {
      this.alertController.create({
        title: title,
        message: ask,
        buttons: [
          {
            text: 'Sim',
            handler: () => {
              resolve(true);
            }
          },
          {
            text: 'Não',
            handler: () => {
              reject(false);
            }
          }
        ]
      }).present()
    });
    return promise;
  }
}



