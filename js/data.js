
export const TidbinbillaData = {
    vocabulary: [
        {
            word: "Yuma",
            translation: "Hello / Greetings",
            usage: "General welcoming statement used when entering Ngunnawal Country"
        },
        {
            word: "Birrigai",
            translation: "Place Name",
            usage: "The name of the Birrigai Rock Shelter, one of the oldest known Aboriginal occupation sites in the region"
        },
        {
            word: "Maliyan",
            translation: "Wedge Tail Eagle",
            usage: "A symbolic guardian spirit, creator figure"
        },
        {
            word: "Ngunnawal",
            translation: "The People / The Country",
            usage: "Self-identification term for the traditional Indigenous nations of the Canberra and ACT region"
        },
        {
            word: "Tidbinbilla",
            translation: `Tidbinbilla / "Where boys become men"`,
            usage: "The local name for this area known for its natural landscape and ngunnawal heritage"
        }
    ],

    significantSites: [
{
        id: "site_01",
            title: "Birrigai Rock Shelter",
            coords: { lat: -35.4312, lng: 148.9515 },
            description: "An important Aboriginal site with evidence of very early occupation.",
            description2: "Stone tools and other artefacts have been found here.",
            imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAF-I4CIO-v-8PKpYtZjTbvO5c7tckjk5JcruH7Z2OWabe-KMNo5f1_pcVjVnXQr9hDNITIYA2rKwpLmWNlCE16Fr2P8IS99dYd8BPgBCbK4IVNp91evY-fB7mb3N3s2VY9HNiS5Hi0IiEWG=w408-h544-k-no"
        },
        {
            id: "site_02",
            title: "Gibraltar Peak / Range Entry",
            coords: { lat: -35.45712259450754, lng: 148.94954063526615 },
            description: "A well-known lookout point in the Tidbinbilla area.",
            description2: "The surrounding landscape has cultural significance.",
            imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAELU4USQocdR51TkJuQBOLZdpeu7VAYfL336nezq_Natelq04xI34NUMjF40TaI9wWPgNfY8rRP-B0l94kLT31gXvQ_WRk6-m_uHSby5z9pseU8vmQsI73GfaeqN-RJPrz85q6Qqw=w408-h306-k-no"
        },
        {
            id: "site_03",
            title: "Tidbinbilla Valley Floor & River Network",
            coords: { lat: -35.4615, lng: 148.9112 },
            description: "The rivers and valley were important resource areas.",
            description2: "Grinding grooves can still be seen near some waterways.",
            imageUrl: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHUgX2_xycZro3WLLbLq5DvEniqj2foImAeM7NDKzPw9G69vmQZpZLMJ26uik_-tgB7f-FEJHpJgrV4tfPFOBNBlzyCVzYiYxg1azxMNwH2eP66LS6xpkH0PXmM_ZPPLKiytF_htw=w408-h306-k-no"
        },
        {
            id: "site_04",
            title: "Bogong Moth High Alpine Refuge",
            coords: { lat: -35.3950, lng: 148.9200 },
            description: "A seasonal gathering area linked to Bogong Moths.",
            description2: "People travelled here during the warmer months.",
            imageUrl: ""
        }
    ],

    resources: [
        { name: "Bogong Moth", type: "Fauna", notes: "Moths gather in the high country each summer and were collected as a valuable seasonal food source." },
        { name: "Fish", type: "Fauna", notes: "Rivers and streams provided a reliable source of fish throughout the year." },
        { name: "Wattle Seeds", type: "Flora", notes: "Seeds were collected and ground into flour as a food source." }
    ],

    seasons: {
        winter: {
            title: "Winter",
            colour: "#2f5a79",
            monthsActive: "June - August",
            description: "Winter has cooler days, cold nights, and regular rain with frost in the early mornings."
        },
        spring: {
            title: "Spring",
            colour: "#2d5f1f",
            monthsActive: "September - November",
            description: "Spring has mild temperatures, increasing rain, and new plant growth across the reserve."
        },
        summer: {
            title: "Summer",
            colour: "#c17527",
            monthsActive: "December - February",
            description: "Summer is warm to hot, with lower rainfall in the high country and cooler conditions at altitude."
        },
        autumn: {
            title: "Autumn",
            colour: "#7a5531",
            monthsActive: "March - May",
            description: "Autumn has cooler days, clearing winds, and occasional rain before winter."
        }
    }
};
