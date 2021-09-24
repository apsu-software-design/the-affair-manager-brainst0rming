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
var _Affair__name, _Affair__zipcode, _Affair__date, _Affair__members;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Affair = void 0;
class Affair {
    constructor(n, zipcode, date) {
        _Affair__name.set(this, void 0);
        _Affair__zipcode.set(this, void 0);
        _Affair__date.set(this, void 0);
        _Affair__members.set(this, void 0);
        __classPrivateFieldSet(this, _Affair__name, n, "f");
        __classPrivateFieldSet(this, _Affair__zipcode, zipcode, "f");
        __classPrivateFieldSet(this, _Affair__date, date, "f");
        __classPrivateFieldSet(this, _Affair__members, [], "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _Affair__name, "f");
    }
    get members() {
        return __classPrivateFieldGet(this, _Affair__members, "f");
    }
    set name(newName) {
        __classPrivateFieldSet(this, _Affair__name, newName, "f");
    }
    set date(newDate) {
        __classPrivateFieldSet(this, _Affair__date, newDate, "f");
    }
    addMember(memberName) {
        if (!(__classPrivateFieldGet(this, _Affair__members, "f").includes(memberName))) {
            __classPrivateFieldGet(this, _Affair__members, "f").push(memberName);
        }
        else {
            console.log(`Error: ${memberName} is already assigned to ${this.name}`);
        }
    }
}
exports.Affair = Affair;
_Affair__name = new WeakMap(), _Affair__zipcode = new WeakMap(), _Affair__date = new WeakMap(), _Affair__members = new WeakMap();
//# sourceMappingURL=affair.js.map