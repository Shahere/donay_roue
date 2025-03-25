//const { Client, GatewayIntentBits } = require("discord.js");
import { Client, GatewayIntentBits } from "discord.js";
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
//const iaprompt = require("./openai");
//import { liamaPrompt } from "./openai.js";
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
  "Petit rappel que Donay est un fdp, voila mnt que c'est dit, refais la commande !roue",
  // Ajoutez autant de phrases que vous le souhaitez
];

/*const kindMessage = [
  "J'espère tu vas perdre",
  "Let's go bench la semaine pro hein",
  "Force on est pas ensemble",
  "Votez rouge à la prédi",
  "100% tu perds sale incapable",
  "Jvais petez mon crâne déjà t'es nul en plus tu te mets de défis... jvais hurlax vraiment là",
  "EZ PREDI ROUGE GO GO GO"
];*/

client.once("ready", () => {
  console.log(`Connecté en tant que ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  // Vérifie si le message commence par le préfixe "!" et est envoyé par un utilisateur plutôt qu'un bot
  if (!message.content.startsWith("!") || message.author.bot) return;

  // Divise la commande et les arguments
  const args = message.content.slice(1).split(" ");
  const command = args.shift().toLowerCase();
  let author = message.author.username;

  // Vérifie si la commande est "!roue"
  if (command === "roue") {
    // Sélectionne une phrase aléatoire parmi la liste
    let randomNumber = Math.floor(Math.random() * phrasesRoulette.length);
    const randomPhrase = phrasesRoulette[randomNumber];

    /*if (author == 'randonay') {
      if(randomNumber == 11) {
        message.reply(randomPhrase);
      } else {
        message.reply(randomPhrase+" "+kindMessage[Math.floor(Math.random() * kindMessage.length)]);
      }*/
    //} else {
    // Envoie la phrase dans le canal où la commande a été appelée
    message.reply(randomPhrase);
    //}
  }

  if (command == "tellme") {
    //liamaPrompt(args);
  }
});

// DO NOT UNCOMMENT UNLESS YOU KNOW WHAT YOU ARE DOING
//console.log(process.env.TOKEN);
client.login(process.env.TOKEN);
