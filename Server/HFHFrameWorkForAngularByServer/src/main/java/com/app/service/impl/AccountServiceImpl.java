package com.app.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AccountDao;
import com.app.entity.Account;
import com.app.service.IAccountService;

@Service
public class AccountServiceImpl implements IAccountService {

	@Autowired
	private AccountDao dao;
	
	/**
	 * @see com.app.service.IAccountService#fincCount()
	 */
	@Override
	public Long fincCount() {
		return dao.count();
	}
	
	/**
	 * @see com.app.service.IAccountService#findAccounts()
	 */
	@Override
	public List<Account> findAccounts() {
		return dao.findAll();
	}

	/**
	 * @see com.app.service.IAccountService#findAccountById(id)
	 */
	@Override
	public Account findAccountById(int id) {
		//return dao.getOne(id);//利用不可、退避
		return dao.findById(id).orElse(null);
	}

	/**
	 * @see com.app.service.IAccountService#deleteAccountById(id)
	 */
	@Override
	public void deleteAccountById(int id) {
		dao.deleteById(id);
	}

	/**
	 * @see com.app.service.IAccountService#saveAccount(Account)
	 */
	@Override
	public Account saveAccount(Account account) {
		return dao.save(account);
	}



}
