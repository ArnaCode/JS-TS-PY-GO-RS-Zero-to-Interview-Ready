fn is_substring(text: &str, pattern: &str) -> bool {
    let lower_text = text.to_lowercase();
    let lower_pattern = pattern.to_lowercase();
    // text.contains(pattern)
    lower_text.contains(&lower_pattern)
}

fn main() {
    println!("{}", is_substring("Programming Languages", "Program")); // true
	println!("{}", is_substring("Programming Languages", "Language")); // true
	println!("{}", is_substring("Programming Languages", "ss")); // false
	println!("{}", is_substring("Programming Languages", "RAM")); // true
	println!("{}", is_substring("", "abc")); // false
	println!("{}", is_substring("abc", "")); // true
}