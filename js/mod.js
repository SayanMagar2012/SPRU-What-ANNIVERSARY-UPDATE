////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////// /$$$$$$                  /$$                 /$$                                       ////////////////
//////////// /$$__  $$                | $$                | $$                                      ////////////////
//////////// | $$  \__/  /$$$$$$   /$$$$$$$  /$$$$$$       | $$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$  ////////////////
//////////// | $$       /$$__  $$ /$$__  $$ /$$__  $$      | $$__  $$ /$$__  $$ /$$__  $$ /$$__  $$ ////////////////
//////////// | $$      | $$  \ $$| $$  | $$| $$$$$$$$      | $$  \ $$| $$$$$$$$| $$  \__/| $$$$$$$$ ////////////////
//////////// | $$    $$| $$  | $$| $$  | $$| $$_____/      | $$  | $$| $$_____/| $$      | $$_____/ ////////////////
//////////// |  $$$$$$/|  $$$$$$/|  $$$$$$$|  $$$$$$$      | $$  | $$|  $$$$$$$| $$      |  $$$$$$$ ////////////////
//////////// \______/  \______/  \_______/ \_______/      |__/  |__/ \_______/|__/       \_______/  ////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Register your mod here
var RegisterMod = "SPRU-what?";
var RegisterModVersion = "2.0.0";
var ModDeveloper = "RagDeWann";

modInfo = {
  description: "This mod is a SPRUNKI parody, inspired by the SPRUNKI spinoffs that were popping out back then. With SPRUNKI's 1st anniversary, I think it makes sense to add a BIG update to the mod!", // Some description about your mod, not too long
  relatedVideo: "https://youtube.com/watch?v=160xJwgYB8c", // YouTube video link of a teaser or release (or just anything about mod) - you can also leave it empty
};

function onLockedIcon() {
  boxDialog.open("locked");
}

onKey('a', function(){
  wigglePictos(1, 20),
  initShakingPicto(2)
  ChangeColorBG("#000", 1000, true)
})

function onAppStart() {
  OnDelayIn(200, setCustomCursor('img/cursor-image.png')),
  Hide(2),
  Hide(3);
}

setAchievement(RegisterMod, "achi_1", "ach_familliar.png", "This Seems Familliar...", "Play SPRU-what? for the first time", "normal")
setAchievement(RegisterMod, "achi_2", "ach_credit.png", "Important Info", "You read the credits! You need to know these people, y'know.", "normal")
setAchievement(RegisterMod, "achi_3", "ach_summon.png", "Very Scary", "Summon Black", "hidden")
setAchievement(RegisterMod, "achi_4", "ach_female.png", "Ladies Party", "Play all female characters together in SPRU-what?", "normal")
setAchievement(RegisterMod, "achi_5", "ach_sun.png", "The Sun Beamin'", "Let Mr. Sun play for 15 Loops", "normal")
setAchievement(RegisterMod, "achi_6", "ach_mix.png", "Sprunk It Up!", "Mix Spru-what? for 3 minutes", "normal")
setAchievement(RegisterMod, "achi_7", "ach_break.png", "I Luv Breakcore", "Use Fun Bot 12 times", "progress", 12)
setAchievement(RegisterMod, "achi_8", "ach_..png", ".", "Discover the other side", "hidden")
setAchievement(RegisterMod, "achi_9", "ach_!.png", "Your Heart Starts to Race...", "Start the horrors. (*)", "hidden")
setAchievement(RegisterMod, "achi_10", "ach_extra.png", "There's More Of These People???", "Unlock and play Extra", "hidden")

function OpenModCredits(){
  unlockAchievement(RegisterMod, "achi_2")
}

function onV1Polo19() {
  Shake(5, 300)
  unlockAchievement(RegisterMod, "achi_3")
}

let achiFemales1 = false;
let achiFemales2 = false;
let achiFemales3 = false;
let achiFemales4 = false;

function onV1Polo4() {
	achiFemales1 = true;
  CheckAchievement()
}
function offV1Polo4() {
  achiFemales1 = false;
  CheckAchievement()
}
function onV1Polo9() {
	achiFemales2 = true;
  CheckAchievement()
}
function offV1Polo9() {
  achiFemales2 = false;
  CheckAchievement()
}
function onV1Polo16() {
	achiFemales3 = true;
  CheckAchievement()
}
function offV1Polo16() {
  achiFemales3 = false;
  CheckAchievement()
}
function onV1Polo17() {
	achiFemales4 = true;
  CheckAchievement()
}
function offV1Polo17() {
  achiFemales4 = false;
  CheckAchievement()
}

function CheckAchievement() {
  if (achiFemales1 && achiFemales2 && achiFemales3 && achiFemales4) {
    unlockAchievement(RegisterMod, "achi_4")
  }
}

let MrSunLoops = 0,
  MrSunONMix = !1;
