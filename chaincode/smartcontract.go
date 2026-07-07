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

// GetProduct returns a product by ID
func (s *SmartContract) GetProduct(
	ctx contractapi.TransactionContextInterface,
	id string,
) (*Product, error) {

	productJSON, err := ctx.GetStub().GetState(id)

	if err != nil {
		return nil, err
	}

	if productJSON == nil {
		return nil, fmt.Errorf("product %s does not exist", id)
	}

	var product Product

	err = json.Unmarshal(productJSON, &product)
	if err != nil {
		return nil, err
	}

	return &product, nil
}

// TransferOwnership transfers ownership of a product
func (s *SmartContract) TransferOwnership(
	ctx contractapi.TransactionContextInterface,
	id string,
	newOwner string,
) error {

	product, err := s.GetProduct(ctx, id)
	if err != nil {
		return err
	}

	product.Status = "Transferred"
	product.Location = newOwner

	productJSON, err := json.Marshal(product)
	if err != nil {
		return err
	}

	return ctx.GetStub().PutState(id, productJSON)
}

// GetAllProducts returns all products stored on the ledger
func (s *SmartContract) GetAllProducts(
	ctx contractapi.TransactionContextInterface,
) ([]*Product, error) {

	resultsIterator, err := ctx.GetStub().GetStateByRange("", "")
	if err != nil {
		return nil, err
	}

	defer resultsIterator.Close()

	var products []*Product

	for resultsIterator.HasNext() {

		queryResponse, err := resultsIterator.Next()
		if err != nil {
			return nil, err
		}

		product := new(Product)

		err = json.Unmarshal(queryResponse.Value, product)
		if err != nil {
			return nil, err
		}

		products = append(products, product)
	}

	return products, nil
}
