import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RelativesProvider } from '../../providers/relatives.provider.';
import { ScreenProvider } from '../../app/commons/screen.provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  list: any[];

  constructor(
    public navCtrl: NavController,
    public screenProvider: ScreenProvider,
    public relativesProvider: RelativesProvider,
  ) {
    this.loadRelatives();
  }

  loadRelatives() {
    this.relativesProvider.getAll().subscribe(
      data => {
        this.list = data;
      }, err => this.screenProvider.alert(err.error.message),
    )
  }

}
