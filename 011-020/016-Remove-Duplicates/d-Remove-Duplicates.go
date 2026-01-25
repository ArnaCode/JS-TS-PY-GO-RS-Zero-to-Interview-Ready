package main

import "fmt"

func removeDuplicates[T comparable](arr []T) []T {
	seen := make(map[T]bool)

	resultArr := make([]T, 0)

	for _, elem := range arr {
		if !seen[elem] {
			seen[elem] = true

			resultArr = append(resultArr, elem)
		}
	}

	fmt.Println("Seen Map/Object", seen)

	return resultArr
}

func main() {
	testArrayNumber := []int{1, 2, 2, 3, 3, 4}
	testArrayString := []string{"a", "a", "b", "c", "a", "c", "b"}

	fmt.Printf("Original - Number:    %v\n", testArrayNumber)
	fmt.Printf("Generic Function Solution: %v\n", removeDuplicates(testArrayNumber))

	fmt.Printf("Original - String:    %v\n", testArrayString)
	fmt.Printf("Generic Function Solution: %v\n", removeDuplicates(testArrayString))

}
