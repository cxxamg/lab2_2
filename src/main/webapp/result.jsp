<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page import="com.example.demo7.models.Result" %>
<%@ page import="java.util.List" %>
<%@ page import="com.google.gson.Gson" %>



<!DOCTYPE HTML>
<html lang="ru">
<head>
    <meta charset="UTF-8"> <!-- тк в браузере изначально win-1252-->
    <title>Лабораторная работа #1</title>
    <link rel="icon" href="../main/webapp/images/favicon.png"/>
    <link rel="stylesheet" href="styles.css">

</head>
<body>
<!-- header -->
<div class="header-container">
    <header>
        <h1>Соколов Александр Алексеевич, P3208, 467537</h1>
    </header>

</div>
<%
   session.setAttribute("path", "result");
   Result newResult = (Result) session.getAttribute("currentResult");
   List<Result> history = (List<Result>) session.getAttribute("history");
   Gson gson = new Gson();
   String historyJson = gson.toJson(history);
   String currentR = newResult != null ? String.valueOf(newResult.r()) : "-";
%>
<div id="canvas_container"
     data-current-r="<%= currentR %>"
     data-history-json='<%= historyJson %>'>
<div id="left_column">
    <div id="current_result_details">
        <h3 id="result_header">Детали текущей проверки</h3>
        <% if (newResult != null) { %>
        <table>
            <thead>
            <tr>
                <th>X</th>
                <th>Y</th>
                <th>R</th>
                <th>Попадание</th>
                <th>Текущее время</th>
                <th>Время работы скрипта (мс)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><%= newResult.x() %></td>
                <td><%= newResult.y() %></td>
                <td><%= newResult.r() %></td>
                <td><%= newResult.hit() ? "Да" : "Нет" %></td>
                <td><%= newResult.serverTime() %></td>
                <td><%= newResult.scriptTime() %></td>
            </tr>
            </tbody>
        </table>
        <% } %>
        <div id="navigation">
            <a href="index.jsp">Отправить новый запрос</a>
        </div>
    </div>



    <!-- Таблица -->
    <div id="table_container">
        <h3 id="history_header">История проверок</h3>
        <table>
            <thead>
            <tr>
                <th>X</th>
                <th>Y</th>
                <th>R</th>
                <th>Попадание</th>
                <th>Текущее время</th>
                <th>Время работы скрипта (мс)</th>
            </tr>
            </thead>
            <tbody>
            <%
               if (history != null) {
                    for (Result res : history) {
             %>
            <tr>
                <td><%= res.x() %></td>
                <td><%= res.y() %></td>
                <td><%= res.r() %></td>
                <td><%= res.hit() ? "Да" : "Нет" %></td>
                <td><%= res.serverTime() %></td>
                <td><%= res.scriptTime() %></td>
            </tr>
                <%
                        }
                    }
                %>
            </tbody>
        </table>
    </div>
</div>
<div class="grid-container-2">
    <div class="img-container">
        <canvas id="coordinate_plane" width="400" height="400"></canvas>
    </div>
</div>
</div>


<footer>
    <small>Факультет программной инженерии и компьютерной техники (ФПИиКТ)</small><br>
    <small>&copy; 2025 Соколов Александр. Все права защищены.</small>
</footer>


<!--<script type="module" src="./js/canvasHandler.js"></script>-->
<script type="module" src="./js/result.js"></script>

</body>
</html>