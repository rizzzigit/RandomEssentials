export interface RandomOptions<Value> {
    /**
     * This can be used to make sure uniqueness.
     *
     * If false is returned, the output is declined and will generate a new one.
     * If true is returned, the output is accepted.
    */
    checker?: (result: Value) => Promise<boolean> | boolean;
}
export declare const randomInt: (max: number, options?: RandomOptions<number>) => Promise<number>;
export declare const randomBytes: (length: number, options?: RandomOptions<Buffer>) => Promise<Buffer>;
export declare const randomHex: (length: number, options?: RandomOptions<string>) => Promise<string>;
export declare const randomAlphanumeric: (length: number, options?: RandomOptions<string>) => Promise<string>;
export declare const randomNetPort: (min: number, max: number) => Promise<number>;
