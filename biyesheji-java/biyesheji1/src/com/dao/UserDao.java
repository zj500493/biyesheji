package com.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import com.javabean.User;

public class UserDao {
	public User findByUserName(String userName) throws ClassNotFoundException{
		User user = null;
		String url = "jdbc:mysql://localhost:3306/biyesheji";
		String root = "root";
		String password = "111111";
		
		
		try {
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn = DriverManager.getConnection(url, root, password);
			
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return user;
	}
}
