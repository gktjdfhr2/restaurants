
SET FOREIGN_KEY_CHECKS = 0;
CREATE DATABASE  ATTENDANCE_MANAGEMENT;
use ATTENDANCE_MANAGEMENT;
create table ATTENDANCE
(
    id         int                    not null
        primary key,
    username   int                    not null,
    date       date default curdate() not null comment '근태 일자',
    start_time time                   null comment '출근시간
',
    end_time   time                   null comment '퇴근시간',
    status     char                   not null comment '0: 정상
1: 지각
2: 결근
이상 - 1,2',
    constraint fk_ATTENDANCE_EMPLOYEE1
        foreign key (username) references EMPLOYEE (username)
);

create index fk_ATTENDANCE_EMPLOYEE1_idx
    on ATTENDANCE (username);

create table DEPARTMENT
(
    id         int         not null
        primary key,
    name       varchar(45) not null,
    location   varchar(45) not null,
    start_time datetime    not null,
    end_time   datetime    not null
);

create table EMPLOYEE
(
    username       int                    not null comment '사원번호'
        primary key,
    dep_id         int                    not null,
    password       varchar(100)           not null,
    name           varchar(100)           not null,
    email          varchar(45)            not null,
    img            varchar(100)           not null,
    gender         char                   not null comment '0:남자
1:여자',
    position       varchar(45)            not null,
    role           char                   not null comment '0: admin
1: manager
2: user',
    created_at     date default curdate() not null,
    qr_path        varchar(45)            not null,
    rest_time      int  default 120       not null comment 'deafult: 120',
    working_status char default '0'       not null comment '퇴사 여부 상태 표시
0: 근무자
1: 퇴사자',
    constraint fk_EMPLOYEE_DEPARTMENT1
        foreign key (dep_id) references DEPARTMENT (id)
);

create table REARRANGE
(
    id            int auto_increment,
    a_id          int              not null,
    start_time    datetime         not null,
    end_time      datetime         not null,
    contents      varchar(200)     not null,
    approval_flag char default '0' not null comment '조정 요청 상태 플래그
0: 요청 , 1 : 승인, 2: 반려',
    primary key (id, a_id),
    constraint fk_REARRANGE_ATTENDANCE1
        foreign key (a_id) references ATTENDANCE (id)
)
    comment 'ATTENDANCE_ID';

create index fk_REARRANGE_ATTENDANCE1_idx
    on REARRANGE (a_id);

create table TOKEN
(
    id            int auto_increment,
    username      int          not null,
    refresh_token varchar(300) not null,
    primary key (id, username),
    constraint fk_TOKEN_EMPLOYEE1
        foreign key (username) references EMPLOYEE (username)
)
    comment 'EMPLOEYEE.uesrname
사원번호';

create index fk_TOKEN_EMPLOYEE1_idx
    on TOKEN (username);

create table VACATION
(
    id            int auto_increment,
    a_id          int              null,
    username      int              not null comment 'EMPLOYEE.id
사원번호',
    date          date             not null comment '휴가시간 컬럼
부서별 근무 시작시간 기준으로 계산
',
    contents      varchar(100)     not null,
    vacation_type char             not null comment '휴가 상태
0: 전일 휴가
1: 오전 휴가
2: 오후 휴가
',
    approval_flag char default '0' not null comment '휴가 승인 여부
0: 승인 요청
1: 승인
2: 반려
3: 취소',
    primary key (id, username),
    constraint fk_VACATION_ATTENDANCE1
        foreign key (a_id) references ATTENDANCE (id),
    constraint fk_VACATION_EMPLOYEE1
        foreign key (username) references EMPLOYEE (username)
)
    comment '휴가 승인 여부
0: 승인 요청
1: 승인
2: 반려
3: 취소';

create index fk_VACATION_ATTENDANCE1_idx
    on VACATION (a_id);

create index fk_VACATION_EMPLOYEE1_idx
    on VACATION (username);

create index fk_EMPLOYEE_DEPARTMENT1_idx
    on EMPLOYEE (dep_id);



create table LOG_REARRANGE
(
    id              int auto_increment
        primary key,
    r_id            int          not null,
    r_start_time    datetime     not null,
    r_end_time      datetime     not null,
    r_contents      varchar(200) not null,
    r_approval_flag char         not null
)
    comment '근태 조정 요청 로그';

create table LOG_VACATION
(
    id              int auto_increment
        primary key,
    v_id            int          not null,
    username        int          not null,
    v_date          datetime     not null,
    v_contents      varchar(100) not null,
    v_type          char         not null,
    v_approval_flag char         not null
)
    comment '휴가 신청 로그';

create definer = admin@`%` trigger update_log_vacation
    after update
                     on VACATION
                     for each row
BEGIN
    IF OLD.approval_flag != NEW.approval_flag THEN
        INSERT INTO LOG_VACATION(v_id, username, v_date, v_contents, v_type, v_approval_flag) VALUES(OLD.id, OLD.username, OLD.date, OLD.contents, OLD.vacation_type, NEW.approval_flag);
END IF;
END;

create definer = admin@`%` trigger AUTO_LOG_REARRANGE_INSERT
    after insert
    on REARRANGE
    for each row
BEGIN
    DECLARE R_ID INT;
    DECLARE R_START_TIME DATETIME;
    DECLARE R_END_TIME DATETIME;
    DECLARE R_CONTENTS VARCHAR(200);
    DECLARE R_APPROVAL_FLAG CHAR(1);

    SET R_ID = NEW.id;
    SET R_START_TIME = NEW.start_time;
    SET R_END_TIME = NEW.end_time;
    SET R_CONTENTS = NEW.contents;
    SET R_APPROVAL_FLAG = NEW.approval_flag;

INSERT INTO LOG_REARRANGE(R_ID, R_START_TIME, R_END_TIME, R_CONTENTS, R_APPROVAL_FLAG) VALUE(R_ID, R_START_TIME, R_END_TIME, R_CONTENTS, R_APPROVAL_FLAG);
end;

create definer = admin@`%` trigger AUTO_LOG_REARRANGE_UPDATE
    after update
                     on REARRANGE
                     for each row
BEGIN
    DECLARE R_ID INT;
    DECLARE R_START_TIME DATETIME;
    DECLARE R_END_TIME DATETIME;
    DECLARE R_CONTENTS VARCHAR(200);
    DECLARE R_APPROVAL_FLAG CHAR(1);

    SET R_ID = OLD.id;
    SET R_START_TIME = OLD.start_time;
    SET R_END_TIME = OLD.end_time;
    SET R_CONTENTS = OLD.contents;
    SET R_APPROVAL_FLAG = NEW.approval_flag;

INSERT INTO LOG_REARRANGE(R_ID, R_START_TIME, R_END_TIME, R_CONTENTS, R_APPROVAL_FLAG) VALUE(R_ID, R_START_TIME, R_END_TIME, R_CONTENTS, R_APPROVAL_FLAG);
END;
set foreign_key_checks  = 1;
