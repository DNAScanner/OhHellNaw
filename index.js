const socials = await (await fetch("https://dnascanner.de/socials.json")).json();
document.getElementById("invite-url").href = socials.find((social) => social.id === "ohhellnaw").link;
export {};
