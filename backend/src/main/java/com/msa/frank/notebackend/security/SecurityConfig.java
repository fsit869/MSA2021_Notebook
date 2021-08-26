/* Security.java

Security config class of Spring boot application.
Current configurations disable csrf, which for this small application complicates many things.
Grants permission to graphql and playground.

 */

package com.msa.frank.notebackend.security;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    public void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable() // Not needed. Complicates application.
                .authorizeRequests()
                .antMatchers("/graphql").permitAll()
                .antMatchers("/vendor/**").permitAll()
                .antMatchers("/playground").permitAll()
                .anyRequest().authenticated().and()
                .cors()
                .disable();
    }
}
