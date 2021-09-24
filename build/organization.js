"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Organization__name, _Organization__affairs;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
class Organization {
    constructor(n) {
        _Organization__name.set(this, void 0);
        _Organization__affairs.set(this, void 0);
        __classPrivateFieldSet(this, _Organization__name, n, "f");
        __classPrivateFieldSet(this, _Organization__affairs, [], "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _Organization__name, "f");
    }
    addAffair(affairName) {
        if (!(__classPrivateFieldGet(this, _Organization__affairs, "f").includes(affairName))) {
            __classPrivateFieldGet(this, _Organization__affairs, "f").push(affairName);
        }
        else {
            console.log(`Error: ${affairName} is already assigned to ${this.name}`);
        }
    }
}
exports.Organization = Organization;
_Organization__name = new WeakMap(), _Organization__affairs = new WeakMap();
//# sourceMappingURL=organization.js.map