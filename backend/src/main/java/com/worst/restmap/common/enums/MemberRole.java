package com.worst.restmap.common.enums;

public enum MemberRole {
    ROLE_MEMBER(0, "ROLE_MEMBER"),
    ROLE_BUSINESS(1,"ROLE_BUSINESS"),
    ROLE_ADMIN(2,"ROLE_ADMIN");

    private long memberRoleCode;
    private String memberRoleName;
    MemberRole(long memberRoleCode, String memberRoleName) {
        this.memberRoleCode = memberRoleCode;
        this.memberRoleName = memberRoleName;
    }

    public static String getMemberRoleName(long code) {
        if(code == 0) {
            return ROLE_MEMBER.memberRoleName;
        } else if (code == 1) {
            return ROLE_BUSINESS.memberRoleName;
        } else {
            return ROLE_ADMIN.memberRoleName;
        }
    }
}
