fn sum_of_digits(num: u32) -> u32 {
    let num_str = num.to_string();

    num_str.chars().map(|c| c.to_digit(10).unwrap()).sum()
}

fn main() {
    println!("{}", sum_of_digits(123));
    println!("{}", sum_of_digits(9875));
    println!("{}", sum_of_digits(9));
}