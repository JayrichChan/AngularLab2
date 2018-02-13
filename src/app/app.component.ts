import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  i:number = 0;
  title = 'app';
  hidden = false;
Count(){
  this.i++;
}

Show(){
  if(this.hidden == true)
  {
  this.hidden = false;
  }
  else{
  this.hidden = true;
  }
}


}
