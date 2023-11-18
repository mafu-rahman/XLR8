package com.axlr8.admin.admin_server;

import de.codecentric.boot.admin.server.config.AdminServerProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import java.security.Key;
import java.util.UUID;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {

    private final AdminServerProperties adminServer;

    public WebSecurityConfig(AdminServerProperties adminServer){
        this.adminServer = adminServer;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        SavedRequestAwareAuthenticationSuccessHandler successHandler =
                new SavedRequestAwareAuthenticationSuccessHandler();
        successHandler.setTargetUrlParameter("redirectTo");
        successHandler.setDefaultTargetUrl(this.adminServer.getContextPath() + "/");

        http
                .authorizeHttpRequests(authorizeRequests ->
                    authorizeRequests
                        .requestMatchers(this.adminServer.getContextPath() +"/assets/**").permitAll()
                        .requestMatchers(this.adminServer.getContextPath()+ "/instances").permitAll()
                            .anyRequest()
                            .authenticated()
                )
                .formLogin(formLogin ->
                            formLogin
                                    .loginPage(this.adminServer.getContextPath()+ "/login")
                                    .permitAll()
                )
                .logout(logout->
                        logout
                                .logoutUrl(this.adminServer.getContextPath()+ "/logout")
                )
                .httpBasic(Customizer.withDefaults())
                .csrf(csrf->
                        csrf
                            .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
                            .ignoringRequestMatchers(
                                new AntPathRequestMatcher(this.adminServer.getContextPath()+ "/instances", HttpMethod.POST.toString()),
                                new AntPathRequestMatcher(this.adminServer.getContextPath()+ "/instances/*", HttpMethod.DELETE.toString()),
                                new AntPathRequestMatcher(this.adminServer.getContextPath()+ "/actuator/**")
                            )
                )
                .rememberMe(Customizer.withDefaults());


        return http.build();
    }
}
