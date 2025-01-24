// rustup set default-host x86_64-pc-windows-gnu
// rustup default stable

// enum Shape {
//   Circle(f64),
//   Rectangle(f64, f64),
// }

fn main() {
//   let x = 5; // Immutable Variable
//   println!("Origianl X: {}", x);
// //   x = 6; 
//   let x = x + 23;
//   println!("Shadowed X: {}", x);


//   let mut y = 10; // Mutable Variable
//   println!("Y: {}", y);

  
//     y = 15;
//   println!("Y: {}", y);

//   let my_name = "Helalee";


// --------------------------------
// Scaler Types
// --------------------------------

//   let signed_num: i8 = -120;
//   let un_signed_num: u8 = 120;
//   let float_num: f32 = 3.14159;

//   println!("signed int: {}, unsigned int: {}, float32: {},", signed_num, un_signed_num, float_num);

//   let is_active_rs: bool = true;
//   let is_active_go: bool = false;
//   println!("Rs: {}, Go: {}", is_active_rs, is_active_go);
  
//   let emoji: char = '👌';
//   println!("Emoji: {}", emoji);

// --------------------------------
// Compound Types
// --------------------------------

// Tuple
  // let my_pet: (&str, i8, bool) = ("George", 1, true);
  // println!("Name: {}, Age: {}, Adopted: {}", my_pet.0, my_pet.1, my_pet.2);
  
  // let (name, age, adopted) = my_pet;
  // println!("Name: {}, Age: {}, Adopted: {}", name, age, adopted);

// Array
// let scores: [i32; 4] = [90, 80, 70, 60];
// println!("First Score: {}", scores[0]);

// Slices
// let numbers = [1,5,9,13,19,25,98];
// inclusive..exclusive
// starting_index..ending_index
// let slice_num: &[i32] = &numbers[2..5];
// println!("Slice: {:?}", slice_num);

// Unit Type

// let result = do_nothing();
// println!("Result: {:?}", result);
// fn do_nothing() {}


// --------------------------------------
// String Types
// string slice (&str)
// owned strings (String)

// String Slice (&str)
// let greeting = "Hello, Rust!";
// let substring: &str = &greeting[0..5];
// println!("Origianl: {}, String Slice: {}", greeting, substring);

// Owned String (String)
// let mut owned_string = String::from("Rust");
// owned_string.push_str(", World!");
// println!("Owned String: {}", owned_string);

// let owned_string = String::from("Rust");
// let slice_str: &str = &owned_string;
// println!("Owned: {}, Slice: {}", owned_string, slice_str);
// -------------------------------------
// Shared Reference &T
// let x = 42; // immutable
// let y: &i32 = &x;
// println!("x: {}, y: {}", x, y);

// Mutable Reference &mut T
// let mut x = 42; // mutable
// let y: &mut i32 = &mut x;
// *y += 5;
// println!("x: {}", x);
// -------------------------------------
// Struct
// struct MyPet {
//   name: String,
//   age: u8,
// }

// let pet = MyPet {
//   name: String::from("George"),
//   age: 1
// };

// println!("Name: {}, Age: {}", pet.name, pet.age);

// -------------------------------------
// enum
// enum Shape {
//   Circle(f64),
//   Rectangle(f64, f64),
// }

// let c = Shape::Circle(2.5); // radius
// let r = Shape::Rectangle(3.0, 4.0); // width, height

// println!("Circle area: {}", area(c));
// println!("Rectange area: {}", area(r));
// }

// fn area(shape: Shape) -> f64 {
//   match shape {
//     Shape::Circle(radius) => std::f64::consts::PI * radius * radius,
//     Shape::Rectangle(width, height) => width * height,
//   }

// -------------------------------------
// Function Types
// let add_one_func: fn(i32) -> i32 = add_one;
// println!("Result: {}", add_one_func(11));

// fn add_one(x: i32) -> i32 {
//   x + 1
// }

// Closure Types
// let x = 10;
// let add_to_x = |n: i32| n + x;

// println!("Result: {}", add_to_x(1));

// -------------------------------------
// Type Alias
// type Kilometers = i32;

// let distance: Kilometers = 100;
// println!("{}", distance);

// -------------------------------------
// Generic Function Example
// generic_func(0);
// generic_func("Failed");


// Generic Struct Example - One Field
// struct Container<T> {
//   item: T,
// }

// let int_container = Container {item: 46};
// let str_container = Container {item: "Rust"};

// println!("Int: {:?}", int_container.item);
// println!("Str: {:?}", str_container.item);

// Generic Struct Example - Two Fields
// struct Coordinates<T, U> {
//   x: T,
//   y: U,
// }

// let coordinates = Coordinates {x: 10, y: 15.6};
// println!("Coordinates: ({}, {})", coordinates.x, coordinates.y);

}

// fn generic_func<T: std::fmt::Display>(message: T) {
//   println!("Received: {}", message);
// }

