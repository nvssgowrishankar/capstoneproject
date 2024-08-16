package com.wipro.cabbooking.controller;

import com.wipro.cabbooking.dto.DriverDTO;
import com.wipro.cabbooking.dto.TripBookingDTO;
import com.wipro.cabbooking.exception.DriverException;
import com.wipro.cabbooking.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/drivers")
@CrossOrigin(origins = "http://localhost:4200") // Ensure this is configured for your frontend
public class DriverController {

    @Autowired
    private DriverService driverService;

    @PostMapping("/register")
    public ResponseEntity<DriverDTO> registerDriver(@RequestBody DriverDTO driverDTO) {
        try {
            DriverDTO registeredDriver = driverService.registerDriver(driverDTO);
            return new ResponseEntity<>(registeredDriver, HttpStatus.CREATED);
        } catch (DriverException e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/update")
    public ResponseEntity<Void> updateDriver(@RequestBody DriverDTO driverDTO) {
        try {
            driverService.updateDriver(driverDTO);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (DriverException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/delete/{driverId}")
    public ResponseEntity<Void> deleteDriver(@PathVariable int driverId) {
        try {
            driverService.deleteDriver(driverId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (DriverException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/{driverId}")
    public ResponseEntity<DriverDTO> getDriverById(@PathVariable int driverId) {
        try {
            DriverDTO driver = driverService.getDriverById(driverId);
            return new ResponseEntity<>(driver, HttpStatus.OK);
        } catch (DriverException e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<DriverDTO>> getAllDrivers() {
        List<DriverDTO> drivers = driverService.getAllDrivers();
        return new ResponseEntity<>(drivers, HttpStatus.OK);
    }

    @GetMapping("/top-drivers")
    public ResponseEntity<List<DriverDTO>> viewBestDrivers() {
        List<DriverDTO> bestDrivers = driverService.viewBestDrivers();
        return new ResponseEntity<>(bestDrivers, HttpStatus.OK);
    }

    @GetMapping("/history/{driverId}")
    public ResponseEntity<List<TripBookingDTO>> getBookingHistory(@PathVariable int driverId) {
        List<TripBookingDTO> bookings = driverService.getBookingHistory(driverId);
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }
}