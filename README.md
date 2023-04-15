# Solana Calculator Demo with Anchor 🧮

Welcome to our Solana calculator demo! This project uses Anchor, a Solana program development framework, to build a basic calculator on the Solana blockchain.

## Project Overview 📝

Our calculator demo is a simple program that performs basic arithmetic operations such as addition, subtraction, multiplication, and division. Users can interact with the program by sending Solana transactions that contain their desired arithmetic operation and operands. The program then performs the operation and returns the result.

## Getting Started 🚀

To get started with our calculator demo, follow these steps:

1. Install the Solana CLI and Anchor by following the instructions on their respective documentation pages.
2. Clone this repository to your local machine.
3. Navigate to the project directory and run `anchor build` to build the program.
4. Deploy the program to your local Solana cluster by running `anchor deploy`.
5. Interact with the program by sending Solana transactions using the Solana CLI.

## Usage 🔧

To use our calculator program, you will need to construct a Solana transaction that includes the arithmetic operation you want to perform and its operands. Here are the available operations and their respective arguments:

- Addition: `add(a: i64, b: i64)`
- Subtraction: `sub(a: i64, b: i64)`
- Multiplication: `mul(a: i64, b: i64)`
- Division: `div(a: i64, b: i64)`

For example, to perform the addition operation on the operands 5 and 10, you would construct a Solana transaction like this:

