package com.app.service;

import java.util.List;

import com.app.entity.Account;

public interface IAccountService {
	
	/**
	 * 取得ユーザ件数
	 * 
	 * @return
	 */
	Long fincCount();

	/**
	 * 取得ユーザ一覧
	 * @return
	 */
	List<Account> findAccounts();
	
	/**
	 * Idより、取得ユーザ情報
	 * 
	 * @param id
	 * @return
	 */
	Account findAccountById(int id);
	
	/**
	 * Idより、削除ユーザ
	 * @param id
	 */
	void deleteAccountById(int id);
	
	/**
	 * 追加・更新ユーザ
	 * @param account
	 * @return
	 */
	Account saveAccount(Account account);
	
}
