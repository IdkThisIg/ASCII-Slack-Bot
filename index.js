import { App } from "@slack/bolt";
import express from "express";
import axios from "axios";
import 'dotenv/config';
import { images } from "./images.js";
import { OpenRouter } from '@openrouter/sdk';

let app;
let receiver;
let expressApp;


function initBolt(env) {
  if (!app) {
    
    expressApp = express();

    expressApp.get("/slack/install", (req, res) => {
      const url = `https://slack.com/oauth/v2/authorize?client_id=${process.env.SLACK_CLIENT_ID}&scope=commands,chat:write&redirect_uri=${process.env.SLACK_REDIRECT_URI}`;
      res.redirect(url);
    });

    expressApp.get("/slack/oauth_redirect", async (req, res) => {
      const { code } = req.query;

      const result = await axios.post("https://slack.com/api/oauth.v2.access", null, {
        params: {
        client_id: process.env.SLACK_CLIENT_ID,
        client_secret: process.env.SLACK_CLIENT_SECRET,
        code
        }
      });

      console.log(result.data);

      res.send("Slack app installed successfully!");
    });

    app = new App({
      token: process.env.SLACK_BOT_TOKEN,
      signingSecret: process.env.SLACK_SIGNING_SECRET,
      socketMode: true,
      appToken: process.env.SLACK_APP_TOKEN,
    });

    app.command("/ascii-draw", async ({ command, ack, respond }) => {
      await ack();
      const args = command.text.trim().split(' ');
      const subcommand = args[0].toLowerCase();
      switch (subcommand) {
        case "shrek" :
            await respond({response_type: "in_channel", text: images.shrek});
            break;
        case "garfield" :
            await respond({response_type: "in_channel", text: images.garfield});
            break;
        case "bluey" :
            await respond({response_type: "in_channel", text: images.bluey});
            break;
        case "pikachu" :
              await respond({response_type: "in_channel",  text: images.pikachu});
              break; 
        case "waluigi" :
              await respond({response_type: "in_channel",  text: images.waluigi});
              break;
        case "chad" :
              await respond({response_type: "in_channel",  text: images.chad});
              break;
        case "troll" :
              await respond({response_type: "in_channel",  text: images.troll});
              break;
        case "cinema" :
              await respond({response_type: "in_channel",  text: images.cinema});
              break;
        case "megamind" :
              await respond({response_type: "in_channel",  text: images.megamind});
              break;
        case "elmo" :
              await respond({response_type: "in_channel",  text: images.elmo});
              break;                       
        default:
            const res = await fetch("https://ai.hackclub.com/proxy/v1/chat/completions", {
              method: "POST",
              headers: {
                "Authorization": `Bearer ${process.env.API_KEY}`,
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                model: "anthropic/claude-sonnet-5",
                messages: [
                  {
                    role: "user",
                    content: `ASCII art of ${command.text}. Only return the art.`
                  }
                ]
              })
            });

            const APIData = await res.json();

            await respond(APIData.choices[0].message.content);        
      }  
    }); 

    app.command("/ascii-text", async ({ command, ack, respond }) => {
      await ack();
      const args = command.text.trim().split(' ');
      let text;
      if (args[0][0] == "\"") {
        text = args[0].replaceAll("\"", "")
        if (!args[0].endsWith("\"")) {
          for (const arg of args.toSpliced(0, 1)) {
            if (arg.endsWith("\"")) {
              text = text + " " + arg.replaceAll("\"", "")
              break;
            } else {
              text = text + " " + arg
            }
          }
        }  
      } else { text = args[0] }

      const textLength = text.split(' ').length
      let font;
      font = ""
      for (const arg of args.toSpliced(0, textLength)) {
        font = font + " " + arg
      }
      font = font.trim()
    
  
      try {
        let response;
        if (args.length > 1) {
          response = await axios.get(
            "https://asciified.thelicato.io//api/v2/ascii?",
            {
              params: {
                text: text,
                font: font
              }
            } 
          );
        } else {
          response = await axios.get(
            "https://asciified.thelicato.io//api/v2/ascii?",
            {
              params: {
                text: text,
              }
            } 
          );
        }
        await respond({ text: "```" + response.data.replaceAll("```", "``\u200B`") + "```", response_type: "in_channel"});
      }
      catch (_) {
        await respond({ text: "Error generating ASCII text"})
      }
    });

    app.command("/ascii-help", async ({ command, ack, respond }) => {
        await ack();
        await respond({ 
            text:
    `Available Commands:
    /ascii-draw [subject] - Draw ASCII art (subject can be any of the following or a custom subject):
            - shrek
            - garfield
            - bluey
            - pikachu
            - waluigi
            - chad
            - troll
            - cinema
            - megamind
            - elmo
    /ascii-text [text] [font?] - Convert text to ASCII art (default font is "Standard"; go to https://asciified.thelicato.io/ for available fonts)        
    /ascii-help - Show this help message`    
    })
    });

    
  }
}    
export default initBolt;

initBolt();

(async () => {
      await app.start();
      expressApp.listen(3000, () => {
        console.log("OAuth server running on port 3000");
      });
      console.log("bot is running!");
    })();

