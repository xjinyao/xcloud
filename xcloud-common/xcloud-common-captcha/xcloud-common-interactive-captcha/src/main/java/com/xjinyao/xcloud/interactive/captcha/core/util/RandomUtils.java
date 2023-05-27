package com.xjinyao.xcloud.interactive.captcha.core.util;

import java.io.UnsupportedEncodingException;
import java.util.UUID;
import java.util.concurrent.ThreadLocalRandom;


public class RandomUtils {

    /**
     * 生成UUID
     *
     * @return
     */
    public static String getUUID() {
        String uuid = UUID.randomUUID().toString();
        uuid = uuid.replace("-", "");
        return uuid;
    }

    /**
     * 获取指定文字的随机中文
     *
     * @return
     */
    public static String getRandomHan(String hanZi) {
        String ch = hanZi.charAt(ThreadLocalRandom.current().nextInt(hanZi.length())) + "";
        return ch;
    }

    /**
     * 获取随机中文
     *
     * @return
     */
    public static String getRandomHan() {
        String str = "";
        int highCode;
        int lowCode;

        ThreadLocalRandom random = ThreadLocalRandom.current();

        highCode = (176 + Math.abs(random.nextInt(39))); //B0 + 0~39(16~55) 一级汉字所占区
        lowCode = (161 + Math.abs(random.nextInt(93))); //A1 + 0~93 每区有94个汉字

        byte[] b = new byte[2];
        b[0] = (Integer.valueOf(highCode)).byteValue();
        b[1] = (Integer.valueOf(lowCode)).byteValue();

        try {
            str = new String(b, "GBK");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return str;
    }

    /**
     * 随机范围内数字
     *
     * @param startNum
     * @param endNum
     * @return
     */
    public static Integer getRandomInt(int startNum, int endNum) {
        return ThreadLocalRandom.current().nextInt(endNum - startNum) + startNum;
    }

    /**
     * 获取随机字符串
     *
     * @param length
     * @return
     */
    public static String getRandomString(int length) {
        String str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        ThreadLocalRandom random = ThreadLocalRandom.current();
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < length; i++) {
            int number = random.nextInt(62);
            sb.append(str.charAt(number));
        }
        return sb.toString();
    }

}