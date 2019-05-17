package com.boozallen.TaxFiler.model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;


public class TaxSubmission {

	@JsonProperty("first_name")
	private String firstName;

	@JsonProperty("middle_name")
	private String middleName;

	@JsonProperty("last_name")
	private String lastName;

	@JsonProperty("date_of_birth")
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MM/dd/yyyy", timezone="EST")
	private Date dateOfBirth;

	@JsonProperty("ssn")
	private String ssn;

	@JsonProperty("date_of_submission")
	private Date dateOfSubmission;

	@JsonProperty("filing_status")
	private String filingStatus;

	@JsonProperty("income")
	private int income;

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getSsn() {
		return ssn;
	}

	public void setSsn(String ssn) {
		this.ssn = ssn;
	}

	public Date getDateOfSubmission() {
		return dateOfSubmission;
	}

	public void setDateOfSubmission(Date dateOfSubmission) {
		this.dateOfSubmission = dateOfSubmission;
	}

	public String toJsonString() throws JsonProcessingException {
		ObjectMapper mapper = new ObjectMapper();
		String cSubmission = mapper.writeValueAsString(this);
		return cSubmission;
	}

	public String getFilingStatus() {
		return filingStatus;
	}

	public void setFilingStatus(String filingStatus) {
		this.filingStatus = filingStatus;
	}

	public int getIncome() {
		return income;
	}

	public void setIncome(int income) {
		this.income = income;
	}
}
