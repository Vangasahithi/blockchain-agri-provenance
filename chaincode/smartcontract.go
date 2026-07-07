package main

import (
	"encoding/json"
	"fmt"

	"github.com/hyperledger/fabric-contract-api-go/contractapi"
)

type SmartContract struct {
	contractapi.Contract
}

// CreateProduct creates a new product on the ledger
func (s *SmartContract) CreateProduct(
	ctx contractapi.TransactionContextInterface,
	id string,
	name string,
	farmer string,
	location string,
	harvestDate string,
	status string,
) error {

	product := Product{
		ID:          id,
		Name:        name,
		Farmer:      farmer,
		Location:    location,
		HarvestDate: harvestDate,
		Status:      status,
	}

	productJSON, err := json.Marshal(product)

	if err != nil {
		return err
	}

	return ctx.GetStub().PutState(id, productJSON)
}
