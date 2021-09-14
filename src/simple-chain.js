const chainMaker = {
	getLength() {
		return this.chain.length;
	},

	addLink(value) {
		if (typeof value === undefined) {
			value = " ";
		}
		if (!this.chain) {
			this.chain = [];
		}
		this.chain.push(`( ${value} )~~`);
		console.log("this.chain :>> ", this.chain);

		return this;
	},

	removeLink(position) {
		if (
			position <= 0 ||
			position > this.chain.length ||
			typeof position !== "number"
		) {
			this.chain = [];
			throw new Error("You can't remove incorrect link!");
		}
		const index = position - 1;
		this.chain.splice(index, 1);

		return this;
	},

	reverseChain() {
		if (!this.chain || this.chain.length === 0) {
			return this;
		}
		this.chain = this.chain.reverse();

		return this;
	},

	finishChain() {
		this.chain = this.chain.join("");
		const res = this.chain.substring(0, this.chain.length - 2);
		this.chain = [];

		return res;
	},
};

export default chainMaker;
