package main

import "fmt"

func main() {
	str := "fast"

	runes := []rune(str)

	for start, end := 0, len(runes)-1; start < end; {
		runes[start], runes[end] = runes[end], runes[start]
		start++
		end--
	}

	revStr := string(runes)

	fmt.Println(revStr)
}