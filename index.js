const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const keep_alive = require("./keep_alive.js");  //

// Liste de phrases pour la roue
const phrasesRoulette = [
  "Le résultat de la roue est: **5x mirror**",
  "Le résultat de la roue est: **5x def en offense**",
  "Le résultat de la roue est: **3 monstres de la même famille**",
  "Le résultat de la roue est: **5 cleaves/bombers**",
  "Le résultat de la roue est: **5x mono élément**",
  "Le résultat de la roue est: **Pas de nat 5**",
  "Le résultat de la roue est: **Only LD**",
  "Le résultat de la roue est: **Fight auto**",
  "Le résultat de la roue est: **Vio interdit**",
  "Le résultat de la roue est: **un 2nat dans chaque off (2A acceptés)**",
  "Le résultat de la roue est: **une off Susano Orion Garo**",
  "Petit rappel que Donay est un fdp, voila mnt que c'est dit, refais la commande !roue"
  // Ajoutez autant de phrases que vous le souhaitez
];

client.once("ready", () => {
  console.log(`Connecté en tant que ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  // Vérifie si le message commence par le préfixe "!" et est envoyé par un utilisateur plutôt qu'un bot
  if (!message.content.startsWith("!") || message.author.bot) return;

  // Divise la commande et les arguments
  const args = message.content.slice(1).split(" ");
  const command = args.shift().toLowerCase();

  // Vérifie si la commande est "!roue"
  if (command === "roue") {
    // Sélectionne une phrase aléatoire parmi la liste
    const randomPhrase =
      phrasesRoulette[Math.floor(Math.random() * phrasesRoulette.length)];

    // Envoie la phrase dans le canal où la commande a été appelée
    message.reply(randomPhrase);
  }
});
console.log(process.env.TOKEN)
client.login(
  process.env.TOKEN
);
