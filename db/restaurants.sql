CREATE DATABASE restaurant DEFAULT CHARACTER SET utf8 COLLATE ntf8mb4_unicode_ci;

create table tb_users_info(
--     user_id varchar(50) primary key,
    user_id int primary key,
    user_name varchar(50) not null,
    user_type int not null,
    user_email varchar(30) unique ,
    user_passwd varchar(50) not null,
    user_phone varchar(13) not null,
    user_addr varchar(100),
    user_role varchar(20) not null,
    user_withdrawal int not null

);

create table tb_restaurants_info(
    rest_id varchar(50) primary key,
    rest_name varchar(40) not null,
    rest_owner varchar(50) not null,
    rest_type int not null ,
    rest_tag varchar(200),
    rest_stat int not null,
    rest_withDrawal int not null
);

create table tb_resevervations_info(
    resv_id varchar(50) primary key,
    resv_customer_type int not null ,
    resv_user_id varchar(20),
    resv_phone varchar(13),
    resv_rest_id varchar(50),
    resv_stat int not null ,
    resv_person int not null ,
    resv_date datetime not null ,
    resv_logDT datetime not null
);

create table tb_tokens_info(
    token_id varchar(50) primary key ,
    token_user_id varchar(50) not null ,
    token_access_token varchar(50) not null ,
    token_refresh_token varchar(50) not null
);

create table tb_reviews_info(
    review_id varchar(50) primary key ,
    review_rest_id varchar(50) not null ,
    review_user_id varchar(50) not null ,
    review_score double not null,
    review_detail varchar(300)
);

create table tb_images_info(
    img_id varchar(50) primary key ,
    img_review_id varchar(50),
    img_path varchar(200) not null ,
    img_original_name varchar(200) not null ,
    img_name varchar(200) not null ,
    img_size int,
    img_width MEDIUMINT,
    img_height MEDIUMINT

);

create table tb_lines_info(
    line_id varchar(50) primary key,
    line_user_type int not null ,
    line_name varchar(20),
    line_phone varchar(13),
    line_rest_id varchar(50) not null,
    line_person int not null ,
    line_time datetime not null ,
    line_end_time datetime
);



