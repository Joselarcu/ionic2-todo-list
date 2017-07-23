import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TodoComponent } from '../pages/todo/todo.component';
import { FinishedComponent } from '../pages/finished/finished.component';

import { ToDoListService } from './services/to-do-list.service';
import { AddComponent } from '../pages/add/add.component';
import { PlaceHolderPipe } from './pipes/placeholder.pipe';
import { DetailComponent } from '../pages/detail/detail.component';
import { PendingPipe } from './pipes/pending.pipes';



@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    TodoComponent,
    FinishedComponent,
    AddComponent,
    PlaceHolderPipe,
    PendingPipe,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    TodoComponent,
    FinishedComponent,
    AddComponent,
    DetailComponent
  ],
  providers: [
    ToDoListService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
