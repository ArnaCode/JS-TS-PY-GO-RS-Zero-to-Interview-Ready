## 2. Common Data Types

### 2.1 Integer (`int`)

| **Type**   | **Bits** | **Bytes** | **Range**                                               | **Use Cases**                                                      | **Pitfalls**                                         |
| ---------- | -------- | --------- | ------------------------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------- |
| **int**    | 32/64    | 4/8       | Platform-dependent                                      | Default integer type for general applications.                     | Platform-specific size may cause portability issues. |
| **int8**   | 8        | 1         | -128 to 127                                             | Small numeric values, flags, compact data representation.          | Overflow, very limited range.                        |
| **int16**  | 16       | 2         | -32,768 to 32,767                                       | Sensor data, small-scale computations.                             | Overflow, insufficient for large values.             |
| **int32**  | 32       | 4         | -2,147,483,648 to 2,147,483,647                         | Large numbers, file sizes, array indexing.                         | Can overflow in extreme calculations.                |
| **int64**  | 64       | 8         | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 | High-precision numbers, timestamps, large datasets.                | Larger memory footprint.                             |
| **uint**   | 32/64    | 4/8       | Platform-dependent (0 to max)                           | Non-negative numbers, sizes, memory-efficient computations.        | Cannot represent negative values.                    |
| **uint8**  | 8        | 1         | 0 to 255                                                | Pixel values, bit masks, small non-negative numbers.               | Overflow, conversion issues with signed types.       |
| **uint16** | 16       | 2         | 0 to 65,535                                             | Larger ranges than `uint8`, compact storage for non-negative data. | Limited range for very large values.                 |
| **uint32** | 32       | 4         | 0 to 4,294,967,295                                      | Memory-efficient large unsigned values.                            | Cannot store negative numbers.                       |
| **uint64** | 64       | 8         | 0 to 18,446,744,073,709,551,615                         | Huge non-negative numbers, cryptography, high-precision tasks.     | High memory usage, unsigned arithmetic quirks.       |

### 2.2 Float (`float32`, `float64`)

| **Type**    | **Bits** | **Bytes** | **Range**              | **Precision**         | **Use Cases**                                                       | **Pitfalls**                               |
| ----------- | -------- | --------- | ---------------------- | --------------------- | ------------------------------------------------------------------- | ------------------------------------------ |
| **float32** | 32       | 4         | ~1.4E-45 to ~3.4E+38   | ~6-7 decimal places   | Graphics, games, and applications where memory is critical.         | Precision loss for large numbers.          |
| **float64** | 64       | 8         | ~4.9E-324 to ~1.8E+308 | ~15-16 decimal places | Scientific computing, financial calculations, high precision tasks. | Higher memory usage compared to `float32`. |
