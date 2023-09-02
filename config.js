// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'James',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'ad8e57e0ac9f957f6f4533b3fdbd8454', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '52.391656',
	defaultLongitude: '-1.244814',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'HomeAssistant',
			icon: 'home',
			link: 'https://anywherehass.duckdns.org:8123/lovelace-desktop/0',
		},
		{
			id: '2',
			name: 'Tumblr',
			icon: 'leaf',
			link: 'https://www.tumblr.com/',
		},
		{
			id: '3',
			name: 'Reddit/Unix',
			icon: 'layout-template',
			link: 'https://www.reddit.com/r/unixporn/',
		},
		{
			id: '4',
			name: 'YouTube',
			icon: 'youtube',
			link: 'https://www.youtube.com/',
		},
		{
			id: '5',
			name: 'Stable Diffusion',
			icon: 'brain-circuit',
			link: 'http://127.0.0.1:7860/',
		},
		{
			id: '6',
			name: 'Tidal',
			icon: 'headphones',
			link: 'https://listen.tidal.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'star',
			id: '1',
			links: [
				{
					name: 'HA',
					link: 'https://anywherehass.duckdns.org:8123/lovelace-desktop/0',
				},
				{
					name: 'Tumblr',
					link: 'https://www.tumblr.com/',
				},
				{
					name: 'Youtube',
					link: 'https://www.youtube.com/',
				},
				{
					name: 'Patreon',
					link: 'https://www.patreon.com/home',
				},
			],
		},
		{
			icon: 'podcast',
			id: '2',
			links: [
				{
					name: 'Tidal',
					link: 'https://listen.tidal.com/',
				},
				{
					name: 'Blindwave',
					link: 'https://blindwavellc.com/',
				},
				{
					name: 'Dropout',
					link: 'https://www.dropout.tv/browse',
				},
				{
					name: 'Wallhaven',
					link: 'https://wallhaven.cc/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'map',
			id: '1',
			links: [
				{
					name: 'Clouds',
					link: 'https://www.metoffice.gov.uk/weather/maps-and-charts/cloud-cover-map#?bbox=[[51.22580788296972,-3.6776733398437504],[53.34071328580364,0.7855224609375001]]&model=ukmo-ukv&layer=cloud-amount-total&timestep=1693638000000',
				},
				{
					name: 'Met',
					link: 'https://www.metoffice.gov.uk/weather/forecast/gcr1gjzbq#?date=2023-09-02',
				},
				{
					name: 'OWM',
					link: 'https://openweathermap.org/city/2638978',
				},
				{
					name: 'G-Maps',
					link: 'https://www.google.com/maps',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Knaben',
					link: 'https://knaben.eu/',
				},
				{
					name: 'Amazon',
					link: 'https://www.amazon.co.uk/',
				},
				{
					name: 'Ebuyer',
					link: 'https://www.ebuyer.com/',
				},
				{
					name: 'MPB',
					link: 'https://www.mpb.com/en-uk/category/used-photo-and-video-lenses/mirrorless-lenses/micro-four-thirds-fit-lenses',
				},
			],
		},
	],
};
