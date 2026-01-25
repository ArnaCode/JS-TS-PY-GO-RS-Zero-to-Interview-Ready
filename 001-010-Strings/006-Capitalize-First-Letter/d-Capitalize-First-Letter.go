package main

import (
	"fmt"
	"strings"
)

func capFirstLetter(str string) string {
	if str == "" {
		return ""
	}

	words := strings.Fields(str)

	for i, word := range words {
		words[i] = strings.ToUpper(string(word[0])) + strings.ToLower(word[1:])
	}

	return strings.Join(words, " ")
}

func main() {
	// input := "cosmic        radiations";
	// input := "    cosmiC        radiaTionS   ";
	// input := "";
	input := " ";
	output := capFirstLetter(input)
	fmt.Println(output)
}