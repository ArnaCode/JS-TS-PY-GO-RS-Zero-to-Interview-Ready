macro_rules! find_max {
    ([$($x:expr), *]) => {{
        let numbers = vec![$($x as f64), *];

        let mut max = numbers[0];
        for num in numbers {
            if num > max {
                max = num;
            }
        }

        max
      }
    };
}

fn main() {
    println!("[10, 4, 2, 23, 15]: {}", find_max!([10, 4, 2, 23, 15]));
    println!("[3.14, 7, 21.5, 12, 80.9]: {}", find_max!([3.14, 7, 21.5, 12, 80.9]));
}
