import { Component} from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Celsius-to-Fahrenheit';
  colorControl = new FormControl('Accent');
  data ={
    celsius:null,
    fahrenheit:null
  }
  
  temparatureConverter(type:any){
    if(type==='C'){
        this.data.fahrenheit = ((1.8*this.data.celsius)+32).toFixed(2)
    }
    else{
      this.data.celsius = ((this.data.fahrenheit-32)*0.55).toFixed(2)
    }
  }
}
