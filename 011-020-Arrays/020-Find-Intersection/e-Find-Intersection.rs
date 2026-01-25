use std::collections::HashSet;

fn find_intersection(arr1: Vec<i32>, arr2: Vec<i32>) -> Vec<i32> {
    let mut result: Vec<i32> = Vec::new();

    let set: HashSet<i32> = arr2.into_iter().collect();

    for value in arr1 {
        if set.contains(&value) {
            result.push(value);
        }
    }

    result
}

fn main() {
    let arr1 = vec![1, 2, 3, 4];
    let arr2 = vec![2, 3, 5];
    let output = find_intersection(arr1, arr2);
    println!("{:?}", output);
}