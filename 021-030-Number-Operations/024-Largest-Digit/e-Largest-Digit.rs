fn largest_digit(num: u64) -> u32 {
    // "28394" -> "2", "8", "3", "9", "4" -> Some(number) || None -> Some(largest)
    num.to_string().chars().map(|c| c.to_digit(10).unwrap()).max().unwrap()
}

fn main() {
    println!("{}", largest_digit(28394));
    println!("{}", largest_digit(8721802647));
}