function onV1Mix() {
  (SpruWhatMixAchievement = setTimeout(() => {
    unlockAchievement(RegisterMod, "achi_6");
  }, 18e4)),
    onLoop(1, () => {
      MrSunONMix &&
        (MrSunLoops++,
        MrSunLoops >= 15 && unlockAchievement(RegisterMod, "achi_5"));
    });
}

function offV1Mix() {
  clearTimeout(SpruWhatMixAchievement); 
  offLoop();
  (MrSunLoops = 0);
}
function onV1Polo10() {
  MrSunONMix = !0;
}
function offV1Polo10() {
  (MrSunLoops = 0), (MrSunONMix = !1);
}
function onV1Polo3() {
  addProgressAchievement(RegisterMod, "achi_7", 1);
}

function onV1Bonus1Start() {
  Shake(6, 380)
  OnDelayIn(0, function(){
    QuickMessage("BOO!!", 335);
  }),
  OnDelayIn(610, function(){
    QuickMessage("Oh no, everything's so scary!", 1660);
  }),
  OnDelayIn(2525, function(){
    QuickMessage("Wenda's gonna stab you, so you gotta have to parry!", 2330);
  }),
  OnDelayIn(5110, function(){
    QuickMessage("Blood, horror, gore, while I'm movin' through the floor,", 1910);
  }),
  OnDelayIn(7310, function(){
    QuickMessage("And I bust through your door, and take your money 'till you're poor!", 2620);
  }),
  OnDelayIn(10480, function(){
    QuickMessage("Yeah I hate content farms and brainrot,", 2000);
  }),
  OnDelayIn(12765, function(){
    QuickMessage("When I find the people that make 'em, they will get shot!", 2405);
  }),
  OnDelayIn(15640, function(){
    QuickMessage("Don't you ever mess with us, or you'll get Sprunked up!", 2115);
  })
}

//oh my transition.,.,

function showSecretVideo() {
  lock();
  forceMod.killAllPolos();
  OnDelayIn(400, ()=> {forceMod.killAllPolos()})
  const video = document.createElement("video");
  video.src = "asset-v1/video/transition.mp4"; 
  video.style.position = "fixed";
  video.style.top = "0";
  video.style.left = "0";
  video.style.width = "100vw";
  video.style.height = "100vh";
  video.style.objectFit = "cover";
  video.style.zIndex = "9999";
  video.style.backgroundColor = "black";
  video.autoplay = true;
  video.controls = false;
  video.playsInline = true; 
  video.muted = false; 

  document.body.appendChild(video);

  video.play().catch((error) => {
    console.error("Autoplay failed:", error);
  });

  video.onended = function () {
    video.remove();

    unlock()
    OnDelayIn(1, ()=> {goto(3)})
  };
}

document.querySelector("#box-bt-bonus").addEventListener("click", function (e) {
  if (e.target.closest("#bt-bonus-2")) {
    showSecretVideo();
  }
});

// Extra unlock (NVM SHIT BORKE AAGIN LOL)

let ExtraUnlock = false;
let ExtraStayUnlock = false;

function onV1Start(){
  unlockAchievement(RegisterMod, "achi_1")
  Hide(3)
  if (!ExtraUnlock) { 
    console.log("UNLOCK SHIT WORKING QUAHH");
    OnlyOnce('ExtraUnlock', ()=>{
      OnDelayIn(1000, ()=>{
        Shake(5,300),
        PlaySFX('extra-unlock.ogg')}),
      OnDelayIn(2000, ()=>{
        boxDialog.open("It seems like a version has been unlocked. Can you check the versions list real quick?", "What's that sound?", [STR("bt.ok")], false),
        unHide(2);});
      });
    } else {
      Hide(2);
    };
  if (ExtraStayUnlock){
    unHide(2);
  };
}


function onV3Start(){
  ChangeMenuTitle("E̵̮̎S̸̱̕C̷̗̍A̷͂͜P̵̤̾E̴̱͆");
  unlockAchievement(RegisterMod, "achi_8")
  OnDelayIn(1300, function(){
    initShakingPicto(2),
    ChangeColorBG("#000", 1000, true);
  })
  if (ExtraStayUnlock) {
    unHide(2);
  } else {
    Hide(2);
  };
}

function onV3Polo19 () {
  Shake(5, 300)
  ExtraUnlock = true;
  if (ExtraUnlock) {
    console.log("START DIGGIN IN YO BUHH TWIN")
  };
}

function onV2Start(){
  unlockAchievement(RegisterMod, "achi_10")
  unHide(2);
  Hide(3);
  ExtraStayUnlock = true;
}

onKeyHold("e", "x", ()=>{
  QuickMessage("Extra hidden!");
  ClearItemID('ExtraUnlock');
  ExtraStayUnlock = false;
  ExtraUnlock = false;
  Hide(2);
})

function onV3Mix() {
  unlockAchievement(RegisterMod, "achi_9")
}
