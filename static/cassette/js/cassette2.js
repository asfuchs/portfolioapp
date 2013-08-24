CassetteOnLoad = function() {
		var game = getGame();
    game.preload('res/CassettePlayer0.png', 'res/CassettePlayer1.png', 'res/CassettePlayer2.png', 'res/Boom.png', 'res/Smoke.png');

	}; 
    var CassetteScene = Class.create(Scene, {
        // The main gameplay scene. 
        initialize: function() {
            var game, label, instructions, bg;
        // 1 - Call superclass constructor
            Scene.apply(this);
        // 2 - Access to the game singleton instance
            game = Game.instance;
            // Label
            
            instructions = new Label('Press Play to begin.');
            instructions.x = 9;
            instructions.y = 50;
            instructions.color = 'white';
            instructions.font = '20px Gill Sans';
            instructions.textAlign = 'center';
            instructions._style.textShadow ="-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
            this.instLabel = instructions;
        // 3 - Create child nodes
            bg = new Sprite(320,460);
            bg.image = game.assets['res/CassettePlayer0.png'];

        // 4 - Add child nodes        
            this.addChild(bg);
            this.addChild(instructions);
        // Touch listener
            this.addEventListener(Event.TOUCH_START, this.handleTouchStart);
            this.addEventListener(Event.TOUCH_END, this.handleTouchEnd);
        // Update
            this.addEventListener(Event.ENTER_FRAME,this.update);
        // Instance variables
            this.step = 0;
            this.lSt = -1;
            this.lEnd = -1;
            this.rSt = -1;
            this.rEnd = -1;
            this.b = bg;
            this.frameCount = 0;
        },
        handleTouchStart: function (evt) {
            var laneWidth, rowHeight;
            laneWidth = 320/4;
            rowHeight = 460/5;
            this.lSt = Math.floor(evt.x/laneWidth);
            this.lSt = Math.max(Math.min(3,this.lSt),0);
            this.rSt = Math.floor(evt.y/rowHeight);
            this.rSt = Math.max(Math.min(4,this.rSt),0);
        },
        handleTouchEnd: function (evt) {
            var laneWidth, rowHeight;
            laneWidth = 320/4;
            rowHeight = 460/5;
            this.lEnd = Math.floor(evt.x/laneWidth);
            this.lEnd = Math.max(Math.min(3,this.lEnd),0);
            this.rEnd = Math.floor(evt.y/rowHeight);
            this.rEnd = Math.max(Math.min(4,this.rEnd),0);
        },
        update: function(evt) {
            if(this.step == 0) {
                if(this.lEnd == this.lSt && this.lSt == 0 && this.rSt == 4) {
                    this.removeChild(this.instLabel);
                    this.step = 1;
                }
            }
            if(this.step > 0) {
                this.frameCount += 1;
                if(this.frameCount % 9 == 0) {
                    this.b.image = game.assets['res/CassettePlayer0.png'];
                }
                if(this.frameCount % 9 == 3) {
                    this.b.image = game.assets['res/CassettePlayer1.png'];
                }
                if(this.frameCount % 9 == 6) {
                    this.b.image = game.assets['res/CassettePlayer2.png'];
                }
                if(this.frameCount == 15) {
                    this.label1 = new Label('Thank you for coming Agent. <br> We seem to have a situation here.')
                    this.label1.x = 9;
                    this.label1.y = 35;
                    this.label1.color = 'white';
                    this.label1.font = '16px Gill Sans';
                    this.label1.textAlign = 'center';
                    this.label1._style.textShadow ="-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
                    this.addChild(this.label1);
                }
                if(this.frameCount == 105) {
                    this.removeChild(this.label1);
                }
                if(this.frameCount == 120) {
                    this.label1 = new Label('There has been a bomb threat <br> and we have a reason to believe <br> it is genuine.')
                    this.label1.x = 9;
                    this.label1.y = 35;
                    this.label1.color = 'white';
                    this.label1.font = '16px Gill Sans';
                    this.label1.textAlign = 'center';
                    this.label1._style.textShadow ="-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
                    this.addChild(this.label1);
                }
                if(this.frameCount == 210) {
                    this.removeChild(this.label1);
                }
                if(this.frameCount == 225) {
                    this.label1 = new Label('Given you are the only agent in <br> the area, we had no choice.')
                    this.label1.x = 9;
                    this.label1.y = 35;
                    this.label1.color = 'white';
                    this.label1.font = '16px Gill Sans';
                    this.label1.textAlign = 'center';
                    this.label1._style.textShadow ="-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
                    this.addChild(this.label1);
                }
                if(this.frameCount == 315) {
                    this.removeChild(this.label1);
                }
                if(this.frameCount == 330) {
                    this.label1 = new Label('You must save the school from <br> destruction. We have sent you this as <br> soon as we received intel on the bomb.')
                    this.label1.x = 9;
                    this.label1.y = 35;
                    this.label1.color = 'white';
                    this.label1.font = '16px Gill Sans';
                    this.label1.textAlign = 'center';
                    this.label1._style.textShadow ="-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
                    this.addChild(this.label1);
                }
                if(this.frameCount == 465) {
                    this.removeChild(this.label1);
                }
                if(this.frameCount == 480) {
                    this.label1 = new Label('The location is yet unknown, but <br> if you are listening to this immediately <br> after receiving it, you should <br> have 20 minutes until it detonates.')
                    this.label1.x = 9;
                    this.label1.y = 35;
                    this.label1.color = 'white';
                    this.label1.font = '16px Gill Sans';
                    this.label1.textAlign = 'center';
                    this.label1._style.textShadow ="-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
                    this.addChild(this.label1);
                }
                if(this.frameCount == 660) {
                    this.removeChild(this.label1);
                }
                if(this.frameCount == 675) {
                    this.label1 = new Label('You will need to find your own <br> equipment for bomb diffusal as <br> there was no time to send you any.')
                    this.label1.x = 9;
                    this.label1.y = 35;
                    this.label1.color = 'white';
                    this.label1.font = '16px Gill Sans';
                    this.label1.textAlign = 'center';
                    this.label1._style.textShadow ="-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
                    this.addChild(this.label1);
                }
                if(this.frameCount == 810) {
                    this.removeChild(this.label1);
                }
                if(this.frameCount == 825) {
                    this.label1 = new Label('This is your last chance Agent.')
                    this.label1.x = 9;
                    this.label1.y = 35;
                    this.label1.color = 'white';
                    this.label1.font = '16px Gill Sans';
                    this.label1.textAlign = 'center';
                    this.label1._style.textShadow ="-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
                    this.addChild(this.label1);
                }
                if(this.frameCount == 885) {
                    this.removeChild(this.label1);
                }
                if(this.frameCount == 900) {
                    this.label1 = new Label('If you fail this assignment, <br> you better hope the explosion <br> takes you with it because if it <br> does not take you out, we will.')
                    this.label1.x = 9;
                    this.label1.y = 35;
                    this.label1.color = 'white';
                    this.label1.font = '16px Gill Sans';
                    this.label1.textAlign = 'center';
                    this.label1._style.textShadow ="-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
                    this.addChild(this.label1);
                }
                if(this.frameCount == 1080) {
                    this.removeChild(this.label1);
                }
                if(this.frameCount == 1095) {
                    this.label1 = new Label('This tape will self destruct in <br> 5 seconds. Please remove tape <br> and toss it away now.')
                    this.label1.x = 9;
                    this.label1.y = 35;
                    this.label1.color = 'white';
                    this.label1.font = '16px Gill Sans';
                    this.label1.textAlign = 'center';
                    this.label1._style.textShadow ="-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
                    this.addChild(this.label1);
                }
                if(this.frameCount == 1185) {
                    this.removeChild(this.label1);
                }
                if(this.frameCount == 1245) {
                    this.boom = new Sprite(320,460);
                    this.boom.image = game.assets['res/Boom.png'];
                    this.smoke = new Sprite(320,460);
                    this.smoke.image = game.assets['res/Smoke.png'];
                    this.addChild(this.smoke);
                    this.addChild(this.boom);
                }
                if(this.frameCount == 1260) {
                    this.removeChild(this.boom);
                }
                if(this.frameCount == 1290) {
                    this.label1 = new Label('To continue your mission you must <br> first be in regulation attire. <br> This requires a tie. <br> Go retrieve your tie from <br> the courtyard of the <br> Construction Innovations building. <br> <br> Tap to continue.')
                    this.label1.x = 9;
                    this.label1.y = 150;
                    this.label1.color = 'black';
                    this.label1.font = '16px Gill Sans';
                    this.label1.textAlign = 'center';
                    this.label1._style.textShadow ="-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white";
                    this.addChild(this.label1);
                }
            }
        },

    }); 