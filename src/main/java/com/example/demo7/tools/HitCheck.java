package com.example.demo7.tools;

public class HitCheck {
    private final double x;
    private final double y;
    private final double r;

    public HitCheck(Validation validation) {
        this.x = validation.getX();
        this.y = validation.getY();
        this.r = validation.getR();
    }

    public boolean wasThereHit() {
        return triangle() || rectangle() || sector();
    }

    private boolean triangle() {
        return (x <= 0 && y >= 0 && y <= (x + r));
    }

    private boolean rectangle() {
        return (x >= 0 && y >= 0 && x <= r && y <= r/2);
    }

    private boolean sector() {
        return (x <= 0 && y <= 0 && (x * x + y * y <= r * r));
    }
}
