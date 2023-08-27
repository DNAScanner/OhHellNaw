const socials = await (await fetch("https://dnascanner.de/socials.json")).json();
location.href = socials.find((social) => social.id === "ohhellnaw").link;
export {};
