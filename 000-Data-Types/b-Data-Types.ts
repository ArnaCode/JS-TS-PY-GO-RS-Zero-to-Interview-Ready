// Primitive Data Types - value
// let somethingInTs: unknown = "Jane Doe"; // string
// somethingInTs = 12; // number => 2^53 -1 // Type Errors
// somethingInTs = false; // boolean
// somethingInTs = undefined; // undefined
// somethingInTs = null; // null
// somethingInTs = 123456789012345678901234567890n; // bigint

// function failedAttempt(message: string): never {
//     throw new Error(message)
// }

// function addition(a: number, b: number): void {
//   console.log(a + b);
// }

// addition(10, 20);

// let bigNumber = somethingInTs;
// bigNumber = 123456;

// console.log(typeof somethingInTs);
// console.log(bigNumber, "Big Number");
// console.log(somethingInTs, "BigInt");

// Non-Primitive DT - reference
// let numbers = [1, 2, 3, 4, 5, 6];
// let letters = ["a", "b", "c"];
// let mixed = ["a", "b", "c", 1, 2, 3, true];

// let myPet = { name: "George", breed: "German Sheperd", age: "6 months" };
// myPet = {};
// myPet2 = myPet;
// myPet2.breed = "Pitbull";
// console.log(myPet, "Pet 1");
// console.log(myPet2, "Pet 2");

// Tuple
// let userInfo1: (boolean | number | string)[] = [1, "Snadra", false, 23, "hi"];
// let userInfo2: [number, string, boolean] = [2, "Alice", true, "hi"];

// -------------------- Utility Types

// *-*-*-*-*-*-*-*-*-* Partial<T>
// interface User {
//   id: number;
//   name: string;
//   age: number;
// }

// let userObj: User = {};

// let partialUser: Partial<User> = {}
// let partialUser: Partial<User> = { name: "Bob" };

// *-*-*-*-*-*-*-*-*-* Required<T>
// interface User {
//   id?: number;
//   name?: string;
//   age?: number;
// }

// let requiredUser: Required<User> = {};
// let requiredUser: Required<User> = { name: "Bob" };

// *-*-*-*-*-*-*-*-*-* Readonly<T>
// interface User {
//   id: number;
//   name: string;
// }

// let ReadonlyUser: Readonly<User> = { id: 1, name: "Bethany" };
// ReadonlyUser.name = "Sandra"

// *-*-*-*-*-*-*-*-*-* Record<K, T>
// type Grades = "A" | "B" | "C";

// let studentGrades: Record<string, Grades> = {
//   Alice: "A",
//   Bob: "B",
//   Sandra: "C",
//   true: "A",
// };

// *-*-*-*-*-*-*-*-*-* Pick<T, K>
// interface User {
//   id: number;
//   name: string;
//   age: number;
// }

// let pickUser: Pick<User, "id"> = { id: 1 };
// let pickUser: Pick<User, "id" | "name"> = { id: 1, name: "Jane" };

// *-*-*-*-*-*-*-*-*-* Omit<T, K>
// let omitUser: Omit<User, "id"> = { name: "Jane", age: 25 };

// *-*-*-*-*-*-*-*-*-* Exclude<T, U>
// type Primitive = string | number | boolean | null
// type NoNullPrimitive = Exclude<Primitive, null>

// *-*-*-*-*-*-*-*-*-* Extract<T, U>
// type Primitive = string | number | boolean | null
// type BoolPrimitive = Extract<Primitive, boolean>

// *-*-*-*-*-*-*-*-*-* NonNullable<T>
// type Primitive = string | number | boolean | null | undefined;
// type Nullable = NonNullable<Primitive>;

// *-*-*-*-*-*-*-*-*-* Paramters<T>
// function addition(a: number, b: number): void {}
// type AdditionParams = Parameters<typeof addition>

// *-*-*-*-*-*-*-*-*-* ConstructorParamters<T>
// class Pet {
//     constructor(public name: string, public age: number){}
// }
// type PetParams = ConstructorParameters<typeof Pet>

// *-*-*-*-*-*-*-*-*-* InstanceType<T>
// class Pet {
//   constructor(public name: string, public age: number) {}
// }
// type InstanceParams = InstanceType<typeof Pet>;

// *-*-*-*-*-*-*-*-*-* ReturnType<T>
// function addition(a: number, b: number) {
//   return a + b;
// }

// type AddReturn = ReturnType<typeof addition>;
// ----------------------------------------------------------------
// Literal Types
// type Direction = "right" | "left" | "up" | "down";
// type DirectionNum = 1 | 2 | 3 | 4;
// type OnOff = true | false;

// let robotMove: Direction = "up";

// ----------------------------------------------------------------
// Union
// Intersection &
// interface User {
//   name: string;
// }

// interface Employee {
//   employeeId: number;
// }

// type EmployeePerson = User | Employee;
// type EmployeePerson = User & Employee;

// let userPerson: EmployeePerson = {
//   name: "Jane",
//   employeeId: 123,
// };
// ----------------------------------------------------------------
// type aliases
// type Age = number

// let myAge: Age = 123

// interface User {
//   name: string;
// }

// let myName: User = "Jane";

// interface Employee extends User {
//   employeeId: number;
// }

// let bob: Employee = {
//   name: "Bob",
//   employeeId: 1,
// };

// interface User {
//   [key: string]: string;
// }

// const user: User = {
//   name: "Jane",
//   email: "jane@gmail.com",
//   role: "Senior Dev",
// };

// ----------------------------------------------------------------
// enum Direction {
//   Up,
//   Down,
//   Right,
//   Left,
// }

// const enum Status {
//   Success = "Success",
//   Failed = "Failed",
// }

// let message: Status = Status.Failed;
// ----------------------------------------------------------------

// function addtion(a: number, b: number): number {
//   return a + b;
// }

// type AddFunc = (a: number, b: number) => number;

// let doAddition: AddFunc = (a, b) => a + b;

// ----------------------------------------------------------------
// interface Person {
//   name: string;
//   age: number;
// }

// type ReadonlyPerson = {
//   readonly [k in keyof Person]: Person[k];
// };

// type OptionalPerson = {
//   [k in keyof Person]?: Person[k];
// };

// ----------------------------------------------------------------
// type IsString<T> = T extends string ? "yes" : "no";
// type A = IsString<string>;
// type B = IsString<number>;

// ----------------------------------------------------------------
// interface Person {
//   name: string;
//   age: number;
// }

// type PersonName = Person["name"];

// ----------------------------------------------------------------
// type EventName = `on${string}`;
// let myEvent: EventName;
// myEvent = "onClick";
// myEvent= "onHover"
// myEvent= "change"
