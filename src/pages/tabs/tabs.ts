import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
import { TodoComponent } from '../todo/todo.component';
import { FinishedComponent } from '../finished/finished.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TodoComponent;
  tab2Root = FinishedComponent;
  

  constructor() {

  }
}
