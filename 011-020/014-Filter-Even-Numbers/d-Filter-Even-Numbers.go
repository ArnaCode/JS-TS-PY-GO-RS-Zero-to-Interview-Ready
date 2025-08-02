package main

import "fmt"

func fitlerEvenNumbersV1(numbers []int) []int {
	var evenNumbers []int

	for _, num := range numbers {
		if num%2 == 0 {
			evenNumbers = append(evenNumbers, num)
		}
	}

	return evenNumbers
}

func fitlerEvenNumbersV2(numbers []int) []int {
	evenNumbers := make([]int, 0, len(numbers))

	for _, num := range numbers {
		if num%2 == 0 {
			evenNumbers = append(evenNumbers, num)
		}
	}

	return evenNumbers
}

func main() {
	input := []int{1, 2, 3, 4, 5, 6}
	output1 := fitlerEvenNumbersV1(input)
	output2 := fitlerEvenNumbersV2(input)
	fmt.Println("Simple Output", output1)
	fmt.Println("Not Simple Output", output2)
}