<script lang="ts">
	
    interface EventsByYear {
        year: string;
        events: {
            title: string;
            date: string;
            location: string;
            host?: string;
        }[];
    }

    const portfolio: EventsByYear[] = [
        // {
        //     year: "2026",
        //     events: [
		// 		{
		// 			title: "International Congress of Families",
		// 			date: "February 26-28",
		// 			location: "Monterrey, Mexico",
		// 			host: "International Organization for the Family",
		// 		},
		// 		{
        //             title: "Blended & Blessed",
        //             date: "April 18",
        //             location: "Oklahoma City, OK",
        //             host: "FamilyLife",
        //         },
        //     ],
        // },
		{
			year: "2025",
			events: [
				{
					title: "Christian Women's Conference",
					date: "November 14-16",
					location: "Sevierville, TN",
					host: "Cokesbury Church",
				},
				{
					title: "Christian Women's Event",
					date: "November 1",
					location: "Jacksonville, AR",
					host: "Bayou Meto Baptist Church",
				},
				{
					title: "Summit on Stepfamily Ministry",
					date: "October 23-24",
					location: "Brentwood, TN",
					host: "FamilyLife",
				},
				{
					title: "Cru 2025 Staff Conference",
					date: "July 12-18 27",
					location: "Milwaukee, WI",
					host: "Campus Crusade for Christ",
				},
				{
					title: "Blended & Blessed",
					date: "April 5",
					location: "Franklin, TN",
					host: "FamilyLife",
				},
				{
					title: "2025 International Congress of Families",
					date: "March 4-16 27",
					location: "Yucatan, Mexico",
					host: "International Organization for the Family",
				},
				{
					title: "2025 Love Like You Mean It Marriage Cruise",
					date: "February 8-15",
					location: "Puerto Rico, St. Thomas, Dominican Republic",
					host: "FamilyLife",
				}
			],
		},
        {
            year: "2024",
            events: [
                {
                    title: "Leadership Training",
                    date: "November 10",
                    location: "Virtual",
                    host: "FamilyLife",
                },
                {
                    title: "Stepfamily Summit",
                    date: "October 10-11",
                    location: "Dallas, TX",
                    host: "FamilyLife",
                },
                {
                    title: "The Influence of Grandparents",
                    date: "May 20",
                    location: "Virtual",
                    host: "Legacy Coalition",
                },
                {
                    title: "Blended & Blessed",
                    date: "April 27",
                    location: "Dallas, TX",
                    host: "FamilyLife",
                },
            ],
        },
        {
            year: "2023",
            events: [
                {
                    title: "Parenting Conference",
                    date: "November 10-11",
                    location: "Dallas, TX",
                    host: "Watermark Community Church",
                },
                {
                    title: "Summit on Stepfamily Ministry",
                    date: "October 14",
                    location: "Little Rock, AR",
                    host: "FamilyLife",
                },
                {
                    title: "Blended and Blessed",
                    date: "April 29",
                    location: "Melbourne, FL",
                    host: "FamilyLife",
                },
                {
                    title: "Parenting with Purpose",
                    date: "March 4",
                    location: "Peterborough, Ontario",
                    host: "Pathway Life Church",
                },
            ],
        },
        {
            year: "2022",
            events: [
                {
                    title: "Summit on Stepfamily Ministry",
                    date: "October 13-14",
                    location: "Chandler, AZ",
                    host: "FamilyLife",
                },
                {
                    title: "Real Life Parenting Conference",
                    date: "April 30",
                    location: "Cleveland, OH",
                    host: "Harvest Bible Chapel",
                },
                {
                    title: "Blended and Blessed",
                    date: "April 2",
                    location: "Little Rock, AR",
                    host: "FamilyLife",
                },
                {
                    title: "Women of Courage",
                    date: "March 3",
                    location: "Bossier City, LA",
                    host: "Walking Through Your Fears",
                },
            ],
        },
        {
            year: "2021",
            events: [
                {
                    title: "Renew Conference",
                    date: "September 18",
                    location: "Cleveland, OH",
                    host: "Moody Radio",
                },
                {
                    title: "Summit on Stepfamily Ministry",
                    date: "October 14-15",
                    location: "Marietta, GA",
                    host: "FamilyLife",
                },
            ],
        },
        {
            year: "2020",
            events: [
                {
                    title: "Summit on Stepfamily Ministry",
                    date: "October 1-2",
                    location: "Little Rock, AR",
                    host: "FamilyLife",
                },
            ],
        },
        {
            year: "2019",
            events: [
                {
                    title: "Christian Women in Media Association",
                    date: "March 21",
                    location: "Nashville, TN",
                    host: "Aspen Grove Christian Church",
                },
                {
                    title: "Stepmom Summer Getaway Event",
                    date: "July 19-20",
                    location: "Nashville, TN",
                    host: "Aspen Grove Christian Church",
                },
                {
                    title: "Summit on Stepfamily Ministry",
                    date: "October 23-25",
                    location: "Chesapeake, VA",
                    host: "FamilyLife",
                },
            ],
        },
        {
            year: "2018",
            events: [
                {
                    title: "SpeakUp Conference",
                    date: "June 28-30",
                    location: "Grand Rapids, Michigan",
                    host: "The Prince Center",
                },
            ],
        }
    ];
</script>

<div class="max-w-6xl mx-auto py-12 px-4 font-sans text-lg">
    <div class="mb-16 text-center md:text-left">
        <h1 class="text-6xl md:text-7xl font-cursive font-bold text-base-content mb-4 text-shadow-md">
            Previous Speaking Events
        </h1>
        <p class="text-base-content/70 max-w-2xl leading-relaxed mx-auto md:mx-0">
            A collection of conferences, workshops, and speaking engagements where I've had the privilege to share insights on Christian living, marriage, and stepfamily ministry.
        </p>
    </div>

    {#each portfolio as group}
        <section class="mb-16">
            <div class="relative mb-10">
                <h2 class="relative z-10 inline-block pr-6 text-4xl font-lora italic font-bold text-accent bg-base-100">
                    {group.year}
                </h2>
                <div class="absolute bottom-3 left-0 w-full h-[2px] bg-gradient-to-r from-accent/60 via-accent/20 to-transparent"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                {#each group.events as event}
                    <div class="daisy-card bg-base-100 shadow-lg shadow-secondary/40 border-t-4 border-t-secondary transition-all duration-300 rounded-xl">
                        <div class="daisy-card-body p-8 w-full">
                            <h3 class="daisy-card-title font-lora italic text-2xl font-bold text-base-content mb-3">{event.title}</h3>

                            <div class="space-y-2">
                                <div class="flex items-center gap-2.5 text-sm text-base-content/60">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-primary">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                    </svg>
                                    <span class="font-medium">{event.date}</span>
                                </div>

                                <div class="flex items-center gap-2.5 text-sm text-base-content/60">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-primary">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    <span>{event.location}</span>
                                </div>
                            </div>

                            {#if event.host}
                                <div class="daisy-card-actions justify-start mt-6">
                                    <div class="daisy-badge daisy-badge-soft daisy-badge-primary font-sans font-bold px-3 py-3 text-[11px] uppercase tracking-wider">
                                        {event.host}
                                    </div>
                                </div>
                            {/if}
                        </div>
                    </div>
                {/each}
            </div>
        </section>
    {/each}
</div>