// BROUGHT BACK BY RIZSIM STUDIOS (for thomasbox mod)
// Credit me if used! (even tho I took this from the evadare one)
// TO MAKE A CLIENT FOR IT GO TO "discord.com/developers"
// SABU rizler 🙏🙏🙏 TPFR humble diddyblud 🕊️ -Ragil

const {
  app: e,
  BrowserWindow: a,
  ipcMain: o
} = require("electron");
const t = new (require("discord-rpc").Client)({
  transport: "ipc"
});
let n = false;
async function r() {
  if (t && t.transport.socket) {
    if (n) {
      t.setActivity({
        details: "Always Sprunking it up!", // CHANGE THIS!
        state: "Playing SPRU-what?",
        largeImageKey: "icon",
        largeImageText: "Playing SPRU-what?",
        smallImageKey: "icon01",
        smallImageText: "Big Update?",
        startTimestamp: Date.now()
      }).catch(console.error);
    } else {
      t.setActivity({
        details: "Always Sprunking it up!", // CHANGE THIS!
        largeImageKey: "icon",
        largeImageText: "Playing SPRU-what?",
        startTimestamp: Date.now()
      }).catch(console.error);
    }
  }
}
t.on("ready", () => {
  console.log("Connected to Discord RPC!");
  r();
});
t.login({
  clientId: "1401872620781309974" // catch Application ID!
}).catch(console.error);
o.on("start-game", () => {
  console.log("Game started! Updating Discord presence...");
  n = true;
  r();
});
o.on("stop-game", () => {
  console.log("Game stopped! Resetting Discord presence...");
  n = false;
  r();
});