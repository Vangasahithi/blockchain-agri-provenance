package main

type Product struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	Farmer      string `json:"farmer"`
	Location    string `json:"location"`
	HarvestDate string `json:"harvestDate"`
	Status      string `json:"status"`
}
