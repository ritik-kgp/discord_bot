import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('greet')
    .setDescription('Replies welcome back!');

export async function execute(interaction) {
    await interaction.reply('Welcome Back!');
}