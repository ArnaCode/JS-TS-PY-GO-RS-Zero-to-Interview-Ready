enum Element {
    Number(f64),
    #[allow(dead_code)]
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

enum SumResult {
    Int(i64),
    Float(f64),
    Message(String)
}

fn sum_elements(arr: &[Element]) -> SumResult {
    if arr.is_empty() {
        return SumResult::Int(0)
    }

    let mut sum = 0.0;
    let mut number_count = 0;
    let mut has_strings = false;

    for item in arr {
        match item {
            Element::Number(num) => {
                sum += num;
                number_count += 1;
            }
            Element::String(_) => {
                has_strings = true;
            }
        }
    }

    if number_count == 0 && has_strings {
        SumResult::Message("Array contains only strings, please add numbers to sum.".to_string())
    } else {
        if sum.fract() == 0.0 {
            // format!("{}", sum as i64)
            SumResult::Int(sum as i64)
        } else {
            // sum.to_string()
            SumResult::Float(sum)
        }
    }
}

macro_rules! sum_elements {
    ([ $($elem:expr),* $(,)?]) => {{
        let arr = vec![ $(Element::from($elem)), * ];
        sum_elements(&arr)
    }};


    ([]) => {{
        sum_elements(&[])
    }};
}

// fn print_result(label: &str, result: SumResult) {
//     match result {
//         SumResult::Int(n) => println!("{}: {}", label, n),
//         SumResult::Float(f) => println!("{}: {}", label, f),
//         SumResult::Message(msg) => println!("{}: {}", label, msg),
//     }
// }

fn print_result(label: &str, result: SumResult) {
    
    let type_name = match &result {
        SumResult::Int(_) => "Int",
        SumResult::Float(_) => "Float",
        SumResult::Message(_) => "Message",
    };

    print!("{} ({}) => ", label, type_name);

    match result {
        SumResult::Int(n) => println!("{}", n),
        SumResult::Float(f) => println!("{}", f),
        SumResult::Message(msg) => println!("{}", msg),
    }
}

fn main() {
    println!("=== Test Cases ===");

// Basic test
    print_result("Numbers only [1, 2, 3, 4]", sum_elements!([1, 2, 3, 4])); // Expected: 10

// Mixed with strings
    print_result(
  "Mixed [1, 'hello', 3, 'world']",
  sum_elements!([1, "hello", 3, "world"])
); // Expected: 4

// Mixed with strings
    print_result(
  "Mixed [11.5025, '', 83.12, '   ']",
  sum_elements!([11.5025, "", 83.12, "   "])
); // Expected: 4

// Only strings
    print_result(
  "Only strings ['hello', 'world']",
  sum_elements!(["hello", "world"])
); // Expected: message

// Empty array
    print_result("Empty array []", sum_elements!([])); // Expected: 0

// Single number
    print_result("Single number [5]", sum_elements!([5])); // Expected: 5

// Single string
    print_result("Single string ['hello']", sum_elements!(["hello"])); // Expected: message
}