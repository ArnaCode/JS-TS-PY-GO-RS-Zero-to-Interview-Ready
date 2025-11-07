package main

import "fmt"

func flattenArray(arr []any) []int {
	result := []int{}

	for _, element := range arr {
		if nestedSlice, ok := element.([]any); ok {
			flattened := flattenArray(nestedSlice)
			result = append(result, flattened...)

		} else if num, ok := element.(int); ok {
			result = append(result, num)
		}
	}

	return result
}

func toSlice(items ...any) []any {
	return items
}

func main() {
	input := toSlice(1, toSlice(2, toSlice(3, 4), 5), 6)
	output := flattenArray(input)

	fmt.Println("Input:", input)
	fmt.Println("Output:", output)

	fmt.Println(flattenArray(toSlice(1, 2, 3)))
	fmt.Println(flattenArray(toSlice(toSlice(toSlice(toSlice(1))))))
	fmt.Println(flattenArray(toSlice(1, toSlice(2, toSlice(3, toSlice(4, toSlice(5, toSlice(6, toSlice(7, toSlice(8, toSlice(9, toSlice(10))))))))))))
	fmt.Println(flattenArray(toSlice()))
	fmt.Println(flattenArray(toSlice(1, toSlice(), toSlice(2, toSlice()), 3)))
}