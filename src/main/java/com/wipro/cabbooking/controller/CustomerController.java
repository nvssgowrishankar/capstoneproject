package com.wipro.cabbooking.controller;

import com.wipro.cabbooking.dto.CustomerDTO;
import com.wipro.cabbooking.dto.TripBookingDTO;
import com.wipro.cabbooking.dto.CabDTO;
import com.wipro.cabbooking.exception.CustomerException;
import com.wipro.cabbooking.exception.TripBookingException;
import com.wipro.cabbooking.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
@RestController
@RequestMapping("/api/customers")
@CrossOrigin(origins = "http://localhost:4200") // Ensure this is configured for your frontend

public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("/register")
    public ResponseEntity<CustomerDTO> registerCustomer(@RequestBody CustomerDTO customerDTO) {
        try {
            CustomerDTO registeredCustomer = customerService.registerCustomer(customerDTO);
            return new ResponseEntity<>(registeredCustomer, HttpStatus.CREATED);
        } catch (CustomerException e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }
//    @PostMapping("/login")
//	public ResponseEntity<CustomerDTO> login(@RequestParam String email, @RequestParam String password) {
//		CustomerDTO cus= auth.login(email, password);
//				return new ResponseEntity<>(cus,HttpStatus.OK);
//	}

    @PutMapping("/update")
    public ResponseEntity<CustomerDTO> updateCustomerProfile(@RequestBody CustomerDTO customerDTO) {
        try {
            CustomerDTO updatedCustomer = customerService.updateCustomerProfile(customerDTO);
            return new ResponseEntity<>(updatedCustomer, HttpStatus.OK);
        } catch (CustomerException e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/delete/{customerId}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable int customerId) {
        try {
            customerService.deleteCustomer(customerId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (CustomerException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get/{customerId}")
    public ResponseEntity<CustomerDTO> getCustomerById(@PathVariable int customerId) {
        try {
            CustomerDTO customer = customerService.getCustomerById(customerId);
            return new ResponseEntity<>(customer, HttpStatus.OK);
        } catch (CustomerException e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<CustomerDTO>> getAllCustomers() {
        List<CustomerDTO> customers = customerService.getAllCustomers();
        return new ResponseEntity<>(customers, HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<List<CustomerDTO>> searchCustomersByUsername(@RequestParam String username) {
        List<CustomerDTO> customers = customerService.searchCustomersByUsername(username);
        return new ResponseEntity<>(customers, HttpStatus.OK);
    }

    @GetMapping("/available-cabs")
    public ResponseEntity<List<CabDTO>> viewAvailableCabs() {
        List<CabDTO> cabs = customerService.viewAvailableCabs();
        return new ResponseEntity<>(cabs, HttpStatus.OK);
    }

    @PostMapping("/{customerId}/book")
    public ResponseEntity<TripBookingDTO> bookCab(@PathVariable int customerId, @RequestBody TripBookingDTO tripBookingDTO) {
        try {
            TripBookingDTO tripBooking = customerService.bookCab(customerId, tripBookingDTO);
            return new ResponseEntity<>(tripBooking, HttpStatus.CREATED);
        } catch (TripBookingException e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/cancel/{tripId}")
    public ResponseEntity<Void> cancelBooking(@PathVariable int tripId) {
        try {
            customerService.cancelBooking(tripId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (TripBookingException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/{customerId}/booking-history")
    public ResponseEntity<List<TripBookingDTO>> viewBookingHistory(@PathVariable int customerId) {
        List<TripBookingDTO> bookings = customerService.viewBookingHistory(customerId);
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }
}