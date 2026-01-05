package main

import "fmt"

func findIntersection(arr1, arr2 []int) []int {
	var result []int

	set := make(map[int]bool)

	for _, key := range arr2 {
		set[key] = true
	}

	for _, value := range arr1 {
		if set[value] {
			result = append(result, value)
		}
	}

	return result
}

func main() {
	arr1 := []int{1, 2, 3, 4}
	arr2 := []int{2, 3, 5}
	output := findIntersection(arr1, arr2)
	fmt.Println(output)
}
