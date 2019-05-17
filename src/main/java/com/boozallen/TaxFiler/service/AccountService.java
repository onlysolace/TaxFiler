package com.boozallen.TaxFiler.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.Map;

@Service
public class AccountService {

    /*
    public JsonNode findTaxStatus(String ssn) throws IOException {
        System.out.println("find account running");
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.postForEntity("http://localhost:8080/account/taxstatus/query",
                Map.of("ssn", ssn), String.class);
        return new ObjectMapper().readTree(response.getBody());
    }


     */
}
