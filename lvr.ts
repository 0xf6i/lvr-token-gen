import * as crypto from "crypto";

function hash(string: string, key: Uint8Array) {
    return crypto.createHmac('sha256', key).update(string).digest('hex');
}

function gen() {
    let key: Uint8Array = new Uint8Array([142, 167, 155, 206, 195, 213, 69, 151, 239, 225, 134, 120, 10, 131, 92, 7, 84, 0, 98, 58, 17, 72, 29, 61, 23, 221, 146, 233, 5, 219, 182, 21])

    let start: number = + new Date() - 300000
    let exp: number = + new Date() + 1800000

    let data: string = `st=${start}~exp=${exp}~acl=*`
    let string: string = hash(data, key)

    return `${data}~hmac=${string}`
}

