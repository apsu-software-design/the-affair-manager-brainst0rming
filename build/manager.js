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
var _AffairManager__members, _AffairManager__affairs, _AffairManager__organizations;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffairManager = void 0;
const member_1 = require("./member");
const affair_1 = require("./affair");
const organization_1 = require("./organization");
class AffairManager {
    constructor() {
        _AffairManager__members.set(this, void 0);
        _AffairManager__affairs.set(this, void 0);
        _AffairManager__organizations.set(this, void 0);
        __classPrivateFieldSet(this, _AffairManager__members, [], "f");
        __classPrivateFieldSet(this, _AffairManager__affairs, [], "f");
        __classPrivateFieldSet(this, _AffairManager__organizations, [], "f");
    }
    addMember(n, email) {
        let m = new member_1.Member(n, email);
        __classPrivateFieldGet(this, _AffairManager__members, "f").push(m);
    }
    addAffair(affairName, zipcode, date) {
        let a = new affair_1.Affair(affairName, zipcode, date);
        __classPrivateFieldGet(this, _AffairManager__affairs, "f").push(a);
    }
    addOrganization(organizationName) {
        let o = new organization_1.Organization(organizationName);
        __classPrivateFieldGet(this, _AffairManager__organizations, "f").push(o);
    }
    addMemberToAffair(memberName, affairName) {
        let a = __classPrivateFieldGet(this, _AffairManager__affairs, "f").filter(aff => aff.name === affairName)[0];
        a.addMember(memberName);
    }
    findMemberNames(query) {
        let memberNames = __classPrivateFieldGet(this, _AffairManager__members, "f").map(m => m.name);
        let results = memberNames.filter(n => n.includes(query));
        return results;
    }
    findAffairNames(query) {
        let affairNames = __classPrivateFieldGet(this, _AffairManager__affairs, "f").map(aff => aff.name);
        let results = affairNames.filter(n => n.includes(query));
        return results;
    }
    findOrganizationNames(query) {
        let organizationNames = __classPrivateFieldGet(this, _AffairManager__organizations, "f").map(o => o.name);
        let results = organizationNames.filter(n => n.includes(query));
        return results;
    }
    modifyAffair(affairName, newTitle, newTime) {
        let aff = __classPrivateFieldGet(this, _AffairManager__affairs, "f").filter(aff => aff.name === affairName)[0];
        if (!aff) {
            console.log(`Error: The affair ${affairName} does not exist.`);
            return;
        }
        if (newTime !== undefined) {
            aff.date = newTime;
        }
        if (newTitle !== undefined) {
            aff.name = newTitle;
        }
    }
    addAffairToOrganization(affairName, organizationName) {
        let o = __classPrivateFieldGet(this, _AffairManager__organizations, "f").filter(org => org.name === organizationName)[0];
        if (__classPrivateFieldGet(this, _AffairManager__affairs, "f").filter(aff => aff.name === affairName).length === 0) {
            console.log(`Error: The affair ${affairName} does not exist`);
            return;
        }
        o.addAffair(affairName);
    }
    getMembers(affairName) {
        let a = __classPrivateFieldGet(this, _AffairManager__affairs, "f").filter(aff => aff.name === affairName)[0];
        if (!a) {
            return ['Error: The affair does not exist.'];
        }
        let memberNames = a.members;
        let members = memberNames.map(n => __classPrivateFieldGet(this, _AffairManager__members, "f").filter(m => m.name === n)[0]);
        return members.map(m => `Name: ${m.name} | Email: ${m.email}`);
    }
}
exports.AffairManager = AffairManager;
_AffairManager__members = new WeakMap(), _AffairManager__affairs = new WeakMap(), _AffairManager__organizations = new WeakMap();
//# sourceMappingURL=manager.js.map