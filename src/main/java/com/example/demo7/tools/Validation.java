package com.example.demo7.tools;

import java.util.ArrayList;
import java.util.List;

public class Validation {
    private double x;
    private double y;
    private double r;
    public final List<String> errors = new ArrayList<>();
    private boolean isValid = true;

    public Validation(String[] params) {
        this.x = Double.parseDouble(params[0]);;
        this.y = Double.parseDouble(params[1]);
        this.r = Double.parseDouble(params[2]);
    }

    public boolean validate() {
        errors.clear();
        isValid = true;

        
        if (Double.isNaN(x) || Double.isNaN(y) || Double.isNaN(r)) {
            errors.add("Все поля должны быть заполнены корректными числами.");
            isValid = false;
            //return false;
        }


        if (x < -5 || x > 3) {
            errors.add("X должен быть в диапазоне от -5 до 3.");
            isValid = false;
        }

        // Проверка диапазона Y: от -5 до 5
        if (y < -5 || y > 5) {
            errors.add("Y должен быть в диапазоне от -5 до 5.");
            isValid = false;
        }


        if (r < 1 || r > 3) {
            errors.add("R (радиус) должен быть в диапазоне от 1 до 3.");
            isValid = false;
        }

        return isValid;
    }

    public boolean isValid() {
        return isValid;
    }

    public List<String> getErrors() {
        return new ArrayList<>(errors);
    }

    public String getErrorsAsString() {
        return String.join("; ", errors);
    }

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public double getR() {
        return r;
    }

    public void setX(double x) {
        this.x = x;
    }

    public void setY(double y) {
        this.y = y;
    }

    public void setR(double r) {
        this.r = r;
    }
}
