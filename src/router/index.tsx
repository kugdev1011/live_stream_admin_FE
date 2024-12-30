import { ROLE } from "@/type/role.ts";
import {
	FileChartColumn, FileChartColumnIncreasing,
	FileVideo,
	Radio,
	TvMinimalPlay,
	Users
} from "lucide-react";

export const APP_PREFIX_PATH = '/';
export const APP_LOGIN_PATH = "/login";
export const APP_RESET_PASSWORD_PATH ="/reset-password";
export const APP_FORGOT_PASSWORD_PATH ="/forgot-password";



export const APP_DASHBOARD_PATH = "/dashboard";
export const APP_PROFILE_PATH = "/profile";
export const APP_ACCOUNT_LIST_PATH = "/account-list";
export const APP_LIVE_LIST_PATH = "/live-list";
export const APP_VIDEO_LIBRARY_PATH = "/video-library";
export const APP_VIDEO_STATISTIC_PATH = "/video-statistics";
export const APP_LIVE_STATISTIC_PATH = "/live-statistics";
export const APP_USER_STATISTICS_PATH = "/user-statistics"



export const APP_SIDEBAR_ITEMS: Record<ROLE, string[]> = {
	[ROLE.SUPERADMIN] : [
		APP_ACCOUNT_LIST_PATH,
		APP_LIVE_LIST_PATH,
		APP_VIDEO_LIBRARY_PATH,
		APP_LIVE_STATISTIC_PATH,
		APP_VIDEO_STATISTIC_PATH,
		APP_USER_STATISTICS_PATH
	],
	[ROLE.ADMIN] : [
		APP_ACCOUNT_LIST_PATH,
		APP_LIVE_LIST_PATH,
		APP_VIDEO_LIBRARY_PATH,
		APP_LIVE_STATISTIC_PATH,
		APP_VIDEO_STATISTIC_PATH,
		APP_USER_STATISTICS_PATH
	]
}

export const ITEM_INFO = {
	[APP_ACCOUNT_LIST_PATH]: {
		path: APP_ACCOUNT_LIST_PATH,
		title: "Account List",
		icon: <Users />,
	},
	[APP_LIVE_LIST_PATH]: {
		path: APP_LIVE_LIST_PATH,
		title: "Live List",
		icon: <Radio />,
	},
	[APP_VIDEO_LIBRARY_PATH]: {
		path: APP_VIDEO_LIBRARY_PATH,
		title: "Video Library",
		icon: <FileVideo />,
	},
	[APP_LIVE_STATISTIC_PATH]: {
		path: APP_LIVE_STATISTIC_PATH,
		title: "Live Statistic",
		icon: <FileChartColumn />,
	},
	[APP_VIDEO_STATISTIC_PATH]: {
		path: APP_VIDEO_STATISTIC_PATH,
		title: "Video Statistic",
		icon: <FileChartColumnIncreasing />,
	},
	[APP_USER_STATISTICS_PATH]: {
		path: APP_USER_STATISTICS_PATH,
		title: "User Statistic",
		icon: <FileChartColumnIncreasing />,
	},
}
