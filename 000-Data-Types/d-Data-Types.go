package main

import "fmt"

func main() {
	// ---------------------------
	// int
	// ---------------------------
	// var x int = 42
	// fmt.Println("X:", x)

	// var bigNum int64 = 123456789123456789
	// fmt.Println("Big Number:", bigNum)

	// a, b := 10, 20
	// fmt.Println("Sum:", a + b)
	// fmt.Println("Product:", a * b)

	// var unNum uint8 = 123
	// fmt.Println("Unsigned:", unNum)

	// var y int8 = 130
	// fmt.Println("Y:", y)

	// ---------------------------
	// float
	// ---------------------------

	// var pi float32 = 3.14159
	// fmt.Println("PI:", pi)

	// var e float64 = 2.718281828459045
	// fmt.Println("Euler's Number:", e)

	// ---------------------------
	// string
	// ---------------------------

	// var myName string = "M. Helalee"
	// fmt.Println("My Name:", myName)
	// ---------------------------
	// Boolean
	// ---------------------------
	// var isActive1 bool = true
	// var isActive2 bool = false

	// ---------------------------
	// Array([n]Type)
	// ---------------------------

	// var numbers [3]int = [3]int{1, 2, 3}
	// fmt.Println(numbers)

	// ---------------------------
	// Slice(n]Type)
	// ---------------------------

	// var numbers []int = []int{1, 2, 3}
	// numbers = append(numbers, 4)
	// fmt.Println(numbers)

	// ---------------------------
	// Map([KeyType]ValueType)
	// ---------------------------

	// var myPet map[string]string = map[string]string{
	// 	"name":  "George",
	// 	"breed": "German Sheperd",
	// }

	// fmt.Println(myPet)

	// ---------------------------
	// Struct (struct)
	// ---------------------------

	// type Person struct {
	// 	Name string
	// 	Age int
	// }

	// alice := Person{Name: "Alice", Age: 32}
	// fmt.Println(alice)

	// ---------------------------
	// Pointer (*Type)
	// ---------------------------

	// var x int8 = 10
	// fmt.Println("Value of X:", x)

	// var y *int8 = &x
	// fmt.Println("Memory Address of X:", y)

	// *y = 20
	// fmt.Println("New Value of X:", x)
	// fmt.Println("New Value of Y:", *y)

	// ---------------------------
	// Basic Declarations
	// ---------------------------

	// var name string = "Jane"
	// age := 32
	// a, b := 10, 20
	// fmt.Println(name)
	// fmt.Println(age)
	// fmt.Println(a, b)

	// ---------------------------
	// Function Type
	// ---------------------------

	// var operation func(int, int) int

	// add := func(a, b int) int {
	// 	return a + b
	// }

	// subtract := func(a, b int) int {
	// 	return a - b
	// }

	// operation = add
	// fmt.Println("Add:", operation(10, 15))
	// operation = subtract
	// fmt.Println("Subtract:", operation(10, 15))

	// ---------------------------
	// Custom Type
	// ---------------------------

	// type MyNameType string
	// type MyAgeType int

	// var myName MyNameType = "Helalee"

	// ---------------------------
	// Type Aliases
	// ---------------------------

	// type NameAlias = string
	// var myName NameAlias = "Helalee"

	// ---------------------------
	// Generics and Constraints
	// ---------------------------

	integers := []int{1, 2, 3, 4, 5}
	fmt.Println("Sum of all integers: ", SumNumbers(integers))
}

type Number interface {
	~int | ~float64
}

func SumNumbers[T Number](numbers []T) T {
	var sum T
	// _ is the blank identifier
	for _, num := range numbers {
		sum += num
	}
	return sum
}