import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Calculator } from "../target/types/calculator";
const { SystemProgram } = anchor.web3
import { expect } from 'chai';

// Prescribed IT blocks
describe("calculator", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  // Referencing the program - Abstraction that allows 
  // us to call methods of our SOL program.
  const program = anchor.workspace.Calculator as Program<Calculator>;
  const programProvider = program.provider as anchor.AnchorProvider;

  // Generating a keypair for our Calculator account
  const calculatorPair = anchor.web3.Keypair.generate();

  const text = "Summer School Of Solana";

  // Creating A Test Block
  it("Creating Calculator Instance", async () => {
    // Calling create instance - Set our calculator keypar as a signer
    await program.methods.create(text).accounts(
      {
        calculator: calculatorPair.publicKey,
        user: programProvider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
    }
  ).signers([calculatorPair]).rpc();

  // We fecth the account and read if the string is actually in the account
  const account = await program.account.calculator.fetch(calculatorPair.publicKey)
  expect(account.greeting).to.eql(text)
  });

  // Add test
  it('Addition', async () => {
    await program.methods.add(new anchor.BN(2), new anchor.BN(3))
    .accounts({ 
      calculator: calculatorPair.publicKey,
    })
    .rpc()

    const account = await program.account.calculator.fetch(calculatorPair.publicKey)
    expect(account.result).to.deep.equal(new anchor.BN(5))
  });


  // Sub Test
  it('Subtraction', async () => {
    await program.methods.sub(new anchor.BN(3), new anchor.BN(1))
    .accounts({ 
      calculator: calculatorPair.publicKey,
    })
    .rpc()

    const account = await program.account.calculator.fetch(calculatorPair.publicKey)
    expect(account.result).to.deep.equal(new anchor.BN(2))
  });

  // Mult Test
  it('Addition', async () => {
    await program.methods.mul(new anchor.BN(2), new anchor.BN(3))
    .accounts({ 
      calculator: calculatorPair.publicKey,
    })
    .rpc()

    const account = await program.account.calculator.fetch(calculatorPair.publicKey)
    expect(account.result).to.deep.equal(new anchor.BN(6))
  });

  // Another test step - test out addition
  it('Division', async () => {
    await program.methods.div(new anchor.BN(10), new anchor.BN(2))
    .accounts({ 
      calculator: calculatorPair.publicKey,
    })
    .rpc()

    const account = await program.account.calculator.fetch(calculatorPair.publicKey)
    expect(account.result).to.deep.equal(new anchor.BN(5))
  });
  
});
