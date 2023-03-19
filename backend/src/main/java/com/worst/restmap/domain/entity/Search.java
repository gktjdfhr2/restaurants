package com.worst.restmap.domain.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "search")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Search {

    @Id
    @Column(name = "search")
    private long searchId;
    @Column(name = "search_member_email")
    private String searchMemberEmail;
    @Column(name = "search_keyword")
    private String searchKeyword;
    @Column(name = "search_log_datetime")
    private LocalDateTime searchLogDatetime;
}
