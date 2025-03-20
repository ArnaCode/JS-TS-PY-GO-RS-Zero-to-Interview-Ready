fn count_vowels(str: &str) -> usize {
    let mut count = 0;

    for char in str.chars() {
        match char {
            'a'| 'e'| 'i'| 'o'| 'u'| 'A'| 'E'| 'O'| 'I'| 'U' => count += 1,
            _=> (),
        }
    }

    count
}


fn main() {
    let input_str = "ProgrammingeE";
    println!("{}", count_vowels(input_str));
}