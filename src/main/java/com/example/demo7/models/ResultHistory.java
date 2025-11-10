package com.example.demo7.models;

import java.util.ArrayList;
import java.util.List;


public class ResultHistory {
    private final List<Result> history = new ArrayList<>();

    public List<Result> getHistory() {
        return this.history;
    }

    public void addResultToHistory(Result result) {
        this.history.add(result);
    }
}
