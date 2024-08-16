package com.wipro.cabbooking.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CabDTO {
    private int cabId;
    private String carType;
    private float perKmRate;
    @JsonIgnore
    private DriverDTO driver; 
}
