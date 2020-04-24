import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './../../../Service/account.service';
import { Account } from './../../../Module/account';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  //ユーザ集合の定義
  accounts: Account[];
  //(1)Serviceの呼ぶため、Serviceの追加が必要
  //(2)画面遷移のた、routerの追加が必要
  constructor(private service: AccountService, private router: Router) {}

  /**
   * 初期処理
   */
  ngOnInit(): void {
    console.info('初期表示');
    this.service.getAccountList().subscribe((data) => {
      console.info('初期表示', data);
      this.accounts = data;
    });
  }

  /**
   * 更新処理
   *  @param account
   */
  edit(account: Account): void {
    console.info('更新', account.id.toString());
    //Browes内部のDBに「ID」をセット
    localStorage.setItem('id', account.id.toString());
    this.router.navigate(['account_edit']);
  }

  /**
   * 削除処理
   * @param account
   */
  delete(account: Account): void {
    console.info('削除');
    this.service.deleteAccount(account).subscribe(
      (data) => {
        console.info('削除', data);
        console.info('(1)this.accounts', this.accounts);
        console.info('filter data', account);
        //方法一
        //this.accounts = this.accounts.filter((p) => p !== account);
        //方法二
        this.accounts = this.accounts.filter(function (p, index) {
          console.info('p' + index, p);
          return p !== account;
        });
        console.info('(2)this.accounts', this.accounts);
      },
      (error) => {
        console.info('異常の場合');
      }
    );
  }

  /**
   * 再読み込み
   */
  reload() {
    console.info('リフレッシュ');
    this.service.getAccountList().subscribe((data) => {
      console.info('再読み込み', data);
      this.accounts = data;
    });
  }
}
