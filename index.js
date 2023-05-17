const Discord = require('discord.js');
const axios = require('axios');

const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILD_MEMBERS] });
const API_BASE_URL = 'https://api-popcord.vercel.app';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return; // Ignore messages from other bots
  if (!message.content.startsWith('!')) return; // Ignore messages without prefix

  const args = message.content.slice(1).trim().split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'help') {
    const availableCommands = [
      'wallpaper',
      'anime_wallpaper',
      'meme',
      'anime_meme',
      'neko',
      'waifu',
      'hug',
      'kill',
      '8ball',
      'ahegao (NSFW)',
      'anal (NSFW)',
      'asian (NSFW)',
      'ass (NSFW)',
      'bdsm (NSFW)',
      'boobs (NSFW)',
      'creampie (NSFW)',
      'cum (NSFW)',
      'feet (NSFW)',
      'gay (NSFW)',
      'gif (NSFW)',
      'hentai (NSFW)',
      'insertion (NSFW)',
      'lesbian (NSFW)',
      'milf (NSFW)',
      'penis (NSFW)',
      'pussy (NSFW)',
      'redhead (NSFW)',
      'short (NSFW)',
      'thigh (NSFW)',
      'toys (NSFW)',
      'subreddit (NSFW)',
      'video (NSFW)'
    ];

    const helpMessage = `Available commands:\n\n${availableCommands.map(cmd => `!${cmd}`).join('\n')}`;
    message.channel.send(` \`\`\`\n${helpMessage}\n\`\`\``);
  }


  if (command === 'wallpaper') {
    try {
      const response = await axios.get(`${API_BASE_URL}/img/sfw?type=wallpaper`);
      message.channel.send(response.data.url);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch wallpaper.');
    }
  } else if (command === 'anime_wallpaper') {
    try {
      const response = await axios.get(`${API_BASE_URL}/img/sfw?type=anime_wallpaper`);
      message.channel.send(response.data.url);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch anime wallpaper.');
    }
  } else if (command === 'meme') {
    try {
      const response = await axios.get(`${API_BASE_URL}/img/sfw?type=meme`);
      message.channel.send(response.data.url);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch meme.');
    }
  } else if (command === 'anime_meme') {
    try {
      const response = await axios.get(`${API_BASE_URL}/img/sfw?type=anime_meme`);
      message.channel.send(response.data.url);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch anime meme.');
    }
  } else if (command === 'neko') {
    try {
      const response = await axios.get(`${API_BASE_URL}/img/sfw?type=neko`);
      message.channel.send(response.data.url);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch neko.');
    }
  } else if (command === 'waifu') {
    try {
      const response = await axios.get(`${API_BASE_URL}/img/sfw?type=waifu`);
      message.channel.send(response.data.url);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch waifu.');
    }
  } else if (command === 'hug') {
    try {
      const response = await axios.get(`${API_BASE_URL}/img/sfw?type=hug`);
      message.channel.send(response.data.url);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch hug content.');
    }
  } else if (command === 'kill') {
    try {
      const response = await axios.get(`${API_BASE_URL}/img/sfw?type=kill`);
      message.channel.send(response.data.url);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch kill content.');
    }
  } else if (command === '8ball') {
    try {
      const response = await axios.get(`${API_BASE_URL}/msg/8ball`);
      message.channel.send(response.data.prediction);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch 8ball prediction.');
    }
  } else if (command === 'ahegao') {
    try {
      const response = await axios.get(`${API_BASE_URL}/img/nsfw?type=ahegao`);
      message.channel.send(response.data.url);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch ahegao content.');
    }
  } else if (command === 'anal') {
    try {
      const response = await axios.get(`${API_BASE_URL}/img/nsfw?type=anal`);
      message.channel.send(response.data.url);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch anal content.');
    }
  } else if (command === 'asian') {
    try {
      const response = await axios.get(`${API_BASE_URL}/img/nsfw?type=asian`);
      message.channel.send(response.data.url);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch asian content.');
    }
  } else if (command === 'ass') {
    try {
      const response = await axios.get(`${API_BASE_URL}/img/nsfw?type=ass`);
      message.channel.send(response.data.url);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch ass content.');
    }
  } else if (command === 'bdsm') {
    try {
      const response = await axios.get(`${API_BASE_URL}/img/nsfw?type=bdsm`);
      message.channel.send(response.data.url);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch bdsm content.');
    }
  } else if (command === 'boobs') {
    try {
      const response = await axios.get(`${API_BASE_URL}/img/nsfw?type=boobs`);
      message.channel.send(response.data.url);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch boobs content.');
    }
  } else if (command === 'creampie') {
    try {
      const response = await axios.get(`${API_BASE_URL}/img/nsfw?type=creampie`);
      message.channel.send(response.data.url);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch creampie content.');
    }
  } else if (command === 'cum') {
    try {
      const response = await axios.get(`${API_BASE_URL}/img/nsfw?type=cum`);
      message.channel.send(response.data.url);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch cum content.');
    }
  } else if (command === 'feet') {
    try {
      const response = await axios.get(`${API_BASE_URL}/img/nsfw?type=feet`);
      message.channel.send(response.data.url);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch feet content.');
    }
  } else if (command === 'gay') {
    try {
      const response = await axios.get(`${API_BASE_URL}/img/nsfw?type=gay`);
      message.channel.send(response.data.url);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch gay content.');
    }
  } else if (command === 'gif') {
    try {
      const response = await axios.get(`${API_BASE_URL}/img/nsfw?type=gif`);
      message.channel.send(response.data.url);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch gif content.');
    }
  } else if (command === 'hentai') {
    try {
      const response = await axios.get(`${API_BASE_URL}/img/nsfw?type=hentai`);
      message.channel.send(response.data.url);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch hentai content.');
    }
  } else if (command === 'insertion') {
    try {
      const response = await axios.get(`${API_BASE_URL}/img/nsfw?type=insertion`);
      message.channel.send(response.data.url);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch insertion content.');
    }
  } else if (command === 'lesbian') {
    try {
      const response = await axios.get(`${API_BASE_URL}/img/nsfw?type=lesbian`);
      message.channel.send(response.data.url);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch lesbian content.');
    }
  } else if (command === 'milf') {
    try {
      const response = await axios.get(`${API_BASE_URL}/img/nsfw?type=milf`);
      message.channel.send(response.data.url);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch milf content.');
    }
  } else if (command === 'penis') {
    try {
      const response = await axios.get(`${API_BASE_URL}/img/nsfw?type=penis`);
      message.channel.send(response.data.url);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch penis content.');
    }
  } else if (command === 'pussy') {
    try {
      const response = await axios.get(`${API_BASE_URL}/img/nsfw?type=pussy`);
      message.channel.send(response.data.url);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch pussy content.');
    }
  } else if (command === 'redhead') {
    try {
      const response = await axios.get(`${API_BASE_URL}/img/nsfw?type=redhead`);
      message.channel.send(response.data.url);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch redhead content.');
    }
  } else if (command === 'short') {
    try {
      const response = await axios.get(`${API_BASE_URL}/img/nsfw?type=short`);
      message.channel.send(response.data.url);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch short content.');
    }
  } else if (command === 'thigh') {
    try {
      const response = await axios.get(`${API_BASE_URL}/img/nsfw?type=thigh`);
      message.channel.send(response.data.url);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch thigh content.');
    }
  } else if (command === 'toys') {
    try {
      const response = await axios.get(`${API_BASE_URL}/img/nsfw?type=toys`);
      message.channel.send(response.data.url);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch toys content.');
    }
  } else if (command === 'subreddit') {
    try {
      const response = await axios.get(`${API_BASE_URL}/img/nsfw?type=subreddit`);
      message.channel.send(response.data.url);
    } catch (error) {
      console.error(error);
      message.channel.send('Failed to fetch subreddit content.');
    }
  } else if (command === 'video') {
  try {
    const response = await axios.get(`${API_BASE_URL}/img/nsfw?type=video`);
    message.channel.send(response.data.url);
  } catch (error) {
    console.error(error);
    message.channel.send('Failed to fetch video content.');
  }
} 
});

client.login('Discord-Token-Here');
