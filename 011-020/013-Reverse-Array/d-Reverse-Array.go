package main

import (
	"fmt"
	"slices"
)

func reverseArray(arr []any) []any {
	slices.Reverse(arr)
	return arr
}

func main() {
	// Test Case 1: Normal case with given input
	fmt.Println("=== TEST CASE 1: Input === [1, 2, 3, 4, 5] --- Output === ", reverseArray([]any{1, 2, 3, 4, 5})) // Prints: [5 4 3 2 1]

	// Test Case 2: Empty array
	fmt.Println("=== TEST CASE 2: Input === [] --- Output === ",reverseArray([]any{})) // Prints: []

	// Test Case 3: Single element array
	fmt.Println("=== TEST CASE 3: Input === [42] --- Output === ", reverseArray([]any{42})) // Prints: [42]

	// Test Case 4: Two elements
	fmt.Println("=== TEST CASE 4: Input === [\"first\", \"second\"] --- Output === ", reverseArray([]any{"first", "second"})) // Prints: [second first]

	// Test Case 5: Array with duplicates

	fmt.Println("=== TEST CASE 5: Input === [1, 2, 2, 3, 2, 1.1] --- Output === ", reverseArray([]any{1, 2, 2, 3, 2, 1})) // Prints: [1 2 3 2 2 1]

	// Test Case 6: Mixed data types
	fmt.Println("=== TEST CASE 6: Input === [1, \"hello\", true, nil] --- Output === ", reverseArray([]any{1, "hello", true, nil})) // Prints: [<nil> true hello 1]
}