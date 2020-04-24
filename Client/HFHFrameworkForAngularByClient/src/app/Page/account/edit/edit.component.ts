import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './../../../Service/account.service';
import { Account } from './../../../Module/account';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  //moduleとviewを紐づく、view画面に[]で紐づく
  account: Account = new Account();
  /**
   * Serviceを呼ぶ、画面遷移する
   * @param router
   * @param service
   */
  constructor(private router: Router, private service: AccountService) {
    console.info('Constructor.....');
  }

  /**
   * 初期処理
   */
  ngOnInit(): void {
    //ユーザの取得
    this.loadDataById();
  }

  /**
   * ユーザの取得
   */
  loadDataById() {
    console.info('Idより、データを取得');
    //一覧の更新ボタンの[id]から取得
    let id = localStorage.getItem('id');
    this.service.getAccountId(parseInt(id)).subscribe((data) => {
      console.info('data', data);
      //取得結果を画面対応にセット
      this.account = data;
    });
  }

  /**
   * 更新処理
   * @param account
   */
  update(account: Account) {
    console.info('更新', account);
    this.service.saveAccount(account).subscribe((data) => {
      console.info('data', data);
      //更新成功の場合、画面遷移
      this.router.navigate(['account_list']);
    });
  }
}
