package com.worst.restmap.domain.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

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

    @JsonManagedReference("TagReference")
    @OneToMany
    @JoinColumn( name = "business_tag_tag_id")
    private List<BusinessTag> businessTags = new ArrayList<>();
}
