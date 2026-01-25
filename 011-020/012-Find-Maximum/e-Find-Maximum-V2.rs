enum Element {
    Number(f64),
    String(String),
}

impl From<i32> for Element {
    fn from(num: i32) -> Self {
        Element::Number(num as f64)
    }
}

impl From<f64> for Element {
    fn from(num: f64) -> Self {
        Element::Number(num)
    }
}

impl From<&str> for Element {
    fn from(str: &str) -> Self {
        Element::String(str.to_string())
    }
}

impl From<String> for Element {
    fn from(str: String) -> Self {
        Element::String(str)
    }
}

enum MaxResult {
    Number(f64),
    Message(String),
}

fn find_maxi(arr: &[Element]) -> MaxResult {
    if arr.is_empty() {
        return MaxResult::Number(0.0);
    }

    let mut numbers = Vec::new();

    for item in arr {
        match item {
            Element::Number(num) => {
                numbers.push(*num);
            }
            Element::String(str) => {
                if let Ok(num) = str.parse::<f64>() {
                    numbers.push(num);
                }
            }
        }
    }

    if numbers.is_empty() {
        return MaxResult::Message("You need to pass numbers".to_string());
    }

    let max = numbers.iter().fold(numbers[0], |a, &b| if b > a { b } else { a });
    MaxResult::Number(max)
}


macro_rules! find_max {
    ([$($elem:expr), *]) => {{
        let arr = vec![ $(Element::from($elem)), * ];
        find_maxi(&arr)
    }};

    ([]) => {{
        find_maxi(&[])
    }}
}

fn print_result(label: &str, result: MaxResult) {
    let type_name = match &result {
        MaxResult::Number(_) => "Number",
        MaxResult::Message(_) => "Message"
    };

    print!("{} ({}) => ", label, type_name);

    match result {
        MaxResult::Number(n) => {
            if n.fract() == 0.0 {
                println!("{}", n as i32);
            } else {
                println!("{}", n);
            }
        }
        MaxResult::Message(msg) => println!("{}", msg),
    }
}

fn main() {
    println!("=== Test Cases ===");

    print_result("Normal array [10, 4, 2, 23, 15]", find_max!([10, 4, 2, 23, 15])); // 23
    print_result("Empty array []", find_max!([])); // 0
    print_result("All strings ['apple', 'banana']", find_max!(["apple", "banana"])); // "You need to pass numbers"
    print_result("Mixed [10, 'hello', 23, '150', 5]", find_max!([10, "hello", 23, "150", 5])); // 150
    print_result("Floats and ints [3.14, 7, 2.5, 12, 8.9]", find_max!([3.14, 7, 2.5, 12, 8.9])); // 12
    print_result(
        "Floats and strings [1.5, 'test', 4.7, 'hello', 2.3]",
        find_max!([1.5, "test", 4.7, "hello", 2.3])
    ); // 4.7
}
