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
            HttpSession session = request.getSession();
            ResultHistory rHistory = (ResultHistory) session.getAttribute("rHistory");
            if (rHistory == null){
                rHistory = new ResultHistory();
                session.setAttribute("rHistory", rHistory);
            }
            rHistory.addResultToHistory(res);
            session.setAttribute("history", rHistory.getHistory());
            session.setAttribute("currentResult", res);
            request.getRequestDispatcher("/result.jsp").forward(request, response);
        } else {
            request.getRequestDispatcher("/index.jsp").forward(request, response);
        }

    }
}
