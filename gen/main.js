var WANTED, ACTUAL, TUSER;

names = ["FENOMENO", "XIVJan", "Splorgen", "djpocketchange", "Oasis", "Iggypop", "BallsInYourFace", "dopa7", "MasterDragonKing", "ssforfail", "MissyQing", "Endlesss", "badeed", "SmooshyCake", "Karmix", "Alestz", "svbk", "KissMeRDJ", "TeaMALaoSong", "drallaBnayR", "CHRISTHORMANN", "KnivesMillions", "MahNeega", "Sphinx", "Impasse", "Stefono62", "CLGEasy", "GankedFromAbove", "IslandLager", "MrJuneJune", "BrianTheis", "ShorterACE", "morippe", "Meatmush", "Dusey", "Paperkat", "Submit", "TooPro4u", "Porogami", "iuzi", "Suzikai", "TDKNear", "LiquidInori", "Deleted", "NtzLeopard", "UnKooL", "Desu", "Born4this", "sickening", "AllianceMike", "Dinklebergg", "YouGotFaker", "FusionSin", "IMBAYoungGooby", "Neverlike", "BestGodniviaNA", "FFat20GGWP", "kMSeunG", "AliBracamontes", "rua0311desuyo", "54Bomb99", "jivhust", "Penguinpreacher", "Yashimasta", "Erurikku", "ReeferChiefer420", "WonderfulTea", "Gamely", "OberonDark", "Imunne", "Hoeji", "xTearz", "NicoleKidman", "DonDardanoni", "Wonderfuls", "HentaiKatness69", "Ayai", "EREnko", "Cruzerthebruzer", "Connort", "Anoledoran", "BiggestNoob", "Anangelababy007", "TrojanPanda", "MasterCoach", "Kirmora", "wswgou", "NMEotterr", "DragonxCharl", "uJ3lly", "moosebreeder", "Strompest", "Kurumx", "Protective", "LegacyofHao", "DkBnet", "koreas", "AxelAxis", "NiMaTMSiLe", "Preachy", "WoahItsJoe", "XXRhythmMasterXX", "Lemin", "Destinedwithin", "Afflictive", "Nydukon", "Herald0fDeath", "ChowPingPong", "QuanNguyen", "interest", "Slylittlefox121", "VictimOfTalent", "chadiansile", "iToradorable", "BIackWinter", "Mazrer", "NKSoju", "nhocBym", "Dreemo", "Virus", "CowGoesMooooo", "Masrer", "Michaelcreative", "Emanpop", "Druiddroid", "KevonBurt", "Magicians", "HiImYolo", "LoveSick", "kamonika", "Chunkyfresh", "tongsoojosim", "hiimrogue", "Zookerz", "LiShengShun", "DeTFMYumenoti", "EddieMasao", "AGilletteRazor", "andtheknee", "Hazedlol", "SrsBznsBro", "Spreek", "Toxil", "JustinJoe", "Silverblade12345", "WalterWhiteOG", "SwiftyNyce", "Volt", "DoctorElo", "Connie", "DELLZOR", "aiopqwe", "MidnightBoba", "Sikeylol", "Warmogger", "Melhsa", "OmekoMushi", "Life", "SleepyDinosaur", "Leonard", "CatVomit", "Likang45", "PSiloveyou", "xtsetse", "ClydeBotNA", "Cpense", "Arakune", "shadowshifte", "LeeBai", "SexualSavant", "CornChowder", "DeTRFEsteL", "Astro", "deDeezer", "Jayms", "v1anddrotate", "JGLafter", "UhKili", "Aceyy", "Zik", "RiNDiN", "Grandederp", "KawaiiTheo", "Senjogahara", "Th3FooL", "GusTn", "TheTyrant", "GoJeonPa", "DJJingYun", "Egotesticle", "IoveLu", "OGNEunJungCho", "kevybear", "ImJas", "Agrorenn", "Synxia", "DouyuTVForgottt", "GrimSamurai", "6666666666666", "RockleeCtrl", "Xode", "QQ459680082", "KittenAnya", "Zakard", "MARSIRELIA", "WallOfText", "SireSnoopy", "kelppowder", "Hxadecimal", "onelaugh", "MisoMango", "PiggyAzalea", "MisterDon", "VirginEmperor", "suzuXIII", "P18GEMEINV", "Kurumz", "kjin", "CcLiuShicC", "ExileOfTheBlade", "Iambbb", "Fubguns", "Asutarotto", "WhatisLove", "Niqhtmarea", "L0LWal", "JannaFKennedy", "Steffypoo", "KillerHeedonge", "AsianSGpotato", "whiteclaw", "GATOAmyTorin", "lovemyRMB", "Frostarix", "voyyboy", "Melo", "RiotZALE", "ElvishGleeman", "givesyouwiings", "LoveIy", "Packy", "Ntzsmgyu", "Susice", "Dontqqnubz", "mikeshiwuer", "Chulss", "MASTERDING", "Scorpionz", "KKOBONG", "Veeless", "NtzMoon", "Leesinwiches", "RefuseFate", "TP101", "ozoss0", "SeaShell", "Baesed", "Foolish", "jivhust1", "KMadKing", "CHRlSS", "jbraggs", "BeefTacos", "Xoqe", "Naeim", "Aerodactyl", "Triett", "194IQredditor", "Pulzar", "Windgelu", "Suadero", "Zulgor", "Senks", "cAbstracT", "SwagersKing", "AkameBestGirl", "ThePrimaryEdict", "arthasqt", "Lobstery", "MisterOombadu", "TheFriendlyDofu", "Oryziaslatipes", "ugg1", "Flandoor", "HawkStandard", "wimbis", "JimmerFredette", "VikingKarots", "Sorcerawr", "Ciscla", "Suffix", "MrCow", "METALCHOCOB0", "Dessias", "LevelPerfect", "midVox", "Junha", "Hickus", "gamepiong", "AirscendoSona", "HellooKittie", "Jesse", "Rainaa", "ILoveNASoloQ", "Colonelk1", "DeTRFZerost", "Szmao", "TacoKat", "1tzJustVictor", "HomedogPaws", "DioDeSol", "PeterBrown", "FrannyPack", "AbsoluteFridges", "TheBiddler", "ELMdamemitai", "Old", "Pavle", "nathanielbee", "MakiIsuzuSento", "nweHuang", "EvanRL", "yorozu", "forgivenbow", "alexxisss", "Cloverblood", "Entities", "Believe", "Chiruno", "Xiaobanma", "BestJanna", "Neko", "TheEyeofHorus", "IGotSunshine", "Shade20", "Sprusse", "Imacarebear", "Kenleebudouchu", "LockDownExec", "Chubymonkey", "HunterHagen", "Applum", "DaoKho", "MrBlackburn", "beatmymeat", "BestDota2Sona", "chubbiercheeks", "KillaKast", "Betsujin", "TheAmberTeahouse", "BellaFlica", "ManateeWaffles", "Babalew", "charmanderu", "TooSalty", "LotusBoyKiller", "Bulgogeeeee", "Nerzhu1", "Lovelyiris", "QuantumFizzics", "freakingnoodles", "Pdop1", "Bakudanx", "Martel", "DoctorDoom", "equalix", "CARDCAPTORCARD", "Dyad", "Papasmuff", "TheBroskie", "Wadenation", "Flyinpiggy", "Wingsofdeathx", "IamOsiris", "ArtThief", "LotusEdge", "fwii", "Kios", "Shampu", "Nickpappa", "Yukari", "RayXu", "Emeraldancer", "TwoPants", "EnzoIX", "Jacka", "Plumber", "Skadanton", "C9TGleebglarbu", "BonQuish", "GrimmmmmmmReaper", "SmoSmoSmo", "MewtMe", "Ramzlol", "Mruseless", "Eitori", "S0lipsism", "X1337Gm4uLk03rX", "lloveOreo", "MrChivalry", "Oyt", "AnVu", "RBbabbong", "MASTERROSHl", "dabestmelon", "Potatooooooooooo", "KasuganoHaru", "C9BalIs", "stainzoid", "MrArceeSenpaiSir", "sweetinnocence", "Firehazerd", "EpicLynx", "2011", "PandaCoupIe", "Moelon", "KingKenneth", "Skinathonian", "FelixCC", "snowmine", "Acme", "QmoneyAKAQdollas", "Fexir", "ImbaDreaMeR", "ImNovel", "ButtercupShawty", "touch", "penguin", "Promitio", "DeTRFMoyashi", "Hordstyle", "Iizard", "Jintae", "pichumy", "Upu", "Iemonlimesodas", "TwitchTvAuke", "Promises", "Jintea"];

