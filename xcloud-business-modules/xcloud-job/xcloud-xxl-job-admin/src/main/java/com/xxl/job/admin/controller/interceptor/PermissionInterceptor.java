package com.xxl.job.admin.controller.interceptor;

import com.xjinyao.xcloud.xxl.job.admin.api.model.XxlJobUser;
import com.xxl.job.admin.controller.annotation.PermissionLimit;
import com.xxl.job.admin.core.util.I18nUtil;
import com.xxl.job.admin.service.LoginService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.AsyncHandlerInterceptor;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 权限拦截
 *
 * @author xuxueli 2015-12-12 18:09:04
 */
@Component
public class PermissionInterceptor implements AsyncHandlerInterceptor {

	@Resource
	private LoginService loginService;

	@Value("${xxl.job.login-url-prefix}")
	private String loginUrlPrefix = "";

	@Value("${xxl.job.gateway-prefix:\"\"}")
	private String gatewayPrefix = "";

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

		if (!(handler instanceof HandlerMethod)) {
			return true;    // proceed with the next interceptor
		}

		// if need login
		boolean needLogin = true;
		boolean needAdminuser = false;
		HandlerMethod method = (HandlerMethod) handler;
		PermissionLimit permission = method.getMethodAnnotation(PermissionLimit.class);
		if (permission != null) {
			needLogin = permission.limit();
			needAdminuser = permission.adminuser();
		}

		addGlobAttr(request);

		if (needLogin) {
			XxlJobUser loginUser = loginService.ifLogin(request, response);
			if (loginUser == null) {
				response.setStatus(302);
				response.setHeader("location", loginUrlPrefix + request.getContextPath() + "/toLogin");
				return false;
			}
			if (needAdminuser && loginUser.getRole() != 1) {
				throw new RuntimeException(I18nUtil.getString("system_permission_limit"));
			}
			request.setAttribute(LoginService.LOGIN_IDENTITY_KEY, loginUser);
		}

		return true;    // proceed with the next interceptor
	}


	private void addGlobAttr(HttpServletRequest request) {
		String contextPath = request.getContextPath();
		request.getSession().setAttribute("basePath", gatewayPrefix + contextPath);
	}
}
