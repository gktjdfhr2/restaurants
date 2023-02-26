CREATE DATABASE restaurant DEFAULT CHARACTER SET utf8 COLLATE ntf8mb4_unicode_ci;

create table member(
    member_id int primary key not null,
    member_role int not null,
    member_email varchar(30) unique ,
    member_passwd varchar(50) not null,
    member_phone varchar(13) not null,
    member_name varchar(50) not null,
    member_addr varchar(100),
    member_withdrawal int not null
);

create table resevervation(
    resvation_id int primary key not null,
    resvation_customer_type int not null,
    resvation_member_id varchar(20),
    resvation_phone varchar(13),
    resvation_rest_id varchar(50),
    resvation_state int not null,
    resvation_person int not null ,
    resvation_date datetime not null ,
    resvation_logDT datetime not null
);

create table restaurant(
   business_id int primary key not null ,
   business_name varchar(40) not null,
   business_place varchar(200) not null,
   business_Address varchar(200) not null,
   business_owner varchar(50) not null,
   business_conditions int not null ,
   business_tag varchar(200),
   business_open_state int not null,
   business_delete_state int not null,
   business_like int not null,
   business_amenities varchar(200),
   business_open_time datetime,
   business_closed_time datetime,
   business_break_time datetime,
   business_close_day datetime
);

create table token(
    token_id int primary key not null ,
    token_member_id int not null ,
    token_access_token varchar(50) not null ,
    token_refresh_token varchar(50) not null
);

create table review(
    review_id int primary key not null ,
    review_rest_id varchar(50) not null ,
    review_user_id varchar(50) not null ,
    review_score double not null,
    review_detail varchar(300),
    review_image_id varchar(50)
);

create table image(
    image_id int primary key not null ,
    image_review_id int,
    image_path varchar(200) not null ,
    image_original_name varchar(200) not null ,
    image_name varchar(200) not null ,
    image_size int,
    image_width MEDIUMINT,
    image_height MEDIUMINT

);

create table call(
    call_id int primary key not null ,
    call_business_id int not null,
    call_member_id int not null,
    call_time datetime
);

create table line(
    line_id int primary key not null,
    line_member_role int not null,
    line_member_name varchar(50) not null,
    line_phone_number varchar(13) not null,
    line_business_id int not null,
    line_state int not null,
    line_personnel_adult int not null,
    line_personnel_Kid int not null,
    line_datetime datetime,
    line_complete_time datetime
);

create table member_authority(
    member_id int not null,
    authority_name VARCHAR(50)
);

create table authority(
    authority_name VARCHAR(50)
);



