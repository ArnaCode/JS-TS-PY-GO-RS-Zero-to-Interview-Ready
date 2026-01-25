fn round_to_decimal_v1(num: f64, places: i32) -> f64 {
  let formatted =  format!("{:.precision$}", num, precision = places as usize);
  formatted.parse::<f64>().unwrap()
}

fn round_to_decimal_v2(num: f64, places: i32) -> f64 {
    let multiplier = (10_f64).powi(places);
    let shifted = multiplier * num;
    let rounded = shifted.round();

    rounded / multiplier
}

fn main() {
    println!("{}", round_to_decimal_v1(3.14159, 2)); 
    println!("{}", round_to_decimal_v1(2.71828, 3)); 
    println!("{}", round_to_decimal_v1(9.5, 0)); 

    println!("{}", round_to_decimal_v2(3.14159, 2)); 
    println!("{}", round_to_decimal_v2(2.71828, 2)); 
    println!("{}", round_to_decimal_v2(9.5, 0)); 
}