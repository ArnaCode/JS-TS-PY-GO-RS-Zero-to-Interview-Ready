package main

import "fmt"

// Solution 1: append + variadic expansion
func mergeTwoArrays1(arr1 []int, arr2 []int) []int {
	mergedArray := make([]int, 0, len(arr1) + len(arr2))
	mergedArray = append(mergedArray, arr1...)
	mergedArray = append(mergedArray, arr2...)
	return mergedArray
}

// Solution 2: copy + pre-allocated
func mergeTwoArrays2(arr1 []int, arr2 []int) []int {
	totalLength := len(arr1) + len(arr2)

	mergedArray := make([]int, totalLength)

	n := copy(mergedArray, arr1)

	copy(mergedArray[n:], arr2)

	return mergedArray

}

// Solution 3: Manual
func mergeTwoArrays3(arr1 []int, arr2 []int) []int {
	mergedArray := make([]int, len(arr1)+len(arr2))

	index := 0

	for _, item := range arr1 {
		mergedArray[index] = item
		index++
	}

	for _, item := range arr2 {
		mergedArray[index] = item
		index++
	}

	return mergedArray
}

func main() {
	input1 := []int{1, 3, 5}
	input2 := []int{2, 4, 6}
	
	fmt.Println("============================================================")
	fmt.Println("Testing Array Merge Solutions")
	fmt.Println("============================================================")
	fmt.Printf("Input 1: %v\n", input1)
	fmt.Printf("Input 2: %v\n", input2)
	fmt.Println("============================================================")
	
	fmt.Printf("Solution 1 (append):  %v\n", mergeTwoArrays1(input1, input2))
	fmt.Printf("Solution 2 (copy):    %v\n", mergeTwoArrays2(input1, input2))
	fmt.Printf("Solution 3 (manual):  %v\n", mergeTwoArrays3(input1, input2))
}