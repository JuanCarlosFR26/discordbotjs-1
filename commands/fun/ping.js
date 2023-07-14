const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('true')
		.setDescription('Replies with the True!'),
	async execute(interaction) {
		await interaction.reply('El viruta es un tonto y un gordo!');
	},
};