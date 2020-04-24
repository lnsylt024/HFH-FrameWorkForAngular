package com.app.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.Account;
import com.app.service.IAccountService;

//@CrossOrigin(origins = "http://192.168.3.9:4200", maxAge = 3600)
//@CrossOrigin(origins = "*", maxAge = 3600)
//JSON APIの返却（@RestController）
@RestController
@RequestMapping("/account")
public class AccountController {

	@Autowired
	private IAccountService service;

	/**
	 * 一覧
	 * 
	 * @return
	 */
	@RequestMapping(path = "/list", method = RequestMethod.GET)
	public List<Account> getAccountList() {
		long cnt = service.fincCount();
		List<Account> list = new ArrayList<>();
		if (cnt != 0) {
			list = service.findAccounts();
		}
		return list;
	}
	
	/**
	 * 取得ユーザ情報
	 * @param id
	 * @return
	 */
	@RequestMapping(path="/get/{id}", method=RequestMethod.GET)
	public Account getAccountById(@PathVariable("id")int id) {
		
		//@PathParam("id")の場合、遷移元URLには「key=value」型が必要です。
		//@PathVariable("id")の場合、遷移元URLには「value」だけが必要です。
		return service.findAccountById(id);
	}
	
	/**
	 * 削除ユーザ
	 * 
	 * @param id
	 */
	@RequestMapping(path="/delete/{id}", method=RequestMethod.DELETE)
	public void deleteAccount(@PathVariable("id")int id) {
		if(!StringUtils.isEmpty(id)) {			
			service.deleteAccountById(id);
		}
	}
	
	/**
	 * 追加・更新ユーザ
	 * 
	 * @param account
	 * @return
	 */
	@RequestMapping(path="/saveupdate",method = RequestMethod.POST)
	public Account saveOrUpdate(@RequestBody Account account) {
		return service.saveAccount(account);
	}

}
