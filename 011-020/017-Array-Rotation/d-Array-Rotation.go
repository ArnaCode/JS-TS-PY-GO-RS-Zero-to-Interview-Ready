package main

import "fmt"

func rotateArray(arr []int, n int) []int {
	if len(arr) == 0 || n == 0 {
		return arr
	}

	n = n % len(arr)

	result := make([]int, 0)

	result = append(result, arr[len(arr)-n:]...)
	// result = append(result, arr[3:]...)
	// result = append(result, [4, 5]...)
	// result = append(result, 4, 5)
	result = append(result, arr[:len(arr)-n]...)

	return result
}

// len(arr) = 5, n = 2
// len(arr) - n = 3
// 5        - 2 = 3
// arr[3:] -> start is inclusive
// [1, 2, 3, 4, 5]
//  0, 1, 2, 3, 4
// -----------------------
// arr[:3] -> end is exclusive

func main() {
	fmt.Println("=" + string(make([]byte, 49)))
	fmt.Println("GO ARRAY ROTATION")
	fmt.Println("=" + string(make([]byte, 49)))

	// Test Case 1: Original Example
	input := []int{1, 2, 3, 4}
	rotateBy := 1
	result := rotateArray(input, rotateBy)
	fmt.Printf("Input: %v\n", input)
	fmt.Printf("Rotate right by: %d\n", rotateBy)
	fmt.Printf("Output: %v\n", result)
	fmt.Println("---")

	// Test Case 2: Rotate by 2
	input = []int{1, 2, 3, 4, 5}
	rotateBy = 2
	result = rotateArray(input, rotateBy)
	fmt.Printf("Input: %v\n", input)
	fmt.Printf("Rotate right by: %d\n", rotateBy)
	fmt.Printf("Output: %v\n", result)
	fmt.Println("---")

	// Test Case 3: Rotate more than array length
	input = []int{1, 2, 3}
	rotateBy = 4 // Should be same as rotating by 1
	result = rotateArray(input, rotateBy)
	fmt.Printf("Input: %v\n", input)
	fmt.Printf("Rotate right by: %d\n", rotateBy)
	fmt.Printf("Output: %v\n", result)
	fmt.Println("---")

	// Test Case 4: Single element
	input = []int{1}
	rotateBy = 5
	result = rotateArray(input, rotateBy)
	fmt.Printf("Input: %v\n", input)
	fmt.Printf("Rotate right by: %d\n", rotateBy)
	fmt.Printf("Output: %v\n", result)
	fmt.Println("---")

	// Test Case 5: Empty array
	input = []int{}
	rotateBy = 3
	result = rotateArray(input, rotateBy)
	fmt.Printf("Input: %v\n", input)
	fmt.Printf("Rotate right by: %d\n", rotateBy)
	fmt.Printf("Output: %v\n", result)
	fmt.Println("---")

	// Test Case 6: No rotation (n = 0)
	input = []int{1, 2, 3, 4}
	rotateBy = 0
	result = rotateArray(input, rotateBy)
	fmt.Printf("Input: %v\n", input)
	fmt.Printf("Rotate right by: %d\n", rotateBy)
	fmt.Printf("Output: %v\n", result)
}