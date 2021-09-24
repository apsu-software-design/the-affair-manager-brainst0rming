export class Organization {
	#_name: string;
	#_affairs: string[];

	constructor(n: string) {
		this.#_name = n;
		this.#_affairs = [];
	}

	get name() : string {
		return this.#_name;
	}

	addAffair(affairName: string) : void {
		if (!(this.#_affairs.includes(affairName))) {
			this.#_affairs.push(affairName);
		}
		else {
			console.log(`Error: ${affairName} is already assigned to ${this.name}`);
		}
	}
}
