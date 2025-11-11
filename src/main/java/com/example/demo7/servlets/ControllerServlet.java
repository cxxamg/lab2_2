package com.example.demo7.servlets;

import java.io.IOException;
import java.util.logging.Logger;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@WebServlet("/app")
public class ControllerServlet extends HttpServlet {
    private static final Logger logger = Logger.getLogger(ControllerServlet.class.getName());

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        logger.info("URI" + request.getRequestURI());

        String x = request.getParameter("x");
        String y = request.getParameter("y");
        String xCanvas = request.getParameter("xCanvas");
        String r = request.getParameter("radius");
        logger.info("Обработка запроса: x=" + x +"xCanvas="+ xCanvas + "y=" + y + "r=" + r);


        if ((x != null || xCanvas != null) && y != null && r != null) {
            request.getRequestDispatcher("/check").forward(request, response);
        } else {
            request.getRequestDispatcher("/index.jsp").forward(request, response);
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getRequestDispatcher("/index.jsp").forward(request, response);
    }
}