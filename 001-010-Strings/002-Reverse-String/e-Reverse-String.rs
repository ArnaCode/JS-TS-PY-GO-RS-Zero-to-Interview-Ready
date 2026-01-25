fn main() {
    let str: String = String::from("fast");
    let rev_str: String = str.chars().rev().collect();

    println!("{}", rev_str);
}