package com.xjinyao.xcloud.common.log.annotation;

import java.lang.annotation.*;

/**
 * @date 2019/2/1 操作日志注解
 */
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface SysLog {

    /**
     * 描述
     *
     * @return {String}
     */
    String value();

}
