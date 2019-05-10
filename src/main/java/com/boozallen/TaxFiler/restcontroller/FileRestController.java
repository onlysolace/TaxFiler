package com.boozallen.TaxFiler.restcontroller;

import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class FileRestController {

    @PostMapping(value = "/file", produces = "application/json")
    public ResponseEntity<String> file(@RequestBody ObjectNode json){
        System.out.println("file running");
        System.out.println(json.get("ssn").asText());

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> responseEntity = restTemplate.postForEntity("http://localhost:6081/submission", json, String.class);
        return null;
    }



}
