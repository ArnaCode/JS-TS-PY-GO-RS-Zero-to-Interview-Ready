package main

import "fmt"

func removeFalsy(arr []any) []any {
	var result []any

	for _, value := range arr {
		switch v := value.(type) {
		case int:
			if v != 0 {
				result = append(result, v)
			}
		case string:
			if v != "" {
				result = append(result, v)
			}
		case bool:
			if v {
				result = append(result, v)
			}
		case nil:
		default:
			{
				result = append(result, v)
			}

		}
	}

	return result
}

func main() {
	input := []any{0, 1, false, 2, "", 3, nil}
	output := removeFalsy(input)
	fmt.Println(output)
}
