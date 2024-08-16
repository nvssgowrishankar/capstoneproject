package com.wipro.cabbooking.repository;

import com.wipro.cabbooking.entity.Cab;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CabRepository extends JpaRepository<Cab, Integer> {
    List<Cab> findByCarType(String carType);
    Cab findByDriverDriverId(int driverId);
    List<Cab> findByPerKmRateBetween(float minRate, float maxRate);
}