package com.example.demo7.models;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

public class ResultHistory {
    private final List<Result> history = new CopyOnWriteArrayList<>(); //потокобезопасный

    private ResultHistory() {}

    //вложенный класс синглтон - чтобы потоки не создавали отдельные экземпляры
    //История должна быть одна для всей программы, включать все результаты
    private static class ResultHistoryHolder {
        private static final ResultHistory INSTANCE = new ResultHistory();
    }

    public static ResultHistory getInstance() {
        return ResultHistoryHolder.INSTANCE;
    }

    public List<Result> getHistory() {
        return history;
    }

    public void addResultToHistory(Result result) {
        history.add(result);
    }
}
