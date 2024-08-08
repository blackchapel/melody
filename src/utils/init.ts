import { Client, GatewayIntentBits } from 'discord.js';

const DiscordClient = (token: string | undefined): void => {
    try {
        if (!token) {
            throw new Error('Missing bot credentials.');
        }

        const client: Client<boolean> = new Client({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildVoiceStates,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent
            ]
        });

        client.once('ready', () => {
            console.log('Bot is online!');
        });

        client.login(token);
    } catch (error: any) {
        throw new Error(error);
    }
};

export default DiscordClient;
