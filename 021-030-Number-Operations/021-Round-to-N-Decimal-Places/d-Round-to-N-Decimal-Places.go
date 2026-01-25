package main

import (
	"fmt"
	"math"
	"strconv"
)

func roundToDecimalV1(num float64, places int) float64 {
	formatSpecifier := fmt.Sprintf("%%.%df", places)

	// Sprintf("%.2f", 3.14159)
	formattedString := fmt.Sprintf(formatSpecifier, num)
	result, _ := strconv.ParseFloat(formattedString, 64)
	return result
}

func roundToDecimalV2(num float64, places int) float64 {
	multiplier := math.Pow(10, float64(places))
	shifted := multiplier * num
	rounded := math.Round(shifted)
	return rounded / multiplier
}

func main() {
	fmt.Println(roundToDecimalV1(3.14159, 2))
	fmt.Println(roundToDecimalV1(2.71828, 3))
	fmt.Println(roundToDecimalV1(9.5, 0))

	fmt.Println(roundToDecimalV2(3.14159, 2))
	fmt.Println(roundToDecimalV2(2.71828, 2))
	fmt.Println(roundToDecimalV2(9.5, 0))
}
