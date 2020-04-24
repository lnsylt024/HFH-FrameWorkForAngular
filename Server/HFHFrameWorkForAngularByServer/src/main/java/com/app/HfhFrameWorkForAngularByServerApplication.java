package com.app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class HfhFrameWorkForAngularByServerApplication implements CommandLineRunner {

	@Autowired
	JdbcTemplate jdbc;
	
	public static void main(String[] args) {
		SpringApplication.run(HfhFrameWorkForAngularByServerApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
//		jdbc.execute("Drop table tbl_accounts if Exists");
//		jdbc.execute("create table tbl_accounts(id Integer(11) primary key auto_increment, name varchar(255))");

		for (int i = 0; i < 3; i++) {
			jdbc.update("insert into tbl_accounts(username, remarks) values('user 000" + i + "','テキスト')");
		}
	}

}
