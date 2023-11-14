export const js = [
    'console.log("Hello world!")',
    "export const plus = (a, b) => a + b",
    `export function tax(price, taxRate) {
  return price * taxRate;
}`,
];

export const rs = [
    'println!("Hello world!");',
    "pub fn plus(a: i32, b: i32) -> i32 { a + b }",
    `pub fn tax(price: i32, tax_rate: f64) -> f64 {
  price as f64 * tax_rate
}`,
];

export const py = [
    'print("Hello world!")',
    "def plus(a, b): return a + b",
    `def tax(price, tax_rate):
  return price * tax_rate`,
];

export const go = [
    'package main\nimport "fmt"\nfunc main() { fmt.Println("Hello world!") }',
    "package main\nfunc plus(a, b int) int { return a + b }",
    `package main
func tax(price int, taxRate float64) float64 {
  return float64(price) * taxRate
}`,
];

export const lua = [
    'print("Hello world!")',
    "function plus(a, b) return a + b end",
    `function tax(price, taxRate)
  return price * taxRate
end`,
];

export const json = [
    `{
  "name": "Alice",
  "age": 18,
  "hobbies": [
    "reading",
    "writing"
  ]
}`,
];
