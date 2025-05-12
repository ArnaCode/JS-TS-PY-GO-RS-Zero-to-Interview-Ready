package main

import (
	"fmt"
	"strings"
)

func RemoveCharacter(str string, char string) string {
	if len(str) == 0 {
		return ""
	}

	if len(char) == 0 {
		return str
	}

	if len(char) > 1 {
		char = string(char[0])
	}

	parts := strings.Split(str, char)
	return strings.Join(parts, "")
}

func main() {
	fmt.Println(RemoveCharacter("banana", "a")); // "bnn"
	fmt.Println(RemoveCharacter("", "a")); // ""
	fmt.Println(RemoveCharacter("banana", "")); // "banana"
	fmt.Println(RemoveCharacter("banana", "banana")); // "anana"
	fmt.Println(RemoveCharacter("hello world", "l")); // "heo word"
	fmt.Println(RemoveCharacter("aaaaaaaa", "a")); // ""
}