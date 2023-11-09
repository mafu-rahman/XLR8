package com.axlr8.backend.Model;

import java.util.Random;

public class Address {

    private long id;
    private String street;
    private String city;
    private String province;
    private String country;
    private String zip;
    private String phone;

    public Address(int id, String street, String city, String province, String country, String zip, String phone) {
        this.id = generateAddressId();
        this.street = street;
        this.city = city;
        this.province = province;
        this.country = country;
        this.zip = zip;
        this.phone = phone;
    }

    // Getters
    public long getId() {
        return id;
    }

    public String getStreet() {
        return street;
    }

    public String getCity() {
        return city;
    }

    public String getProvince() {
        return province;
    }

    public String getCountry() {
        return country;
    }

    public String getZip() {
        return zip;
    }

    public String getPhone() {
        return phone;
    }

    //Setters

    private long generateAddressId() {
        return new Random().nextInt(99999999);
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
