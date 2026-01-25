use std::collections::HashSet;

fn find_longest_words(str: &str) -> String {
    let words: Vec<&str> = str.split_whitespace().collect();

    if words.is_empty() {
        return "Input Cannot be Empty".to_string()
    }

    let max_length = words.iter().map(|word| word.len()).max().unwrap();

    let longest_words: Vec<&str> = words.iter().filter(|&word| word.len() == max_length).cloned().collect();

    let unique_longest_words: Vec<&str> = longest_words.into_iter().collect::<HashSet<_>>().into_iter().collect();

    unique_longest_words.join(", ")
}

fn main() {
    // let input = "The quick brown fox jumps over the lazy dog";
    // let input = "hello world Rustaceans";
    // let input = "bird bird bird";
    // let input = "a bb ccc dddd";
    // let input = "  extra     spaces      here       123456789       ";
    // let input = "";
    let input = "       ";
    let output = find_longest_words(input);

    println!("Input: \"{}\"", input);
    println!("output: \"{}\"", output);
}