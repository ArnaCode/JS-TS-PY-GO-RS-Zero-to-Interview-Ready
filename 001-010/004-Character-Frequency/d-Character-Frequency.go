package main

import "fmt"

func main() {
	inputStr := "Programming Languages"

	var frequency map[string]int = make(map[string]int)

	for _, ch := range inputStr {
		char := string(ch)

		frequency[char] = frequency[char] + 1
	}
	fmt.Println(frequency)
}
