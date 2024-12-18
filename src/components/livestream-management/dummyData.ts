import { LIVESTREAM_STATUS, LIVESTREAM_TYPE } from "@/lib/interface.tsx";

export const dummyLivestreamSessions: LivestreamSession[] = [
	{
		id: "1",
		title: "Premier League Matchday 1",
		description: "Live streaming of the first Premier League match.",
		videoUrl: "https://example.com/streams/pl-matchday1",
		startTime: new Date("2024-12-18T10:00:00Z"),
		endTime: new Date("2024-12-18T12:00:00Z"),
		owner: "sports_channel_1",
		status: LIVESTREAM_STATUS.STREAMING,
		type: LIVESTREAM_TYPE.SPORT,
	},
	{
		id: "2",
		title: "DOTA 2 International Finals",
		description: "Streaming the grand finals of DOTA 2 International.",
		videoUrl: "https://example.com/streams/dota2-finals",
		startTime: new Date("2024-12-19T15:00:00Z"),
		endTime: new Date("2024-12-19T20:00:00Z"),
		owner: "esports_channel_5",
		status: LIVESTREAM_STATUS.NOT_STARTED,
		type: LIVESTREAM_TYPE.ESPORT,
	},
	{
		id: "3",
		title: "Champions League Final",
		description: "Live coverage of the UEFA Champions League final.",
		videoUrl: "https://example.com/streams/cl-final",
		startTime: new Date("2024-12-20T19:00:00Z"),
		endTime: new Date("2024-12-20T22:00:00Z"),
		owner: "sports_channel_3",
		status: LIVESTREAM_STATUS.ENDED,
		type: LIVESTREAM_TYPE.SPORT,
	},
	{
		id: "4",
		title: "CS:GO Major Tournament",
		description: "Live streaming of the CS:GO Major championship.",
		videoUrl: "https://example.com/streams/csgo-major",
		startTime: new Date("2024-12-21T12:00:00Z"),
		endTime: new Date("2024-12-21T18:00:00Z"),
		owner: "esports_channel_2",
		status: LIVESTREAM_STATUS.DISCONNECTED,
		type: LIVESTREAM_TYPE.ESPORT,
	},
	{
		id: "5",
		title: "Tennis Grand Slam Final",
		description: "Live broadcast of the Grand Slam tennis final.",
		videoUrl: "https://example.com/streams/tennis-final",
		startTime: new Date("2024-12-22T08:00:00Z"),
		endTime: new Date("2024-12-22T10:00:00Z"),
		owner: "sports_channel_4",
		status: LIVESTREAM_STATUS.BANNED,
		type: LIVESTREAM_TYPE.SPORT,
	},
	{
		id: "6",
		title: "League of Legends Worlds",
		description: "Streaming the LoL Worlds championship matches.",
		videoUrl: "https://example.com/streams/lol-worlds",
		startTime: new Date("2024-12-23T16:00:00Z"),
		endTime: new Date("2024-12-23T22:00:00Z"),
		owner: "esports_channel_3",
		status: LIVESTREAM_STATUS.UNBANNING,
		type: LIVESTREAM_TYPE.ESPORT,
	},
];

export interface LivestreamSession {
	id: string;
	title: string;
	description: string;
	videoUrl: string;
	startTime: Date;
	endTime: Date;
	owner: string;
	status: LIVESTREAM_STATUS;
	type: LIVESTREAM_TYPE;
}
