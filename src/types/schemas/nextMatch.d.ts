/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface NextMatch {
	teamA: {
		id: string;
		name: string;
		players: {
			id: string;
			name: string;
		}[];
		[k: string]: unknown;
	};
	teamB: {
		id: string;
		name: string;
		players: {
			id: string;
			name: string;
		}[];
		[k: string]: unknown;
	};
	match: {
		name: string;
	};
	games: {
		map: string;
		[k: string]: unknown;
	}[];
}
