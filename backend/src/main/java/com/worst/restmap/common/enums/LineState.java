package com.worst.restmap.common.enums;

public enum LineState {

    LINE_STATE_WAITED(0,"대기미확정"),
    LINE_STATE_COMFIRMED(1,"대기확정"),
    LINE_STATE_COMPLETED(2,"대기완료");


    private int stateCode;
    private String stateText;

    LineState(int stateCode, String stateText) {
        this.stateCode = stateCode;
        this.stateText = stateText;
    }

    public String getStateText() {
        return stateText;
    }
}
