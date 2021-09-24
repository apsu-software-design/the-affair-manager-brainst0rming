export class Affair {
	#_name: string;
	#_zipcode: string;
	#_date: string;
	#_members: string[];

	constructor(n: string, zipcode: string, date: string) {
		this.#_name = n;
		this.#_zipcode = zipcode;
		this.#_date = date;
		this.#_members = [];
	}

	get name(): string {
		return this.#_name;
	}

	get members(): string[] {
		return this.#_members;
	}

	set name(newName: string) {
		this.#_name = newName;
	}

	set date(newDate: string) {
		this.#_date = newDate;
	}

	addMember(memberName: string) : void {
		if (!(this.#_members.includes(memberName))) {
			this.#_members.push(memberName);
		}
		else {
			console.log(`Error: ${memberName} is already assigned to ${this.name}`);
		}
	}
}
