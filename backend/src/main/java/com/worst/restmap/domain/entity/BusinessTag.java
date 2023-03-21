package com.worst.restmap.domain.entity;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table( name = "`business_tag`")
public class BusinessTag {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    @Column( name = "business_tag_id")
    private long businessTagId;
    @Column( name = "business_tag_business_id")
    private long businessTagBusinessId;
    @Column( name = "business_tag_tag_id")
    private long businessTagTagId;

    @ManyToOne
    @JoinColumn(name = "business_tag_business_id", insertable = false, updatable = false)
    private Business business;

    @ManyToOne
    @JoinColumn(name = "business_tag_tag_id", insertable = false, updatable = false)
    private Tag tag;
}
