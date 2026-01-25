fn remove_character(str: &str, char: &str) -> String {
    if str.is_empty() {
        return str.to_string()
    }

    if char.is_empty() {
        return str.to_string()
    }

    let first_char = char.chars().next().unwrap();

    str.split(first_char).collect::<String>()
}

fn main() {
    println!("{}", remove_character("banana", "a")); // "bnn"
	println!("{}", remove_character("", "a")); // ""
	println!("{}", remove_character("banana", "")); // "banana"
	println!("{}", remove_character("banana", "banana")); // "anana"
	println!("{}", remove_character("hello world", "l")); // "heo word"
	println!("{}", remove_character("aaaaaaaa", "a")); // ""
}