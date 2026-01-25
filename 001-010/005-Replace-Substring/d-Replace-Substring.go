package main

import (
	"fmt"
	"strings"
)

func main() {
	inputStr := "Programming"
	toReplace := "m"
	replacement := "-"

	subStr := strings.ReplaceAll(inputStr, toReplace, replacement)
	fmt.Println(subStr)
}