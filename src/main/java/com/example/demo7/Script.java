package com.example.demo7;

import com.example.demo7.models.Result;
import com.example.demo7.tools.Converter;
import com.example.demo7.tools.HitCheck;
import com.example.demo7.tools.Parser;
import com.example.demo7.tools.Validation;
import jakarta.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Script {
    public static Result run(HttpServletRequest request){
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSS");
        String serverTime = now.format(formatter);

        long start = System.nanoTime();

        String[] params = Converter.convert(request); //работаем с xyr как с массивом
        if (Parser.parse(params)){
            Validation validation = new Validation(params);
            if (validation.validate()){
                boolean hitCheck = new HitCheck(validation).wasThereHit();
                long end = System.nanoTime();
                double scriptTime = (end - start) / 1_000_000.0;
                double x = validation.getX();
                double y = validation.getY();
                double r = validation.getR();
                return new Result(x, y, r, hitCheck, scriptTime, serverTime);
            }
        }

    return null;
    }
}
