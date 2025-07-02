package main

import (
	"fmt"
	"strconv"
)


func findMax(arr []interface{}) interface{} {
	if len(arr) == 0 {
		return 0
	}

	var numbers []float64


	for _, item := range arr {
		switch value := item.(type) {
			case int:
				numbers = append(numbers, float64(value))
			case float64:
				numbers = append(numbers, value)
			case string:
				if num, err := strconv.ParseFloat(value, 64); err == nil {
					numbers = append(numbers, num)
				}

		}

	}

	if len(numbers) == 0 {return "You need to pass numbers";}

	max := numbers[0]

	for _, num := range numbers[1:] {
		if num > max {
			max = num
		}
	}

	return max

}

func main() {
	fmt.Println("=== Test Cases ===")
	fmt.Println("Normal array [10, 4, 2, 23, 15]:", findMax([]interface{}{10, 4, 2, 23, 15})) // 23
	fmt.Println("Empty array []:", findMax([]interface{}{})) // 0
	fmt.Println("All strings ['apple', 'banana']:", findMax([]interface{}{"apple", "banana"})) // "You need to pass numbers"
	fmt.Println("Mixed [10, 'hello', 23, '150', 5]:", findMax([]interface{}{10, "hello", 23, "150", 5})) // 150
	fmt.Println("Floats and ints [3.14, 7, 2.5, 12, 8.9]:", findMax([]interface{}{3.14, 7, 2.5, 12, 8.9})) // 12
	fmt.Println("Floats and strings [1.5, 'test', 4.7, 'hello', 2.3]:", findMax([]interface{}{1.5, "test", 4.7, "hello", 2.3})) // 4.7
}