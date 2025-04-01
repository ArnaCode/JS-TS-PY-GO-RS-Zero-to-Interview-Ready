
use std::collections::HashMap;
fn main() {
    // let input_str = "Programming Languages";
    let input_str = "aaaabbbccd";

    let mut frequency: HashMap<char, i32> = HashMap::new();

    for ch in input_str.chars(){
        *frequency.entry(ch).or_insert(0) += 1;
    }
    println!("{:?}", frequency)
}