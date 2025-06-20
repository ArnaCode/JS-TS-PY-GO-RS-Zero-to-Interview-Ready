package main

import "fmt"

func sumElements(arr []any) any {
	if len(arr) == 0 {
		return 0
	}

	var sum float64
	numberCount := 0
	hasStrings := false

	for _, item := range arr {
		switch value := item.(type) {
		case int:
			sum += float64(value)
			numberCount++
		case float64:
			sum += value
			numberCount++
		case string:
			hasStrings = true
		}
	}

	if numberCount == 0 && hasStrings {
		return "List contains only strings, please add numbers to sum."
	}

	return sum
}

func main() {
	fmt.Println("=== Test Cases ===")

	// Basic test
	fmt.Println("Numbers only [1, 2, 3, 4]:", sumElements([]any{1, 2, 3, 4})) // Expected: 10

	// Mixed with strings
	fmt.Println(
		"Mixed [1, 'hello', 3, 'world']:",
		sumElements([]any{1, "hello", 3, "world"})) // Expected: 4

	// Mixed with strings
	fmt.Println(
		"Mixed [11.5025, '', 83.12, '   ']:",
		sumElements([]any{11.5025, "", 83.12, "   "})) // Expected: 4

	// Only strings
	fmt.Println(
		"Only strings ['hello', 'world']:",
		sumElements([]any{"hello", "world"})) // Expected: message

	// Empty List
	fmt.Println("Empty List []:", sumElements([]any{})) // Expected: 0

	// Single number
	fmt.Println("Single number [5]:", sumElements([]any{5})) // Expected: 5

	// Single string
	fmt.Println("Single string ['hello']:", sumElements([]any{"hello"})) // Expected: message
}