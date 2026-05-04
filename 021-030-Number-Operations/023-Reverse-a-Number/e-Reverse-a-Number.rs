fn reverse_number(num: i32) -> i32 {
    let sign = num.signum();
    let absolute = num.abs();

    let reversed = absolute.to_string().chars().rev().collect::<String>();

    reversed.parse::<i32>().unwrap() * sign
}

fn main() {
    println!("{}", reverse_number(12345));
    println!("{}", reverse_number(-456));
}