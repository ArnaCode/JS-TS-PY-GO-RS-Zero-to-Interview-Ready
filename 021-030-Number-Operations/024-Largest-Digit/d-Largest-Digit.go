package main

import (
	"fmt"
	"strconv"
)

func largestDigit(num int) int {
	numStr := strconv.Itoa(num)

	largest := 0

	for _, ch := range numStr {
		// '0' -> 48
		// ch - '0' = 56 - 48 = 8
		digit := int(ch - '0')

		if digit > largest {
			largest = digit
		}

	}

	return largest
}

func main() {
	fmt.Println(largestDigit(28394))
	fmt.Println(largestDigit(8721802647))
}
