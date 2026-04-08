package main

import (
	"fmt"
	"strconv"
	"strings"
)

func sumOfDigits(num int) int {
	numStr := strconv.Itoa(num)

	digits := strings.Split(numStr, "")

	sum := 0

	for _, digit := range digits {
		value, _ := strconv.Atoi(digit)

		sum += value
	}

	return sum
}

func main() {
	fmt.Println(sumOfDigits(123))
	fmt.Println(sumOfDigits(9875))
	fmt.Println(sumOfDigits(9))
}
