import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserItemComponent } from './components/user/user-item/user-item.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { DateDirective } from './shared/validators/date.directive';
import { UserFilterPipe } from './shared/pipes/user-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    UserListComponent,
    UserFormComponent,
    DateDirective,
    UserFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
