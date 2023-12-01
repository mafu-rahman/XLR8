package com.axlr8.backend.Model;

import java.util.Collection;
import java.util.List;
import java.util.UUID;

import com.axlr8.backend.Model.Enums.UserRole;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "customers")
public class User implements UserDetails {

    @Id
    @GeneratedValue(
        strategy = GenerationType.UUID
    )
    private UUID userId;

    private String firstName;

    private String lastName;

    private String email;

    private String password;

    private String phoneNumber;

    private @Getter boolean active = false;

    private UserRole role = UserRole.CUSTOMER;

    @ManyToOne(cascade = {CascadeType.PERSIST})
    @JoinColumn(name = "address_id")
    @JsonBackReference(value = "user-address")
    private Address address = new Address();

    @OneToOne (cascade = CascadeType.ALL)
    @JoinColumn(name = "cart_id")
    @JsonManagedReference(value = "user-cart")
    private Cart cart = new Cart();


    // public User(){}

    // public User(
    //     UUID userId, 
    //     String firstName, 
    //     String lastName, 
    //     String email,
    //     String password, 
    //     String phoneNumber,
    //     boolean active,
    //     UserRole role
    // ) {
    //     this.userId = userId;
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.password = password;
    //     this.email = email;
    //     this.phoneNumber = phoneNumber;
    //     this.active = active;
    //     this.role = role;
    // }

    public User(
        String firstName,
        String lastName,
        String email,
        String password,
        String phoneNumber,
        boolean active,
        UserRole role
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.active = active;   
        this.role = role;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    // //Getters

    // public UUID getUserId() {
    //     return userId;
    // }

    // public String getFirstName() {
    //     return firstName;
    // }

    // public String getLastName() {
    //     return lastName;
    // }

    
    // public String getEmail() {
    //     return email;
    // }

    // public String getPhoneNumber() {
    //     return this.phoneNumber;
    // }

    // public boolean getActive() {
    //     return this.active;
    // }

    // public Address getAddress(){
    //     return this.address;
    // }

    // public Cart getCart(){
    //     return this.cart;
    // }

    // public String getPassword(){
    //     return this.password;
    // }

    // public UserRole getRole(){
    //     return this.role;
    // }

    // //Setters

    // public void setUserId(UUID id){
    //     this.userId = id;
    // }
    
    // public void setFirstName(String firstName) {
    //     this.firstName = firstName;
    // }

    // public void setLastName(String lastName) {
    //     this.lastName = lastName;
    // }

    // public void setEmail(String email) {
    //     this.email = email;
    // }

    // public void setPhoneNumber(String phoneNumber) {
    //     this.phoneNumber = phoneNumber;
    // }

    // public void setActiveState(boolean active) {
    //     this.active = active;
    // }

    // public void setAddress(Address address){
    //     this.address = address;
    // }

    // public void setCart(Cart cart){
    //     this.cart = cart;
    // }

    // public void setPassword(String password){
    //     this.password = password;
    // }

    // public void setRole(UserRole role){
    //     this.role = role;
    // }

    // @Override
    // public String toString() {
    //     return "Product{" +
    //             "id=" + this.getUserId() +
    //             ", firstName=" + this.getFirstName() +
    //             ", lastName=" + this.getLastName() +
    //             ", email=" + this.getEmail() +
    //             ", phoneNumber=" + this.getPhoneNumber() +
    //             ", active=" + this.getActive() +
    //             "}";
    // }
}

