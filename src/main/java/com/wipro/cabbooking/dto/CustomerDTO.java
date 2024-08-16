package com.wipro.cabbooking.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomerDTO {
	@NotNull
    private int customerId;
	@NotNull
    private String username;
	@NotNull
    private String password;
	@NotNull
    private String address;
	@NotNull
    private String mobileNumber;
	@NotNull
    private String email;
}
