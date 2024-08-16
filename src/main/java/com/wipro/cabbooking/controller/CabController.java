package com.wipro.cabbooking.controller;

import com.wipro.cabbooking.dto.CabDTO;
import com.wipro.cabbooking.entity.Cab;
import com.wipro.cabbooking.exception.CabException;
import com.wipro.cabbooking.repository.CabRepository;
import com.wipro.cabbooking.service.CabService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cabs")
@CrossOrigin(origins = "http://localhost:4200")

public class CabController {

    @Autowired
    private CabRepository cabRepository;

    @Autowired
    private CabService cabService;

    // Create a new cab
    @PostMapping
    public ResponseEntity<CabDTO> addCab(@RequestBody CabDTO cabDTO) {
        try {
            CabDTO savedCab = cabService.saveCab(cabDTO);
            return new ResponseEntity<>(savedCab, HttpStatus.CREATED);
        } catch (CabException e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    // Update an existing cab
    @PutMapping("/{cabId}")
    public ResponseEntity<CabDTO> updateCab(@PathVariable int cabId, @RequestBody CabDTO cabDTO) {
        try {
            cabDTO.setCabId(cabId);
            CabDTO updatedCab = cabService.updateCab(cabDTO);
            return new ResponseEntity<>(updatedCab, HttpStatus.OK);
        } catch (CabException e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    // Delete a cab by ID
    @DeleteMapping("/{cabId}")
    public ResponseEntity<Void> deleteCab(@PathVariable int cabId) {
        try {
            cabService.deleteCab(cabId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (CabException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Get a cab by ID
    @GetMapping("/{cabId}")
    public ResponseEntity<CabDTO> getCabById(@PathVariable int cabId) {
        try {
            CabDTO cabDTO = cabService.getCabById(cabId);
            return new ResponseEntity<>(cabDTO, HttpStatus.OK);
        } catch (CabException e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    // Get all cabs
    @GetMapping
    public ResponseEntity<List<CabDTO>> getAllCabs() {
        List<CabDTO> cabs = cabService.getAllCabs();
        return new ResponseEntity<>(cabs, HttpStatus.OK);
    }

    // Get cab by driver ID
    @GetMapping("/driver/{driverId}")
    public ResponseEntity<CabDTO> getCabByDriverId(@PathVariable int driverId) {
        try {
            Cab cab = cabRepository.findByDriverDriverId(driverId);
            if (cab == null) {
                throw new CabException("No cab found for driver ID: " + driverId);
            }
            return new ResponseEntity<>(cabService.convertToDTO(cab), HttpStatus.OK); // Use the method from CabService
        } catch (CabException e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }
}
