package com.xjinyao.xcloud.admin.api.enums;

import lombok.Getter;

import java.util.Arrays;

/**
 * 角色数据权限维度枚举(字典分组Id:9,字典分组编码:role_data_permission_dimension)
 * <p>
 * 所有枚举项的值应该与数据库数据字典对应，若数据字典更新，请更新此枚举类
 * </p>
 */
public enum RoleDataPermissionDimensionEnum {

    PROJECT(Codes.PROJECT, Labels.PROJECT, "项目");

    /**
     * 枚举值对应数据字典的值
     */
    @Getter
    private final String value;
    /**
     * 枚举值对应数据字典的标签
     */
    @Getter
    private final String label;
    /**
     * 枚举值对应数据字典的备注
     */
    @Getter
    private final String remark;

    /**
     * 枚举
     *
     * @param value  值
     * @param label  标签
     * @param remark 备注
     */
    RoleDataPermissionDimensionEnum(String value, String label, String remark) {
        this.value = value;
        this.label = label;
        this.remark = remark;
    }

    /**
     * 通过值构建枚举
     *
     * @param value 枚举值
     * @return RoleDataPermissionDimensionEnum
     */
    public static RoleDataPermissionDimensionEnum ofByValue(String value) {
        return Arrays.stream(RoleDataPermissionDimensionEnum.values())
                .filter(d -> d.valueEquals(value))
                .findFirst()
                .orElse(null);
    }

    /**
     * 比较value是否相同
     *
     * @param value 需要比较的value值
     * @return Boolean
     */
    public boolean valueEquals(String value) {
        return this.value.equals(value);
    }

    public interface Codes {
        /**
         * 项目
         */
        String PROJECT = "project";
    }

    public interface Labels {
        /**
         * 项目
         */
        String PROJECT = "项目";
    }
}