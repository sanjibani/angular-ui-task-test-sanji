import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
   compStatus = {
    show1 : true,
    show2 : true,
    show3 : true,
    show4 : true
  }

  buttonClickValue(event){
    this.compStatus = event;
  }
}
