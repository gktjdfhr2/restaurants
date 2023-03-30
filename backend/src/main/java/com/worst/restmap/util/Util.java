package com.worst.restmap.util;

import java.sql.Time;
import java.time.LocalTime;
import java.time.temporal.ChronoField;

public class Util {

    public static LocalTime timeToLocalTime(Time time) {
        int hour = time.toLocalTime().getHour();
        int minute = time.toLocalTime().getMinute();
        int second = time.toLocalTime().getSecond();
        int nano = time.toLocalTime().get(ChronoField.NANO_OF_SECOND);
        return LocalTime.of(hour, minute, second, nano);
    }
}
