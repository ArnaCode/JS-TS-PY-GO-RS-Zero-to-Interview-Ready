#[derive(Debug, Clone)]
#[allow(dead_code)]
enum Element {
    Number(i32),
    Text(&'static str),
    Bool(bool),
    None,
}

impl From<i32> for Element {
    fn from(num: i32) -> Self {
        Element::Number(num)
    }
}

impl From<&'static str> for Element {
    fn from(text: &'static str) -> Self {
        Element::Text(text)
    }
}

impl From<bool> for Element {
    fn from(value: bool) -> Self {
        Element::Bool(value)
    }
}

impl From<()> for Element {
    fn from(_: ()) -> Self {
        Element::None
    }
}

macro_rules! reverse_array {
    ([]) => {{
        Vec::<Element>::new()
    }};

    ([$($elem:expr),*]) => {{
        let elements = vec![$(Element::from($elem)), *];
        let mut result = Vec::new();
        
        for i in (0..elements.len()).rev() {
            result.push(elements[i].clone());
        }

        result
    }
    };
}

impl std::fmt::Display for Element {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Element::Number(n) => write!(f, "{}", n),
            Element::Text(s) => write!(f, "{}", s),
            Element::Bool(b) => write!(f, "{}", b),
            Element::None  => write!(f, "None"),

        }
    }
}

fn print_elements(elements: &[Element]) -> String {
    elements.iter().map(|x| x.to_string()).collect::<Vec<_>>().join(", ")
}

fn main() {
    println!("=== TEST CASES ===");

    println!("=== TEST CASE 1: Input === [1, 2, 3, 4, 5] --- Output === [{}]", print_elements(&reverse_array!([1 ,2, 3, 4, 5])));

    println!(
        "=== TEST CASE 2: Input === [] --- Output === [{}]",
        print_elements(&reverse_array!([]))
    );

    println!(
        "=== TEST CASE 3: Input === [42] --- Output === [{}]",
        print_elements(&reverse_array!([42]))
    );

    println!(
        "=== TEST CASE 4: Input === ['first', 'second'] --- Output === [{}]",
        print_elements(&reverse_array!(["first", "second"]))
    );

    println!(
        "=== TEST CASE 5: Input === [1, 2, 2, 3, 2, 1] --- Output === [{}]",
        print_elements(&reverse_array!([1, 2, 2, 3, 2, 1]))
    );

    println!(
        "=== TEST CASE 6: Input === [1, 'hello', true, None] --- Output === [{}]",
        print_elements(&reverse_array!([1, "hello", true, ()]))
    );

}