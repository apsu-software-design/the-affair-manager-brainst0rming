/**
 * Bo Yang Li
 * CSCI 4602
 * Assignment 2
 */

import {Member} from './member';
import {Affair} from './affair';
import {Organization} from './organization';

export class AffairManager {
	#_members: Member[];
	#_affairs: Affair[];
	#_organizations: Organization[];

	constructor() {
		this.#_members = [];
		this.#_affairs = [];
		this.#_organizations = [];
	}

	addMember(n: string, email: string) : void {
		let m: Member = new Member(n, email);
		this.#_members.push(m);
	}

	addAffair(affairName: string, zipcode: string, date: string) : void {
		let a: Affair = new Affair(affairName, zipcode, date);
		this.#_affairs.push(a);
	}

	addOrganization(organizationName: string) : void {
		let o: Organization = new Organization(organizationName);
		this.#_organizations.push(o);
	}

	addMemberToAffair(memberName: string, affairName: string) : void {
		let a: Affair = this.#_affairs.filter(aff => aff.name === affairName)[0];
		a.addMember(memberName);
	}

	findMemberNames(query: string) : string[] {
		let memberNames: string[] = this.#_members.map(m => m.name);
		let results: string[] = memberNames.filter(n => n.includes(query));
		return results;
	}

	findAffairNames(query: string) : string[] {
		let affairNames: string[] = this.#_affairs.map(aff => aff.name);
		let results: string[] = affairNames.filter(n => n.includes(query));
		return results;
	}

	findOrganizationNames(query: string) : string[] {
		let organizationNames: string[] = this.#_organizations.map(o => o.name);
		let results: string[] = organizationNames.filter(n => n.includes(query));
		return results;
        }

	modifyAffair(affairName: string, newTitle?: string, newTime?: string) : void {
		let aff: Affair = this.#_affairs.filter(aff => aff.name === affairName)[0];

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

	addAffairToOrganization(affairName: string, organizationName: string) : void {
		let o: Organization = this.#_organizations.filter(org => org.name === organizationName)[0];

		if (this.#_affairs.filter(aff => aff.name === affairName).length === 0) {
			console.log(`Error: The affair ${affairName} does not exist`);
			return;
		}

		o.addAffair(affairName);
	}

	getMembers(affairName: string) : string[] {
		let a: Affair = this.#_affairs.filter(aff => aff.name === affairName)[0];

		if (!a) {
			return ['Error: The affair does not exist.'];
		}

		let memberNames: string[] = a.members;
		let members: Member[] = memberNames.map(n => this.#_members.filter(m => m.name === n)[0]);
		return members.map(m => `Name: ${m.name} | Email: ${m.email}`);
	}
}
