import { Component } from '@angular/core';
import { Modelclass } from './Modelclass/Sampleclasses';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '2wDB';
   userInfo=new Modelclass('','','');
 fun(){
  console.log(this.userInfo)
 }
}
