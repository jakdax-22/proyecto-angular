import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

public title: string;
public subtitle: string;
public web: string;
  constructor (){
    this.title = "Enrique Iranzo";
    this.subtitle = "Desarrollo Web";
    this.web = "google.com"
  }

}
