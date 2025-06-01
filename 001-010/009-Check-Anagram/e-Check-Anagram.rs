fn check_anagram(str1: &str, str2: &str) -> bool {
    let mut str_vec1: Vec<char> = str1.to_lowercase().replace(" ", "").chars().collect();
    let mut str_vec2: Vec<char> = str2.to_lowercase().replace(" ", "").chars().collect();

    if str_vec1.len() != str_vec2.len() {
        return false;
    }

    str_vec1.sort();
    str_vec2.sort();

    str_vec1 == str_vec2
}

fn main() {
    println!("{}", check_anagram("LISTEN", "silent")); // true
	println!("{}", check_anagram("triangle", "integral")); // true
	println!("{}", check_anagram("hello", "world")); // false
	println!("{}", check_anagram("Astronomer", "Moon starer")); // true
	println!("{}", check_anagram("debit card", "bad credit")); // true
	println!("{}", check_anagram("Alert", "later")); // true
	println!("{}", check_anagram("Car", "tar")); // false
}