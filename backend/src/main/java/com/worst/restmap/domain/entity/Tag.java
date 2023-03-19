package com.worst.restmap.domain.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table( name = "`tag`")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tag_id")
    private long tagId;
    @Column(name = "tag_name")
    private String tagName;

}
