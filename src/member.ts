export class Member {
	#_name: string;
	#_email: string;

	constructor(n: string, email: string) {
		this.#_name = n;
		this.#_email = email;
	}

	get name(): string {
		return this.#_name;
	}

	get email(): string {
		return this.#_email;
	}
}
