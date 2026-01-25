fn rotate_array(arr: Vec<i32>, n: usize) -> Vec<i32> {
    if arr.is_empty() || n == 0 {
        return arr;
    }

    let n = n % arr.len();

    let slicing_point = arr.len() - n;

    arr.iter().skip(slicing_point).chain(arr.iter().take(slicing_point)).cloned().collect()
}

// arr[3:] == skip(slicing_point)
// arr[:3] == take(slicing_point)

fn main() {
    println!("{}", "=".repeat(50));
    println!("RUST ARRAY ROTATION");
    println!("{}", "=".repeat(50));

    // Test Case 1: Original Example
    let input = vec![1, 2, 3, 4];
    let rotate_by = 1;
    let result = rotate_array(input.clone(), rotate_by);
    println!("Input: {:?}", input);
    println!("Rotate right by: {}", rotate_by);
    println!("Output: {:?}", result);
    println!("---");

    // Test Case 2: Rotate by 2
    let input = vec![1, 2, 3, 4, 5];
    let rotate_by = 2;
    let result = rotate_array(input.clone(), rotate_by);
    println!("Input: {:?}", input);
    println!("Rotate right by: {}", rotate_by);
    println!("Output: {:?}", result);
    println!("---");

    // Test Case 3: Rotate more than array length
    let input = vec![1, 2, 3];
    let rotate_by = 4; // Should be same as rotating by 1
    let result = rotate_array(input.clone(), rotate_by);
    println!("Input: {:?}", input);
    println!("Rotate right by: {}", rotate_by);
    println!("Output: {:?}", result);
    println!("---");

    // Test Case 4: Single element
    let input = vec![1];
    let rotate_by = 5;
    let result = rotate_array(input.clone(), rotate_by);
    println!("Input: {:?}", input);
    println!("Rotate right by: {}", rotate_by);
    println!("Output: {:?}", result);
    println!("---");

    // Test Case 5: Empty array
    let input: Vec<i32> = vec![];
    let rotate_by = 3;
    let result = rotate_array(input.clone(), rotate_by);
    println!("Input: {:?}", input);
    println!("Rotate right by: {}", rotate_by);
    println!("Output: {:?}", result);
    println!("---");

    // Test Case 6: No rotation
    let input = vec![1, 2, 3, 4];
    let rotate_by = 0;
    let result = rotate_array(input.clone(), rotate_by);
    println!("Input: {:?}", input);
    println!("Rotate right by: {}", rotate_by);
    println!("Output: {:?}", result);
}