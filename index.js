import { App } from "@slack/bolt";
import express from "express";
import axios from "axios";
import 'dotenv/config';

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
            await respond({response_type: "in_channel", text:
            "⢀⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ "+
            "\n⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀"+ 
            "\n⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀"+ 
            "\n⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆⠀⠀⠀⠀⠀⠀⠀"+ 
            "\n⠀⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣶⣆"+ 
            "\n⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⠸⣼⡿"+ 
            "\n⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉⠀⠀⠀⠀⠀"+ 
            "\n⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀"+ 
            "\n⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀"+ 
            "\n⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ "+
            "\n⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀"+ 
            "\n⠀⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀ "+
            "\n⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀"+ 
            "\n⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀"+
            "\n⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ "});
            break;
        case "garfield" :
            await respond({response_type: "in_channel", text:
                        `⠀⠀⠀⠀⠀⠀⠀⠀⠀⡴⠞⠉⢉⣭⣿⣿⠿⣳⣤⠴⠖⠛⣛⣿⣿⡷⠖⣶⣤⡀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⣼⠁⢀⣶⢻⡟⠿⠋⣴⠿⢻⣧⡴⠟⠋⠿⠛⠠⠾⢛⣵⣿⠀⠀⠀⠀
          ⣼⣿⡿⢶⣄⠀⢀⡇⢀⡿⠁⠈⠀⠀⣀⣉⣀⠘⣿⠀⠀⣀⣀⠀⠀⠀⠛⡹⠋⠀⠀⠀⠀
          ⣭⣤⡈⢑⣼⣻⣿⣧⡌⠁⠀⢀⣴⠟⠋⠉⠉⠛⣿⣴⠟⠋⠙⠻⣦⡰⣞⠁⢀⣤⣦⣤⠀
          ⠀⠀⣰⢫⣾⠋⣽⠟⠑⠛⢠⡟⠁⠀⠀⠀⠀⠀⠈⢻⡄⠀⠀⠀⠘⣷⡈⠻⣍⠤⢤⣌⣀
          ⢀⡞⣡⡌⠁⠀⠀⠀⠀⢀⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⢿⡀⠀⠀⠀⠸⣇⠀⢾⣷⢤⣬⣉
          ⡞⣼⣿⣤⣄⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⣿⠀⠸⣿⣇⠈⠻
          ⢰⣿⡿⢹⠃⠀⣠⠤⠶⣼⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⣿⠀⠀⣿⠛⡄⠀
          ⠈⠉⠁⠀⠀⠀⡟⡀⠀⠈⡗⠲⠶⠦⢤⣤⣤⣄⣀⣀⣸⣧⣤⣤⠤⠤⣿⣀⡀⠉⣼⡇⠀
          ⣿⣴⣴⡆⠀⠀⠻⣄⠀⠀⠡⠀⠀⠀⠈⠛⠋⠀⠀⠀⡈⠀⠻⠟⠀⢀⠋⠉⠙⢷⡿⡇⠀
          ⣻⡿⠏⠁⠀⠀⢠⡟⠀⠀⠀⠣⡀⠀⠀⠀⠀⠀⢀⣄⠀⠀⠀⠀⢀⠈⠀⢀⣀⡾⣴⠃⠀
          ⢿⠛⠀⠀⠀⠀⢸⠁⠀⠀⠀⠀⠈⠢⠄⣀⠠⠼⣁⠀⡱⠤⠤⠐⠁⠀⠀⣸⠋⢻⡟⠀⠀
          ⠈⢧⣀⣤⣶⡄⠘⣆⠀⠀⠀⠀⠀⠀⠀⢀⣤⠖⠛⠻⣄⠀⠀⠀⢀⣠⡾⠋⢀⡞⠀⠀⠀
          ⠀⠀⠻⣿⣿⡇⠀⠈⠓⢦⣤⣤⣤⡤⠞⠉⠀⠀⠀⠀⠈⠛⠒⠚⢩⡅⣠⡴⠋⠀⠀⠀⠀
          ⠀⠀⠀⠈⠻⢧⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⣻⠿⠋⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠉⠓⠶⣤⣄⣀⡀⠀⠀⠀⠀⠀⢀⣀⣠⡴⠖⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀` });
            break;
        case "bluey" :
            await respond({response_type: "in_channel", text:
                `⠀⠀⠀⠀⠀⠀⠀⠀        ,⣰⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⢀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⡆
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⠿⠿⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣧
        ⠀⠀⠀⠀⠀⠀⠀⠀⣠⣷⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⣤⣿⣿⣽⣻
        ⠀⠀⠀⠀⠀⣀⣰⣿⣿⡿⠟⠛⣋⣀⣀⣀⣀⣀⣀⣀⣻⣿⣿⣿⣿⣧
        ⠀⠀⠀ ⡔⠁⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⡿⠃⠀⠈⠛⠿⠿⢱
        ⠀⠀⠀⢸⠀⠀⠀⠀⠀⢀⣠⣤⣦⣤⡘⢿⣿⣿⣿⣿⠃⣀⣀⡀⠀⠀ ⠀ ⡇
        ⠀⠀⠀⢸⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⡈⣿⣿⡿⢡⣾⣿⣿⣿⣷⣄⠀ ⡇
        ⠀⠀⠀⢸⠀⠀⠀⢰⣿⣿⣿⡟⠛⢻⣿⡇⢹⣿⢁⣿⣿⡟⠙⢻⣿⣿⡆ ⡇
        ⠀⠀⠀⢸⠀⠀⠀⣿⣿⣿⣿⠁⠀⠀⣿⡇⣰⠀⠀⠀⠀⠀⠀⠈⠙⣿⣿⣿ ⡇
        ⠀⠀⠀⢸⠀⠀⠀⢹⣿⣿⣿⣦⣀⣼⣿⠇⣿⡄⠀⠀⠀⠀⠀⠀⠀⣿⣿⡟ ⡇
        ⠀⠀⠀⢸⠀⠀⠀⠀⠻⣿⣿⣿⣿⣿⠟⣸⣿⣿⣄⠀⠀⠀⠀⣴⢸⡿⠃⠀ ⡇
        ⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⣉⣭⣭⣴⣾⣿⣿⣿⣿⣷⣤⣤⣾⡏⠁⠀⠀⠀ ⡇
        ⠀⠀⠀⢸⣀⣠⣤⣴⣶⣿⣿⠟⣛⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀ ⠀ ⠀⠀⡇
        ⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣁⢿⡜⣿⣿⣿⣿⣿⣿⣿⣿⣿⢃⣾⣶⣶⣾⡇⠀⠀⠀⠀ ⢀⣤⡀
        ⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣮⡻⢮⣙⠿⠿⣿⣿⡿⠿⢃⣾⣿⣿⣿⣿⡇⠀⠀⠀ ⢀⣼⣿⣷⣶⡄
        ⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣮⣭⣥⣤⣤⣤⣾⣿⣿⣿⣿⣿⣿⡇⠀ ⢀⣴⣿⣿⣿⣻⣿⡅
        ⠀⠀⢠⣿⣿⣿⣿⠏⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣴⣿⣿⣿⣿⡟⢾⡿⠁
        ⠀⣰⣿⣿⣿⡿⢃⣼⣿⣿⠟⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⠟⠋
        ⢰⣿⣿⣿⡿⢡⣾⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⠟⠉`
              });
            break;
        case "pikachu" :
              await respond({response_type: "in_channel",  text:
                `⠀⠀⠀⠀⠀⢸⣷⣶⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠘⣿⣿⡇⠐⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⠀⠱⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⢹⠃⠀⠀⠀⠈⢦⠤⠤⠤⠤⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⣤⣶⡶
        ⠀⠀⠀⠀⠀⣀⠠⠖⢃⠀⠀⠀⠀⠀⢣⡀⠀⢠⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡠⠔⠊⢹⣿⣿⣿⠏⠀
        ⠀⠀⠀⢰⠉⠀⠀⠀⠈⢃⠀⠀⠀⠀⠀⠱⡀⣈⢀⠀⢀⣀⡀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠤⠊⠁⠀⠀⠀⣸⣿⠟⠁⠀⠀
        ⠀⠀⠀⢠⠀⠀⠀⠀⠀⠀⢳⣄⠀⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀⠀⠈⠑⠒⠠⢄⡀⠀⠀⢀⠄⠊⠁⠀⠀⠀⠀⠀⢰⠟⠁⠀⠀⠀⠀
        ⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠘⡵⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠣⠜⠁⠀⠀⠀⠀⠀⠀⢠⠔⠁⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠈⡆⠀⠀⠀⠀⣀⢴⠰⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠴⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠇⠀⡠⠖⠈⠀⢸⠃⠀⢠⣶⡶⠢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢂⠽⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⢀⡐⠚⠢⢔⡉⠀⠀⠀⢠⠂⠀⠀⢸⣿⣷⣾⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⡌⠀⠀⠀⠀⠀⠉⠒⢤⢆⣀⡀⠀⠀⠙⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣤⣿⣧⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠘⢄⠀⠀⠀⠀⠀⠀⢸⣧⡄⠈⡆⠀⠀⠀⠀⠀⠀⠀⠐⠓⠂⠀⠀⠀⠈⢿⣿⣿⠟⠀⠀⡃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠈⢣⠀⠀⠀⠀⠀⠈⠟⡇⣀⡇⠀⠀⠀⠀⠢⢄⣠⣴⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡧⠤⠔⠒⠒⠀⠒⠒⢤⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠱⣄⠀⠀⠀⠀⠸⣌⠉⠀⠀⠀⠀⠀⠀⢸⠟⠛⢿⡿⠁⠁⠀⠀⠀⠀⢀⠔⠂⠒⡇⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠑⢤⣀⠀⠀⠈⠢⡄⠀⠀⠀⠀⠀⢸⡀⠀⡼⠁⠀⠀⠀⠀⠀⠀⢸⡆⢠⡞⠁⠀⠀⠀⠀⠀⡠⠖⠁⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⢰⡟⠁⠀⠀⠀⠈⠃⠀⠀⠀⠀⠀⠣⠟⠁⠀⠀⠀⠀⠀⠀⠀⢘⡾⠋⠀⠀⠀⠀⡠⠔⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢦⡄⢀⣀⡀⠀⠀⠀⣀⠠⠔⠂⠉⠀⡤⢤⠔⠂⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠘⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⡴⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠜⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⢠⠪⡀⢫⡣⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠈⠛⠚⠁⠀⠀⠈⠒⠠⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⡎⢡⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠀⠀⠀⠀⠀⠀⠀⠈⠉⠀⠹⣰⣬⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`
              });
          break; 
        default:
            await respond({ text: "Unknown subcommand. Use /ascii-help for available commands."});            
      }  
    }); 

    app.command("/ascii-text", async ({ command, ack, respond }) => {
      await ack();
      const args = command.text.trim().split(' ');
  
      try {
        let response;
        if (args.length > 1) {
          response = await axios.get(
            "https://asciified.thelicato.io//api/v2/ascii?",
            {
              params: {
                text: args[0],
                font: args[1]
              }
            } 
          );
        } else {
          response = await axios.get(
            "https://asciified.thelicato.io//api/v2/ascii?",
            {
              params: {
                text: args[0],
              }
            } 
          );
        }
        await respond({ text: "```" + response.data + "```", response_type: "in_channel"});
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
    /ascii-draw [subject] - Draw ASCII art
            - shrek
            - garfield
            - bluey
            - pikachu
    /ascii-text [text] [font?] - Convert text to ASCII art (default font is "Standard")        
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

