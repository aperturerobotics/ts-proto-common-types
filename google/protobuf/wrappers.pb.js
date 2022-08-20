/* eslint-disable */
import Long from 'long';
import * as _m0 from 'protobufjs/minimal';
export const protobufPackage = 'google.protobuf';
function createBaseDoubleValue() {
    return { value: 0 };
}
export const DoubleValue = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== 0) {
            writer.uint32(9).double(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDoubleValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    // encodeTransform encodes a source of message objects.
    // Transform<DoubleValue, Uint8Array>
    async *encodeTransform(source) {
        for await (const pkt of source) {
            if (Array.isArray(pkt)) {
                for (const p of pkt) {
                    yield* [DoubleValue.encode(p).finish()];
                }
            }
            else {
                yield* [DoubleValue.encode(pkt).finish()];
            }
        }
    },
    // decodeTransform decodes a source of encoded messages.
    // Transform<Uint8Array, DoubleValue>
    async *decodeTransform(source) {
        for await (const pkt of source) {
            if (Array.isArray(pkt)) {
                for (const p of pkt) {
                    yield* [DoubleValue.decode(p)];
                }
            }
            else {
                yield* [DoubleValue.decode(pkt)];
            }
        }
    },
    fromJSON(object) {
        return {
            value: isSet(object.value) ? Number(object.value) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDoubleValue();
        message.value = object.value ?? 0;
        return message;
    },
};
function createBaseFloatValue() {
    return { value: 0 };
}
export const FloatValue = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== 0) {
            writer.uint32(13).float(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFloatValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    // encodeTransform encodes a source of message objects.
    // Transform<FloatValue, Uint8Array>
    async *encodeTransform(source) {
        for await (const pkt of source) {
            if (Array.isArray(pkt)) {
                for (const p of pkt) {
                    yield* [FloatValue.encode(p).finish()];
                }
            }
            else {
                yield* [FloatValue.encode(pkt).finish()];
            }
        }
    },
    // decodeTransform decodes a source of encoded messages.
    // Transform<Uint8Array, FloatValue>
    async *decodeTransform(source) {
        for await (const pkt of source) {
            if (Array.isArray(pkt)) {
                for (const p of pkt) {
                    yield* [FloatValue.decode(p)];
                }
            }
            else {
                yield* [FloatValue.decode(pkt)];
            }
        }
    },
    fromJSON(object) {
        return {
            value: isSet(object.value) ? Number(object.value) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFloatValue();
        message.value = object.value ?? 0;
        return message;
    },
};
function createBaseInt64Value() {
    return { value: Long.ZERO };
}
export const Int64Value = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.value.isZero()) {
            writer.uint32(8).int64(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInt64Value();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    // encodeTransform encodes a source of message objects.
    // Transform<Int64Value, Uint8Array>
    async *encodeTransform(source) {
        for await (const pkt of source) {
            if (Array.isArray(pkt)) {
                for (const p of pkt) {
                    yield* [Int64Value.encode(p).finish()];
                }
            }
            else {
                yield* [Int64Value.encode(pkt).finish()];
            }
        }
    },
    // decodeTransform decodes a source of encoded messages.
    // Transform<Uint8Array, Int64Value>
    async *decodeTransform(source) {
        for await (const pkt of source) {
            if (Array.isArray(pkt)) {
                for (const p of pkt) {
                    yield* [Int64Value.decode(p)];
                }
            }
            else {
                yield* [Int64Value.decode(pkt)];
            }
        }
    },
    fromJSON(object) {
        return {
            value: isSet(object.value) ? Long.fromValue(object.value) : Long.ZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined &&
            (obj.value = (message.value || Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInt64Value();
        message.value =
            object.value !== undefined && object.value !== null
                ? Long.fromValue(object.value)
                : Long.ZERO;
        return message;
    },
};
function createBaseUInt64Value() {
    return { value: Long.UZERO };
}
export const UInt64Value = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.value.isZero()) {
            writer.uint32(8).uint64(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUInt64Value();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    // encodeTransform encodes a source of message objects.
    // Transform<UInt64Value, Uint8Array>
    async *encodeTransform(source) {
        for await (const pkt of source) {
            if (Array.isArray(pkt)) {
                for (const p of pkt) {
                    yield* [UInt64Value.encode(p).finish()];
                }
            }
            else {
                yield* [UInt64Value.encode(pkt).finish()];
            }
        }
    },
    // decodeTransform decodes a source of encoded messages.
    // Transform<Uint8Array, UInt64Value>
    async *decodeTransform(source) {
        for await (const pkt of source) {
            if (Array.isArray(pkt)) {
                for (const p of pkt) {
                    yield* [UInt64Value.decode(p)];
                }
            }
            else {
                yield* [UInt64Value.decode(pkt)];
            }
        }
    },
    fromJSON(object) {
        return {
            value: isSet(object.value) ? Long.fromValue(object.value) : Long.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined &&
            (obj.value = (message.value || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUInt64Value();
        message.value =
            object.value !== undefined && object.value !== null
                ? Long.fromValue(object.value)
                : Long.UZERO;
        return message;
    },
};
function createBaseInt32Value() {
    return { value: 0 };
}
export const Int32Value = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== 0) {
            writer.uint32(8).int32(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInt32Value();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    // encodeTransform encodes a source of message objects.
    // Transform<Int32Value, Uint8Array>
    async *encodeTransform(source) {
        for await (const pkt of source) {
            if (Array.isArray(pkt)) {
                for (const p of pkt) {
                    yield* [Int32Value.encode(p).finish()];
                }
            }
            else {
                yield* [Int32Value.encode(pkt).finish()];
            }
        }
    },
    // decodeTransform decodes a source of encoded messages.
    // Transform<Uint8Array, Int32Value>
    async *decodeTransform(source) {
        for await (const pkt of source) {
            if (Array.isArray(pkt)) {
                for (const p of pkt) {
                    yield* [Int32Value.decode(p)];
                }
            }
            else {
                yield* [Int32Value.decode(pkt)];
            }
        }
    },
    fromJSON(object) {
        return {
            value: isSet(object.value) ? Number(object.value) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = Math.round(message.value));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInt32Value();
        message.value = object.value ?? 0;
        return message;
    },
};
function createBaseUInt32Value() {
    return { value: 0 };
}
export const UInt32Value = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== 0) {
            writer.uint32(8).uint32(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUInt32Value();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    // encodeTransform encodes a source of message objects.
    // Transform<UInt32Value, Uint8Array>
    async *encodeTransform(source) {
        for await (const pkt of source) {
            if (Array.isArray(pkt)) {
                for (const p of pkt) {
                    yield* [UInt32Value.encode(p).finish()];
                }
            }
            else {
                yield* [UInt32Value.encode(pkt).finish()];
            }
        }
    },
    // decodeTransform decodes a source of encoded messages.
    // Transform<Uint8Array, UInt32Value>
    async *decodeTransform(source) {
        for await (const pkt of source) {
            if (Array.isArray(pkt)) {
                for (const p of pkt) {
                    yield* [UInt32Value.decode(p)];
                }
            }
            else {
                yield* [UInt32Value.decode(pkt)];
            }
        }
    },
    fromJSON(object) {
        return {
            value: isSet(object.value) ? Number(object.value) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = Math.round(message.value));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUInt32Value();
        message.value = object.value ?? 0;
        return message;
    },
};
function createBaseBoolValue() {
    return { value: false };
}
export const BoolValue = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.value === true) {
            writer.uint32(8).bool(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBoolValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    // encodeTransform encodes a source of message objects.
    // Transform<BoolValue, Uint8Array>
    async *encodeTransform(source) {
        for await (const pkt of source) {
            if (Array.isArray(pkt)) {
                for (const p of pkt) {
                    yield* [BoolValue.encode(p).finish()];
                }
            }
            else {
                yield* [BoolValue.encode(pkt).finish()];
            }
        }
    },
    // decodeTransform decodes a source of encoded messages.
    // Transform<Uint8Array, BoolValue>
    async *decodeTransform(source) {
        for await (const pkt of source) {
            if (Array.isArray(pkt)) {
                for (const p of pkt) {
                    yield* [BoolValue.decode(p)];
                }
            }
            else {
                yield* [BoolValue.decode(pkt)];
            }
        }
    },
    fromJSON(object) {
        return {
            value: isSet(object.value) ? Boolean(object.value) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBoolValue();
        message.value = object.value ?? false;
        return message;
    },
};
function createBaseStringValue() {
    return { value: '' };
}
export const StringValue = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== '') {
            writer.uint32(10).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStringValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    // encodeTransform encodes a source of message objects.
    // Transform<StringValue, Uint8Array>
    async *encodeTransform(source) {
        for await (const pkt of source) {
            if (Array.isArray(pkt)) {
                for (const p of pkt) {
                    yield* [StringValue.encode(p).finish()];
                }
            }
            else {
                yield* [StringValue.encode(pkt).finish()];
            }
        }
    },
    // decodeTransform decodes a source of encoded messages.
    // Transform<Uint8Array, StringValue>
    async *decodeTransform(source) {
        for await (const pkt of source) {
            if (Array.isArray(pkt)) {
                for (const p of pkt) {
                    yield* [StringValue.decode(p)];
                }
            }
            else {
                yield* [StringValue.decode(pkt)];
            }
        }
    },
    fromJSON(object) {
        return {
            value: isSet(object.value) ? String(object.value) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseStringValue();
        message.value = object.value ?? '';
        return message;
    },
};
function createBaseBytesValue() {
    return { value: new Uint8Array() };
}
export const BytesValue = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.value.length !== 0) {
            writer.uint32(10).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBytesValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    // encodeTransform encodes a source of message objects.
    // Transform<BytesValue, Uint8Array>
    async *encodeTransform(source) {
        for await (const pkt of source) {
            if (Array.isArray(pkt)) {
                for (const p of pkt) {
                    yield* [BytesValue.encode(p).finish()];
                }
            }
            else {
                yield* [BytesValue.encode(pkt).finish()];
            }
        }
    },
    // decodeTransform decodes a source of encoded messages.
    // Transform<Uint8Array, BytesValue>
    async *decodeTransform(source) {
        for await (const pkt of source) {
            if (Array.isArray(pkt)) {
                for (const p of pkt) {
                    yield* [BytesValue.decode(p)];
                }
            }
            else {
                yield* [BytesValue.decode(pkt)];
            }
        }
    },
    fromJSON(object) {
        return {
            value: isSet(object.value)
                ? bytesFromBase64(object.value)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBytesValue();
        message.value = object.value ?? new Uint8Array();
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr) {
    const bin = [];
    arr.forEach((byte) => {
        bin.push(String.fromCharCode(byte));
    });
    return btoa(bin.join(''));
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
