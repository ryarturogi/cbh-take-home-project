const { deterministicPartitionKey } = require('./dpk')
const crypto = require('crypto')
const MAX_PARTITION_KEY_LENGTH = 256

describe('deterministicPartitionKey', () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey()
    expect(trivialKey).toBe('0')
  })
  it('should return trivial partition key for falsy input', () => {
    expect(deterministicPartitionKey(undefined)).toBe('0')
    expect(deterministicPartitionKey(null)).toBe('0')
    expect(deterministicPartitionKey(false)).toBe('0')
    expect(deterministicPartitionKey(0)).toBe('0')
    expect(deterministicPartitionKey('')).toBe('0')
  })

  it('should return partition key if event has partitionKey property', () => {
    const event = { partitionKey: 'abc' }
    expect(deterministicPartitionKey(event)).toBe('abc')
  })

  it('should create hash from stringified event if event has no partitionKey property', () => {
    const event = { foo: 'bar' }
    const expectedHash = crypto
      .createHash('sha3-512')
      .update(JSON.stringify(event))
      .digest('hex')
    expect(deterministicPartitionKey(event)).toBe(expectedHash)
  })

  it('should create hash from candidate if candidate is too long', () => {
    const longString = 'a'.repeat(MAX_PARTITION_KEY_LENGTH + 1)
    const expectedHash = crypto
      .createHash('sha3-512')
      .update(longString)
      .digest('hex')
    expect(deterministicPartitionKey(longString)).toEqual(expectedHash)
  })

  it('should always return a string', () => {
    expect(typeof deterministicPartitionKey({})).toBe('string')
    expect(typeof deterministicPartitionKey('abc')).toBe('string')
    expect(typeof deterministicPartitionKey(123)).toBe('string')
  })
})
