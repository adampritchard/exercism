import { Crypto } from './crypto-square'

describe('Crypto getColCount', () => {
  it('is correct for length 1', () => {
    const crypto = new Crypto('');
    expect(crypto.getColCount(1)).toEqual(1);
  })

  it('is correct for length 4', () => {
    const crypto = new Crypto('');
    expect(crypto.getColCount(4)).toEqual(2);
  })

  it('is correct for length 6', () => {
    const crypto = new Crypto('');
    expect(crypto.getColCount(6)).toEqual(2);
  })

  it('is correct for length 7', () => {
    const crypto = new Crypto('');
    expect(crypto.getColCount(7)).toEqual(3);
  })

  it('is correct for length 8', () => {
    const crypto = new Crypto('');
    expect(crypto.getColCount(8)).toEqual(3);
  })

  it('is correct for length 9', () => {
    const crypto = new Crypto('');
    expect(crypto.getColCount(9)).toEqual(3);
  })

  it('is correct for length 10', () => {
    const crypto = new Crypto('');
    expect(crypto.getColCount(10)).toEqual(3);
  })

  it('is correct for length 15', () => {
    const crypto = new Crypto('');
    expect(crypto.getColCount(15)).toEqual(4);
  })

  it('is correct for length 16', () => {
    const crypto = new Crypto('');
    expect(crypto.getColCount(16)).toEqual(4);
  })

  it('gets the right col count for length 54', () => {
    const crypto = new Crypto('');
    expect(crypto.getColCount(54)).toEqual(7);
  })
})

describe('Crypto', () => {
  it('empty plaintext results in an empty ciphertext', () => {
    const crypto = new Crypto('')
    expect(crypto.ciphertext).toEqual('')
  })

  it('Lowercase', () => {
    const crypto = new Crypto('A')
    expect(crypto.ciphertext).toEqual('a')
  })

  it('Remove spaces', () => {
    const crypto = new Crypto('  b ')
    expect(crypto.ciphertext).toEqual('b')
  })

  it('Remove punctuation', () => {
    const crypto = new Crypto('@1,%!')
    expect(crypto.ciphertext).toEqual('1')
  })

  it('9 character plaintext results in 3 chunks of 3 characters', () => {
    const crypto = new Crypto('This is fun!')
    expect(crypto.ciphertext).toEqual('tsf hiu isn')
  })

  it('8 character plaintext results in 3 chunks, the last one with a trailing space', () => {
    const crypto = new Crypto('Chill out.')
    expect(crypto.ciphertext).toEqual('clu hlt io ')
  })

  it('54 character plaintext results in 7 chunks, the last two with trailing spaces', () => {
    const crypto = new Crypto(
      'If man was meant to stay on the ground, god would have given us roots.'
    )
    expect(crypto.ciphertext).toEqual(
      'imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn  sseoau '
    )
  })
})
