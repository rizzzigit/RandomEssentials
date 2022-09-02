import Net from 'net'
import Crypto from 'crypto'

export interface RandomOptions<Value> {
  /**
   * This can be used to make sure uniqueness.
   * 
   * If false is returned, the output is declined and will generate a new one.
   * If true is returned, the output is accepted.
  */
  checker?: (result: Value) => Promise<boolean> | boolean
}

const _randomInt = (max: number) => new Promise<number>((resolve, reject) => Crypto.randomInt(max, (error, value) => error ? reject(error) : resolve(value)))
export const randomInt = async (max: number, options: RandomOptions<number> = {}) => {
  const { checker } = options

  let result: number
  do {
    result = await _randomInt(max)
  } while ((checker != null) && (!await checker(result)))

  return result
}


const _randomBytes = (length: number) => new Promise<Buffer>((resolve, reject) => Crypto.randomBytes(length, (error, buffer) => error ? reject(error) : resolve(buffer)))
export const randomBytes = async (length: number, options: RandomOptions<Buffer> = {}) => {
  const { checker } = options

  let result: Buffer
  do {
    result = await _randomBytes(length)
  } while ((checker != null) && (!await checker(result)))

  return result
}

const _randomHex = async (length: number) => (await _randomBytes(length)).toString('hex').slice(...((offset) => [offset, offset + (length)])(await randomInt(length)))
export const randomHex = async (length: number, options: RandomOptions<string> = {}) => {
  const { checker } = options

  let result: string
  do {
    result = await _randomHex(length)
  } while ((checker != null) && (!await checker(result)))

  return result
}

const _randomAlphanumeric = async (length: number) => {
  let str = ''

  while (str.length < length) {
    str += (await _randomInt(36)).toString(36)
  }

  return str
}
export const randomAlphanumeric = async (length: number, options: RandomOptions<string> = {}) => {
  const { checker } = options

  let result: string
  do {
    result = await _randomAlphanumeric(length)
  } while ((checker != null) && (!await checker(result)))

  return result
}

export const randomNetPort = (min: number, max: number) => randomInt(max, {
  checker: (result) => new Promise((resolve) => {
    const listener = Net.createServer()

    listener.on('listening', () => listener.close((error) => error ? resolve(false) : resolve(true)))
    listener.on('error', (error: Error & { code: string }) => resolve(false))

    listener.listen(result + min)
  })
}).then((result) => result + min)
