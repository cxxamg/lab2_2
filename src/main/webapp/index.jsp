<%@ page contentType="text/html; charset=UTF-8"%>
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
<% session.setAttribute("path", "index"); %>
<div class="grid-container">
    <div class="form-container">
        <form id="main_form" method="post" action="app">
            <div class="form-group">
                <!-- Координата X -->
                <label for="x">Введите X координату:</label><br>
                <select id="x" name="x">
                    <option value="" >Выберите значение</option>
                    <option value="-5">-5</option>
                    <option value="-4">-4</option>
                    <option value="-3">-3</option>
                    <option value="-2">-2</option>
                    <option value="-1">-1</option>
                    <option value="0">0</option>
                    <option value="1">-1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <label><input type="hidden" id="xCanvas" name="xCanvas"></label>
            </div>
            <!-- Координата Y -->
            <div class="form-group">
                <label for="y">Введите Y координату:</label>
                <input type="text" id="y" name="y" min="-5" max="5" step="0.0001" required placeholder=" [-5;5]">
            </div>

            <!-- Радиус -->
            <div class="radio-group">
                <label for="radius">Выберите радиус (R):</label><br>
                <select id="radius" name="radius">
                    <option value="">Выберите значение</option>
                    <option value="1">1</option>
                    <option value="1.5">1.5</option>
                    <option value="2">2</option>
                    <option value="2.5">2.5</option>
                    <option value="3">3</option>
                </select>
            </div>

            <!-- Кнопка отправки -->
            <button type="submit">Проверить точку</button>
        </form>
    </div>

    <div class="img-container">
        <canvas id="coordinate_plane" width="400" height="400"></canvas>
    </div>
</div>

<footer>
    <small>Факультет программной инженерии и компьютерной техники (ФПИиКТ)</small><br>
    <small>&copy; 2025 Соколов Александр. Все права защищены.</small>
</footer>

<script type="module" src="./js/form.js"></script>
<script type="module" src="./js/canvasHandler.js"></script>


</body>
</html>