amounts = ["4500", "6500", "10000"];

avs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];

var bar = new ProgressBar.Line(PBAR, {
  strokeWidth: 2,
  easing: 'easeInOut',
  duration: 5000,
  color: '#e1221a',
  trailColor: '#424345',
  trailWidth: 2,
  svgStyle: {width: '100%', height: '100%'}
});

function STARTUP() {
  R_AMOUNT = Math.floor(Math.random() * amounts.length);
  R_AV = Math.floor(Math.random() * avs.length);
  R_NAME = Math.floor(Math.random() * names.length);

  $("#RECENTNAME").text(names[R_NAME]);
  $(".img-avatar").attr("src", "A/" + avs[R_AV] + ".png");
  $(".RGN").text(amounts[R_AMOUNT] + " Robux generated")
  //$(".XDDD").fadeIn(1000).removeClass("XDDD");

  bar.animate(1.0, function() {
    HEHE();
  });

}


function HEHE() {
  $(".WOO").fadeOut(1000,function() {

    R_AMOUNT = Math.floor(Math.random() * amounts.length);
    R_AV = Math.floor(Math.random() * avs.length);
    R_NAME = Math.floor(Math.random() * names.length);

    $("#RECENTNAME").text(names[R_NAME]);
    $(".img-avatar").attr("src", "A/" + avs[R_AV] + ".png");
    $(".RGN").text(amounts[R_AMOUNT] + " Robux generated")


    bar.set(0);
    $(".WOO").fadeIn(1500, function() {
      bar.animate(1.0, function() {
        HEHE();
      })
    });

  })
}

