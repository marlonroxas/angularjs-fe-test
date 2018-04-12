import { Component } from '@angular/core';
const base = location.pathname.replace("/","");
const main = require('../../JSON/config/mainview.json');
const result = base && require('../../JSON/config/'+base+'.json');
console.log("main", main)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  menu = main.menu;
  content = main.content;
  result = result;
}
