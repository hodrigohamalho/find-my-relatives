import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RelativesProvider } from '../../providers/relatives.provider.';
import { ScreenProvider } from '../../app/commons/screen.provider';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  model: any = {};
  list: any[];
  name: string;

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController,
    public screenProvider: ScreenProvider,
    public relativesProvider: RelativesProvider,
    private formBuilder: FormBuilder
  ) {
    this.validateForm();
  }
  
  validateForm(): void {
    this.formGroup = this.formBuilder.group({
      name: ['John Doe', [Validators.required]]
    });
  }

  find() {
    this.relativesProvider.getAll().subscribe(
      data => {
        this.list = data;
      }, err => this.screenProvider.alert(err.error.message),
    )
  }

}
