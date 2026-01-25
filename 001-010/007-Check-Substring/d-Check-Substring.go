package main

import (
	"fmt"
	"strings"
)

func isSubstring(text string, pattern string) bool {
	// return strings.Contains(text, pattern)
	return strings.Contains(strings.ToLower(text), strings.ToLower(pattern))
}

func main() {
	fmt.Println(isSubstring("Programming Languages", "Program")); // true
	fmt.Println(isSubstring("Programming Languages", "Language")); // true
	fmt.Println(isSubstring("Programming Languages", "ss")); // false
	fmt.Println(isSubstring("Programming Languages", "RAM")); // true
	fmt.Println(isSubstring("", "abc")); // false
	fmt.Println(isSubstring("abc", "")); // true

}