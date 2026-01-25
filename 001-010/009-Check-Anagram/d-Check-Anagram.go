package main

import (
	"fmt"
	"sort"
	"strings"
)

func checkAnagram(str1 string, str2 string) bool {
	var normStr1 =	strings.ToLower(strings.ReplaceAll(str1, " ", ""))
	var normStr2 =	strings.ToLower(strings.ReplaceAll(str2, " ", ""))

	if len(normStr1) != len(normStr2) {
		return false
	}

	splittedStr1 := strings.Split(normStr1, "")
	splittedStr2 := strings.Split(normStr2, "")

	sort.Strings(splittedStr1)
	sort.Strings(splittedStr2)

	return strings.Join(splittedStr1, "") == strings.Join(splittedStr2, "")
}

func main() {
	fmt.Println(checkAnagram("LISTEN", "silent")); // true
	fmt.Println(checkAnagram("triangle", "integral")); // true
	fmt.Println(checkAnagram("hello", "world")); // false
	fmt.Println(checkAnagram("Astronomer", "Moon starer")); // true
	fmt.Println(checkAnagram("debit card", "bad credit")); // true
	fmt.Println(checkAnagram("Alert", "later")); // true
	fmt.Println(checkAnagram("Car", "tar")); // false
}