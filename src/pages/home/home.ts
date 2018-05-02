import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import fx from 'glfx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  canvas: any = null;
  texture: any = null;
  
  totalBrightness = 0;
  totalContrast = 0;

  totalHue = 0;
  totalSaturation = 0;

  constructor(public navCtrl: NavController) {
    console.log(fx);
  }
  ionViewDidLoad()
  {
    console.log("View loaded");

  }
  imageLoaded(){
    console.log("Image loaded");
        this.canvas = fx.canvas();
    var image = document.getElementById('image');
    console.log(image);
    this.texture = this.canvas.texture(image);

    this.canvas.draw(this.texture).update();

    // replace the image with the canvas
    image.parentNode.insertBefore(this.canvas, image);
    image.parentNode.removeChild(image);
  }
  brighnessSliderChange()
  {
    var brightnessvalue = parseFloat((<HTMLInputElement>document.getElementById("brightness")).value);
    var contrastvalue = parseFloat((<HTMLInputElement>document.getElementById("contrast")).value);

    var brightness = brightnessvalue - this.totalBrightness;
    this.totalBrightness = brightnessvalue;

    var contrast = contrastvalue - this.totalContrast;
    this.totalContrast = contrastvalue;


    this.canvas.brightnessContrast(brightness, contrast).update();
  }
  hueSaturtionSliderChange(){
    var huevalue = parseFloat((<HTMLInputElement>document.getElementById("hue")).value);
    var saturationvalue = parseFloat((<HTMLInputElement>document.getElementById("saturation")).value);

    var hue = huevalue - this.totalHue;
    this.totalHue = huevalue;

    var saturation = saturationvalue - this.totalSaturation;
    this.totalSaturation = saturationvalue;

    this.canvas.hueSaturation(hue, saturation).update();
  }
}
