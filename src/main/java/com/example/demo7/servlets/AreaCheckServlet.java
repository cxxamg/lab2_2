package com.example.demo7.servlets;

import java.io.IOException;

import com.example.demo7.Script;
import com.example.demo7.models.Result;
import com.example.demo7.models.ResultHistory;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@WebServlet("/check")
public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Result res = Script.run(request);
        if (res != null){
            ResultHistory.getInstance().addResultToHistory(res);
            HttpSession session = request.getSession();
            session.setAttribute("history", ResultHistory.getInstance().getHistory());
            session.setAttribute("currentResult", res);
            request.getRequestDispatcher("/result.jsp").forward(request, response);
        } else {
            request.getRequestDispatcher("/index.jsp").forward(request, response);
        }

    }
}
