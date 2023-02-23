const crypto = require('crypto')

// Define constants for trivial partition key and maximum partition key length
const TRIVIAL_PARTITION_KEY = '0'
const MAX_PARTITION_KEY_LENGTH = 256

// Helper function to create SHA3-512 hash from data
function createHash(data) {
  return crypto.createHash('sha3-512').update(data).digest('hex')
}

// Helper function to stringify non-string data
function stringify(data) {
  return typeof data !== 'string' ? JSON.stringify(data) : data
}

/**
 * Determines the partition key for a given event.
 * @param {object} event - The event to create the partition key for.
 * @returns {string} The partition key.
 */
exports.deterministicPartitionKey = (event) => {
  let candidate = TRIVIAL_PARTITION_KEY

  // If event has a partitionKey property, use that as candidate
  if (event?.partitionKey) {
    candidate = event.partitionKey
  }
  // Otherwise, if event is truthy, create hash from stringified event
  else if (event) {
    const data = stringify(event)
    candidate = createHash(data)
  }

  // Stringify candidate to ensure it is a string
  candidate = stringify(candidate)

  // If candidate is too long, create hash from candidate
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = createHash(candidate)
  }

  return candidate
}