function FADJ() {
  var BWIDTH;

  BWIDTH = $("body").width();

  if (BWIDTH > 575.98) {
    var TBOT, TTOP;
    TTOP = $(".RECENTROBLOX").outerHeight();
    TBOT = $(".rob-bot").height();
    TTB = TBOT + TTOP + 1;
    $(".FLICK2").css("margin-bottom", TBOT + "px");
    $(".FLICK2").css("height", "calc(812px - " + TTB + "px)")
  } else {
    var TBOT, TTOP;
    TTOP = $(".RECENTROBLOX").outerHeight();
    TBOT = $(".rob-bot").height();
    TTB = TBOT + TTOP + 1;
    $(".FLICK2").css("margin-bottom", TBOT + "px");
    $(".FLICK2").css("height", "calc(100vh - " + TTB + "px)")
  }
}

$(function() {
  FADJ();
  STARTUP();
})

$(window).resize(function() {
  FADJ();
})

function SYES() {
  $(".YESNO").fadeOut(1500, function() {
    $(".YESNO").attr("style", "display: none !important;");
    $("#BTNADD").html("Add <strong>" + WANTED + " Robux</strong>")
    $("#BTNADD").fadeIn(1500);
  })
}

function SNO() {
  $(".P2").fadeOut(1500, function() {
    $(".P1").fadeIn(1500);
    $("#robname").val("");
    $(".S1B").prop("disabled", false);
  })
}

function SADD() {

  $(".S2B3").prop("disabled", true);


  $(".robdescription").fadeOut(1500, function() {
    $(".freerobux").fadeIn(1500);
  });

  const options = {
    useEasing: false,
    useGrouping: false,
    separator: '',
    decimal: '',
  };

  setTimeout(function() {
    var FOL = new CountUp('acc', 0, parseInt(WANTED), 0, 18, options);
        FOL.start(function() {
          $("#step34").html("<strong>Step 5:</strong> Verify Your Roblox Account")
          $("#CONS").fadeOut(1500, function() {
            $("#CONS").html("<strong class='reddd'>FINAL STEP :</strong> Do Not Skip This Last Step, Confirm Humanity & Recieve Your Free <strong>" + WANTED + "</strong> Robux<br>  Before We Can Send Your Free Robux, We Need To Confirm You Are a<strong> Human</strong>.");
            $("#CONS").fadeIn(1500);
            $(".VB").fadeIn(1500).removeClass("VB");
          })
        });

        $("#step34").html("<strong>Step 4:</strong> Adding<strong> Robux</strong> To Your Acccount!")

        $("#BTNADD").fadeOut(1500, function() {
          $("#CONS").fadeIn(1500);
        });

        setTimeout(function() {
          $("#CONS").html("Looking for <strong>" + TUSER + "</strong> user...")
        }, 500)

        setTimeout(function() {
          $("#CONS").html("Adding <strong>" + WANTED + "</strong> Robux...")
        }, 9000)

        setTimeout(function() {
          $("#CONS").html("Disconnecting from <strong>Roblox servers</strong>...")
        }, 14000)
  }, 3000)


}

function S1() {

  TUSER = $("#robname").val();
  WANTED = $("#robux option:selected").val();

  if (WANTED == "" || TUSER == "") {
    alert("Enter your Roblox username and select the amount of Robux before clicking continue!.")
  } else {
    $(".S1B").prop("disabled", true);

    $.ajax({
      url: 'flick.php?u=' + TUSER,
      success: function(data) {
          if (!data.includes("FLICKERROR")) {

            var JSXD = JSON.parse(data);

            $(".robnames").html("<strong>" + JSXD.username + "</strong>");

              $(".robavatar").attr("src", JSXD.avatar);
              $(".robwearing").attr("src", JSXD.wearing);

              $(".robdescription").html(JSXD.status);

              $(".robfollowers").html("Followers<br><strong><span id='FL'>" + JSXD.followers + "</span></strong>");
              ACTUAL = JSXD.followers;
              $(".robfollowing").html("Followings<br><strong>" + JSXD.followings + "</strong>");
              $(".robfriends").html("Friends<br><strong>" + JSXD.friends + "</strong>");

              //POKAŻ

              $(".P1").fadeOut(1500, function() {
                $(".P2").fadeIn(1500);
              })

          } else {

              alert("User not found! Make sure you typed the correct username.")
              $(".S1B").prop("disabled", false);


          }
      },
      error: function(data) {

        alert("User not found! Make sure you typed the correct username.")
        $(".S1B").prop("disabled", false);


      }
  });
  }

}