// Manual Iteration
fn filter_even_numbers_v1(numbers: &[i32]) -> Vec<i32> {
    let mut even_numbers = Vec::new();

    for num in numbers {
        if *num % 2 == 0 {
            even_numbers.push(*num);
        }
    }

    even_numbers
}

// Functional Style with iterator Chain
fn filter_even_numbers_v2(numbers: &[i32]) -> Vec<i32> {
    numbers.iter().filter(|&num| num % 2 == 0).copied().collect()
}

// Functional Style with iterator Chain - Explicit Copying
fn filter_even_numbers_v3(numbers: &[i32]) -> Vec<i32> {
    numbers.iter().copied().filter(|num| num % 2 == 0).collect()
}

// Pre-allocation
fn filter_even_numbers_v4(numbers: &[i32]) -> Vec<i32> {
    let mut even_numbers = Vec::with_capacity(numbers.len());

    for &num in numbers {
        if num % 2 == 0 {
            even_numbers.push(num)
        }
    }

    even_numbers
}

// Functional with Explicit Type Annotations
fn filter_even_numbers_v5(numbers: &[i32]) -> Vec<i32> {
    // &i32
    let iter: std::slice::Iter<i32> = numbers.iter();

    // &&i32
    let filtered_iter = iter.filter(|&&num: &&i32| -> bool { num % 2 == 0});

    let copied_iter = filtered_iter.copied();

    let result: Vec<i32> = copied_iter.collect::<Vec<i32>>();

    result
}

fn main() {
    let input = [1, 2, 3, 4, 5, 6];

    let output1 = filter_even_numbers_v1(&input);
    let output2 = filter_even_numbers_v2(&input);
    let output3 = filter_even_numbers_v3(&input);
    let output4 = filter_even_numbers_v4(&input);
    let output5 = filter_even_numbers_v5(&input);


    println!("Manual Iteration: {:?}", output1);
    println!("Functional Style with iterator Chain: {:?}", output2);
    println!("Functional Style with iterator Chain - Explicit Copying: {:?}", output3);
    println!("Pre-allocation: {:?}", output4);
    println!("Functional with Explicit Type Annotations: {:?}", output5);
}