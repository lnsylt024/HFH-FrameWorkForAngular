package com.app.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;

/*
 * CORSについて、「https://developer.mozilla.org/ja/docs/Web/HTTP/CORS」をご参照
 */
@Component
public class CORSFilter implements Filter {
	
	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		Filter.super.init(filterConfig);
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletResponse httpResponse = (HttpServletResponse)response;
		httpResponse.setHeader("Access-Control-Allow-Origin", "*");
		httpResponse.setHeader("Access-Control-Allow-Headers", "Content-Type");
		//GET,POST,OPTIONSの「*」
		httpResponse.setHeader("Access-Control-Allow-Methods", "*");
		
		//httpResponse.setHeader("Content-Type", "application/json");
		//httpResponse.setContentType("application/json");
		
		chain.doFilter(request, response);
		
	}

}
