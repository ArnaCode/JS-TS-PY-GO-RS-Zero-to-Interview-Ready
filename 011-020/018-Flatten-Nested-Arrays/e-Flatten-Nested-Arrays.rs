#[derive(Debug, Clone)]
enum NestedArray {
    Integer(i32),
    List(Vec<NestedArray>)
}

fn flatten_array(arr: Vec<NestedArray>) -> Vec<i32> {
    let mut result: Vec<i32> = Vec::new();

    for element in arr {
        match element {
            NestedArray::Integer(num) => {
                result.push(num);
            }

            NestedArray::List(nested_arr) => {
                let flattened = flatten_array(nested_arr); 

                result.extend(flattened);
            }
        }
    }

    result
}

macro_rules! arr {
    // Rule 1: Empty Array
    // Match: arr![]
    () => {
        vec![]
    };

    // Rule 2: Single Literal Number
    // Match: arr![1], arr![4], arr![5] ...
    ($num:literal) => {
        vec![NestedArray::Integer($num)]
    };

    // Rule 3: Nested Array
    // tt: Token Tree
    // Match: arr![[]], arr![[1, 2]], arr![[[25]]] ...
    ([$($inner:tt)*]) => {
        vec![NestedArray::List(arr!($($inner)*))]
    };

    // Rule 4: Multiple Comma Separated Values
    ($first:tt, $($rest:tt),+ $(,)?) => {
        {
            let mut v = arr!($first);
            v.extend(arr!($($rest),+));
            v
        }
    }
}


fn main() {
    let input = arr![1, [2, [3, 4], 5], 6];
    // vec![
    //     NestedArray::Integer(1),
    //     NestedArray::List(vec![
    //         NestedArray::Integer(2),
    //         NestedArray::List(vec![
    //             NestedArray::Integer(3),
    //             NestedArray::Integer(4)
    //         ]),
    //         NestedArray::Integer(5)
    //     ]),
    //     NestedArray::Integer(6)
    // ]
    let output = flatten_array(input.clone());

    println!("Input: {:?}", input);
    println!("Output: {:?}", output);

    // Rule 1: Empty Array
    println!("{:?}", flatten_array(arr![]));
    // Rule 2: Single Literal Number
    println!("{:?}", flatten_array(arr![1]));
    // Rule 3: Nested Array
    println!("{:?}", flatten_array(arr![[[[1]]]]));
    // Rule 4: Multiple Comma Separated Values
    println!("{:?}", flatten_array(arr![1, 2, 3]));
    println!("{:?}", flatten_array(arr![1, [], [2, []], 3]));
    println!("{:?}", flatten_array(arr![1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]]));
}