package com.shbhm.rest.webservices.restfulwebservices.jwt.resource;

import java.io.Serializable;

public class JwtTokenRequest implements Serializable {

	private static final long serialVersionUID = -5616176897013108345L;

	private String username;
	private String password;
//"token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzaGJobSIsImV4cCI6MTYwNTA3ODU0MSwiaWF0IjoxNjA0NDczNzQxfQ.l1kz93Wuk3ky5JM6uqg3JjMnGeGrdxtH_FBWAKFrgingl4DfFw750PYvTPZhv6RGnL7x1_kwSS6dTTd02EIg1Q"

	public JwtTokenRequest() {
		super();
	}

	public JwtTokenRequest(String username, String password) {
		this.setUsername(username);
		this.setPassword(password);
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
