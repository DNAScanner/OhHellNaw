export {};

interface Social {
	title: string;
	link: string;
	icon: string;
	id: string;
}

const socials: Social[] = await (await fetch("https://dnascanner.de/socials.json")).json();

location.href = socials.find((social) => social.id === "ohhellnaw").link
