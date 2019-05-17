package com.boozallen.TaxFiler.restcontroller;

import com.boozallen.TaxFiler.model.TaxSubmission;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class FileRestController {

    @PostMapping(value = "/file", produces = "application/json", consumes = "application/json")
    public ResponseEntity<String> file(@RequestBody TaxSubmission json) throws JsonProcessingException {
        System.out.println("file running");
        System.out.println(json.getDateOfBirth());

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<TaxSubmission> request = new HttpEntity(json, headers);
      //  ResponseEntity<String> responseEntity = restTemplate.postForEntity("http://localhost:6081/submission", request, String.class);
        restTemplate.exchange("http://localhost:6081/submission", HttpMethod.POST, request, String.class );
        return null;
    }



}
