package com.bulletproof.cupid.coins.domain;

import javax.persistence.*;

@Entity
@Table(name = "coins")
public class Coin {
    private Long id;
    private String unit;
    private Integer value;
    private String country;
    private Integer year;
    private String additionalInfo;

    @Id
    @GeneratedValue
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    @Column(name = "additional_info")
    public String getAdditionalInfo() {
        return additionalInfo;
    }

    public void setAdditionalInfo(String additionalInfo) {
        this.additionalInfo = additionalInfo;
    }

    @Override
    public String toString() {
        return "Coin{" +
                "id=" + id +
                ", unit='" + unit + '\'' +
                ", value=" + value +
                ", country='" + country + '\'' +
                ", year=" + year +
                ", additionalInfo='" + additionalInfo + '\'' +
                '}';
    }
}