package com.boozallen.TaxFiler.restcontroller;

import com.boozallen.TaxFiler.service.AccountService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.Map;

@RestController
public class AccountRestController {

    @Autowired
    private AccountService accountService;

    @PostMapping(value = "/account/taxstatus/query", produces = "application/json")
    public JsonNode query(@RequestBody ObjectNode data) throws IOException {
        return accountService.findTaxStatus(data.get("ssn").asText());
    }
}
