#[derive(Clone)]
enum Value {
    Int(i32),
    Str(String),
    Bool(bool),
    Null,
}

impl std::fmt::Debug for Value {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Value::Int(n) => write!(f, "{}", n),
            Value::Str(s) => write!(f, "\"{}\"", s),
            Value::Bool(b) => write!(f, "{}", b),
            Value::Null => write!(f, "null"),
        }
    }
}


struct Null;


impl From<i32> for Value {
    fn from(n: i32) -> Self {
        Value::Int(n)
    }
}

impl From<&str> for Value {
    fn from(s: &str) -> Self {
        Value::Str(s.to_string())
    }
}


impl From<bool> for Value {
    fn from(b: bool) -> Self {
        Value::Bool(b)
    }
}


impl From<Null> for Value {
    fn from(_: Null) -> Self {
        Value::Null
    }
}

impl Value {
    fn is_truthy(&self) -> bool {
        match self {
            Value::Int(n) => *n != 0,
            Value::Str(s) => !s.is_empty(),
            Value::Bool(b) => *b,
            Value::Null => false,
        }
    }
}

fn remove_falsy_value(arr: &[Value]) -> Vec<Value> {
    let mut result: Vec<Value> = Vec::new();

    for item in arr {
        if item.is_truthy() {
            result.push(item.clone());
        }
    }

    result
}

macro_rules! remove_falsy {
    ([$($elem:expr), *]) => {{
        let arr = vec![ $(Value::from($elem)), *];
        remove_falsy_value(&arr)
    }};
}

fn main() {
    let output = remove_falsy!([0, 1, false, 2, "", 3, Null]);
    println!("{:?}", output);
}

