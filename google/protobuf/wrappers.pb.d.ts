import Long from 'long';
import * as _m0 from 'protobufjs/minimal';
export declare const protobufPackage = "google.protobuf";
/**
 * Wrapper message for `double`.
 *
 * The JSON representation for `DoubleValue` is JSON number.
 */
export interface DoubleValue {
    /** The double value. */
    value: number;
}
/**
 * Wrapper message for `float`.
 *
 * The JSON representation for `FloatValue` is JSON number.
 */
export interface FloatValue {
    /** The float value. */
    value: number;
}
/**
 * Wrapper message for `int64`.
 *
 * The JSON representation for `Int64Value` is JSON string.
 */
export interface Int64Value {
    /** The int64 value. */
    value: Long;
}
/**
 * Wrapper message for `uint64`.
 *
 * The JSON representation for `UInt64Value` is JSON string.
 */
export interface UInt64Value {
    /** The uint64 value. */
    value: Long;
}
/**
 * Wrapper message for `int32`.
 *
 * The JSON representation for `Int32Value` is JSON number.
 */
export interface Int32Value {
    /** The int32 value. */
    value: number;
}
/**
 * Wrapper message for `uint32`.
 *
 * The JSON representation for `UInt32Value` is JSON number.
 */
export interface UInt32Value {
    /** The uint32 value. */
    value: number;
}
/**
 * Wrapper message for `bool`.
 *
 * The JSON representation for `BoolValue` is JSON `true` and `false`.
 */
export interface BoolValue {
    /** The bool value. */
    value: boolean;
}
/**
 * Wrapper message for `string`.
 *
 * The JSON representation for `StringValue` is JSON string.
 */
export interface StringValue {
    /** The string value. */
    value: string;
}
/**
 * Wrapper message for `bytes`.
 *
 * The JSON representation for `BytesValue` is JSON string.
 */
export interface BytesValue {
    /** The bytes value. */
    value: Uint8Array;
}
export declare const DoubleValue: {
    encode(message: DoubleValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DoubleValue;
    encodeTransform(source: AsyncIterable<DoubleValue | DoubleValue[]> | Iterable<DoubleValue | DoubleValue[]>): AsyncIterable<Uint8Array>;
    decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<DoubleValue>;
    fromJSON(object: any): DoubleValue;
    toJSON(message: DoubleValue): unknown;
    fromPartial<I extends {
        value?: number | undefined;
    } & {
        value?: number | undefined;
    } & Record<Exclude<keyof I, "value">, never>>(object: I): DoubleValue;
};
export declare const FloatValue: {
    encode(message: FloatValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FloatValue;
    encodeTransform(source: AsyncIterable<FloatValue | FloatValue[]> | Iterable<FloatValue | FloatValue[]>): AsyncIterable<Uint8Array>;
    decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<FloatValue>;
    fromJSON(object: any): FloatValue;
    toJSON(message: FloatValue): unknown;
    fromPartial<I extends {
        value?: number | undefined;
    } & {
        value?: number | undefined;
    } & Record<Exclude<keyof I, "value">, never>>(object: I): FloatValue;
};
export declare const Int64Value: {
    encode(message: Int64Value, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Int64Value;
    encodeTransform(source: AsyncIterable<Int64Value | Int64Value[]> | Iterable<Int64Value | Int64Value[]>): AsyncIterable<Uint8Array>;
    decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<Int64Value>;
    fromJSON(object: any): Int64Value;
    toJSON(message: Int64Value): unknown;
    fromPartial<I extends {
        value?: string | number | Long | undefined;
    } & {
        value?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["value"], keyof Long>, never>) | undefined;
    } & Record<Exclude<keyof I, "value">, never>>(object: I): Int64Value;
};
export declare const UInt64Value: {
    encode(message: UInt64Value, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UInt64Value;
    encodeTransform(source: AsyncIterable<UInt64Value | UInt64Value[]> | Iterable<UInt64Value | UInt64Value[]>): AsyncIterable<Uint8Array>;
    decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<UInt64Value>;
    fromJSON(object: any): UInt64Value;
    toJSON(message: UInt64Value): unknown;
    fromPartial<I extends {
        value?: string | number | Long | undefined;
    } & {
        value?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & Record<Exclude<keyof I["value"], keyof Long>, never>) | undefined;
    } & Record<Exclude<keyof I, "value">, never>>(object: I): UInt64Value;
};
export declare const Int32Value: {
    encode(message: Int32Value, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Int32Value;
    encodeTransform(source: AsyncIterable<Int32Value | Int32Value[]> | Iterable<Int32Value | Int32Value[]>): AsyncIterable<Uint8Array>;
    decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<Int32Value>;
    fromJSON(object: any): Int32Value;
    toJSON(message: Int32Value): unknown;
    fromPartial<I extends {
        value?: number | undefined;
    } & {
        value?: number | undefined;
    } & Record<Exclude<keyof I, "value">, never>>(object: I): Int32Value;
};
export declare const UInt32Value: {
    encode(message: UInt32Value, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UInt32Value;
    encodeTransform(source: AsyncIterable<UInt32Value | UInt32Value[]> | Iterable<UInt32Value | UInt32Value[]>): AsyncIterable<Uint8Array>;
    decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<UInt32Value>;
    fromJSON(object: any): UInt32Value;
    toJSON(message: UInt32Value): unknown;
    fromPartial<I extends {
        value?: number | undefined;
    } & {
        value?: number | undefined;
    } & Record<Exclude<keyof I, "value">, never>>(object: I): UInt32Value;
};
export declare const BoolValue: {
    encode(message: BoolValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BoolValue;
    encodeTransform(source: AsyncIterable<BoolValue | BoolValue[]> | Iterable<BoolValue | BoolValue[]>): AsyncIterable<Uint8Array>;
    decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<BoolValue>;
    fromJSON(object: any): BoolValue;
    toJSON(message: BoolValue): unknown;
    fromPartial<I extends {
        value?: boolean | undefined;
    } & {
        value?: boolean | undefined;
    } & Record<Exclude<keyof I, "value">, never>>(object: I): BoolValue;
};
export declare const StringValue: {
    encode(message: StringValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StringValue;
    encodeTransform(source: AsyncIterable<StringValue | StringValue[]> | Iterable<StringValue | StringValue[]>): AsyncIterable<Uint8Array>;
    decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<StringValue>;
    fromJSON(object: any): StringValue;
    toJSON(message: StringValue): unknown;
    fromPartial<I extends {
        value?: string | undefined;
    } & {
        value?: string | undefined;
    } & Record<Exclude<keyof I, "value">, never>>(object: I): StringValue;
};
export declare const BytesValue: {
    encode(message: BytesValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BytesValue;
    encodeTransform(source: AsyncIterable<BytesValue | BytesValue[]> | Iterable<BytesValue | BytesValue[]>): AsyncIterable<Uint8Array>;
    decodeTransform(source: AsyncIterable<Uint8Array | Uint8Array[]> | Iterable<Uint8Array | Uint8Array[]>): AsyncIterable<BytesValue>;
    fromJSON(object: any): BytesValue;
    toJSON(message: BytesValue): unknown;
    fromPartial<I extends {
        value?: Uint8Array | undefined;
    } & {
        value?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "value">, never>>(object: I): BytesValue;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {
    $case: string;
} ? {
    [K in keyof Omit<T, '$case'>]?: DeepPartial<T[K]>;
} & {
    $case: T['$case'];
} : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
