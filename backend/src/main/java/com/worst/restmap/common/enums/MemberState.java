package com.worst.restmap.common.enums;

public enum MemberState {
    MEMBER_NORMAL(0,"정상"),
    MEMBER_DORMANCY(1,"휴면"),
    MEMBER_WITHDRAWAL(2,"탈퇴")
    ;
    private int memberStateCode;
    private String memberState;

    MemberState(int memberStateCode, String memberState) {
        this.memberStateCode = memberStateCode;
        this.memberState = memberState;
    }
}
