import { HttpClientModule } from '@angular/common/http'; //追加
import { FormsModule } from '@angular/forms'; //追加
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//自動的な追加commponentーーーーーーーーーーー
import { ListComponent } from './Page/account/list/list.component';
import { EditComponent } from './Page/account/edit/edit.component';
import { AppendComponent } from './Page/account/append/append.component';
//自動的な追加commponentーーーーーーーーーーー

//追加Serviceーーーーーーーーーーー
import { AccountService } from './Service/account.service';
//追加Serviceーーーーーーーーーーー

@NgModule({
  declarations: [AppComponent, ListComponent, EditComponent, AppendComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AccountService],
  bootstrap: [AppComponent],
})
export class AppModule {}
