import { Account } from './../../../Module/account';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './../../../Service/account.service';

@Component({
  selector: 'app-append',
  templateUrl: './append.component.html',
  styleUrls: ['./append.component.css'],
})
export class AppendComponent implements OnInit {
  //modelとviewを紐づく、view画面に「[(ngModel)]="account.username"」で紐づく
  //account:Account = new Account();//又は、後の定義
  account: Account;
  /**
   * Serviceの呼ぶ、画面遷移
   * @param service
   * @param router
   */
  constructor(private service: AccountService, private router: Router) {
    console.info('Constructor。。。');
    this.account = new Account();
  }

  /**
   * 初期処理
   */
  ngOnInit(): void {
    console.info('初期処理');
  }

  /**
   * 追加
   */
  add(at: Account): void {
    //下記の方法は、いずれか結構です。
    //方法一
    //console.info('追加', this.account);
    //方法二
    console.info('追加', at);
    //Serviceを呼ぶ
    //「at」というは、service.saveAccountの引数です。
    //
    this.service.saveAccount(at).subscribe(
      (data) => {
        console.info('data', data.id);
        //保存成功の場合、画面遷移
        this.router.navigate(['account_list']);
      },
      (error) => {
        //異常の場合
      }
    );
  }
}
