package com.xjinyao.xcloud.interactive.captcha.core.enums;


public enum CaptchaTypeEnum {
    /**
     * 滑块拼图.
     */
    BLOCKPUZZLE("blockPuzzle", "滑块拼图"),
    /**
     * 文字点选.
     */
    CLICKWORD("clickWord", "文字点选"),
    /**
     * 默认.
     */
    DEFAULT("default", "默认");

    private String codeValue;
    private String codeDesc;

    CaptchaTypeEnum(String codeValue, String codeDesc) {
        this.codeValue = codeValue;
        this.codeDesc = codeDesc;
    }

    public String getCodeValue() {
        return this.codeValue;
    }

    public String getCodeDesc() {
        return this.codeDesc;
    }

    /**
     * 根据codeValue获取枚举
     *
     * @param codeValue
     * @return
     */
    public static CaptchaTypeEnum parseFromCodeValue(String codeValue) {
        for (CaptchaTypeEnum e : CaptchaTypeEnum.values()) {
            if (e.codeValue.equals(codeValue)) {
                return e;
            }
        }
        return null;
    }

    /**
     * 根据codeValue获取描述
     *
     * @param codeValue
     * @return
     */
    public static String getCodeDescByCodeBalue(String codeValue) {
        CaptchaTypeEnum enumItem = parseFromCodeValue(codeValue);
        return enumItem == null ? "" : enumItem.getCodeDesc();
    }

    /**
     * 验证codeValue是否有效
     *
     * @param codeValue
     * @return
     */
    public static boolean validateCodeValue(String codeValue) {
        return parseFromCodeValue(codeValue) != null;
    }

    /**
     * 列出所有值字符串
     *
     * @return
     */
    public static String getString() {
        StringBuffer buffer = new StringBuffer();
        for (CaptchaTypeEnum e : CaptchaTypeEnum.values()) {
            buffer.append(e.codeValue).append("--").append(e.getCodeDesc()).append(", ");
        }
        buffer.deleteCharAt(buffer.lastIndexOf(","));
        return buffer.toString().trim();
    }

}