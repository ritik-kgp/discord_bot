import { Client, Events, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';
import * as greet from './commands/greet.js';

config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, readyDiscord);

client.login(process.env.TOKEN);

function readyDiscord() {
    console.log('Done');
}

client.on(Events.InteractionCreate, handleInteraction);

async function handleInteraction(interaction) {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === 'greet') {
        await greet.execute(interaction);
    }
}