package com.xjinyao.xcloud.gateway.filter;

import cn.hutool.core.lang.UUID;
import com.xjinyao.xcloud.common.core.util.StringUtils;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.http.HttpHeaders;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.util.ArrayList;
import java.util.List;

/**
 * 打印请求和响应简要日志,开发环境才会输出请求及响应相关的头信息
 *
 * @author 谢进伟
 * @since 2020-11-15 14:12:07
 */
@Slf4j
@Configuration
@AllArgsConstructor
@ConditionalOnProperty(value = "gateway.log-filter.enable", havingValue = "true", matchIfMissing = true)
public class RequestLogFilter implements GlobalFilter, Ordered {

    private static final String START_TIME = "startTime";

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        String requestUrl = exchange.getRequest().getURI().getRawPath();
        String code = UUID.fastUUID().toString(true);

        // 构建成一条长 日志，避免并发下日志错乱
        StringBuilder beforeReqLog = new StringBuilder(300);
        // 日志参数
        List<Object> beforeReqArgs = new ArrayList<>();
        beforeReqLog.append("\n\n---------------- HUASHAN Gateway Request Start ").append(code).append(" ----------------\n");
        // 打印路由
        beforeReqLog.append("---> {}: {}\n");
        // 参数
        String requestMethod = exchange.getRequest().getMethodValue();
        beforeReqArgs.add(requestMethod);
        beforeReqArgs.add(requestUrl);

        // 打印请求头
        HttpHeaders headers = exchange.getRequest().getHeaders();
        headers.forEach((headerName, headerValue) -> {
            beforeReqLog.append("Headers：  {}: {}\n");
            beforeReqArgs.add(headerName);
            beforeReqArgs.add(StringUtils.join(headerValue, ","));
        });
        beforeReqLog.append("---------------- HUASHAN Gateway Request End ").append(code).append(" ----------------\n");
        // 打印执行时间
        log.info(beforeReqLog.toString(), beforeReqArgs.toArray());

        exchange.getAttributes().put(START_TIME, System.currentTimeMillis());
        return chain.filter(exchange).then(Mono.fromRunnable(() -> {
            ServerHttpResponse response = exchange.getResponse();
            Long startTime = exchange.getAttribute(START_TIME);
            long executeTime = 0L;
            if (startTime != null) {
                executeTime = (System.currentTimeMillis() - startTime);
            }

            // 构建成一条长 日志，避免并发下日志错乱
            StringBuilder responseLog = new StringBuilder(300);
            // 日志参数
            List<Object> responseArgs = new ArrayList<>();
            responseLog.append("\n\n---------------- HUASHAN Gateway Response Start ").append(code).append(" ----------------\n");
            // 打印路由 200
            responseLog.append("<--- {} {}: {}: {}\n");
            // 参数
            responseArgs.add(response.getStatusCode().value());
            responseArgs.add(requestMethod);
            responseArgs.add(requestUrl);
            responseArgs.add(executeTime + "ms");

            // 打印请求头
            HttpHeaders httpHeaders = response.getHeaders();
            httpHeaders.forEach((headerName, headerValue) -> {
                responseLog.append("Headers：  {}: {}\n");
                responseArgs.add(headerName);
                responseArgs.add(StringUtils.join(headerValue, ","));
            });

            responseLog.append("----------------  HUASHAN Gateway Response End ").append(code).append(" ----------------\n");
            // 打印执行时间
            log.info(responseLog.toString(), responseArgs.toArray());
        }));
    }

    @Override
    public int getOrder() {
        return Ordered.LOWEST_PRECEDENCE;
    }
}
