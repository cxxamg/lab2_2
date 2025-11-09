package com.example.demo7.tools;

public class Parser {
    public static boolean parse(String[] params) {
            try {
                Double.parseDouble(params[0]);
                Double.parseDouble(params[1]);
                Double.parseDouble(params[2]);
            } catch (NumberFormatException e) {
                return false;
            }


        return true;
    }


}

