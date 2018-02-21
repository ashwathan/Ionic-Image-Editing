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
    var value = parseFloat((<HTMLInputElement>document.getElementById("brightness")).value);
    console.log(this.canvas);
    var brightness = value - this.totalBrightness;
    this.totalBrightness = value;
    this.canvas.brightnessContrast(brightness, 0).update();
  }
}
