export type TotalPriceParams = {
	price: number,
	discount: number
	isInstallment: boolean
	months: number
}

export type TPosts = {
	id: string,
	title: string
	body: string
}

export type TNormalizeData = {
	byId: {
		[key: string]: TPosts;
	};
	allIds: string[];
};

export type TComment = {
	id: number;
	email: string;
};
