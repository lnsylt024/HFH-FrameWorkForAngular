import { Account } from './../Module/account';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}
  //サーバ側のURL
  Url = 'http://localhost:8088/hfh/account';

  /**
   *　取得ユーザ情報一覧
   */
  getAccountList() {
    return this.http.get<Account[]>(this.Url + '/list');
  }

  /**
   * 取得ユーザ情報
   */
  getAccountId(id: Number) {
    return this.http.get<Account>(this.Url + '/get/' + id);
  }

  /**
   * 保存ユーザ
   */
  saveAccount(account: Account) {
    return this.http.post<Account>(this.Url + '/saveupdate', account);
  }

  /**
   * 削除ユーザ
   */
  deleteAccount(account: Account) {
    return this.http.delete<Account>(this.Url + '/delete/' + account.id);
  }
}
