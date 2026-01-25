use std::collections::HashSet;

fn remove_duplicates_numbers(arr: &[i32]) -> Vec<i32> {
    let mut seen = HashSet::new();
    let mut result_arr = Vec::new();

    for &num in arr.iter() {
        if seen.insert(num) {
            result_arr.push(num);
        }
    }

    result_arr
}

fn remove_duplicates_strings(arr: &[&str]) -> Vec<String> {
    let mut seen = HashSet::new();
    let mut result_arr = Vec::new();

    for &s in arr.iter() {
        if seen.insert(s.to_string()) {
            result_arr.push(s.to_string());
        }
    }

    result_arr
}

fn main() {
    println!("\n--- Testing with Numbers ---");
    let numbers_input = [1, 2, 2, 3, 3, 4];
    println!("Input:  {:?}", numbers_input);

    let numbers_output = remove_duplicates_numbers(&numbers_input);
    println!("Output: {:?}", numbers_output);

    println!("\n--- Testing with Strings ---");

    let strings_input = ["a", "a", "b", "c", "a", "c", "b"];
    println!("Input:  {:?}", strings_input);

    let strings_output = remove_duplicates_strings(&strings_input);
    println!("Output: {:?}", strings_output);
}
