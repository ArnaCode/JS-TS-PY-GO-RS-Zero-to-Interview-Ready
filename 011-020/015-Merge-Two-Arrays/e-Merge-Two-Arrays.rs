// Solution 1: concat()
fn merge_two_arrays_1(arr1: &[i32], arr2: &[i32]) -> Vec<i32> {
    [arr1, arr2].concat()
}

// Solution 2: Interator chain
fn merge_two_arrays_2(arr1: &[i32], arr2: &[i32]) -> Vec<i32> {
    arr1.iter().chain(arr2.iter()).copied().collect::<Vec<i32>>()
}

// Solution 3: Pre-allocated + expansion
fn merge_two_arrays_3(arr1: &[i32], arr2: &[i32]) -> Vec<i32> {
    let total_length = arr1.len() + arr2.len();
    let mut merged_array = Vec::with_capacity(total_length);

    merged_array.extend_from_slice(arr1);
    merged_array.extend_from_slice(arr2);

    merged_array
}

fn main() {
    let input1 = [1, 3, 5];
    let input2 = [2, 4, 6];

    println!("Testing Array Merge Solutions in Rust");
    println!("Input 1: {:?}", input1);
    println!("Input 2: {:?}", input2);

    println!("Solution 1 (concat):   {:?}", merge_two_arrays_1(&input1, &input2));
    println!("Solution 2 (chain):    {:?}", merge_two_arrays_2(&input1, &input2));
    println!("Solution 3 (extend):   {:?}", merge_two_arrays_3(&input1, &input2));
}