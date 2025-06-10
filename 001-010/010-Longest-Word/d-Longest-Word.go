package main

import (
	"fmt"
	"strings"
)

func findLongestWords(str string) string {
	words := strings.Fields(str)

	if len(words) == 0 {
		return "Input Cannot be Empty"
	}

	maxLength := 0
	for _, word := range words {
		if len(word) > maxLength {
			maxLength = len(word)
		}
	}

	var longestWords []string
	for _, word := range words {
		if len(word) == maxLength {
			longestWords = append(longestWords, word)
		}
	}

	isDuplicate := make(map[string]bool)
	var uniqueLongestWords []string

	for _, word := range longestWords {
		if !isDuplicate[word] {
			isDuplicate[word] = true
			uniqueLongestWords = append(uniqueLongestWords, word)
		}
	}

	return strings.Join(uniqueLongestWords, ", ")
}

func main() {
	// input := "The quick brown fox jumps over the lazy dog"
	// input := "hello world golang"
	// input := "bird bird bird"
	// input := "a bb ccc dddd"
	// input := "  extra     spaces      here       123456789       "
	// input := ""
	input := "       "
	output := findLongestWords(input)

	fmt.Printf("Input: \"%s\"\n", input)
	fmt.Printf("Output: \"%s\"\n", output)

}