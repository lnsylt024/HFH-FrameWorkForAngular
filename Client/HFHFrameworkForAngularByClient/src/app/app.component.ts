import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'H.F.H';

  /**
   * 構造
   * @param router
   */
  constructor(private router: Router) {}

  /**
   * 一覧表示へ
   */
  list() {
    console.info('一覧');
    this.router.navigate(['account_list']);
  }

  /**
   * 新規画面へ
   */
  append() {
    console.info('新規');
    this.router.navigate(['account_append']);
  }
}
