/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ActiveMatchTeam = {
	id: string;
	name: string;
	players: {
		id: string;
		name: string;
	}[];
	[k: string]: unknown;
} & {
	score: number;
	[k: string]: unknown;
};

export interface ActiveMatch {
	teamA: ActiveMatchTeam;
	teamB: ActiveMatchTeam;
	match: {
		name: string;
		isCompleted: boolean;
	};
	games: {
		winner: 'none' | 'alpha' | 'bravo';
		map: string;
		[k: string]: unknown;
	}[];
}
