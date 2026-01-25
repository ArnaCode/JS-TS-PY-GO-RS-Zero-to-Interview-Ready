package main

import (
	"fmt"
	"strings"
)

func main() {
	inputString := " Hello World "
	trimmedString := strings.TrimSpace(inputString)

	fmt.Println(trimmedString)
}