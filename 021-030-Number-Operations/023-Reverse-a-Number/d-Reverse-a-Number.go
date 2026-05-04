package main

import (
	"fmt"
	"strconv"
)

func reverseNumber(num int) int {
	sign := 1
	if num < 0 {
		sign = -1
	}

	absolute := num * sign

	numStr := strconv.Itoa(absolute)

	reversed := ""

	for i := len(numStr) - 1; i >= 0; i-- {
		// "" + "6" = "6" + "5" = "65" + "4" = "654"
		reversed += string(numStr[i])
	}

	result, _ := strconv.Atoi(reversed)

	return result * sign
}

func main() {
	fmt.Println(reverseNumber(12345))
	fmt.Println(reverseNumber(-456))
}
