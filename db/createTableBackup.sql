CREATE TABLE `authority` (
                             `authority_name` varchar(50) NOT NULL,
                             PRIMARY KEY (`authority_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3

CREATE TABLE `business` (
                            `business_id` int(11) NOT NULL AUTO_INCREMENT,
                            `business_name` varchar(40) NOT NULL,
                            `business_place` varchar(200) NOT NULL,
                            `business_Address` varchar(200) NOT NULL,
                            `business_owner` varchar(50) NOT NULL,
                            `business_conditions` int(11) NOT NULL,
                            `business_tag` varchar(200) DEFAULT NULL,
                            `business_open_state` int(11) NOT NULL,
                            `business_delete_state` int(11) NOT NULL,
                            `business_like` int(11) NOT NULL,
                            `business_amenities` varchar(200) DEFAULT NULL,
                            `business_open_time` datetime DEFAULT NULL,
                            `business_closed_time` datetime DEFAULT NULL,
                            `business_break_time` datetime DEFAULT NULL,
                            `business_close_day` datetime DEFAULT NULL,
                            PRIMARY KEY (`business_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3

CREATE TABLE `calls` (
                         `calls_id` int(11) NOT NULL AUTO_INCREMENT,
                         `calls_business_id` int(11) NOT NULL,
                         `calls_member_id` int(11) NOT NULL,
                         `calls_time` datetime DEFAULT NULL,
                         PRIMARY KEY (`calls_id`),
                         KEY `calls_business_id_fk` (`calls_business_id`),
                         KEY `calls_member_id_fk` (`calls_member_id`),
                         CONSTRAINT `calls_business_id_fk` FOREIGN KEY (`calls_business_id`) REFERENCES `business` (`business_id`),
                         CONSTRAINT `calls_member_id_fk` FOREIGN KEY (`calls_member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3

CREATE TABLE `image` (
                         `image_id` int(11) NOT NULL AUTO_INCREMENT,
                         `image_review_id` int(11) DEFAULT NULL,
                         `image_path` varchar(200) NOT NULL,
                         `image_original_name` varchar(200) NOT NULL,
                         `image_name` varchar(200) NOT NULL,
                         `image_size` int(11) DEFAULT NULL,
                         `image_width` mediumint(9) DEFAULT NULL,
                         `image_height` mediumint(9) DEFAULT NULL,
                         PRIMARY KEY (`image_id`),
                         KEY `image_review_id_fk` (`image_review_id`),
                         CONSTRAINT `image_review_id_fk` FOREIGN KEY (`image_review_id`) REFERENCES `review` (`review_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3

CREATE TABLE `line` (
                        `line_id` int(11) NOT NULL AUTO_INCREMENT,
                        `line_member_role` int(11) NOT NULL,
                        `line_member_name` varchar(50) NOT NULL,
                        `line_phone_number` varchar(13) NOT NULL,
                        `line_business_id` int(11) NOT NULL,
                        `line_state` int(11) NOT NULL,
                        `line_personnel_adult` int(11) NOT NULL,
                        `line_personnel_Kid` int(11) NOT NULL,
                        `line_datetime` datetime DEFAULT NULL,
                        `line_complete_time` datetime DEFAULT NULL,
                        PRIMARY KEY (`line_id`),
                        KEY `line_business_id_fk` (`line_business_id`),
                        CONSTRAINT `line_business_id_fk` FOREIGN KEY (`line_business_id`) REFERENCES `business` (`business_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3

CREATE TABLE `member` (
                          `member_id` int(11) NOT NULL AUTO_INCREMENT,
                          `member_role` int(11) NOT NULL,
                          `member_email` varchar(30) DEFAULT NULL,
                          `member_passwd` varchar(50) NOT NULL,
                          `member_phone` varchar(13) NOT NULL,
                          `member_name` varchar(50) NOT NULL,
                          `member_address` varchar(100) DEFAULT NULL,
                          `member_is_withdrawal` tinyint(1) DEFAULT NULL,
                          PRIMARY KEY (`member_id`),
                          UNIQUE KEY `member_email` (`member_email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3

CREATE TABLE `member_authority` (
                                    `member_id` int(11) NOT NULL,
                                    `authority_name` varchar(50) DEFAULT NULL,
                                    KEY `member_authority_member_id_fk` (`member_id`),
                                    KEY `member_authority_authority_name_fk` (`authority_name`),
                                    CONSTRAINT `member_authority_authority_name_fk` FOREIGN KEY (`authority_name`) REFERENCES `authority` (`authority_name`),
                                    CONSTRAINT `member_authority_member_id_fk` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3

CREATE TABLE `resevervation` (
                                 `reservation_id` int(11) NOT NULL AUTO_INCREMENT,
                                 `reservation_member_role` int(11) NOT NULL,
                                 `reservation_member_id` int(11) DEFAULT NULL,
                                 `reservation_phone` varchar(13) DEFAULT NULL,
                                 `reservation_business_id` int(11) DEFAULT NULL,
                                 `reservation_state` int(11) NOT NULL,
                                 `reservation_personnel_adult` int(11) NOT NULL,
                                 `reservation_personnel_kid` int(11) DEFAULT NULL,
                                 `reservation_date` datetime NOT NULL,
                                 `reservation_logDT` datetime NOT NULL,
                                 PRIMARY KEY (`reservation_id`),
                                 KEY `resevervation_business_id_fk` (`reservation_business_id`),
                                 KEY `resevervation_member_id_fk` (`reservation_member_id`),
                                 CONSTRAINT `resevervation_business_id_fk` FOREIGN KEY (`reservation_business_id`) REFERENCES `business` (`business_id`),
                                 CONSTRAINT `resevervation_member_id_fk` FOREIGN KEY (`reservation_member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3

CREATE TABLE `review` (
                          `review_id` int(11) NOT NULL AUTO_INCREMENT,
                          `review_business_id` int(11) NOT NULL,
                          `review_member_id` int(11) NOT NULL,
                          `review_score` decimal(3,2) NOT NULL,
                          `review_detail` varchar(300) DEFAULT NULL,
                          `review_image_id` int(11) DEFAULT NULL,
                          PRIMARY KEY (`review_id`),
                          KEY `review_business_id_fk` (`review_business_id`),
                          KEY `review_member_id_fk` (`review_member_id`),
                          CONSTRAINT `review_business_id_fk` FOREIGN KEY (`review_business_id`) REFERENCES `business` (`business_id`),
                          CONSTRAINT `review_member_id_fk` FOREIGN KEY (`review_member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3

CREATE TABLE `token` (
                         `token_id` int(11) NOT NULL AUTO_INCREMENT,
                         `token_member_id` int(11) NOT NULL,
                         `token_access_token` varchar(50) NOT NULL,
                         `token_refresh_token` varchar(50) NOT NULL,
                         PRIMARY KEY (`token_id`),
                         KEY `token_member_member_id_fk` (`token_member_id`),
                         CONSTRAINT `token_member_member_id_fk` FOREIGN KEY (`token_member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3

