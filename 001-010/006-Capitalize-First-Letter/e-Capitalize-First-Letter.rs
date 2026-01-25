fn cap_first_letter(str: &str) -> String {
    if str.is_empty() {
        return String::new();
    }

    str.split_whitespace()
    .map(|word| {
        let mut chars = word.chars();

        match chars.next() {
            Some(c) => {
                let first: String = c.to_uppercase().collect();
                let rest: String = chars.flat_map(|c| c.to_lowercase()).collect();

                first + &rest
            }
            None => String::new()
        }

    })
    // ["Cosmic", "Radiations"]
    .collect::<Vec<_>>().join(" ")   
}

fn main() {
    // let input = "cosmic        radiations";
    // let input = "    cosmiC        radiaTionS   ";
    // let input = "";
    let input = " ";
    let output = cap_first_letter(input);
    println!("{}", output);
}