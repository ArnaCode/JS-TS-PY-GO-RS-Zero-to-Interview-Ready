package main

import "fmt"

func CountVowels(str string) int {
	count := 0

	for _, char := range str {
		switch char {
		case 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'O', 'I', 'U':
			count++
		}
	}
	return count
}

func main() {
	inputStr := "ProgrammingeE"
	fmt.Println(CountVowels((inputStr)))
}