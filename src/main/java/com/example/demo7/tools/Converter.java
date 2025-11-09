package com.example.demo7.tools;

import jakarta.servlet.http.HttpServletRequest;



public class Converter {
    public static String[] convert(HttpServletRequest request){
        String xCanvasParam = request.getParameter("xCanvas");
        String xParam = request.getParameter("x");
        // Если xCanvas пришёл и не пустой, используем его, иначе используем x
        String x = (xCanvasParam != null && !xCanvasParam.isEmpty()) ? xCanvasParam : xParam;

        String r = request.getParameter("radius");
        String y = request.getParameter("y");

        return new String[]{x,y,r};
    }
}
