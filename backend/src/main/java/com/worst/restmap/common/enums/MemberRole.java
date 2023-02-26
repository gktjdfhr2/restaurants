package com.worst.restmap.common.enums;

public enum MemberRole {
    ROLE_MEMBER(0, "ROLE_MEMBER"),
    ROLE_BUSINESS(1,"ROLE_BUSINESS");

    private int memberRoleCode;
    private String memberRoleName;
    MemberRole(int memberRoleCode, String memberRoleName) {
    }
}
