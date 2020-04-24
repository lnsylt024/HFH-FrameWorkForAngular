import { EditComponent } from './Page/account/edit/edit.component';
import { AppendComponent } from './Page/account/append/append.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './Page/account/list/list.component';

const routes: Routes = [
  { path: 'account_list', component: ListComponent },
  { path: 'account_append', component: AppendComponent },
  { path: 'account_edit', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
