
// hand divs
const p1Hand = document.querySelector(".playerOneHand");
const p2Hand = document.querySelector(".playerTwoHand");
// field divs
const p1Field = document.querySelector(".playerOneField");
const p2Field = document.querySelector(".playerTwoField");
// grave divs
const p1Grave = document.querySelector(".pOneGrave");
const p2Grave = document.querySelector(".pTwoGrave");
// the playMat
const playmat = document.querySelector(".playMat");
// creating grave displays
const p1GraveDisplay = document.createElement("div");
p1GraveDisplay.setAttribute("class", "pOneGraveDisplay");
const p2GraveDisplay = document.createElement("div");
p2GraveDisplay.setAttribute("class", "pTwoGraveDisplay");
// geting controll of the rounds won tab
const p1RoundsWon = document.querySelector(".p1RoundsWon");
const p2RoundsWon = document.querySelector(".p2RoundsWon");

// score displays
const p1Score = document.querySelector(".pOneScore");
const p2Score = document.querySelector(".pTwoScore");
// round enders
const p1RoundButton = document.querySelector(".playeOneEndRoundButton");
const p2RoundButton = document.querySelector(".playeTwoEndRoundButton");
//deck displays
const p1Deck = document.querySelector(".pOneDeck");
const p2Deck = document.querySelector(".pTwoDeck");

// grave switches
let p1graveSwitch = false;
let p2graveSwitch = false;
//decks
let p1deck = [];
let p2deck = [];
// hands
let p1hand = [];
let p2hand = [];
// field 
let p1field = [];
let p2field = [];
// grave
let p1grave = [];
let p2grave = [];
// turn system
let p1turn, p2turn;
// score system
let p1score = 0;
let p2score = 0;
// round end switch
let p1roundender = false;
let p2roundender = false;
// keeps track of the round were on
let round = 1;
// round display
const roundDisplay = document.querySelector(".roundDisplay");
// keeps track of draft picks
p1picks = false;
p2picks = false;
// keeps track of rounds won
let p1wins = 0;
let p2wins = 0;

// land divs
const Field = document.querySelector(".field");
// land spells
let land = [];







const p1Cards = [
    {
        top: "star",
        level: 1,
        center: "pic/p1starbasic.jpg",
        bottom: 3,
        basePower: 3,
        setPower:3,
        type: "mother",
        info: "",
        dataNum: 1,
        id:"starbasicone",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Hand.appendChild(card);
           
            // getting info to pass
            const gettingCardData = this;

            if (p1turn === true) {
                card.addEventListener("click", function () {
                    
                    p1play(gettingCardData,this);
                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Field.appendChild(card);

           


        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1GraveDisplay.appendChild(card);
           
        }
    }, // no ability 
    {
        top: "star",
        level: 1,
        center: "pic/p1starbasic.jpg",
        bottom: 3,
        basePower: 3,
        setPower: 3,
        type: "mother",
        info: "",
        dataNum: 2,
        id: "starbasictwo",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            if (p1turn === true) {
                card.addEventListener("click", function () {

                    p1play(gettingCardData, this);
                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id)
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Field.appendChild(card);

           
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1GraveDisplay.appendChild(card);

        }
    }, // no ability 
    {
        top: "star",
        level: 1,
        center: "pic/p1starbasic.jpg",
        bottom: 3,
        basePower: 3,
        setPower: 3,
        type: "mother",
        info: "",
        dataNum: 3,
        id: "starbasicthree",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            if (p1turn === true) {
                card.addEventListener("click", function () {

                    p1play(gettingCardData, this);
                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id)
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1GraveDisplay.appendChild(card);

        }
    }, // no ability 
    {
        top: "star",
        level: 2,
        center: "pic/p1starlv2.jpg",
        bottom: 5,
        basePower: 5,
        setPower: 5,
        type: "mother",
        info: "star 2 gains + 1 to her power for every mother card on your side of the field ",
        dataNum: 4,
        id: "starlvtwoone",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;
          
            // serching to see if there is a evolution match is on the field
            let evamatch = p1field.filter(function (creature) {
                if (creature.dataNum === 1 || creature.dataNum === 2 || creature.dataNum === 3) {
                   return creature
                }
            })
           
            // condishions to summpnd this card
            if (p1turn === true && evamatch.length >= 1) {

                // when i click on this card
                card.addEventListener("click", function () {

                    // if there is only one card that can be sarafise it will happend automatic
                    if (evamatch.length === 1) {

                        // get the id for the card i would like to evolve
                        const getId = evamatch.forEach(function (creature) {
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            //i would like to filter that card off the field
                            const sarifeCard = p1field.filter(function (c, index) {
                                // checking to see if that card dataNum is the same as the only in the evamatch
                                if (c.dataNum === evamatch[0].dataNum) {
                                    p1grave.push(p1field[index]);
                                    p1field.splice(index, 1);
                                    // removing the eliment
                                    p1Field.removeChild(createCardId);
                                    // evolveing star
                                    p1play(gettingCardData, card); 

                                }
                            })

                        })

                    }
                    else {
                        // creat a tab that tells me to sarafise a star basic card
                        const tab = document.createElement("div");
                        tab.setAttribute("class", "infoTab");
                        tab.innerHTML = "sacrifice a basic star card inorder to summond this one";
                        
                        p1Field.appendChild(tab);

                        const getId = evamatch.forEach(function (creature) {
                            // i create a click advent for the cards i ca evolve
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            // clicking on the card i want to sarifise
                            createCardId.addEventListener("click", () => {
                                // this i want to push that card to the grave and remove the eliment
                                const clicked = creature.dataNum;
                                const sarifeCard = p1field.filter(function (c, index) {
                                    if (c.dataNum === clicked) {
                                        p1grave.push(p1field[index]);
                                        p1field.splice(index, 1);
                                        // removing the eliment
                                        p1Field.removeChild(createCardId);
                                        // evolveing star
                                        p1play(gettingCardData, card);

                                    }
                                })
                            })

                        })
                    }

                    
                   
                       
                   
                    
                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Field.appendChild(card);
            
            
            
            
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1GraveDisplay.appendChild(card);

        }
    }, // has ability 
    {
        top: "star",
        level: 2,
        center: "pic/p1starlv2.jpg",
        bottom: 5,
        basePower: 5,
        setPower: 5,
        type: "mother",
        info: "gains + 1 to her power for every mother card on your side of the field ",
        dataNum: 5,
        id: "starlvtwotwo",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            // serching to see if there is a evolution match is on the field
            let evamatch = p1field.filter(function (creature) {
                if (creature.dataNum === 1 || creature.dataNum === 2 || creature.dataNum === 3) {
                    return creature
                }
            })

            // condishions to summpnd this card
            if (p1turn === true && evamatch.length >= 1) {

                // when i click on this card
                card.addEventListener("click", function () {

                    // if there is only one card that can be sarafise it will happend automatic
                    if (evamatch.length === 1) {

                        // get the id for the card i would like to evolve
                        const getId = evamatch.forEach(function (creature) {
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            //i would like to filter that card off the field
                            const sarifeCard = p1field.filter(function (c, index) {
                                // checking to see if that card dataNum is the same as the only in the evamatch
                                if (c.dataNum === evamatch[0].dataNum) {
                                    p1grave.push(p1field[index]);
                                    p1field.splice(index, 1);
                                    // removing the eliment
                                    p1Field.removeChild(createCardId);
                                    // evolveing star
                                    p1play(gettingCardData, card);

                                }
                            })

                        })

                    }
                    else {
                        // creat a tab that tells me to sarafise a star basic card
                        const tab = document.createElement("div");
                        tab.setAttribute("class", "infoTab");
                        tab.innerHTML = "sacrifice a basic star card inorder to summond this one";
                       
                        p1Field.appendChild(tab);

                        const getId = evamatch.forEach(function (creature) {
                            // i create a click advent for the cards i ca evolve
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            // clicking on the card i want to sarifise
                            createCardId.addEventListener("click", () => {
                                // this i want to push that card to the grave and remove the eliment
                                const clicked = creature.dataNum;
                                const sarifeCard = p1field.filter(function (c, index) {
                                    if (c.dataNum === clicked) {
                                        p1grave.push(p1field[index]);
                                        p1field.splice(index, 1);
                                        // removing the eliment
                                        p1Field.removeChild(createCardId);
                                        // evolveing star
                                        p1play(gettingCardData, card);

                                    }
                                })
                            })

                        })
                    }






                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Field.appendChild(card);


        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1GraveDisplay.appendChild(card);

        }
    }, // has ability
    {
        top: "star",
        level: 2,
        center: "pic/p1starlv2.jpg",
        bottom: 5,
        basePower: 5,
        setPower: 5,
        type: "mother",
        info: "star 2 gains + 1 to her power for every mother card on your side of the field ",
        dataNum: 6,
        id: "starlvtwothree",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Hand.appendChild(card);
            // getting info to pass
            const gettingCardData = this;

            // serching to see if there is a evolution match is on the field
            let evamatch = p1field.filter(function (creature) {
                if (creature.dataNum === 1 || creature.dataNum === 2 || creature.dataNum === 3) {
                    return creature
                }
            })

            // condishions to summpnd this card
            if (p1turn === true && evamatch.length >= 1) {

                // when i click on this card
                card.addEventListener("click", function () {

                    // if there is only one card that can be sarafise it will happend automatic
                    if (evamatch.length === 1) {

                        // get the id for the card i would like to evolve
                        const getId = evamatch.forEach(function (creature) {
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            //i would like to filter that card off the field
                            const sarifeCard = p1field.filter(function (c, index) {
                                // checking to see if that card dataNum is the same as the only in the evamatch
                                if (c.dataNum === evamatch[0].dataNum) {
                                    p1grave.push(p1field[index]);
                                    p1field.splice(index, 1);
                                    // removing the eliment
                                    p1Field.removeChild(createCardId);
                                    // evolveing star
                                    p1play(gettingCardData, card);

                                }
                            })

                        })

                    }
                    else {
                        // creat a tab that tells me to sarafise a star basic card
                        const tab = document.createElement("div");
                        tab.setAttribute("class", "infoTab");
                        tab.innerHTML = "sacrifice a basic star card inorder to summond this one";
                       
                        p1Field.appendChild(tab);

                        const getId = evamatch.forEach(function (creature) {
                            // i create a click advent for the cards i ca evolve
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            // clicking on the card i want to sarifise
                            createCardId.addEventListener("click", () => {
                                // this i want to push that card to the grave and remove the eliment
                                const clicked = creature.dataNum;
                                const sarifeCard = p1field.filter(function (c, index) {
                                    if (c.dataNum === clicked) {
                                        p1grave.push(p1field[index]);
                                        p1field.splice(index, 1);
                                        // removing the eliment
                                        p1Field.removeChild(createCardId);
                                        // evolveing star
                                        p1play(gettingCardData, card);

                                    }
                                })
                            })

                        })
                    }






                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Field.appendChild(card);

            
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1GraveDisplay.appendChild(card);

        }
    }, // has ability
    {
        top: "star",
        level: 3,
        center: "pic/p1starlv3.jpg",
        bottom: 8,
        basePower: 8,
        setPower: 8,
        type: "mother",
        info: "every mother card on your side of the field power is doubled ",
        dataNum: 7,
        id: "starlvthreeone",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Hand.appendChild(card);
            // getting info to pass
            const gettingCardData = this;

            

            // serching to see if there is a evolution match is on the field
            let evamatch = p1field.filter(function (creature) {
                if (creature.dataNum === 4 || creature.dataNum === 5 || creature.dataNum === 6) {
                    return creature
                }
            })

            // condishions to summpnd this card
            if (p1turn === true && evamatch.length >= 1) {

                // when i click on this card
                card.addEventListener("click", function () {

                    // if there is only one card that can be sarafise it will happend automatic
                    if (evamatch.length === 1) {

                        // get the id for the card i would like to evolve
                        const getId = evamatch.forEach(function (creature) {
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            //i would like to filter that card off the field
                            const sarifeCard = p1field.filter(function (c, index) {
                                // checking to see if that card dataNum is the same as the only in the evamatch
                                if (c.dataNum === evamatch[0].dataNum) {
                                    p1grave.push(p1field[index]);
                                    p1field.splice(index, 1);
                                    // removing the eliment
                                    p1Field.removeChild(createCardId);
                                    // evolveing star
                                    p1play(gettingCardData, card, gettingCardData.AbilityOne);

                                }
                            })

                        })

                    }
                    else {
                        // creat a tab that tells me to sarafise a star basic card
                        const tab = document.createElement("div");
                        tab.setAttribute("class", "infoTab");
                        tab.innerHTML = "sacrifice a basic star card inorder to summond this one";

                        p1Field.appendChild(tab);

                        const getId = evamatch.forEach(function (creature) {
                            // i create a click advent for the cards i ca evolve
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            // clicking on the card i want to sarifise
                            createCardId.addEventListener("click", () => {
                                // this i want to push that card to the grave and remove the eliment
                                const clicked = creature.dataNum;
                                const sarifeCard = p1field.filter(function (c, index) {
                                    if (c.dataNum === clicked) {
                                        p1grave.push(p1field[index]);
                                        p1field.splice(index, 1);
                                        // removing the eliment
                                        p1Field.removeChild(createCardId);
                                        // evolveing star
                                        p1play(gettingCardData, card, gettingCardData.AbilityOne);

                                    }
                                })
                            })

                        })
                    }






                })
            }

        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Field.appendChild(card);

          
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1GraveDisplay.appendChild(card);

        },
        AbilityOne: function () {
            // find out what mother cards are on the field that isnt this one
            const motherField = p1field.filter(function (mt) {
                if (mt.type === "mother" && mt.dataNum !== 7) {
                    return mt;
                }
            })
            // add double thoese cards power
            const double = motherField.map(function (mtp) {
                mtp.bottom = mtp.bottom * 2;
                mtp.basePower = mtp.bottom;
                fieldUpdate();
                FieldDispaly();
            })
            // changing turns
            if (p1roundender === false && p2roundender === false) {
                p1turn = false;
                p2turn = true;
            } else if (p1roundender === false && p2roundender === true) {
                p1turn = true;
                p2turn = false;
            } else if (p1roundender === true && p2roundender === false) {
                p1turn = false;
                p2turn = true;
            }
            else {
                p1turn = false;
                p2turn = false;
            }
            // updateing the the hands so they follow the new turn system
            handUpdate();
            handDisplay();

            // update score
            scoredisplay();
            if (p2turn === true) {

                p2turnChangeAbility[0].FieldAbility()

            }
        }
    }, // has ability
    {
        top: "star",
        level: 3,
        center: "pic/p1starlv3.jpg",
        bottom: 8,
        basePower: 8,
        setPower: 8,
        type: "mother",
        info: "every mother card on your side of the field power is doubled ",
        dataNum: 8,
        id: "starlvthreetwo",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            // serching to see if there is a evolution match is on the field
            let evamatch = p1field.filter(function (creature) {
                if (creature.dataNum === 4 || creature.dataNum === 5 || creature.dataNum === 6) {
                    return creature
                }
            })

            // condishions to summpnd this card
            if (p1turn === true && evamatch.length >= 1) {

                // when i click on this card
                card.addEventListener("click", function () {

                    // if there is only one card that can be sarafise it will happend automatic
                    if (evamatch.length === 1) {

                        // get the id for the card i would like to evolve
                        const getId = evamatch.forEach(function (creature) {
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            //i would like to filter that card off the field
                            const sarifeCard = p1field.filter(function (c, index) {
                                // checking to see if that card dataNum is the same as the only in the evamatch
                                if (c.dataNum === evamatch[0].dataNum) {
                                    p1grave.push(p1field[index]);
                                    p1field.splice(index, 1);
                                    // removing the eliment
                                    p1Field.removeChild(createCardId);
                                    // evolveing star
                                    p1play(gettingCardData, card, gettingCardData.AbilityOne);

                                }
                            })

                        })

                    }
                    else {
                        // creat a tab that tells me to sarafise a star basic card
                        const tab = document.createElement("div");
                        tab.setAttribute("class", "infoTab");
                        tab.innerHTML = "sacrifice a basic star card inorder to summond this one";

                        p1Field.appendChild(tab);

                        const getId = evamatch.forEach(function (creature) {
                            // i create a click advent for the cards i ca evolve
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            // clicking on the card i want to sarifise
                            createCardId.addEventListener("click", () => {
                                // this i want to push that card to the grave and remove the eliment
                                const clicked = creature.dataNum;
                                const sarifeCard = p1field.filter(function (c, index) {
                                    if (c.dataNum === clicked) {
                                        p1grave.push(p1field[index]);
                                        p1field.splice(index, 1);
                                        // removing the eliment
                                        p1Field.removeChild(createCardId);
                                        // evolveing star
                                        p1play(gettingCardData, card, gettingCardData.AbilityOne);

                                    }
                                })
                            })

                        })
                    }






                })
            }

        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1GraveDisplay.appendChild(card);

        },
        AbilityOne: function () {
            // find out what mother cards are on the field that isnt this one
            const motherField = p1field.filter(function (mt) {
                if (mt.type === "mother" && mt.dataNum !== 8) {
                    return mt;
                }
            })
            // add double thoese cards power
            const double = motherField.map(function (mtp) {
                mtp.bottom = mtp.bottom * 2;
                mtp.basePower = mtp.bottom;
                fieldUpdate();
                FieldDispaly();
            })
            // changing turns
            if (p1roundender === false && p2roundender === false) {
                p1turn = false;
                p2turn = true;
            } else if (p1roundender === false && p2roundender === true) {
                p1turn = true;
                p2turn = false;
            } else if (p1roundender === true && p2roundender === false) {
                p1turn = false;
                p2turn = true;
            }
            else {
                p1turn = false;
                p2turn = false;
            }
            // updateing the the hands so they follow the new turn system
            handUpdate();
            handDisplay();

            // update score
            scoredisplay();
            if (p2turn === true) {

                p2turnChangeAbility[0].FieldAbility()

            }
        }
    }, // has ability
    {
        top: "rain",
        level: 1,
        center: "pic/p1rain.jpg",
        bottom: 4,
        basePower: 4,
        setPower: 4,
        type: "mother",
        info: "",
        dataNum: 9,
        id: "rainbasicone",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            if (p1turn === true) {
                card.addEventListener("click", function () {

                    p1play(gettingCardData, this);
                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1GraveDisplay.appendChild(card);

        }
    }, // no ability
    {
        top: "rain",
        level: 1,
        center: "pic/p1rain.jpg",
        bottom: 4,
        basePower: 4,
        setPower: 4,
        type: "mother",
        info: "",
        dataNum: 10,
        id: "rainbasictwo",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            if (p1turn === true) {
                card.addEventListener("click", function () {

                    p1play(gettingCardData, this);
                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1GraveDisplay.appendChild(card);

        }
    }, // no ability
    {
        top: "rain",
        level: 1,
        center: "pic/p1rain.jpg",
        bottom: 4,
        basePower: 4,
        setPower: 4,
        type: "mother",
        info: "",
        dataNum: 11,
        id: "rainbasicthree",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Hand.appendChild(card);
            // getting info to pass
            const gettingCardData = this;

            if (p1turn === true) {
                card.addEventListener("click", function () {

                    p1play(gettingCardData, this);
                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1GraveDisplay.appendChild(card);

        }
    }, // no ability
    {
        top: "rain",
        level: 2,
        center: "pic/p1rainlv2.jpg",
        bottom: 7,
        basePower: 7,
        setPower: 7,
        type: "mother",
        info: "witch battle with healer",
        dataNum: 12,
        id: "rainlvtwoone",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Hand.appendChild(card);
            // getting info to pass
            const gettingCardData = this;

            // serching to see if there is a evolution match is on the field
            let evamatch = p1field.filter(function (creature) {
                if (creature.dataNum === 9 || creature.dataNum === 10 || creature.dataNum === 11) {
                    return creature
                }
            })

            // condishions to summpnd this card
            if (p1turn === true && evamatch.length >= 1) {

                // when i click on this card
                card.addEventListener("click", function () {

                    // if there is only one card that can be sarafise it will happend automatic
                    if (evamatch.length === 1) {

                        // get the id for the card i would like to evolve
                        const getId = evamatch.forEach(function (creature) {
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            //i would like to filter that card off the field
                            const sarifeCard = p1field.filter(function (c, index) {
                                // checking to see if that card dataNum is the same as the only in the evamatch
                                if (c.dataNum === evamatch[0].dataNum) {
                                    p1grave.push(p1field[index]);
                                    p1field.splice(index, 1);
                                    // removing the eliment
                                    p1Field.removeChild(createCardId);
                                    // evolveing star
                                    p1play(gettingCardData, card , gettingCardData.AbilityOne);

                                }
                            })

                        })

                    }
                    else {
                        // creat a tab that tells me to sarafise a star basic card
                        const tab = document.createElement("div");
                        tab.setAttribute("class", "infoTab");
                        tab.innerHTML = "sacrifice a basic star card inorder to summond this one";

                        p1Field.appendChild(tab);

                        const getId = evamatch.forEach(function (creature) {
                            // i create a click advent for the cards i ca evolve
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            // clicking on the card i want to sarifise
                            createCardId.addEventListener("click", () => {
                                // this i want to push that card to the grave and remove the eliment
                                const clicked = creature.dataNum;
                                const sarifeCard = p1field.filter(function (c, index) {
                                    if (c.dataNum === clicked) {
                                        p1grave.push(p1field[index]);
                                        p1field.splice(index, 1);
                                        // removing the eliment
                                        p1Field.removeChild(createCardId);
                                        // evolveing star
                                        p1play(gettingCardData, card, gettingCardData.AbilityOne);

                                    }
                                })
                            })

                        })
                    }






                })
            }

        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1GraveDisplay.appendChild(card);

        },
        AbilityOne: function () {
            // finding out if our they have cards on thier side of the field
            if (p2field.length >= 1) {
                // finding out if i want to use an ability 
                const tab = document.createElement("div");
                tab.setAttribute("class", "option");
                tab.innerHTML = "would you like to use witch battle ability"
                // yes and no options
                const yes = document.createElement("div");
                yes.setAttribute("class", "yes");
                yes.innerHTML = "yes";
                const no = document.createElement("div");
                no.setAttribute("class", "no");
                no.innerHTML = "no";
                // appending eliments
                tab.appendChild(yes);
                tab.appendChild(no);
                p1Field.appendChild(tab);

                // picking no
                no.addEventListener("click", () => {
                    // im going to remove the option tab
                    p1Field.removeChild(tab);
                    if (p1roundender === false && p2roundender === false) {
                        p1turn = false;
                        p2turn = true;
                    } else if (p1roundender === false && p2roundender === true) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === true && p2roundender === false) {
                        p1turn = false;
                        p2turn = true;
                    }
                    else {
                        p1turn = false;
                        p2turn = false;
                    }


                    // updateing the the hands so they follow the new turn system
                    handUpdate();
                   
                    handDisplay();

                    // update score
                    scoredisplay();
                    if (p2turn === true) {

                        p2turnChangeAbility[0].FieldAbility()

                    }
                })

                // picking yes
                yes.addEventListener("click", () => {
                    // removeing yes and no option
                   tab.removeChild(yes);
                    tab.removeChild(no);
                            // change text
                            tab.innerHTML = "select target";
                            // get opponets cards
                            const targets = p2field.map(function (t, index) {
                                const name = t.id;
                                const ids = document.getElementById(name);
                                // getting my cards info
                                const rainInfo = p1field.filter(rain => rain.dataNum === 12);
                                // selecting targe and finding out if its stronger or not
                                ids.addEventListener("click", () => {
                                    if (rainInfo[0].bottom > t.bottom) {
                                        // destroy opponet card
                                        p2grave.push(p2field[index]);
                                        p2field.splice(index, 1);
                                        p2Field.removeChild(ids);
                                        // removing the tab
                                        p1Field.removeChild(tab);
                                        fieldUpdate();
                                        FieldDispaly();

                                        // changing turns
                                        if (p1roundender === false && p2roundender === false) {
                                            p1turn = false;
                                            p2turn = true;
                                        } else if (p1roundender === false && p2roundender === true) {
                                            p1turn = true;
                                            p2turn = false;
                                        } else if (p1roundender === true && p2roundender === false) {
                                            p1turn = false;
                                            p2turn = true;
                                        }
                                        else {
                                            p1turn = false;
                                            p2turn = false;
                                        }
                                        // updateing the the hands so they follow the new turn system
                                        handUpdate();
                                        handDisplay();

                                        // update score
                                        scoredisplay();
                                        if (p2turn === true) {

                                            p2turnChangeAbility[0].FieldAbility()

                                        }
                                    }
                                    else if (rainInfo[0].bottom < t.bottom) {
                                        // subtracting damange
                                        t.bottom = t.bottom - rainInfo[0].bottom;
                                        t.basePower = t.basePower - rainInfo[0].bottom;

                                        // finding cards id
                                        const findingRain = p1field.filter(function (r, i) {
                                            if (r.dataNum === 12) {
                                                p1field.splice(i, 1);
                                                const getId = r.id;
                                                const rid = document.getElementById(getId);
                                                p1Field.removeChild(rid);
                                            }
                                        })

                                        // removing the tab
                                        p1Field.removeChild(tab);
                                        fieldUpdate();
                                        FieldDispaly();

                                        // changing turns
                                        if (p1roundender === false && p2roundender === false) {
                                            p1turn = false;
                                            p2turn = true;
                                        } else if (p1roundender === false && p2roundender === true) {
                                            p1turn = true;
                                            p2turn = false;
                                        } else if (p1roundender === true && p2roundender === false) {
                                            p1turn = false;
                                            p2turn = true;
                                        }
                                        else {
                                            p1turn = false;
                                            p2turn = false;
                                        }
                                        // updateing the the hands so they follow the new turn system
                                        handUpdate();
                                        handDisplay();

                                        // update score
                                        scoredisplay();
                                        if (p2turn === true) {

                                            p2turnChangeAbility[0].FieldAbility()

                                        }
                                    }
                                    else {
                                        // destroy opponet card
                                           p2grave.push(p2field[index]);
                                           p2field.splice(index, 1);
                                           p2Field.removeChild(ids);

                                             const findingRain = p1field.filter(function (r, i) {
                                               if (r.dataNum === 12) {
                                                 p1field.splice(i, 1);
                                                 const getId = r.id;
                                                 const rid = document.getElementById(getId);
                                                 p1Field.removeChild(rid);
                                               }
                                             })
                                        // removing the tab
                                        p1Field.removeChild(tab);
                                        fieldUpdate();
                                        FieldDispaly();

                                        // changing turns
                                        if (p1roundender === false && p2roundender === false) {
                                            p1turn = false;
                                            p2turn = true;
                                        } else if (p1roundender === false && p2roundender === true) {
                                            p1turn = true;
                                            p2turn = false;
                                        } else if (p1roundender === true && p2roundender === false) {
                                            p1turn = false;
                                            p2turn = true;
                                        }
                                        else {
                                            p1turn = false;
                                            p2turn = false;
                                        }
                                        // updateing the the hands so they follow the new turn system
                                        handUpdate();
                                        handDisplay();

                                        // update score
                                        scoredisplay();
                                        if (p2turn === true) {

                                            p2turnChangeAbility[0].FieldAbility()

                                        }
                                         }
                                    
                                });
                            })
                        


                })
                
                
            }
           
           
        }
    }, // has ability
    {
        top: "rain",
        level: 2,
        center: "pic/p1rainlv2.jpg",
        bottom: 7,
        basePower: 7,
        setPower: 7,
        type: "mother",
        info: "witch battle",
        dataNum: 13,
        id: "rainlvtwotwo",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            // serching to see if there is a evolution match is on the field
            let evamatch = p1field.filter(function (creature) {
                if (creature.dataNum === 9 || creature.dataNum === 10 || creature.dataNum === 11) {
                    return creature
                }
            })

            // condishions to summpnd this card
            if (p1turn === true && evamatch.length >= 1) {

                // when i click on this card
                card.addEventListener("click", function () {

                    // if there is only one card that can be sarafise it will happend automatic
                    if (evamatch.length === 1) {

                        // get the id for the card i would like to evolve
                        const getId = evamatch.forEach(function (creature) {
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            //i would like to filter that card off the field
                            const sarifeCard = p1field.filter(function (c, index) {
                                // checking to see if that card dataNum is the same as the only in the evamatch
                                if (c.dataNum === evamatch[0].dataNum) {
                                    p1grave.push(p1field[index]);
                                    p1field.splice(index, 1);
                                    // removing the eliment
                                    p1Field.removeChild(createCardId);
                                    // evolveing star
                                    p1play(gettingCardData, card, gettingCardData.AbilityOne);

                                }
                            })

                        })

                    }
                    else {
                        // creat a tab that tells me to sarafise a star basic card
                        const tab = document.createElement("div");
                        tab.setAttribute("class", "infoTab");
                        tab.innerHTML = "sacrifice a basic star card inorder to summond this one";

                        p1Field.appendChild(tab);

                        const getId = evamatch.forEach(function (creature) {
                            // i create a click advent for the cards i ca evolve
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            // clicking on the card i want to sarifise
                            createCardId.addEventListener("click", () => {
                                // this i want to push that card to the grave and remove the eliment
                                const clicked = creature.dataNum;
                                const sarifeCard = p1field.filter(function (c, index) {
                                    if (c.dataNum === clicked) {
                                        p1grave.push(p1field[index]);
                                        p1field.splice(index, 1);
                                        // removing the eliment
                                        p1Field.removeChild(createCardId);
                                        // evolveing star
                                        p1play(gettingCardData, card, gettingCardData.AbilityOne);

                                    }
                                })
                            })

                        })
                    }






                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1GraveDisplay.appendChild(card);

        },
        AbilityOne: function () {
            // finding out if our they have cards on thier side of the field
            if (p2field.length >= 1) {
               
                // finding out if i want to use an ability 
                const tab = document.createElement("div");
                tab.setAttribute("class", "option");
                tab.innerHTML = "would you like to use witch battle ability"
                // yes and no options
                const yes = document.createElement("div");
                yes.setAttribute("class", "yes");
                yes.innerHTML = "yes";
                const no = document.createElement("div");
                no.setAttribute("class", "no");
                no.innerHTML = "no";
                // appending eliments
                tab.appendChild(yes);
                tab.appendChild(no);
                p1Field.appendChild(tab);

                // picking no
                no.addEventListener("click", () => {
                    // im going to remove the option tab
                    p1Field.removeChild(tab);
                    if (p1roundender === false && p2roundender === false) {
                        p1turn = false;
                        p2turn = true;
                    } else if (p1roundender === false && p2roundender === true) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === true && p2roundender === false) {
                        p1turn = false;
                        p2turn = true;
                    }
                    else {
                        p1turn = false;
                        p2turn = false;
                    }


                    // updateing the the hands so they follow the new turn system
                    handUpdate();
                   
                    handDisplay();

                    // update score
                    scoredisplay();
                    if (p2turn === true) {

                        p2turnChangeAbility[0].FieldAbility()

                    }
                })

                // picking yes
                yes.addEventListener("click", () => {
                    // removeing yes and no option
                    tab.removeChild(yes);
                    tab.removeChild(no);
                    // change text
                    tab.innerHTML = "select target";
                    // get opponets cards
                    const targets = p2field.map(function (t, index) {
                        const name = t.id;
                        const ids = document.getElementById(name);
                        // getting my cards info
                        const rainInfo = p1field.filter(rain => rain.dataNum === 13);
                        // selecting targe and finding out if its stronger or not
                        ids.addEventListener("click", () => {
                            if (rainInfo[0].bottom > t.bottom) {
                                // destroy opponet card
                                p2grave.push(p2field[index]);
                                p2field.splice(index, 1);
                                p2Field.removeChild(ids);
                                // removing the tab
                                p1Field.removeChild(tab);
                                fieldUpdate();
                                FieldDispaly();

                                // changing turns
                                if (p1roundender === false && p2roundender === false) {
                                    p1turn = false;
                                    p2turn = true;
                                } else if (p1roundender === false && p2roundender === true) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === true && p2roundender === false) {
                                    p1turn = false;
                                    p2turn = true;
                                }
                                else {
                                    p1turn = false;
                                    p2turn = false;
                                }
                                // updateing the the hands so they follow the new turn system
                                handUpdate();
                                handDisplay();

                                // update score
                                scoredisplay();
                                if (p2turn === true) {

                                    p2turnChangeAbility[0].FieldAbility()

                                }
                            }
                            else if (rainInfo[0].bottom < t.bottom){
                                // subtracting damange
                                t.bottom = t.bottom - rainInfo[0].bottom;
                                t.basePower = t.basePower - rainInfo[0].bottom;

                                // finding cards id
                                const findingRain = p1field.filter(function (r, i) {
                                    if (r.dataNum === 13) {
                                        p1field.splice(i, 1);
                                        const getId = r.id;
                                        const rid = document.getElementById(getId);
                                        p1Field.removeChild(rid);
                                    }
                                })

                                // removing the tab
                                p1Field.removeChild(tab);
                                fieldUpdate();
                                FieldDispaly();

                                // changing turns
                                if (p1roundender === false && p2roundender === false) {
                                    p1turn = false;
                                    p2turn = true;
                                } else if (p1roundender === false && p2roundender === true) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === true && p2roundender === false) {
                                    p1turn = false;
                                    p2turn = true;
                                }
                                else {
                                    p1turn = false;
                                    p2turn = false;
                                }
                                // updateing the the hands so they follow the new turn system
                                handUpdate();
                                handDisplay();

                                // update score
                                scoredisplay();
                                if (p2turn === true) {

                                    p2turnChangeAbility[0].FieldAbility()

                                }
                            }
                            else {
                                // destroy opponet card
                                p2grave.push(p2field[index]);
                                p2field.splice(index, 1);
                                p2Field.removeChild(ids);

                                const findingRain = p1field.filter(function (r, i) {
                                    if (r.dataNum === 12) {
                                        p1field.splice(i, 1);
                                        const getId = r.id;
                                        const rid = document.getElementById(getId);
                                        p1Field.removeChild(rid);
                                    }
                                })
                                // removing the tab
                                p1Field.removeChild(tab);
                                fieldUpdate();
                                FieldDispaly();

                                // changing turns
                                if (p1roundender === false && p2roundender === false) {
                                    p1turn = false;
                                    p2turn = true;
                                } else if (p1roundender === false && p2roundender === true) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === true && p2roundender === false) {
                                    p1turn = false;
                                    p2turn = true;
                                }
                                else {
                                    p1turn = false;
                                    p2turn = false;
                                }
                                // updateing the the hands so they follow the new turn system
                                handUpdate();
                                handDisplay();

                                // update score
                                scoredisplay();
                                if (p2turn === true) {

                                    p2turnChangeAbility[0].FieldAbility()

                                }
                            }
                        });
                    })



                })


            }


        }
    },// has ability
    {
        top: "rain",
        level: 2,
        center: "pic/p1rainlv2.jpg",
        bottom: 7,
        basePower: 7,
        setPower: 7,
        type: "mother",
        info: "witch battle",
        dataNum: 14,
        id: "rainlvtwothree",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            // serching to see if there is a evolution match is on the field
            let evamatch = p1field.filter(function (creature) {
                if (creature.dataNum === 9 || creature.dataNum === 10 || creature.dataNum === 11) {
                    return creature
                }
            })

            // condishions to summpnd this card
            if (p1turn === true && evamatch.length >= 1) {

                // when i click on this card
                card.addEventListener("click", function () {

                    // if there is only one card that can be sarafise it will happend automatic
                    if (evamatch.length === 1) {

                        // get the id for the card i would like to evolve
                        const getId = evamatch.forEach(function (creature) {
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            //i would like to filter that card off the field
                            const sarifeCard = p1field.filter(function (c, index) {
                                // checking to see if that card dataNum is the same as the only in the evamatch
                                if (c.dataNum === evamatch[0].dataNum) {
                                    p1grave.push(p1field[index]);
                                    p1field.splice(index, 1);
                                    // removing the eliment
                                    p1Field.removeChild(createCardId);
                                    // evolveing star
                                    p1play(gettingCardData, card, gettingCardData.AbilityOne);

                                }
                            })

                        })

                    }
                    else {
                        // creat a tab that tells me to sarafise a star basic card
                        const tab = document.createElement("div");
                        tab.setAttribute("class", "infoTab");
                        tab.innerHTML = "sacrifice a basic star card inorder to summond this one";

                        p1Field.appendChild(tab);

                        const getId = evamatch.forEach(function (creature) {
                            // i create a click advent for the cards i ca evolve
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            // clicking on the card i want to sarifise
                            createCardId.addEventListener("click", () => {
                                // this i want to push that card to the grave and remove the eliment
                                const clicked = creature.dataNum;
                                const sarifeCard = p1field.filter(function (c, index) {
                                    if (c.dataNum === clicked) {
                                        p1grave.push(p1field[index]);
                                        p1field.splice(index, 1);
                                        // removing the eliment
                                        p1Field.removeChild(createCardId);
                                        // evolveing star
                                        p1play(gettingCardData, card, gettingCardData.AbilityOne);

                                    }
                                })
                            })

                        })
                    }






                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1GraveDisplay.appendChild(card);

        },
        AbilityOne: function () {
            // finding out if our they have cards on thier side of the field
            if (p2field.length >= 1) {
               
                // finding out if i want to use an ability 
                const tab = document.createElement("div");
                tab.setAttribute("class", "option");
                tab.innerHTML = "would you like to use witch battle ability"
                // yes and no options
                const yes = document.createElement("div");
                yes.setAttribute("class", "yes");
                yes.innerHTML = "yes";
                const no = document.createElement("div");
                no.setAttribute("class", "no");
                no.innerHTML = "no";
                // appending eliments
                tab.appendChild(yes);
                tab.appendChild(no);
                p1Field.appendChild(tab);

                // picking no
                no.addEventListener("click", () => {
                    // im going to remove the option tab
                    p1Field.removeChild(tab);
                    if (p1roundender === false && p2roundender === false) {
                        p1turn = false;
                        p2turn = true;
                    } else if (p1roundender === false && p2roundender === true) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === true && p2roundender === false) {
                        p1turn = false;
                        p2turn = true;
                    }
                    else {
                        p1turn = false;
                        p2turn = false;
                    }


                    // updateing the the hands so they follow the new turn system
                    handUpdate();
                   
                    handDisplay();

                    // update score
                    scoredisplay();
                    if (p2turn === true) {

                        p2turnChangeAbility[0].FieldAbility()

                    }
                })

                // picking yes
                yes.addEventListener("click", () => {
                    // removeing yes and no option
                    tab.removeChild(yes);
                    tab.removeChild(no);
                    // change text
                    tab.innerHTML = "select target";
                    // get opponets cards
                    const targets = p2field.map(function (t, index) {
                        const name = t.id;
                        const ids = document.getElementById(name);
                        // getting my cards info
                        const rainInfo = p1field.filter(rain => rain.dataNum === 14);
                        // selecting targe and finding out if its stronger or not
                        ids.addEventListener("click", () => {
                            if (rainInfo[0].bottom > t.bottom) {
                                // destroy opponet card
                                p2grave.push(p2field[index]);
                                p2field.splice(index, 1);
                                p2Field.removeChild(ids);
                                // removing the tab
                                p1Field.removeChild(tab);
                                fieldUpdate();
                                FieldDispaly();

                                // changing turns
                                if (p1roundender === false && p2roundender === false) {
                                    p1turn = false;
                                    p2turn = true;
                                } else if (p1roundender === false && p2roundender === true) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === true && p2roundender === false) {
                                    p1turn = false;
                                    p2turn = true;
                                }
                                else {
                                    p1turn = false;
                                    p2turn = false;
                                }
                                // updateing the the hands so they follow the new turn system
                                handUpdate();
                                handDisplay();

                                // update score
                                scoredisplay();
                                if (p2turn === true) {

                                    p2turnChangeAbility[0].FieldAbility()

                                }
                            }
                            else if (rainInfo[0].bottom < t.bottom){
                                // subtracting damange
                                t.bottom = t.bottom - rainInfo[0].bottom;
                                t.basePower = t.basePower - rainInfo[0].bottom;

                                // finding cards id
                                const findingRain = p1field.filter(function (r, i) {
                                    if (r.dataNum === 14) {
                                        p1field.splice(i, 1);
                                        const getId = r.id;
                                        const rid = document.getElementById(getId);
                                        p1Field.removeChild(rid);
                                    }
                                })

                                // removing the tab
                                p1Field.removeChild(tab);
                                fieldUpdate();
                                FieldDispaly();

                                // changing turns
                                if (p1roundender === false && p2roundender === false) {
                                    p1turn = false;
                                    p2turn = true;
                                } else if (p1roundender === false && p2roundender === true) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === true && p2roundender === false) {
                                    p1turn = false;
                                    p2turn = true;
                                }
                                else {
                                    p1turn = false;
                                    p2turn = false;
                                }
                                // updateing the the hands so they follow the new turn system
                                handUpdate();
                                handDisplay();

                                // update score
                                scoredisplay();
                                if (p2turn === true) {

                                    p2turnChangeAbility[0].FieldAbility()

                                }
                            }
                             else {
                // destroy opponet card
                p2grave.push(p2field[index]);
                p2field.splice(index, 1);
                p2Field.removeChild(ids);

                const findingRain = p1field.filter(function (r, i) {
                    if (r.dataNum === 12) {
                        p1field.splice(i, 1);
                        const getId = r.id;
                        const rid = document.getElementById(getId);
                        p1Field.removeChild(rid);
                    }
                })
                // removing the tab
                p1Field.removeChild(tab);
                fieldUpdate();
                FieldDispaly();

                // changing turns
                if (p1roundender === false && p2roundender === false) {
                    p1turn = false;
                    p2turn = true;
                } else if (p1roundender === false && p2roundender === true) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === true && p2roundender === false) {
                    p1turn = false;
                    p2turn = true;
                }
                else {
                    p1turn = false;
                    p2turn = false;
                }
                // updateing the the hands so they follow the new turn system
                handUpdate();
                handDisplay();

                // update score
                scoredisplay();
                if (p2turn === true) {

                    p2turnChangeAbility[0].FieldAbility()

                }
            }
                        });
                    })



                })


            }


        }
    }, // has ability
    {
        top: "bria",
        level: 1,
        center: "pic/plp2bria.jpg",
        bottom: 2,
        basePower: 2,
        setPower: 2,
        type: "seventh",
        info: "draw a card",
        dataNum: 15,
        id: "briabasicone",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            if (p1turn === true) {
                card.addEventListener("click", function () {

                    p1play(gettingCardData, this, gettingCardData.AbilityOne);
                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1GraveDisplay.appendChild(card);

        },
        AbilityOne: function () {
            // changing turns
            if (p1roundender === false && p2roundender === false) {
                p1turn = false;
                p2turn = true;
            } else if (p1roundender === false && p2roundender === true) {
                p1turn = true;
                p2turn = false;
            } else if (p1roundender === true && p2roundender === false) {
                p1turn = false;
                p2turn = true;
            }
            else {
                p1turn = false;
                p2turn = false;
            }
            draw(1, 0);
            // updateing the the hands so they follow the new turn system
            handUpdate();
            handDisplay();

            // update score
            scoredisplay();
            if (p2turn === true) {

                p2turnChangeAbility[0].FieldAbility()

            }
        }
    },// has ability
    {
        top: "bria",
        level: 1,
        center: "pic/plp2bria.jpg",
        bottom: 2,
        basePower: 2,
        setPower: 2,
        type: "seventh",
        info: "draw a card",
        dataNum: 16,
        id: "briabasictwo",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            if (p1turn === true) {
                card.addEventListener("click", function () {

                    p1play(gettingCardData, this, gettingCardData.AbilityOne);
                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1GraveDisplay.appendChild(card);

        },
        AbilityOne: function () {
            // changing turns
            if (p1roundender === false && p2roundender === false) {
                p1turn = false;
                p2turn = true;
            } else if (p1roundender === false && p2roundender === true) {
                p1turn = true;
                p2turn = false;
            } else if (p1roundender === true && p2roundender === false) {
                p1turn = false;
                p2turn = true;
            }
            else {
                p1turn = false;
                p2turn = false;
            }
            draw(1, 0);
            // updateing the the hands so they follow the new turn system
            handUpdate();
            handDisplay();

            // update score
            scoredisplay();
            if (p2turn === true) {

                p2turnChangeAbility[0].FieldAbility()

            }
        }
    },// has ability
    {
        top: "ghost agent",
        level: 1,
        center: "pic/p1ghostagent.jpg",
        bottom: 5,
        basePower: 5,
        setPower: 5,
        type: "goverment",
        info: "",
        dataNum: 17,
        id: "ghostabasicone",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            if (p1turn === true) {
                card.addEventListener("click", function () {

                    p1play(gettingCardData, this);
                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1GraveDisplay.appendChild(card);

        }
    }, // no ability
    {
        top: "ghost agent",
        level: 1,
        center: "pic/p1ghostagent.jpg",
        bottom: 5,
        basePower: 5,
        setPower: 5,
        type: "goverment",
        info: "",
        dataNum: 18,
        id: "ghostabasictwo",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            if (p1turn === true) {
                card.addEventListener("click", function () {

                    p1play(gettingCardData, this);
                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1GraveDisplay.appendChild(card);

        }
    }, // no ability
    {
        top: "ghost agent",
        level: 1,
        center: "pic/p1ghostagent.jpg",
        bottom: 5,
        basePower: 5,
        setPower: 5,
        type: "goverment",
        info: "",
        dataNum: 19,
        id: "ghostabasicthree",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            if (p1turn === true) {
                card.addEventListener("click", function () {

                    p1play(gettingCardData, this);
                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1GraveDisplay.appendChild(card);

        }
    }, // no ability
    {
        top: "ghost agent",
        level: 2,
        center: "pic/p1ghostagentlv2.jpg",
        bottom: 5,
        basePower: 5,
        setPower: 5,
        type: "goverment",
        info: "-2 to all your opponets cards then give this card a + 1 for each",
        dataNum: 20,
        id: "ghostalvtwoone",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            // serching to see if there is a evolution match is on the field
            let evamatch = p1field.filter(function (creature) {
                if (creature.dataNum === 17 || creature.dataNum === 18 || creature.dataNum === 19) {
                    return creature
                }
            })

            // condishions to summpnd this card
            if (p1turn === true && evamatch.length >= 1) {

                // when i click on this card
                card.addEventListener("click", function () {

                    // if there is only one card that can be sarafise it will happend automatic
                    if (evamatch.length === 1) {

                        // get the id for the card i would like to evolve
                        const getId = evamatch.forEach(function (creature) {
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            //i would like to filter that card off the field
                            const sarifeCard = p1field.filter(function (c, index) {
                                // checking to see if that card dataNum is the same as the only in the evamatch
                                if (c.dataNum === evamatch[0].dataNum) {
                                    p1grave.push(p1field[index]);
                                    p1field.splice(index, 1);
                                    // removing the eliment
                                    p1Field.removeChild(createCardId);
                                    // evolveing star
                                    p1play(gettingCardData, card, gettingCardData.AbilityOne);

                                }
                            })

                        })

                    }
                    else {
                        // creat a tab that tells me to sarafise a star basic card
                        const tab = document.createElement("div");
                        tab.setAttribute("class", "infoTab");
                        tab.innerHTML = "sacrifice a basic star card inorder to summond this one";

                        p1Field.appendChild(tab);

                        const getId = evamatch.forEach(function (creature) {
                            // i create a click advent for the cards i ca evolve
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            // clicking on the card i want to sarifise
                            createCardId.addEventListener("click", () => {
                                // this i want to push that card to the grave and remove the eliment
                                const clicked = creature.dataNum;
                                const sarifeCard = p1field.filter(function (c, index) {
                                    if (c.dataNum === clicked) {
                                        p1grave.push(p1field[index]);
                                        p1field.splice(index, 1);
                                        // removing the eliment
                                        p1Field.removeChild(createCardId);
                                        // evolveing star
                                        p1play(gettingCardData, card, gettingCardData.AbilityOne);

                                    }
                                })
                            })

                        })
                    }






                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1GraveDisplay.appendChild(card);

        },
        AbilityOne: function () {
           
            // subtract 1 from every card on the field
            const sutract = p2field.map(p => p.bottom = p.bottom - 2);
            const mins = p2field.map(p => p.basePower = p.bottom);
           
            // getting ghoast agent data
            const ga = p1field.filter(cards => cards.dataNum === 20);
            ga[0].bottom = ga[0].bottom + p2field.length;
            ga[0].basePower = ga[0].bottom;

            const dead = p2field.filter(function (bz,i) {
                if (bz.bottom <= 0) {
                    p2grave.push(p2field[i]);
                    const name = bz.id;
                    const getId = document.getElementById(name);
                    // removeing card eliment
                    p2Field.removeChild(getId);
                }
            });
           
            p2field = p2field.filter(sa => sa.bottom > 0);

            fieldUpdate();
            FieldDispaly();

            if (p1roundender === false && p2roundender === false) {
                p1turn = false;
                p2turn = true;
            } else if (p1roundender === false && p2roundender === true) {
                p1turn = true;
                p2turn = false;
            } else if (p1roundender === true && p2roundender === false) {
                p1turn = false;
                p2turn = true;
            }
            else {
                p1turn = false;
                p2turn = false;
            }
           
            // updateing the the hands so they follow the new turn system
            handUpdate();
            handDisplay();

            // update score
            scoredisplay();
            if (p2turn === true) {

                p2turnChangeAbility[0].FieldAbility()

            }
        }
         
    }, // has ability
    {
        top: "ghost agent",
        level: 2,
        center: "pic/p1ghostagentlv2.jpg",
        bottom: 5,
        basePower: 5,
        setPower: 5,
        type: "goverment",
        info: "-2 to all your opponets cards then give this card a + 1 for each",
        dataNum: 21,
        id: "ghostalvtwotwo",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            // serching to see if there is a evolution match is on the field
            let evamatch = p1field.filter(function (creature) {
                if (creature.dataNum === 17 || creature.dataNum === 18 || creature.dataNum === 19) {
                    return creature
                }
            })

            // condishions to summpnd this card
            if (p1turn === true && evamatch.length >= 1) {

                // when i click on this card
                card.addEventListener("click", function () {

                    // if there is only one card that can be sarafise it will happend automatic
                    if (evamatch.length === 1) {

                        // get the id for the card i would like to evolve
                        const getId = evamatch.forEach(function (creature) {
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            //i would like to filter that card off the field
                            const sarifeCard = p1field.filter(function (c, index) {
                                // checking to see if that card dataNum is the same as the only in the evamatch
                                if (c.dataNum === evamatch[0].dataNum) {
                                    p1grave.push(p1field[index]);
                                    p1field.splice(index, 1);
                                    // removing the eliment
                                    p1Field.removeChild(createCardId);
                                    // evolveing star
                                    p1play(gettingCardData, card, gettingCardData.AbilityOne);

                                }
                            })

                        })

                    }
                    else {
                        // creat a tab that tells me to sarafise a star basic card
                        const tab = document.createElement("div");
                        tab.setAttribute("class", "infoTab");
                        tab.innerHTML = "sacrifice a basic star card inorder to summond this one";

                        p1Field.appendChild(tab);

                        const getId = evamatch.forEach(function (creature) {
                            // i create a click advent for the cards i ca evolve
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            // clicking on the card i want to sarifise
                            createCardId.addEventListener("click", () => {
                                // this i want to push that card to the grave and remove the eliment
                                const clicked = creature.dataNum;
                                const sarifeCard = p1field.filter(function (c, index) {
                                    if (c.dataNum === clicked) {
                                        p1grave.push(p1field[index]);
                                        p1field.splice(index, 1);
                                        // removing the eliment
                                        p1Field.removeChild(createCardId);
                                        // evolveing star
                                        p1play(gettingCardData, card, gettingCardData.AbilityOne);

                                    }
                                })
                            })

                        })
                    }






                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1GraveDisplay.appendChild(card);

        },
        AbilityOne: function () {
            // subtract 1 from every card on the field
         
            const sutract = p2field.map(p => p.bottom = p.bottom - 2);
            const mins = p2field.map(p => p.basePower = p.bottom);
         
            const ga = p1field.filter(cards => cards.dataNum === 21);
            ga[0].bottom = ga[0].bottom + p2field.length;
            ga[0].basePower = ga[0].bottom;

            const dead = p2field.filter(function (bz, i) {
                if (bz.bottom <= 0) {
                    p2grave.push(p2field[i]);
                    const name = bz.id;
                    const getId = document.getElementById(name);
                    // removeing card eliment
                    p2Field.removeChild(getId);
                }
            });

            p2field = p2field.filter(sa => sa.bottom > 0);

            fieldUpdate();
            FieldDispaly();
            // changing turns
            if (p1roundender === false && p2roundender === false) {
                p1turn = false;
                p2turn = true;
            } else if (p1roundender === false && p2roundender === true) {
                p1turn = true;
                p2turn = false;
            } else if (p1roundender === true && p2roundender === false) {
                p1turn = false;
                p2turn = true;
            }
            else {
                p1turn = false;
                p2turn = false;
            }
           
            // updateing the the hands so they follow the new turn system
            handUpdate();
            handDisplay();

            // update score
            scoredisplay();
            if (p2turn === true) {

                p2turnChangeAbility[0].FieldAbility()

            }
        }
    }, // has ability
    {
        top: "ghost agent",
        level: 2,
        center: "pic/p1ghostagentlv2.jpg",
        bottom: 5,
        basePower: 5,
        setPower: 5,
        type: "goverment",
        info: "-2 to all your opponets cards then give this card a + 1 for each ",
        dataNum: 22,
        id: "ghostalvtwothree",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            // serching to see if there is a evolution match is on the field
            let evamatch = p1field.filter(function (creature) {
                if (creature.dataNum === 17 || creature.dataNum === 18 || creature.dataNum === 19) {
                    return creature
                }
            })

            // condishions to summpnd this card
            if (p1turn === true && evamatch.length >= 1) {

                // when i click on this card
                card.addEventListener("click", function () {

                    // if there is only one card that can be sarafise it will happend automatic
                    if (evamatch.length === 1) {

                        // get the id for the card i would like to evolve
                        const getId = evamatch.forEach(function (creature) {
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            //i would like to filter that card off the field
                            const sarifeCard = p1field.filter(function (c, index) {
                                // checking to see if that card dataNum is the same as the only in the evamatch
                                if (c.dataNum === evamatch[0].dataNum) {
                                    p1grave.push(p1field[index]);
                                    p1field.splice(index, 1);
                                    // removing the eliment
                                    p1Field.removeChild(createCardId);
                                    // evolveing star
                                    p1play(gettingCardData, card, gettingCardData.AbilityOne);

                                }
                            })

                        })

                    }
                    else {
                        // creat a tab that tells me to sarafise a star basic card
                        const tab = document.createElement("div");
                        tab.setAttribute("class", "infoTab");
                        tab.innerHTML = "sacrifice a basic star card inorder to summond this one";

                        p1Field.appendChild(tab);

                        const getId = evamatch.forEach(function (creature) {
                            // i create a click advent for the cards i ca evolve
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            // clicking on the card i want to sarifise
                            createCardId.addEventListener("click", () => {
                                // this i want to push that card to the grave and remove the eliment
                                const clicked = creature.dataNum;
                                const sarifeCard = p1field.filter(function (c, index) {
                                    if (c.dataNum === clicked) {
                                        p1grave.push(p1field[index]);
                                        p1field.splice(index, 1);
                                        // removing the eliment
                                        p1Field.removeChild(createCardId);
                                        // evolveing star
                                        p1play(gettingCardData, card, gettingCardData.AbilityOne);

                                    }
                                })
                            })

                        })
                    }






                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1GraveDisplay.appendChild(card);

        },
        AbilityOne: function () {
          
            // subtract 1 from every card on the field
            const sutract = p2field.map(p => p.bottom = p.bottom - 2);
           
            const mins = p2field.map(p => p.basePower = p.bottom);
            const ga = p1field.filter(cards => cards.dataNum === 22);
            ga[0].bottom = ga[0].bottom + p2field.length;
            ga[0].basePower = ga[0].bottom;


            const dead = p2field.filter(function (bz, i) {
                if (bz.bottom <= 0) {
                    p2grave.push(p2field[i]);
                    const name = bz.id;
                    const getId = document.getElementById(name);
                    // removeing card eliment
                    p2Field.removeChild(getId);
                }
            });

            p2field = p2field.filter(sa => sa.bottom > 0);

            fieldUpdate();
            FieldDispaly();

            // changing turns
            if (p1roundender === false && p2roundender === false) {
                p1turn = false;
                p2turn = true;
            } else if (p1roundender === false && p2roundender === true) {
                p1turn = true;
                p2turn = false;
            } else if (p1roundender === true && p2roundender === false) {
                p1turn = false;
                p2turn = true;
            }
            else {
                p1turn = false;
                p2turn = false;
            }
           
            // updateing the the hands so they follow the new turn system
            handUpdate();
            handDisplay();

            // update score
            scoredisplay();
            if (p2turn === true) {

                p2turnChangeAbility[0].FieldAbility()

            }
        }
    }, // has ability
    {
        top: "trish",
        level: 1,
        center: "pic/tp1trish.jpg",
        bottom: 2,
        basePower: 2,
        setPower: 2,
        type: "seventh",
        info: "return a creature from the field back to your hand",
        dataNum: 23,
        id: "trishbasicone",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            if (p1turn === true) {
                card.addEventListener("click", function () {

                    p1play(gettingCardData, this, gettingCardData.AbilityOne);
                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1GraveDisplay.appendChild(card);

        },
        AbilityOne: function () {
            // hath to acount for trish being on the field
            const anyOneHome = p1field.filter(cards => cards.dataNum !== 23 && cards.dataNum !== 55)
           
            if (anyOneHome.length >= 1) {
               
                // finding out if i want to use an ability 
                const tab = document.createElement("div");
                tab.setAttribute("class", "option");
                tab.innerHTML = "would you like to use put a card on the field back in your hand"
                // yes and no options
                const yes = document.createElement("div");
                yes.setAttribute("class", "yes");
                yes.innerHTML = "yes";
                const no = document.createElement("div");
                no.setAttribute("class", "no");
                no.innerHTML = "no";
                // appending eliments
                tab.appendChild(yes);
                tab.appendChild(no);
                p1Field.appendChild(tab);

                // picking no
                no.addEventListener("click", () => {
                    // im going to remove the option tab
                    p1Field.removeChild(tab);
                    if (p1roundender === false && p2roundender === false) {
                        p1turn = false;
                        p2turn = true;
                    } else if (p1roundender === false && p2roundender === true) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === true && p2roundender === false) {
                        p1turn = false;
                        p2turn = true;
                    }
                    else {
                        p1turn = false;
                        p2turn = false;
                    }


                    // updateing the the hands so they follow the new turn system
                    handUpdate();

                    handDisplay();

                    // update score
                    scoredisplay();
                    if (p2turn === true) {

                        p2turnChangeAbility[0].FieldAbility()

                    }
                })

                // picking yes
                yes.addEventListener("click", () => {
                    // removeing yes and no option
                    tab.removeChild(yes);
                    tab.removeChild(no);
                    // change text
                    tab.innerHTML = "select card";

                    

                    //getting card ids
                    anyOneHome.map(function (f, i) {
                        const name = f.id;
                        const getId = document.getElementById(name);

                        getId.addEventListener("click", () => {
                            // return card to the hand
                            p1hand.push(p1field[i]);
                            p1field.splice(i, 1);
                            //remove the div
                            p1Field.removeChild(getId);
                            p1Field.removeChild(tab);

                            handPowercheck();
                            if (p1roundender === false && p2roundender === false) {
                                p1turn = false;
                                p2turn = true;
                            } else if (p1roundender === false && p2roundender === true) {
                                p1turn = true;
                                p2turn = false;
                            } else if (p1roundender === true && p2roundender === false) {
                                p1turn = false;
                                p2turn = true;
                            }
                            else {
                                p1turn = false;
                                p2turn = false;
                            }


                            // updateing the the hands so they follow the new turn system
                            handUpdate();

                            handDisplay();

                            // update score
                            scoredisplay();
                            if (p2turn === true) {

                                p2turnChangeAbility[0].FieldAbility()

                            }

                        })
                    })
                })
            } else {
               
                if (p1roundender === false && p2roundender === false) {
                    p1turn = false;
                    p2turn = true;
                } else if (p1roundender === false && p2roundender === true) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === true && p2roundender === false) {
                    p1turn = false;
                    p2turn = true;
                }
                else {
                    p1turn = false;
                    p2turn = false;
                }


                // updateing the the hands so they follow the new turn system
                handUpdate();
                handDisplay();

                // update score
                scoredisplay();
                if (p2turn === true) {

                    p2turnChangeAbility[0].FieldAbility()

                }
            }
        }
    },// has ability
    {
        top: "mothers return",
        level: 0,
        center: "pic/p1mothersreturn.jpg",
        bottom: "",
        type: "magic",
        info: "return a mother card from the grave back to your hand",
        dataNum: 24,
        id: "motherreturnone",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;
            // must be your turn and there must be a mother card un your grave
            const motherReturn = p1grave.filter(mother => mother.type === "mother")

            if (p1turn === true && motherReturn.length >= 1) {
                card.addEventListener("click", function () {

                    p1play(gettingCardData, this, gettingCardData.AbilityOne);
                })
            }
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1GraveDisplay.appendChild(card);

        },
        AbilityOne: function () {
           
            // removing the grave so it cnt be clicked
            playmat.removeChild(p1Grave);
            

            // finding what cards in my grave is of type mother
            const motherReturn = p1grave.filter(mothers => mothers.type === "mother")

            // displaying div where the grave cards show 
            playmat.appendChild(p1GraveDisplay);
            // showing all the cards in the grave
            p1graveDisplayAfterClick();
            // i want to get the id of every  mother card in my grave
            const revive = motherReturn.map(function (mothers, index) {
                const name = mothers.id;
                const ids = document.getElementById(name);
                // clicking on the target
                ids.addEventListener("click", () => {
                    p1GraveDisplay.removeChild(ids);
                   // add the card with this id to our hand
                    p1hand.push(motherReturn[index]);
                    p1grave = p1grave.filter(ng => ng.id !== name);

                    // removing div where the grave cards show 
                    playmat.removeChild(p1GraveDisplay);
                    // updatting the grave
                    p1graveUpdate()
                    // puting the grave back 
                    playmat.appendChild(p1Grave);

                   

                    if (p1roundender === false && p2roundender === false) {
                        p1turn = false;
                        p2turn = true;
                    } else if (p1roundender === false && p2roundender === true) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === true && p2roundender === false) {
                        p1turn = false;
                        p2turn = true;
                    }
                    else {
                        p1turn = false;
                        p2turn = false;
                    }


                    // updateing the the hands so they follow the new turn system
                    handUpdate();
                    handDisplay();

                    // update score
                    scoredisplay();
                    if (p2turn === true) {

                        p2turnChangeAbility[0].FieldAbility()

                    }
                })

            })
        }
    }, // has ability
    {
        top: "home coming",
        level: 0,
        center: "pic/p1p2homecomeing.jpg",
        bottom: "",
        type: "magic",
        info: " return a card from the battle field to your hand",
        dataNum: 25,
        id: "homecomingone",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            // cards that i would like to be able to grab
            const anyOneHome = p1field.filter(cards => cards.dataNum !== 55);

            if (p1turn === true && anyOneHome.length >=1) {
                card.addEventListener("click", function () {

                    p1play(gettingCardData, this,gettingCardData.AbilityOne);
                })
            }
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1GraveDisplay.appendChild(card);

        },
        AbilityOne: function () {
           
                // finding out if i want to use an ability 
                const tab = document.createElement("div");
                tab.setAttribute("class", "option");
                tab.innerHTML = "return target to your hand"
                p1Field.appendChild(tab);

            // cards that i would like to be able to grab
            const anyOneHome = p1field.filter(cards => cards.dataNum !== 55);

                    //getting card ids
                    anyOneHome.map(function (f, i) {
                        const name = f.id;
                        const getId = document.getElementById(name);

                        getId.addEventListener("click", () => {
                            // return card to the hand
                            p1hand.push(p1field[i]);
                            p1field.splice(i, 1);
                            //remove the div
                            p1Field.removeChild(getId);
                            p1Field.removeChild(tab);

                            handPowercheck();
                            if (p1roundender === false && p2roundender === false) {
                                p1turn = false;
                                p2turn = true;
                            } else if (p1roundender === false && p2roundender === true) {
                                p1turn = true;
                                p2turn = false;
                            } else if (p1roundender === true && p2roundender === false) {
                                p1turn = false;
                                p2turn = true;
                            }
                            else {
                                p1turn = false;
                                p2turn = false;
                            }


                            // updateing the the hands so they follow the new turn system
                            handUpdate();
                            handDisplay();

                            // update score
                            scoredisplay();
                            if (p2turn === true) {

                                p2turnChangeAbility[0].FieldAbility()

                            }

                        })
                    })
                
            
        }
    }, // has ability
    {
        top: "witch battle",
        level: 0,
        center: "pic/p1witchbattle.jpg",
        bottom: "",
        type: "magic",
        info: " witch battle with healer",
        dataNum: 26,
        id: "witchbattleone",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            if (p1turn === true && p1field.length >=1 && p2field.length >= 1) {
                card.addEventListener("click", function () {

                    p1play(gettingCardData, this,gettingCardData.AbilityOne);
                })
            }
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1GraveDisplay.appendChild(card);

        },
        AbilityOne: function () {
            // finding out if i want to use an ability 
            const tab = document.createElement("div");
            tab.setAttribute("class", "option");
            tab.innerHTML = "select a card on your side of the field"
            p1Field.appendChild(tab);

            // get the card we cant to battle 1st
            p1field.map(function(card, index) {
                // get the ids
                const name = card.id;
                const id = document.getElementById(name);

                // add click event to the id
                id.addEventListener("click", () => {
                    // remove all ids so none can be clicked on
                    fieldUpdate();
                    FieldDispaly();

                    // pen tab back to the field after removing all divs
                    p1Field.appendChild(tab);
                    tab.innerHTML = "select card on the other side of the field";

                    // get cards on the other side of the field
                    p2field.map(function (opp, i) {
                        // get the ids
                        const oppName = opp.id;
                        const oppId = document.getElementById(oppName);

                        // add click event on other card
                        oppId.addEventListener("click", () => {
                            // remove all ids so none can be clicked on
                            fieldUpdate();
                            FieldDispaly();

                            if (card.bottom > opp.bottom) {
                                p2grave.push(p2field[i]);
                                p2field.splice(i, 1);
                                fieldUpdate();
                                FieldDispaly();
                            }
                            else if (card.bottom < opp.bottom) {
                                p1grave.push(p1field[index]);
                                p1field.splice(index, 1);

                                opp.bottom = opp.bottom - card.bottom;
                                opp.basePower = opp.bottom;
                                fieldUpdate();
                                FieldDispaly();
                            }
                            else {
                                p2grave.push(p2field[i]);
                                p2field.splice(i, 1);

                                p1grave.push(p1field[index]);
                                p1field.splice(index, 1);
                                fieldUpdate();
                                FieldDispaly();

                            }
                            if (p1roundender === false && p2roundender === false) {
                                p1turn = false;
                                p2turn = true;
                            } else if (p1roundender === false && p2roundender === true) {
                                p1turn = true;
                                p2turn = false;
                            } else if (p1roundender === true && p2roundender === false) {
                                p1turn = false;
                                p2turn = true;
                            }
                            else {
                                p1turn = false;
                                p2turn = false;
                            }


                            // updateing the the hands so they follow the new turn system
                            handUpdate();
                            handDisplay();

                            // update score
                            scoredisplay();
                            if (p2turn === true) {

                                p2turnChangeAbility[0].FieldAbility()

                            }
                        })
                    })
                    
                })
            })

        }
    }, // has ability
    {
        top: "witch battle",
        level: 0,
        center: "pic/p1witchbattle.jpg",
        bottom: "",
        type: "magic",
        info: " witch battle",
        dataNum: 27,
        id: "witchbattletwo",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;


            if (p1turn === true && p1field.length >= 1 && p2field.length >= 1) {
                card.addEventListener("click", function () {

                    p1play(gettingCardData, this, gettingCardData.AbilityOne);
                })
            }
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1GraveDisplay.appendChild(card);

        },
        AbilityOne: function () {
            // finding out if i want to use an ability 
            const tab = document.createElement("div");
            tab.setAttribute("class", "option");
            tab.innerHTML = "select a card on your side of the field"
            p1Field.appendChild(tab);

            // get the card we cant to battle 1st
            p1field.map(function (card, index) {
                // get the ids
                const name = card.id;
                const id = document.getElementById(name);

                // add click event to the id
                id.addEventListener("click", () => {
                    // remove all ids so none can be clicked on
                    fieldUpdate();
                    FieldDispaly();

                    // pen tab back to the field after removing all divs
                    p1Field.appendChild(tab);
                    tab.innerHTML = "select card on the other side of the field";

                    // get cards on the other side of the field
                    p2field.map(function (opp, i) {
                        // get the ids
                        const oppName = opp.id;
                        const oppId = document.getElementById(oppName);

                        // add click event on other card
                        oppId.addEventListener("click", () => {
                            // remove all ids so none can be clicked on
                            fieldUpdate();
                            FieldDispaly();

                            if (card.bottom > opp.bottom) {
                                p2grave.push(p2field[i]);
                                p2field.splice(i, 1);
                                fieldUpdate();
                                FieldDispaly();
                            }
                            else if (card.bottom < opp.bottom) {
                                p1grave.push(p1field[index]);
                                p1field.splice(index, 1);

                                opp.bottom = opp.bottom - card.bottom;
                                opp.basePower = opp.bottom;
                                fieldUpdate();
                                FieldDispaly();
                            }
                            else {
                                p2grave.push(p2field[i]);
                                p2field.splice(i, 1);

                                p1grave.push(p1field[index]);
                                p1field.splice(index, 1);
                                fieldUpdate();
                                FieldDispaly();

                            }
                            if (p1roundender === false && p2roundender === false) {
                                p1turn = false;
                                p2turn = true;
                            } else if (p1roundender === false && p2roundender === true) {
                                p1turn = true;
                                p2turn = false;
                            } else if (p1roundender === true && p2roundender === false) {
                                p1turn = false;
                                p2turn = true;
                            }
                            else {
                                p1turn = false;
                                p2turn = false;
                            }


                            // updateing the the hands so they follow the new turn system
                            handUpdate();
                            handDisplay();

                            // update score
                            scoredisplay();
                            if (p2turn === true) {

                                p2turnChangeAbility[0].FieldAbility()

                            }
                        })
                    })

                })
            })

        }
    }, // has ability
    {
        top: "despell",
        level: 0,
        center: "pic/p1p2remove field.jpg",
        bottom: "",
        type: "magic",
        info: " remove field card from the battle field",
        dataNum: 28,
        id: "despellone",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            if (p1turn === true && land.length >= 1) {
              
                card.addEventListener("click", function () {
                    // empyt out the land aaray
                    if (land[0].owner === "p1") {
                        p1grave.push(land[0]);
                        land.splice(0, 1);
                    } else if (land[0].owner === "p2") {
                        p2grave.push(land[0]);
                        land.splice(0, 1);
                    }

                    p1play(gettingCardData, this);
                })   
                
            }
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1GraveDisplay.appendChild(card);

        }
    },// has ability
    {
        top: "mothers garten",
        level: 0,
        center: "pic/plgardenPower.jpg",
        bottom: "",
        type: "land",
        info: " all mother cards get + 1",
        dataNum: 29,
        id: "mothergartenone",
        owner:"p1",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            if (p1turn === true) {
                card.addEventListener("click", function () {
                    // empyt out the land aaray
                    if (land.length >= 1 && land[0].owner === "p1") {
                        p1grave.push(land[0]);
                        land.splice(0, 1);
                    } else if (land.length >= 1 && land[0].owner === "p2") {
                        p2grave.push(land[0]);
                        land.splice(0, 1);
                    }
                   
                    p1play(gettingCardData, this, gettingCardData.AbilityOne);
                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1GraveDisplay.appendChild(card);

        },
        AbilityOne: function () {
            // check for all mother cards on the field and boost power by 1
            const p1motherBoost = p1field.filter(mt => mt.type === "mother");
            const p2motherBoost = p2field.filter(mt => mt.type === "mother");
            for (let x = 0; x < p1motherBoost.length; x++) {
                p1motherBoost[x].bottom = p1motherBoost[x].bottom + 1;
                p1motherBoost[x].basePower = p1motherBoost[x].bottom;
            }
            for (let x = 0; x < p2motherBoost.length; x++) {
                p2motherBoost[x].bottom = p2motherBoost[x].bottom + 1;
                p2motherBoost[x].basePower = p2motherBoost[x].bottom;
            }
            fieldUpdate();
            FieldDispaly();

            if (p1roundender === false && p2roundender === false) {
                p1turn = false;
                p2turn = true;
            } else if (p1roundender === false && p2roundender === true) {
                p1turn = true;
                p2turn = false;
            } else if (p1roundender === true && p2roundender === false) {
                p1turn = false;
                p2turn = true;
            }
            else {
                p1turn = false;
                p2turn = false;
            }


            // updateing the the hands so they follow the new turn system
            handUpdate();
            handDisplay();

            // update score
            scoredisplay();
            if (p2turn === true) {

                p2turnChangeAbility[0].FieldAbility()

            }
        }
    },// has ability
    {
        top: "bria",
        level: 1,
        center: "pic/plp2bria.jpg",
        bottom: 2,
        basePower: 2,
        setPower: 2,
        type: "seventh",
        info: "draw a card",
        dataNum: 30,
        id: "briabasicthree",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            if (p1turn === true) {
                card.addEventListener("click", function () {

                    p1play(gettingCardData, this, gettingCardData.AbilityOne);
                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p1GraveDisplay.appendChild(card);

        },
        AbilityOne: function () {
            // changing turns
            if (p1roundender === false && p2roundender === false) {
                p1turn = false;
                p2turn = true;
            } else if (p1roundender === false && p2roundender === true) {
                p1turn = true;
                p2turn = false;
            } else if (p1roundender === true && p2roundender === false) {
                p1turn = false;
                p2turn = true;
            }
            else {
                p1turn = false;
                p2turn = false;
            }
            draw(1, 0);
            // updateing the the hands so they follow the new turn system
            handUpdate();
            handDisplay();

            // update score
            scoredisplay();
            if (p2turn === true) {

                p2turnChangeAbility[0].FieldAbility()

            }
        }
    }, // has ability
];
const p2Cards = [
    {
        top: "sasha",
        level: 1,
        center: "pic/p2sasha.jpg",
        bottom: 3,
        basePower: 3,
        setPower: 3,
        type: "reaper",
        info: "discard a card from your hand and draw a card from your deck",
        dataNum: 31,
        id: "sashabasicone",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            if (p2turn === true) {

                card.addEventListener("click", function () {

                    p2play(gettingCardData, this, gettingCardData.abilityOne);

                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2GraveDisplay.appendChild(card);



        },
        abilityOne: function () {
            // dont want turns to change
            p1turn = false;
            p2turn = false;
            // update cards in our hands to apply the there being no change
            handUpdate();
            handDisplay();
            // show cards in your hand
            p2HandUpdate();
            p2HandDisplay();
            // option tab
            const tab = document.createElement("div");
            tab.setAttribute("class", "option");
            tab.innerHTML = "discard a card from your hand and draw a card from your deck"
            // yes and no options
            const yes = document.createElement("div");
            yes.setAttribute("class", "yes");
            yes.innerHTML = "yes";
            const no = document.createElement("div");
            no.setAttribute("class", "no");
            no.innerHTML = "no";
            // appending eliments
            tab.appendChild(yes);
            tab.appendChild(no);
            p2Field.appendChild(tab);
            // if i pick no
            no.addEventListener("click", () => {
                // im going to remove the option tab
                p2Field.removeChild(tab);
                if (p1roundender === false && p2roundender === false) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === false && p2roundender === true) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === true && p2roundender === false) {
                    p1turn = false;
                    p2turn = true;
                }
                else {
                    p1turn = false;
                    p2turn = false;
                }
                // updateing the the hands so they follow the new turn system
                handUpdate();
                handDisplay();

                // update score
                scoredisplay();
                if (p2turn === true) {

                    p2turnChangeAbility[0].FieldAbility()

                }
            })
            if (p2hand.length >= 1) {
                yes.addEventListener("click", () => {
                    // remove the yes and no option
                    tab.removeChild(yes);
                    tab.removeChild(no);
                    //changing tab text
                    tab.innerHTML = "discard a card in your hand";

                    // get all the card ids in your hand
                    const getcards = p2hand.map(function (card, index) {
                        const id = document.getElementById(card.id)
                        // chosing a card to remove
                        id.addEventListener("click", () => {
                            // remove card
                            p2grave.push(p2hand[index]);
                            p2hand.splice(index, 1);
                            // remove tab
                            p2Field.removeChild(tab);
                            // removeing id
                            p2Hand.removeChild(id);
                            // change turns
                            if (p1roundender === false && p2roundender === false) {
                                p1turn = true;
                                p2turn = false;
                            } else if (p1roundender === false && p2roundender === true) {
                                p1turn = true;
                                p2turn = false;
                            } else if (p1roundender === true && p2roundender === false) {
                                p1turn = false;
                                p2turn = true;
                            }
                            else {
                                p1turn = false;
                                p2turn = false;
                            }
                            // draw card from the deck

                            // updateing the the hands so they follow the new turn system
                            handUpdate();
                            draw(0, 1);
                            handDisplay();

                            // update score
                            scoredisplay();
                            if (p2turn === true) {

                                p2turnChangeAbility[0].FieldAbility()

                            }
                        })
                    })
                })
            }
          


        }
    }, // has ability
    {
        top: "sasha",
        level: 1,
        center: "pic/p2sasha.jpg",
        bottom: 3,
        basePower: 3,
        setPower: 3,
        type: "reaper",
        info: "discard a card from your hand and draw a card from your deck",
        dataNum: 32,
        id: "sashabasictwo",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            if (p2turn === true) {
                card.addEventListener("click", function () {

                    p2play(gettingCardData, this, gettingCardData.abilityOne);
                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Field.appendChild(card);


        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2GraveDisplay.appendChild(card);

        },
        abilityOne: function () {
            // dont want turns to change
            p1turn = false;
            p2turn = false;
            // update cards in our hands to apply the there being no change
            handUpdate();
            handDisplay();
            // show cards in your hand
            p2HandUpdate();
            p2HandDisplay();
            // option tab
            const tab = document.createElement("div");
            tab.setAttribute("class", "option");
            tab.innerHTML = "discard a card from your hand and draw a card from your deck"
            // yes and no options
            const yes = document.createElement("div");
            yes.setAttribute("class", "yes");
            yes.innerHTML = "yes";
            const no = document.createElement("div");
            no.setAttribute("class", "no");
            no.innerHTML = "no";
            // appending eliments
            tab.appendChild(yes);
            tab.appendChild(no);
            p2Field.appendChild(tab);
            // if i pick no
            no.addEventListener("click", () => {
                // im going to remove the option tab
                p2Field.removeChild(tab);
                if (p1roundender === false && p2roundender === false) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === false && p2roundender === true) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === true && p2roundender === false) {
                    p1turn = false;
                    p2turn = true;
                }
                else {
                    p1turn = false;
                    p2turn = false;
                }
                // updateing the the hands so they follow the new turn system
                handUpdate();
                handDisplay();

                // update score
                scoredisplay();
                if (p2turn === true) {

                    p2turnChangeAbility[0].FieldAbility()

                }
            })
            if (p2hand.length >= 1) {
                yes.addEventListener("click", () => {
                    // remove the yes and no option
                    tab.removeChild(yes);
                    tab.removeChild(no);

                    //changing tab text
                    tab.innerHTML = "discard a card in your hand";
                    // get all the card ids in your hand
                    const getcards = p2hand.map(function (card, index) {
                        const id = document.getElementById(card.id)
                        // chosing a card to remove
                        id.addEventListener("click", () => {
                            // remove card
                            p2grave.push(p2hand[index]);
                            p2hand.splice(index, 1);
                            // remove tab
                            p2Field.removeChild(tab);
                            // removeing id
                            p2Hand.removeChild(id);
                            // change turns
                            if (p1roundender === false && p2roundender === false) {
                                p1turn = true;
                                p2turn = false;
                            } else if (p1roundender === false && p2roundender === true) {
                                p1turn = true;
                                p2turn = false;
                            } else if (p1roundender === true && p2roundender === false) {
                                p1turn = false;
                                p2turn = true;
                            }
                            else {
                                p1turn = false;
                                p2turn = false;
                            }
                            // updateing the the hands so they follow the new turn system
                            handUpdate();
                            draw(0, 1);
                            handDisplay();

                            // update score
                            scoredisplay();
                            if (p2turn === true) {

                                p2turnChangeAbility[0].FieldAbility()

                            }
                        })
                    })



                })
            }
          


        }
    }, // has ability
    {
        top: "sasha",
        level: 1,
        center: "pic/p2sasha.jpg",
        bottom: 3,
        basePower: 3,
        setPower: 3,
        type: "reaper",
        info: "discard a card from your hand and draw a card from your deck",
        dataNum: 33,
        id: "sashabasicthree",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            if (p2turn === true) {
                card.addEventListener("click", function () {

                    p2play(gettingCardData, this, gettingCardData.abilityOne);
                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Field.appendChild(card);


        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2GraveDisplay.appendChild(card);

        },
        abilityOne: function () {
            // dont want turns to change
            p1turn = false;
            p2turn = false;
            // update cards in our hands to apply the there being no change
            handUpdate();
            handDisplay();
            // show cards in your hand
            p2HandUpdate();
            p2HandDisplay();
            // option tab
            const tab = document.createElement("div");
            tab.setAttribute("class", "option");
            tab.innerHTML = "discard a card from your hand and draw a card from your deck"
            // yes and no options
            const yes = document.createElement("div");
            yes.setAttribute("class", "yes");
            yes.innerHTML = "yes";
            const no = document.createElement("div");
            no.setAttribute("class", "no");
            no.innerHTML = "no";
            // appending eliments
            tab.appendChild(yes);
            tab.appendChild(no);
            p2Field.appendChild(tab);
            // if i pick no
            no.addEventListener("click", () => {
                // im going to remove the option tab
                p2Field.removeChild(tab);
                if (p1roundender === false && p2roundender === false) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === false && p2roundender === true) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === true && p2roundender === false) {
                    p1turn = false;
                    p2turn = true;
                }
                else {
                    p1turn = false;
                    p2turn = false;
                }
                // updateing the the hands so they follow the new turn system
                handUpdate();
                handDisplay();

                // update score
                if (p2turn === true) {

                    p2turnChangeAbility[0].FieldAbility()

                }
            })
            if (p2hand.length >= 1) {
                yes.addEventListener("click", () => {
                    // remove the yes and no option
                    tab.removeChild(yes);
                    tab.removeChild(no);
                    //changing tab text
                    tab.innerHTML = "discard a card in your hand";
                    // get all the card ids in your hand
                    const getcards = p2hand.map(function (card, index) {
                        const id = document.getElementById(card.id)
                        // chosing a card to remove
                        id.addEventListener("click", () => {
                            // remove card
                            p2grave.push(p2hand[index]);
                            p2hand.splice(index, 1);
                            // remove tab
                            p2Field.removeChild(tab);
                            // removeing id
                            p2Hand.removeChild(id);
                            // change turns
                            if (p1roundender === false && p2roundender === false) {
                                p1turn = true;
                                p2turn = false;
                            } else if (p1roundender === false && p2roundender === true) {
                                p1turn = true;
                                p2turn = false;
                            } else if (p1roundender === true && p2roundender === false) {
                                p1turn = false;
                                p2turn = true;
                            }
                            else {
                                p1turn = false;
                                p2turn = false;
                            }
                            // updateing the the hands so they follow the new turn system
                            handUpdate();
                            draw(0, 1);
                            handDisplay();

                            // update score
                            scoredisplay();
                            if (p2turn === true) {

                                p2turnChangeAbility[0].FieldAbility()

                            }
                        })
                    })
                })
            }


        }
    }, // has ability
    {
        top: "sasha",
        level: 2,
        center: "pic/p2sashalv2.jpg",
        bottom: 5,
        basePower: 5,
        setPower: 5,
        type: "reaper",
        info: "discard a card from your hand to discard a random cards from your opponets hand",
        dataNum: 34,
        id: "sashalvtwoone",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            // serching to see if there is a evolution match is on the field
            let evamatch = p2field.filter(function (creature) {
                if (creature.dataNum === 31 || creature.dataNum === 32 || creature.dataNum === 33) {
                    return creature
                }
            })

            // condishions to summpnd this card
            if (p2turn === true && evamatch.length >= 1) {

                // when i click on this card
                card.addEventListener("click", function () {

                    // if there is only one card that can be sarafise it will happend automatic
                    if (evamatch.length === 1) {

                        // get the id for the card i would like to evolve
                        const getId = evamatch.forEach(function (creature) {
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            //i would like to filter that card off the field
                            const sarifeCard = p2field.filter(function (c, index) {
                                // checking to see if that card dataNum is the same as the only in the evamatch
                                if (c.dataNum === evamatch[0].dataNum) {
                                    p2grave.push(p2field[index]);
                                    p2field.splice(index, 1);
                                    // removing the eliment
                                    p2Field.removeChild(createCardId);
                                    // evolveing star
                                    p2play(gettingCardData, card, gettingCardData.abilityOne);

                                }
                            })

                        })

                    }
                    else {
                        // creat a tab that tells me to sarafise a star basic card
                        const tab = document.createElement("div");
                        tab.setAttribute("class", "infoTab");
                        tab.innerHTML = "sacrifice a basic star card inorder to summond this one";

                        p2Field.appendChild(tab);

                        const getId = evamatch.forEach(function (creature) {
                            // i create a click advent for the cards i ca evolve
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            // clicking on the card i want to sarifise
                            createCardId.addEventListener("click", () => {
                                // this i want to push that card to the grave and remove the eliment
                                const clicked = creature.dataNum;
                                const sarifeCard = p2field.filter(function (c, index) {
                                    if (c.dataNum === clicked) {
                                        p2grave.push(p2field[index]);
                                        p2field.splice(index, 1);
                                        // removing the eliment
                                        p2Field.removeChild(createCardId);
                                        // evolveing star
                                        p2play(gettingCardData, card, gettingCardData.abilityOne);

                                    }
                                })
                            })

                        })
                    }






                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Field.appendChild(card);


        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2GraveDisplay.appendChild(card);

        },
        abilityOne: function () {
            // dont want turns to change
            p1turn = false;
            p2turn = false;
            // update cards in our hands to apply the there being no change
            handUpdate();
            handDisplay();
            // show cards in your hand
            p2HandUpdate();
            p2HandDisplay();
            // option tab
            const tab = document.createElement("div");
            tab.setAttribute("class", "option");
            tab.innerHTML = "discard a card from your hand & randonly remove a cards from your opponets hand"
            // yes and no options
            const yes = document.createElement("div");
            yes.setAttribute("class", "yes");
            yes.innerHTML = "yes";
            const no = document.createElement("div");
            no.setAttribute("class", "no");
            no.innerHTML = "no";
            // appending eliments
            tab.appendChild(yes);
            tab.appendChild(no);
            p2Field.appendChild(tab);
            // if i pick no
            no.addEventListener("click", () => {
                // im going to remove the option tab
                p2Field.removeChild(tab);
                if (p1roundender === false && p2roundender === false) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === false && p2roundender === true) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === true && p2roundender === false) {
                    p1turn = false;
                    p2turn = true;
                }
                else {
                    p1turn = false;
                    p2turn = false;
                }
                // updateing the the hands so they follow the new turn system
                handUpdate();
                handDisplay();

                // update score
                scoredisplay();
                if (p2turn === true) {

                    p2turnChangeAbility[0].FieldAbility()

                }
            })
            yes.addEventListener("click", () => {
                // remove the yes and no option
                tab.removeChild(yes);
                tab.removeChild(no);
                //changing tab text
                tab.innerHTML = "discard a card in your hand";
                // get all the card ids in your hand
                const getcards = p2hand.map(function (card, index) {
                    const id = document.getElementById(card.id)
                    // chosing a card to remove
                    id.addEventListener("click", () => {
                        // remove card
                        p2grave.push(p2hand[index]);
                        p2hand.splice(index, 1);
                        // remove tab
                        p2Field.removeChild(tab);
                        // removeing id
                        p2Hand.removeChild(id);
                        // if player 1 has more atleast two cards in his had
                        if (p1hand.length >= 1 && p2hand.length >= 1) {
                            // get a random card from opponet hand
                            const pick = Math.random() * p1hand.length;
                            const randomInt = Math.floor(pick);
                            // removecard div
                            p1Hand.removeChild(p1Hand.lastChild);
                            // put random card in the grave
                            p1grave.push(p1hand[randomInt]);
                            p1hand.splice(randomInt, 1);
                        }

                        // change turns
                        if (p1roundender === false && p2roundender === false) {
                            p1turn = true;
                            p2turn = false;
                        } else if (p1roundender === false && p2roundender === true) {
                            p1turn = true;
                            p2turn = false;
                        } else if (p1roundender === true && p2roundender === false) {
                            p1turn = false;
                            p2turn = true;
                        }
                        else {
                            p1turn = false;
                            p2turn = false;
                        }
                        // updateing the the hands so they follow the new turn system
                        handUpdate();
                        handDisplay();

                        // update score
                        scoredisplay();
                        if (p2turn === true) {

                            p2turnChangeAbility[0].FieldAbility()

                        }
                    })
                })
            })


        }
    }, // has ability
    {
        top: "sasha",
        level: 2,
        center: "pic/p2sashalv2.jpg",
        bottom: 5,
        basePower: 5,
        setPower: 5,
        type: "reaper",
        info: "discard a card from your hand to a random cards from your opponets hand",
        dataNum: 35,
        id: "sashalvtwotwo",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            // serching to see if there is a evolution match is on the field
            let evamatch = p2field.filter(function (creature) {
                if (creature.dataNum === 31 || creature.dataNum === 32 || creature.dataNum === 33) {
                    return creature
                }
            })

            // condishions to summpnd this card
            if (p2turn === true && evamatch.length >= 1) {

                // when i click on this card
                card.addEventListener("click", function () {

                    // if there is only one card that can be sarafise it will happend automatic
                    if (evamatch.length === 1) {

                        // get the id for the card i would like to evolve
                        const getId = evamatch.forEach(function (creature) {
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            //i would like to filter that card off the field
                            const sarifeCard = p2field.filter(function (c, index) {
                                // checking to see if that card dataNum is the same as the only in the evamatch
                                if (c.dataNum === evamatch[0].dataNum) {
                                    p2grave.push(p2field[index]);
                                    p2field.splice(index, 1);
                                    // removing the eliment
                                    p2Field.removeChild(createCardId);
                                    // evolveing star
                                    p2play(gettingCardData, card, gettingCardData.abilityOne);

                                }
                            })

                        })

                    }
                    else {
                        // creat a tab that tells me to sarafise a star basic card
                        const tab = document.createElement("div");
                        tab.setAttribute("class", "infoTab");
                        tab.innerHTML = "sacrifice a basic star card inorder to summond this one";

                        p2Field.appendChild(tab);

                        const getId = evamatch.forEach(function (creature) {
                            // i create a click advent for the cards i ca evolve
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            // clicking on the card i want to sarifise
                            createCardId.addEventListener("click", () => {
                                // this i want to push that card to the grave and remove the eliment
                                const clicked = creature.dataNum;
                                const sarifeCard = p2field.filter(function (c, index) {
                                    if (c.dataNum === clicked) {
                                        p2grave.push(p2field[index]);
                                        p2field.splice(index, 1);
                                        // removing the eliment
                                        p2Field.removeChild(createCardId);
                                        // evolveing star
                                        p2play(gettingCardData, card, gettingCardData.abilityOne);

                                    }
                                })
                            })

                        })
                    }






                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Field.appendChild(card);


        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2GraveDisplay.appendChild(card);

        },
        abilityOne: function () {
            // dont want turns to change
            p1turn = false;
            p2turn = false;
            // update cards in our hands to apply the there being no change
            handUpdate();
            handDisplay();
            // show cards in your hand
            p2HandUpdate();
            p2HandDisplay();
            // option tab
            const tab = document.createElement("div");
            tab.setAttribute("class", "option");
            tab.innerHTML = "discard a card from your hand & randonly remove a cards from your opponets hand"
            // yes and no options
            const yes = document.createElement("div");
            yes.setAttribute("class", "yes");
            yes.innerHTML = "yes";
            const no = document.createElement("div");
            no.setAttribute("class", "no");
            no.innerHTML = "no";
            // appending eliments
            tab.appendChild(yes);
            tab.appendChild(no);
            p2Field.appendChild(tab);
            // if i pick no
            no.addEventListener("click", () => {
                // im going to remove the option tab
                p2Field.removeChild(tab);
                if (p1roundender === false && p2roundender === false) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === false && p2roundender === true) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === true && p2roundender === false) {
                    p1turn = false;
                    p2turn = true;
                }
                else {
                    p1turn = false;
                    p2turn = false;
                }
                // updateing the the hands so they follow the new turn system
                handUpdate();
                handDisplay();

                // update score
                scoredisplay();
                if (p2turn === true) {

                    p2turnChangeAbility[0].FieldAbility()

                }
            })
            yes.addEventListener("click", () => {
                // remove the yes and no option
                tab.removeChild(yes);
                tab.removeChild(no);
                //changing tab text
                tab.innerHTML = "discard a card in your hand";
                // get all the card ids in your hand
                const getcards = p2hand.map(function (card, index) {
                    const id = document.getElementById(card.id)
                    // chosing a card to remove
                    id.addEventListener("click", () => {
                        // remove card
                        p2grave.push(p2hand[index]);
                        p2hand.splice(index, 1);
                        // remove tab
                        p2Field.removeChild(tab);
                        // removeing id
                        p2Hand.removeChild(id);
                        // if player 1 has more atleast two cards in his had
                        if (p1hand.length >= 1 && p2hand.length >= 1) {
                            // get a random card from opponet hand
                            const pick = Math.random() * p1hand.length;
                            const randomInt = Math.floor(pick);
                            // removecard div
                            p1Hand.removeChild(p1Hand.lastChild);
                            // put random card in the grave
                            p1grave.push(p1hand[randomInt]);
                            p1hand.splice(randomInt, 1);
                        }

                        // change turns
                        if (p1roundender === false && p2roundender === false) {
                            p1turn = true;
                            p2turn = false;
                        } else if (p1roundender === false && p2roundender === true) {
                            p1turn = true;
                            p2turn = false;
                        } else if (p1roundender === true && p2roundender === false) {
                            p1turn = false;
                            p2turn = true;
                        }
                        else {
                            p1turn = false;
                            p2turn = false;
                        }
                        // updateing the the hands so they follow the new turn system
                        handUpdate();

                        handDisplay();

                        // update score
                        scoredisplay();
                        if (p2turn === true) {

                            p2turnChangeAbility[0].FieldAbility()

                        }
                    })
                })
            })


        }
    }, // has ability
    {
        top: "sasha",
        level: 2,
        center: "pic/p2sashalv2.jpg",
        bottom: 5,
        basePower: 5,
        setPower: 5,
        type: "reaper",
        info: "discard a card from your hand to discard a random cards from your opponets hand",
        dataNum: 36,
        id: "sashalvtwothree",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            // serching to see if there is a evolution match is on the field
            let evamatch = p2field.filter(function (creature) {
                if (creature.dataNum === 31 || creature.dataNum === 32 || creature.dataNum === 33) {
                    return creature
                }
            })

            // condishions to summpnd this card
            if (p2turn === true && evamatch.length >= 1) {

                // when i click on this card
                card.addEventListener("click", function () {

                    // if there is only one card that can be sarafise it will happend automatic
                    if (evamatch.length === 1) {

                        // get the id for the card i would like to evolve
                        const getId = evamatch.forEach(function (creature) {
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            //i would like to filter that card off the field
                            const sarifeCard = p2field.filter(function (c, index) {
                                // checking to see if that card dataNum is the same as the only in the evamatch
                                if (c.dataNum === evamatch[0].dataNum) {
                                    p2grave.push(p2field[index]);
                                    p2field.splice(index, 1);
                                    // removing the eliment
                                    p2Field.removeChild(createCardId);
                                    // evolveing star
                                    p2play(gettingCardData, card, gettingCardData.abilityOne);

                                }
                            })

                        })

                    }
                    else {
                        // creat a tab that tells me to sarafise a star basic card
                        const tab = document.createElement("div");
                        tab.setAttribute("class", "infoTab");
                        tab.innerHTML = "sacrifice a basic star card inorder to summond this one";

                        p2Field.appendChild(tab);

                        const getId = evamatch.forEach(function (creature) {
                            // i create a click advent for the cards i ca evolve
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            // clicking on the card i want to sarifise
                            createCardId.addEventListener("click", () => {
                                // this i want to push that card to the grave and remove the eliment
                                const clicked = creature.dataNum;
                                const sarifeCard = p2field.filter(function (c, index) {
                                    if (c.dataNum === clicked) {
                                        p2grave.push(p2field[index]);
                                        p2field.splice(index, 1);
                                        // removing the eliment
                                        p2Field.removeChild(createCardId);
                                        // evolveing star
                                        p2play(gettingCardData, card, gettingCardData.abilityOne);

                                    }
                                })
                            })

                        })
                    }






                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Field.appendChild(card);


        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2GraveDisplay.appendChild(card);

        },
        abilityOne: function () {
            // dont want turns to change
            p1turn = false;
            p2turn = false;
            // update cards in our hands to apply the there being no change
            handUpdate();
            handDisplay();
            // show cards in your hand
            p2HandUpdate();
            p2HandDisplay();
            // option tab
            const tab = document.createElement("div");
            tab.setAttribute("class", "option");
            tab.innerHTML = "discard a card from your hand & randonly remove a cards from your opponets hand"
            // yes and no options
            const yes = document.createElement("div");
            yes.setAttribute("class", "yes");
            yes.innerHTML = "yes";
            const no = document.createElement("div");
            no.setAttribute("class", "no");
            no.innerHTML = "no";
            // appending eliments
            tab.appendChild(yes);
            tab.appendChild(no);
            p2Field.appendChild(tab);
            // if i pick no
            no.addEventListener("click", () => {
                // im going to remove the option tab
                p2Field.removeChild(tab);
                if (p1roundender === false && p2roundender === false) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === false && p2roundender === true) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === true && p2roundender === false) {
                    p1turn = false;
                    p2turn = true;
                }
                else {
                    p1turn = false;
                    p2turn = false;
                }
                // updateing the the hands so they follow the new turn system
                handUpdate();
                handDisplay();

                // update score
                scoredisplay();
                if (p2turn === true) {

                    p2turnChangeAbility[0].FieldAbility()

                }
            })
            yes.addEventListener("click", () => {
                // remove the yes and no option
                tab.removeChild(yes);
                tab.removeChild(no);
                //changing tab text
                tab.innerHTML = "discard a card in your hand";
                // get all the card ids in your hand
                const getcards = p2hand.map(function (card, index) {
                    const id = document.getElementById(card.id)
                    // chosing a card to remove
                    id.addEventListener("click", () => {
                        // remove card
                        p2grave.push(p2hand[index]);
                        p2hand.splice(index, 1);
                        // remove tab
                        p2Field.removeChild(tab);
                        // removeing id
                        p2Hand.removeChild(id);
                        // if player 1 has more atleast two cards in his had
                        if (p1hand.length >= 1 && p2hand.length >= 1) {
                            // get a random card from opponet hand
                            const pick = Math.random() * p1hand.length;
                            const randomInt = Math.floor(pick);
                            // removecard div
                            p1Hand.removeChild(p1Hand.lastChild);
                            // put random card in the grave
                            p1grave.push(p1hand[randomInt]);
                            p1hand.splice(randomInt, 1);
                        }

                        // change turns
                        if (p1roundender === false && p2roundender === false) {
                            p1turn = true;
                            p2turn = false;
                        } else if (p1roundender === false && p2roundender === true) {
                            p1turn = true;
                            p2turn = false;
                        } else if (p1roundender === true && p2roundender === false) {
                            p1turn = false;
                            p2turn = true;
                        }
                        else {
                            p1turn = false;
                            p2turn = false;
                        }
                        // updateing the the hands so they follow the new turn system
                        handUpdate();

                        handDisplay();

                        // update score
                        scoredisplay();
                        if (p2turn === true) {

                            p2turnChangeAbility[0].FieldAbility()

                        }
                    })
                })
            })


        }
    }, // has ability
    {
        top: "sasha",
        level: 3,
        center: "pic/p2sashalv3.jpg",
        bottom: 8,
        basePower: 8,
        setPower: 8,
        type: "reaper",
        info: "draw a card, create a reaper tocken ,that tocken gains + 1 for each card in youn grave",
        dataNum: 37,
        id: "sashalvthreeone",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            // serching to see if there is a evolution match is on the field
            let evamatch = p2field.filter(function (creature) {
                if (creature.dataNum === 36 || creature.dataNum === 35 || creature.dataNum === 34) {
                    return creature
                }
            })

            // condishions to summpnd this card
            if (p2turn === true && evamatch.length >= 1) {

                // when i click on this card
                card.addEventListener("click", function () {

                    // if there is only one card that can be sarafise it will happend automatic
                    if (evamatch.length === 1) {

                        // get the id for the card i would like to evolve
                        const getId = evamatch.forEach(function (creature) {
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            //i would like to filter that card off the field
                            const sarifeCard = p2field.filter(function (c, index) {
                                // checking to see if that card dataNum is the same as the only in the evamatch
                                if (c.dataNum === evamatch[0].dataNum) {
                                    p2grave.push(p2field[index]);
                                    p2field.splice(index, 1);
                                    // removing the eliment
                                    p2Field.removeChild(createCardId);
                                    // evolveing star
                                    p2play(gettingCardData, card, gettingCardData.abilityOne);

                                }
                            })

                        })

                    }
                    else {
                        // creat a tab that tells me to sarafise a star basic card
                        const tab = document.createElement("div");
                        tab.setAttribute("class", "infoTab");
                        tab.innerHTML = "sacrifice a basic star card inorder to summond this one";

                        p2Field.appendChild(tab);

                        const getId = evamatch.forEach(function (creature) {
                            // i create a click advent for the cards i ca evolve
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            // clicking on the card i want to sarifise
                            createCardId.addEventListener("click", () => {
                                // this i want to push that card to the grave and remove the eliment
                                const clicked = creature.dataNum;
                                const sarifeCard = p2field.filter(function (c, index) {
                                    if (c.dataNum === clicked) {
                                        p2grave.push(p2field[index]);
                                        p2field.splice(index, 1);
                                        // removing the eliment
                                        p2Field.removeChild(createCardId);
                                        // evolveing star
                                        p2play(gettingCardData, card, gettingCardData.abilityOne);

                                    }
                                })
                            })

                        })
                    }






                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Field.appendChild(card);


        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2GraveDisplay.appendChild(card);

        },
        abilityOne: function () {
            // creating creature tocken
            p2field.push(p2tockens[0]);
            //give reper tocken a power
            const reaperPower = p2field.filter(rt => rt.dataNum === 0);
            reaperPower.map(power => power.bottom = p2grave.length);
            reaperPower.map(power => power.basePower = power.bottom);
            // update field
            fieldUpdate();
            FieldDispaly();
            // dont want turns to change
            p1turn = false;
            p2turn = false;
            // update cards in our hands to apply the there being no change
            handUpdate();
            handDisplay();

            // show cards in your hand
            p2HandUpdate();
            p2HandDisplay();

            // finding out if i want to use an ability this turn
            const tab = document.createElement("div");
            tab.setAttribute("class", "option");
            tab.innerHTML = "would you like to use an ability this turn"
            // yes and no options
            const yes = document.createElement("div");
            yes.setAttribute("class", "yes");
            yes.innerHTML = "yes";
            const no = document.createElement("div");
            no.setAttribute("class", "no");
            no.innerHTML = "no";
            // appending eliments
            tab.appendChild(yes);
            tab.appendChild(no);
            p2Field.appendChild(tab);
            // if i pick no
            no.addEventListener("click", () => {
                // im going to remove the option tab
                p2Field.removeChild(tab);
                if (p1roundender === false && p2roundender === false) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === false && p2roundender === true) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === true && p2roundender === false) {
                    p1turn = false;
                    p2turn = true;
                }
                else {
                    p1turn = false;
                    p2turn = false;
                }


                // updateing the the hands so they follow the new turn system
                handUpdate();
                draw(0, 1);
                handDisplay();

                // update score
                scoredisplay();
                if (p2turn === true) {

                    p2turnChangeAbility[0].FieldAbility()

                }
            })
            // yes option
            yes.addEventListener("click", () => {
                // removing yes and no form the tab
                tab.removeChild(yes);
                tab.removeChild(no);
                tab.innerHTML = "";


                // creating ability 1 
                const destroyer = document.createElement("div");
                destroyer.setAttribute("class", "destroyer");
                destroyer.innerHTML = "witch battle";
                tab.appendChild(destroyer);


                // creating ability 2
                const rebirth = document.createElement("div");
                rebirth.setAttribute("class", "rebirth");
                rebirth.innerHTML = "rebirth";
                tab.appendChild(rebirth);


                // creating ability 3
                const powerUp = document.createElement("div");
                powerUp.setAttribute("class", "powerUp");
                powerUp.innerHTML = "power up";
                tab.appendChild(powerUp);




                // destroyer ability
                destroyer.addEventListener("click", () => {
                    if (p1field.length >= 1) {
                        // remove othe optios
                        tab.removeChild(destroyer);
                        tab.removeChild(rebirth);
                        tab.removeChild(powerUp);
                        // change text
                        tab.innerHTML = "select target";
                        // get opponets cards
                        const targets = p1field.map(function (t, index) {
                            const name = t.id;
                            const ids = document.getElementById(name);
                            // selecting targe and finding out if its stronger or not
                            ids.addEventListener("click", () => {
                                if (reaperPower[0].bottom > t.bottom) {
                                    // subtract damange from the reaper
                                    reaperPower[0].bottom = reaperPower[0].bottom - t.bottom;
                                    reaperPower[0].basePower = reaperPower[0].bottom;
                                    // destroy opponet card
                                    p1grave.push(p1field[index]);
                                    p1field.splice(index, 1);
                                    p1Field.removeChild(ids);
                                    // removing the tab
                                    p2Field.removeChild(tab);
                                    fieldUpdate();
                                    FieldDispaly();

                                    // changing turns
                                    if (p1roundender === false && p2roundender === false) {
                                        p1turn = true;
                                        p2turn = false;
                                    } else if (p1roundender === false && p2roundender === true) {
                                        p1turn = true;
                                        p2turn = false;
                                    } else if (p1roundender === true && p2roundender === false) {
                                        p1turn = false;
                                        p2turn = true;
                                    }
                                    else {
                                        p1turn = false;
                                        p2turn = false;
                                    }
                                    // updateing the the hands so they follow the new turn system
                                    handUpdate();
                                    draw(0, 1);
                                    handDisplay();

                                    // update score
                                    scoredisplay();
                                    if (p2turn === true) {

                                        p2turnChangeAbility[0].FieldAbility()

                                    }
                                }
                                else if (reaperPower[0].bottom < t.bottom) {
                                    // subtracting damange
                                    t.bottom = t.bottom - reaperPower[0].bottom;
                                    t.basePower = t.basePower - reaperPower[0].bottom;

                                    // finding reaper id
                                    const findingReaper = p2field.filter(function (reaper, i) {
                                        if (reaper.dataNum === 0) {
                                            p2field.splice(i, 1);
                                            const getId = reaper.id;
                                            const reaperid = document.getElementById(getId);
                                            p2Field.removeChild(reaperid);
                                        }
                                    })

                                    // removing the tab
                                    p2Field.removeChild(tab);
                                    fieldUpdate();
                                    FieldDispaly();

                                    // changing turns
                                    if (p1roundender === false && p2roundender === false) {
                                        p1turn = true;
                                        p2turn = false;
                                    } else if (p1roundender === false && p2roundender === true) {
                                        p1turn = true;
                                        p2turn = false;
                                    } else if (p1roundender === true && p2roundender === false) {
                                        p1turn = false;
                                        p2turn = true;
                                    }
                                    else {
                                        p1turn = false;
                                        p2turn = false;
                                    }
                                    // updateing the the hands so they follow the new turn system
                                    handUpdate();
                                    draw(0, 1);
                                    handDisplay();

                                    // update score
                                    scoredisplay();
                                    if (p2turn === true) {

                                        p2turnChangeAbility[0].FieldAbility()

                                    }
                                }
                                else {
                                    // destroy opponet card
                                    p1grave.push(p1field[index]);
                                    p1field.splice(index, 1);
                                    p1Field.removeChild(ids);
                                    // finding reaper id
                                    const findingReaper = p2field.filter(function (reaper, i) {
                                        if (reaper.dataNum === 0) {
                                            p2field.splice(i, 1);
                                            const getId = reaper.id;
                                            const reaperid = document.getElementById(getId);
                                            p2Field.removeChild(reaperid);
                                        }
                                    })

                                    // removing the tab
                                    p2Field.removeChild(tab);
                                    fieldUpdate();
                                    FieldDispaly();

                                    // changing turns
                                    if (p1roundender === false && p2roundender === false) {
                                        p1turn = true;
                                        p2turn = false;
                                    } else if (p1roundender === false && p2roundender === true) {
                                        p1turn = true;
                                        p2turn = false;
                                    } else if (p1roundender === true && p2roundender === false) {
                                        p1turn = false;
                                        p2turn = true;
                                    }
                                    else {
                                        p1turn = false;
                                        p2turn = false;
                                    }
                                    // updateing the the hands so they follow the new turn system
                                    handUpdate();
                                    draw(0, 1);
                                    handDisplay();

                                    // update score
                                    scoredisplay();
                                    if (p2turn === true) {

                                        p2turnChangeAbility[0].FieldAbility()

                                    }
                                }
                            });
                        })
                    }


                })
                // rebirth ability
                rebirth.addEventListener("click", () => {
                    if (p2grave.length >= 1) {
                       
                        checkInPower();
                        // remove othe optios
                        tab.removeChild(destroyer);
                        tab.removeChild(rebirth);
                        tab.removeChild(powerUp);
                        // change text
                        p2Field.removeChild(tab)
                        // displaying cards from my grave
                        playmat.appendChild(p2GraveDisplay);
                        p2graveDisplayAfterClick();
                        // i want to get the id of every card in my grave
                        const revive = p2grave.map(function (g, index) {
                            const name = g.id;
                            const ids = document.getElementById(name);
                            // clicking on the target
                            ids.addEventListener("click", () => {
                                p2GraveDisplay.removeChild(ids);
                                p2hand.push(p2grave[index]);
                                p2grave.splice(index, 1);

                                // remove the reaper
                                const findingReaper = p2field.filter(function (reaper, i) {
                                    if (reaper.dataNum === 0) {
                                        p2field.splice(i, 1);
                                        const getId = reaper.id;
                                        const reaperid = document.getElementById(getId);
                                        p2Field.removeChild(reaperid);
                                    }
                                })
                                // remove the grave imange
                                playmat.removeChild(p2GraveDisplay);
                                p2graveUpdate();

                                // changing turns
                                if (p1roundender === false && p2roundender === false) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === false && p2roundender === true) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === true && p2roundender === false) {
                                    p1turn = false;
                                    p2turn = true;
                                }
                                else {
                                    p1turn = false;
                                    p2turn = false;
                                }
                                // updateing the the hands so they follow the new turn system
                                handUpdate();
                                draw(0, 1);
                                handDisplay();

                                // update score
                                scoredisplay();
                                if (p2turn === true) {

                                    p2turnChangeAbility[0].FieldAbility()

                                }
                            })
                        })
                    }

                })
                // power up ability
                powerUp.addEventListener("click", () => {
                    if (p2hand.length >= 1) {
                        // remove othe optios
                        tab.removeChild(destroyer);
                        tab.removeChild(rebirth);
                        tab.removeChild(powerUp);
                        // change text
                        tab.innerHTML = "discard a card in your hand";
                        // get the id of all cards in my hand
                        const getcards = p2hand.map(function (card, index) {
                            const id = document.getElementById(card.id)
                            // chosing a card to remove
                            id.addEventListener("click", () => {
                                // remove card
                                p2grave.push(p2hand[index]);
                                p2hand.splice(index, 1);
                                // remove tab
                                p2Field.removeChild(tab);
                                // removeing card
                                p2Hand.removeChild(id);

                                // giving the reaper tocken a +1
                                const powerUpability = p2field.filter(rt => rt.dataNum === 0);
                                powerUpability.map(power => power.bottom = power.bottom + 1);
                                powerUpability.map(power => power.basePower = power.bottom);
                                fieldUpdate();
                                FieldDispaly();

                                // changing turns
                                if (p1roundender === false && p2roundender === false) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === false && p2roundender === true) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === true && p2roundender === false) {
                                    p1turn = false;
                                    p2turn = true;
                                }
                                else {
                                    p1turn = false;
                                    p2turn = false;
                                }
                                // updateing the the hands so they follow the new turn system
                                handUpdate();
                                draw(0, 1);
                                handDisplay();

                                // update score
                                scoredisplay();
                                if (p2turn === true) {

                                    p2turnChangeAbility[0].FieldAbility()

                                }
                            })
                        })
                    }

                })
            })
        }


    }, // has ability
    {
        top: "sasha",
        level: 3,
        center: "pic/p2sashalv3.jpg",
        bottom: 8,
        basePower: 8,
        setPower: 8,
        type: "reaper",
        info: " draw a card, create a reaper tocken ,that tocken gains + 1 for each card in youn grave",
        dataNum: 38,
        id: "sashalvthreetwo",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            // serching to see if there is a evolution match is on the field
            let evamatch = p2field.filter(function (creature) {
                if (creature.dataNum === 36 || creature.dataNum === 35 || creature.dataNum === 34) {
                    return creature
                }
            })

            // condishions to summpnd this card
            if (p2turn === true && evamatch.length >= 1) {

                // when i click on this card
                card.addEventListener("click", function () {

                    // if there is only one card that can be sarafise it will happend automatic
                    if (evamatch.length === 1) {

                        // get the id for the card i would like to evolve
                        const getId = evamatch.forEach(function (creature) {
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            //i would like to filter that card off the field
                            const sarifeCard = p2field.filter(function (c, index) {
                                // checking to see if that card dataNum is the same as the only in the evamatch
                                if (c.dataNum === evamatch[0].dataNum) {
                                    p2grave.push(p2field[index]);
                                    p2field.splice(index, 1);
                                    // removing the eliment
                                    p2Field.removeChild(createCardId);
                                    // evolveing star
                                    p2play(gettingCardData, card, gettingCardData.abilityOne);

                                }
                            })

                        })

                    }
                    else {
                        // creat a tab that tells me to sarafise a star basic card
                        const tab = document.createElement("div");
                        tab.setAttribute("class", "infoTab");
                        tab.innerHTML = "sacrifice a basic star card inorder to summond this one";

                        p2Field.appendChild(tab);

                        const getId = evamatch.forEach(function (creature) {
                            // i create a click advent for the cards i ca evolve
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            // clicking on the card i want to sarifise
                            createCardId.addEventListener("click", () => {
                                // this i want to push that card to the grave and remove the eliment
                                const clicked = creature.dataNum;
                                const sarifeCard = p2field.filter(function (c, index) {
                                    if (c.dataNum === clicked) {
                                        p2grave.push(p2field[index]);
                                        p2field.splice(index, 1);
                                        // removing the eliment
                                        p2Field.removeChild(createCardId);
                                        // evolveing star
                                        p2play(gettingCardData, card, gettingCardData.abilityOne);

                                    }
                                })
                            })

                        })
                    }






                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2GraveDisplay.appendChild(card);

        },
        abilityOne: function () {
            // creating creature tocken
            p2field.push(p2tockens[1]);
            //give reper tocken a power
            const reaperPower = p2field.filter(rt => rt.dataNum === 01);
            reaperPower.map(power => power.bottom = p2grave.length);
            reaperPower.map(power => power.basePower = power.bottom);
            // update field
            fieldUpdate();
            FieldDispaly();
            // dont want turns to change
            p1turn = false;
            p2turn = false;
            // update cards in our hands to apply the there being no change
            handUpdate();
            handDisplay();

            // show cards in your hand
            p2HandUpdate();
            p2HandDisplay();

            // finding out if i want to use an ability this turn
            const tab = document.createElement("div");
            tab.setAttribute("class", "option");
            tab.innerHTML = "would you like to use an ability this turn"
            // yes and no options
            const yes = document.createElement("div");
            yes.setAttribute("class", "yes");
            yes.innerHTML = "yes";
            const no = document.createElement("div");
            no.setAttribute("class", "no");
            no.innerHTML = "no";
            // appending eliments
            tab.appendChild(yes);
            tab.appendChild(no);
            p2Field.appendChild(tab);
            // if i pick no
            no.addEventListener("click", () => {
                // im going to remove the option tab
                p2Field.removeChild(tab);
                if (p1roundender === false && p2roundender === false) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === false && p2roundender === true) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === true && p2roundender === false) {
                    p1turn = false;
                    p2turn = true;
                }
                else {
                    p1turn = false;
                    p2turn = false;
                }


                // updateing the the hands so they follow the new turn system
                handUpdate();
                draw(0, 1);
                handDisplay();

                // update score
                scoredisplay();
                if (p2turn === true) {

                    p2turnChangeAbility[0].FieldAbility()

                }
            })
            // yes option
            yes.addEventListener("click", () => {
                // removing yes and no form the tab
                tab.removeChild(yes);
                tab.removeChild(no);
                tab.innerHTML = "";


                // creating ability 1 
                const destroyer = document.createElement("div");
                destroyer.setAttribute("class", "destroyer");
                destroyer.innerHTML = "witch battle";
                tab.appendChild(destroyer);


                // creating ability 2
                const rebirth = document.createElement("div");
                rebirth.setAttribute("class", "rebirth");
                rebirth.innerHTML = "rebirth";
                tab.appendChild(rebirth);


                // creating ability 3
                const powerUp = document.createElement("div");
                powerUp.setAttribute("class", "powerUp");
                powerUp.innerHTML = "power up";
                tab.appendChild(powerUp);




                // destroyer ability
                destroyer.addEventListener("click", () => {
                    if (p1field.length >= 1) {
                        // remove othe optios
                        tab.removeChild(destroyer);
                        tab.removeChild(rebirth);
                        tab.removeChild(powerUp);
                        // change text
                        tab.innerHTML = "select target";
                        // get opponets cards
                        const targets = p1field.map(function (t, index) {
                            const name = t.id;
                            const ids = document.getElementById(name);
                            // selecting targe and finding out if its stronger or not
                            ids.addEventListener("click", () => {
                                if (reaperPower[0].bottom > t.bottom) {
                                    reaperPower[0].bottom = reaperPower[0].bottom - t.bottom;
                                    reaperPower[0].basePower = reaperPower[0].bottom;
                                    // destroy opponet card
                                    p1grave.push(p1field[index]);
                                    p1field.splice(index, 1);
                                    p1Field.removeChild(ids);
                                    // removing the tab
                                    p2Field.removeChild(tab);
                                    fieldUpdate();
                                    FieldDispaly();

                                    // changing turns
                                    if (p1roundender === false && p2roundender === false) {
                                        p1turn = true;
                                        p2turn = false;
                                    } else if (p1roundender === false && p2roundender === true) {
                                        p1turn = true;
                                        p2turn = false;
                                    } else if (p1roundender === true && p2roundender === false) {
                                        p1turn = false;
                                        p2turn = true;
                                    }
                                    else {
                                        p1turn = false;
                                        p2turn = false;
                                    }
                                    // updateing the the hands so they follow the new turn system
                                    handUpdate();
                                    draw(0, 1);
                                    handDisplay();

                                    // update score
                                    scoredisplay();
                                    if (p2turn === true) {

                                        p2turnChangeAbility[0].FieldAbility()

                                    }
                                }
                                else if (reaperPower[0].bottom < t.bottom){
                                    // subtracting damange
                                    t.bottom = t.bottom - reaperPower[0].bottom;
                                    t.basePower = t.basePower - reaperPower[0].bottom;

                                    // finding reaper id
                                    const findingReaper = p2field.filter(function (reaper, i) {
                                        if (reaper.dataNum === 01) {
                                            p2field.splice(i, 1);
                                            const getId = reaper.id;
                                            const reaperid = document.getElementById(getId);
                                            p2Field.removeChild(reaperid);
                                        }
                                    })

                                    // removing the tab
                                    p2Field.removeChild(tab);
                                    fieldUpdate();
                                    FieldDispaly();

                                    // changing turns
                                    if (p1roundender === false && p2roundender === false) {
                                        p1turn = true;
                                        p2turn = false;
                                    } else if (p1roundender === false && p2roundender === true) {
                                        p1turn = true;
                                        p2turn = false;
                                    } else if (p1roundender === true && p2roundender === false) {
                                        p1turn = false;
                                        p2turn = true;
                                    }
                                    else {
                                        p1turn = false;
                                        p2turn = false;
                                    }
                                    // updateing the the hands so they follow the new turn system
                                    handUpdate();
                                    draw(0, 1);
                                    handDisplay();

                                    // update score
                                    scoredisplay();
                                    if (p2turn === true) {

                                        p2turnChangeAbility[0].FieldAbility()

                                    }
                                }
                                else {
                                    // destroy opponet card
                                    p1grave.push(p1field[index]);
                                    p1field.splice(index, 1);
                                    p1Field.removeChild(ids);
                                    // finding reaper id
                                    const findingReaper = p2field.filter(function (reaper, i) {
                                        if (reaper.dataNum === 01) {
                                            p2field.splice(i, 1);
                                            const getId = reaper.id;
                                            const reaperid = document.getElementById(getId);
                                            p2Field.removeChild(reaperid);
                                        }
                                    })

                                    // removing the tab
                                    p2Field.removeChild(tab);
                                    fieldUpdate();
                                    FieldDispaly();

                                    // changing turns
                                    if (p1roundender === false && p2roundender === false) {
                                        p1turn = true;
                                        p2turn = false;
                                    } else if (p1roundender === false && p2roundender === true) {
                                        p1turn = true;
                                        p2turn = false;
                                    } else if (p1roundender === true && p2roundender === false) {
                                        p1turn = false;
                                        p2turn = true;
                                    }
                                    else {
                                        p1turn = false;
                                        p2turn = false;
                                    }
                                    // updateing the the hands so they follow the new turn system
                                    handUpdate();
                                    draw(0, 1);
                                    handDisplay();

                                    // update score
                                    scoredisplay();
                                    if (p2turn === true) {

                                        p2turnChangeAbility[0].FieldAbility()

                                    }
                                }
                            });
                        })
                    }


                })
                // rebirth ability
                rebirth.addEventListener("click", () => {
                    if (p2grave.length >= 1) {
                        checkInPower();
                        // remove othe optios
                        tab.removeChild(destroyer);
                        tab.removeChild(rebirth);
                        tab.removeChild(powerUp);
                        // change text
                        p2Field.removeChild(tab)
                        // displaying cards from my grave
                        playmat.appendChild(p2GraveDisplay);
                        p2graveDisplayAfterClick();
                        // i want to get the id of every card in my grave
                        const revive = p2grave.map(function (g, index) {
                            const name = g.id;
                            const ids = document.getElementById(name);
                            // clicking on the target
                            ids.addEventListener("click", () => {
                                p2GraveDisplay.removeChild(ids);
                                p2hand.push(p2grave[index]);
                                p2grave.splice(index, 1);

                                // remove the reaper
                                const findingReaper = p2field.filter(function (reaper, i) {
                                    if (reaper.dataNum === 01) {
                                        p2field.splice(i, 1);
                                        const getId = reaper.id;
                                        const reaperid = document.getElementById(getId);
                                        p2Field.removeChild(reaperid);
                                    }
                                })
                                // remove the grave imange
                                playmat.removeChild(p2GraveDisplay);
                                p2graveUpdate();

                                // changing turns
                                if (p1roundender === false && p2roundender === false) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === false && p2roundender === true) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === true && p2roundender === false) {
                                    p1turn = false;
                                    p2turn = true;
                                }
                                else {
                                    p1turn = false;
                                    p2turn = false;
                                }
                                // updateing the the hands so they follow the new turn system
                                handUpdate();
                                draw(0, 1);
                                handDisplay();

                                // update score
                                scoredisplay();
                                if (p2turn === true) {

                                    p2turnChangeAbility[0].FieldAbility()

                                }
                            })
                        })
                    }

                })
                // power up ability
                powerUp.addEventListener("click", () => {
                    if (p2hand.length >= 1) {
                        // remove othe optios
                        tab.removeChild(destroyer);
                        tab.removeChild(rebirth);
                        tab.removeChild(powerUp);
                        // change text
                        tab.innerHTML = "discard a card in your hand";
                        // get the id of all cards in my hand
                        const getcards = p2hand.map(function (card, index) {
                            const id = document.getElementById(card.id)
                            // chosing a card to remove
                            id.addEventListener("click", () => {
                                // remove card
                                p2grave.push(p2hand[index]);
                                p2hand.splice(index, 1);
                                // remove tab
                                p2Field.removeChild(tab);
                                // removeing card
                                p2Hand.removeChild(id);

                                // giving the reaper tocken a +1
                                const powerUpability = p2field.filter(rt => rt.dataNum === 01);
                                powerUpability.map(power => power.bottom = power.bottom + 1);
                                powerUpability.map(power => power.basePower = power.bottom);
                                fieldUpdate();
                                FieldDispaly();

                                // changing turns
                                if (p1roundender === false && p2roundender === false) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === false && p2roundender === true) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === true && p2roundender === false) {
                                    p1turn = false;
                                    p2turn = true;
                                }
                                else {
                                    p1turn = false;
                                    p2turn = false;
                                }
                                // updateing the the hands so they follow the new turn system
                                handUpdate();
                                draw(0, 1);
                                handDisplay();

                                // update score
                                scoredisplay();
                                if (p2turn === true) {

                                    p2turnChangeAbility[0].FieldAbility()

                                }
                            })
                        })
                    }

                })
            })
        }
    }, // has ability
    {
        top: "hell hound",
        level: 1,
        center: "pic/p2hellhoundBasic.jpg",
        bottom: 3,
        basePower: 3,
        setPower: 3,
        type: "best",
        info: "witch battle",
        dataNum: 39,
        id: "hellhoundbasicone",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            if (p2turn === true) {
                card.addEventListener("click", function () {

                    p2play(gettingCardData, this, gettingCardData.abilityOne);
                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Field.appendChild(card);


        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2GraveDisplay.appendChild(card);

        },
        abilityOne: function () {
            // finding out if our they have cards on thier side of the field
            if (p1field.length >= 1) {

                // finding out if i want to use an ability 
                const tab = document.createElement("div");
                tab.setAttribute("class", "option");
                tab.innerHTML = "would you like to use witch battle ability"
                // yes and no options
                const yes = document.createElement("div");
                yes.setAttribute("class", "yes");
                yes.innerHTML = "yes";
                const no = document.createElement("div");
                no.setAttribute("class", "no");
                no.innerHTML = "no";
                // appending eliments
                tab.appendChild(yes);
                tab.appendChild(no);
                p2Field.appendChild(tab);

                // picking no
                no.addEventListener("click", () => {
                    // im going to remove the option tab
                    p2Field.removeChild(tab);
                    if (p1roundender === false && p2roundender === false) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === false && p2roundender === true) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === true && p2roundender === false) {
                        p1turn = false;
                        p2turn = true;
                    }
                    else {
                        p1turn = false;
                        p2turn = false;
                    }


                    // updateing the the hands so they follow the new turn system
                    handUpdate();
                    handDisplay();

                    // update score
                    scoredisplay();
                    if (p2turn === true) {

                        p2turnChangeAbility[0].FieldAbility()

                    }
                })

                // picking yes
                yes.addEventListener("click", () => {
                    // removeing yes and no option
                    tab.removeChild(yes);
                    tab.removeChild(no);
                    // change text
                    tab.innerHTML = "select target";
                    // get opponets cards
                    const targets = p1field.map(function (t, index) {
                        const name = t.id;
                        const ids = document.getElementById(name);
                        // getting my cards info
                        const hellInfo = p2field.filter(h => h.dataNum === 39);
                        // selecting targe and finding out if its stronger or not
                        ids.addEventListener("click", () => {
                            if (hellInfo[0].bottom > t.bottom) {
                                hellInfo[0].bottom = hellInfo[0].bottom - t.bottom;
                                hellInfo[0].basePower = hellInfo[0].basePower - t.bottom;
                                // destroy opponet card
                                p1grave.push(p1field[index]);
                                p1field.splice(index, 1);
                                p1Field.removeChild(ids);
                                // removing the tab
                                p2Field.removeChild(tab);
                                fieldUpdate();
                                FieldDispaly();

                                // changing turns
                                if (p1roundender === false && p2roundender === false) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === false && p2roundender === true) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === true && p2roundender === false) {
                                    p1turn = false;
                                    p2turn = true;
                                }
                                else {
                                    p1turn = false;
                                    p2turn = false;
                                }
                                // updateing the the hands so they follow the new turn system
                                handUpdate();
                                handDisplay();

                                // update score
                                scoredisplay();
                                if (p2turn === true) {

                                    p2turnChangeAbility[0].FieldAbility()

                                }
                            } // if hell hound power is less then the target
                            else if (hellInfo[0].bottom < t.bottom) {
                                // subtracting damange
                                t.bottom = t.bottom - hellInfo[0].bottom;
                                t.basePower = t.basePower - hellInfo[0].bottom;

                                // finding cards id
                                const findingHound = p2field.filter(function (r, i) {
                                    if (r.dataNum === 39) {
                                        p2grave.push(p2field[i]);
                                        p2field.splice(i, 1);
                                        const getId = r.id;
                                        const rid = document.getElementById(getId);
                                        p2Field.removeChild(rid);
                                    }
                                })

                                // removing the tab
                                p2Field.removeChild(tab);
                                fieldUpdate();
                                FieldDispaly();

                                // changing turns
                                if (p1roundender === false && p2roundender === false) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === false && p2roundender === true) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === true && p2roundender === false) {
                                    p1turn = false;
                                    p2turn = true;
                                }
                                else {
                                    p1turn = false;
                                    p2turn = false;
                                }
                                // updateing the the hands so they follow the new turn system
                                handUpdate();
                                handDisplay();

                                // update score
                                scoredisplay();
                                if (p2turn === true) {

                                    p2turnChangeAbility[0].FieldAbility()

                                }
                            } else {
                                // destroy opponet card
                                p1grave.push(p1field[index]);
                                p1field.splice(index, 1);
                                p1Field.removeChild(ids);

                                // finding cards id
                                const findingHound = p2field.filter(function (r, i) {
                                    if (r.dataNum === 39) {
                                        p2grave.push(p2field[i]);
                                        p2field.splice(i, 1);
                                        const getId = r.id;
                                        const rid = document.getElementById(getId);
                                        p2Field.removeChild(rid);
                                    }
                                })
                                // removing the tab
                                p2Field.removeChild(tab);
                                fieldUpdate();
                                FieldDispaly();
                                // changing turns
                                if (p1roundender === false && p2roundender === false) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === false && p2roundender === true) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === true && p2roundender === false) {
                                    p1turn = false;
                                    p2turn = true;
                                }
                                else {
                                    p1turn = false;
                                    p2turn = false;
                                }
                                // updateing the the hands so they follow the new turn system
                                handUpdate();
                                handDisplay();

                                // update score
                                scoredisplay();
                                if (p2turn === true) {

                                    p2turnChangeAbility[0].FieldAbility()

                                }
                            }

                        });
                    })



                })
            }
            else {
                if (p1roundender === false && p2roundender === false) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === false && p2roundender === true) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === true && p2roundender === false) {
                    p1turn = false;
                    p2turn = true;
                }
                else {
                    p1turn = false;
                    p2turn = false;
                }


                // updateing the the hands so they follow the new turn system
                handUpdate();
                handDisplay();

                // update score
                scoredisplay();
                if (p2turn === true) {

                    p2turnChangeAbility[0].FieldAbility()

                }
            }
        }
    }, // has ability
    {
        top: "hell hound",
        level: 1,
        center: "pic/p2hellhoundBasic.jpg",
        bottom: 3,
        basePower: 3,
        setPower: 3,
        type: "best",
        info: "witch battle",
        dataNum: 40,
        id: "hellhoundbasictwo",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            if (p2turn === true) {
                card.addEventListener("click", function () {

                    p2play(gettingCardData, this, gettingCardData.abilityOne );
                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Field.appendChild(card);

           
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2GraveDisplay.appendChild(card);

        },
        abilityOne: function () {
            // finding out if our they have cards on thier side of the field
            if (p1field.length >= 1) {

                // finding out if i want to use an ability 
                const tab = document.createElement("div");
                tab.setAttribute("class", "option");
                tab.innerHTML = "would you like to use witch battle ability"
                // yes and no options
                const yes = document.createElement("div");
                yes.setAttribute("class", "yes");
                yes.innerHTML = "yes";
                const no = document.createElement("div");
                no.setAttribute("class", "no");
                no.innerHTML = "no";
                // appending eliments
                tab.appendChild(yes);
                tab.appendChild(no);
                p2Field.appendChild(tab);

                // picking no
                no.addEventListener("click", () => {
                    // im going to remove the option tab
                    p2Field.removeChild(tab);
                    if (p1roundender === false && p2roundender === false) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === false && p2roundender === true) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === true && p2roundender === false) {
                        p1turn = false;
                        p2turn = true;
                    }
                    else {
                        p1turn = false;
                        p2turn = false;
                    }


                    // updateing the the hands so they follow the new turn system
                    handUpdate();
                    handDisplay();

                    // update score
                    scoredisplay();
                    if (p2turn === true) {

                        p2turnChangeAbility[0].FieldAbility()

                    }
                })

                // picking yes
                yes.addEventListener("click", () => {
                    // removeing yes and no option
                    tab.removeChild(yes);
                    tab.removeChild(no);
                    // change text
                    tab.innerHTML = "select target";
                    // get opponets cards
                    const targets = p1field.map(function (t, index) {
                        const name = t.id;
                        const ids = document.getElementById(name);
                        // getting my cards info
                        const hellInfo = p2field.filter(h => h.dataNum === 40);
                        // selecting targe and finding out if its stronger or not
                        ids.addEventListener("click", () => {

                            if (hellInfo[0].bottom > t.bottom) {
                                hellInfo[0].bottom = hellInfo[0].bottom - t.bottom;
                                hellInfo[0].basePower = hellInfo[0].basePower - t.bottom;
                                // destroy opponet card
                                p1grave.push(p1field[index]);
                                p1field.splice(index, 1);
                                p1Field.removeChild(ids);
                                // removing the tab
                                p2Field.removeChild(tab);
                                fieldUpdate();
                                FieldDispaly();

                                // changing turns
                                if (p1roundender === false && p2roundender === false) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === false && p2roundender === true) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === true && p2roundender === false) {
                                    p1turn = false;
                                    p2turn = true;
                                }
                                else {
                                    p1turn = false;
                                    p2turn = false;
                                }
                                // updateing the the hands so they follow the new turn system
                                handUpdate();
                                handDisplay();

                                // update score
                                scoredisplay();
                                if (p2turn === true) {

                                    p2turnChangeAbility[0].FieldAbility()

                                }
                            }
                            else if (hellInfo[0].bottom < t.bottom) {
                                // subtracting damange
                                t.bottom = t.bottom - hellInfo[0].bottom;
                                t.basePower = t.basePower - hellInfo[0].bottom;

                                // finding cards id
                                const findingHound = p2field.filter(function (r, i) {
                                    if (r.dataNum === 40) {
                                        p2grave.push(p2field[i]);
                                        p2field.splice(i, 1);
                                        const getId = r.id;
                                        const rid = document.getElementById(getId);
                                        p2Field.removeChild(rid);
                                    }
                                })

                                // removing the tab
                                p2Field.removeChild(tab);
                                fieldUpdate();
                                FieldDispaly();

                                // changing turns
                                if (p1roundender === false && p2roundender === false) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === false && p2roundender === true) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === true && p2roundender === false) {
                                    p1turn = false;
                                    p2turn = true;
                                }
                                else {
                                    p1turn = false;
                                    p2turn = false;
                                }
                                // updateing the the hands so they follow the new turn system
                                handUpdate();
                                handDisplay();

                                // update score
                                scoredisplay();
                                if (p2turn === true) {

                                    p2turnChangeAbility[0].FieldAbility()

                                }
                            } else {
                                // destroy opponet card
                                p1grave.push(p1field[index]);
                                p1field.splice(index, 1);
                                p1Field.removeChild(ids);

                                // finding cards id
                                const findingHound = p2field.filter(function (r, i) {
                                    if (r.dataNum === 40) {
                                        p2grave.push(p2field[i]);
                                        p2field.splice(i, 1);
                                        const getId = r.id;
                                        const rid = document.getElementById(getId);
                                        p2Field.removeChild(rid);
                                    }
                                })
                                // removing the tab
                                p2Field.removeChild(tab);
                                fieldUpdate();
                                FieldDispaly();
                                // changing turns
                                if (p1roundender === false && p2roundender === false) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === false && p2roundender === true) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === true && p2roundender === false) {
                                    p1turn = false;
                                    p2turn = true;
                                }
                                else {
                                    p1turn = false;
                                    p2turn = false;
                                }
                                // updateing the the hands so they follow the new turn system
                                handUpdate();
                                handDisplay();

                                // update score
                                scoredisplay();
                                if (p2turn === true) {

                                    p2turnChangeAbility[0].FieldAbility()

                                }
                            }

                        });
                    })



                })
            }
            else {
                if (p1roundender === false && p2roundender === false) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === false && p2roundender === true) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === true && p2roundender === false) {
                    p1turn = false;
                    p2turn = true;
                }
                else {
                    p1turn = false;
                    p2turn = false;
                }


                // updateing the the hands so they follow the new turn system
                handUpdate();
                handDisplay();

                // update score
                scoredisplay();
                if (p2turn === true) {

                    p2turnChangeAbility[0].FieldAbility()

                }
            }
        }
    }, // has ability
    {
        top: "hell hound",
        level: 1,
        center: "pic/p2hellhoundBasic.jpg",
        bottom: 3,
        basePower: 3,
        setPower: 3,
        type: "best",
        info: "witch battle",
        dataNum: 41,
        id: "hellhoundbasicthree",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            if (p2turn === true) {
                card.addEventListener("click", function () {

                    p2play(gettingCardData, this, gettingCardData.abilityOne);
                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Field.appendChild(card);

           
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2GraveDisplay.appendChild(card);

        },
        abilityOne: function () {
            // finding out if our they have cards on thier side of the field
            if (p1field.length >= 1) {

                // finding out if i want to use an ability 
                const tab = document.createElement("div");
                tab.setAttribute("class", "option");
                tab.innerHTML = "would you like to use witch battle ability"
                // yes and no options
                const yes = document.createElement("div");
                yes.setAttribute("class", "yes");
                yes.innerHTML = "yes";
                const no = document.createElement("div");
                no.setAttribute("class", "no");
                no.innerHTML = "no";
                // appending eliments
                tab.appendChild(yes);
                tab.appendChild(no);
                p2Field.appendChild(tab);

                // picking no
                no.addEventListener("click", () => {
                    // im going to remove the option tab
                    p2Field.removeChild(tab);
                    if (p1roundender === false && p2roundender === false) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === false && p2roundender === true) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === true && p2roundender === false) {
                        p1turn = false;
                        p2turn = true;
                    }
                    else {
                        p1turn = false;
                        p2turn = false;
                    }


                    // updateing the the hands so they follow the new turn system
                    handUpdate();
                    handDisplay();

                    // update score
                    scoredisplay();
                    if (p2turn === true) {

                        p2turnChangeAbility[0].FieldAbility()

                    }
                })

                // picking yes
                yes.addEventListener("click", () => {
                    // removeing yes and no option
                    tab.removeChild(yes);
                    tab.removeChild(no);
                    // change text
                    tab.innerHTML = "select target";
                    // get opponets cards
                    const targets = p1field.map(function (t, index) {
                        const name = t.id;
                        const ids = document.getElementById(name);
                        // getting my cards info
                        const hellInfo = p2field.filter(h => h.dataNum === 41);
                        // selecting targe and finding out if its stronger or not
                        ids.addEventListener("click", () => {

                            if (hellInfo[0].bottom > t.bottom) {
                                hellInfo[0].bottom = hellInfo[0].bottom - t.bottom;
                                hellInfo[0].basePower = hellInfo[0].basePower - t.bottom;

                                // destroy opponet card
                                p1grave.push(p1field[index]);
                                p1field.splice(index, 1);
                                p1Field.removeChild(ids);
                                // removing the tab
                                p2Field.removeChild(tab);
                                fieldUpdate();
                                FieldDispaly();

                                // changing turns
                                if (p1roundender === false && p2roundender === false) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === false && p2roundender === true) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === true && p2roundender === false) {
                                    p1turn = false;
                                    p2turn = true;
                                }
                                else {
                                    p1turn = false;
                                    p2turn = false;
                                }
                                // updateing the the hands so they follow the new turn system
                                handUpdate();
                                handDisplay();

                                // update score
                                scoredisplay();
                                if (p2turn === true) {

                                    p2turnChangeAbility[0].FieldAbility()

                                }
                            }
                            else if (hellInfo[0].bottom < t.bottom) {
                                // subtracting damange
                                t.bottom = t.bottom - hellInfo[0].bottom;
                                t.basePower = t.basePower - hellInfo[0].bottom;

                                // finding cards id
                                const findingHound = p2field.filter(function (r, i) {
                                    if (r.dataNum === 41) {
                                        p2grave.push(p2field[i]);
                                        p2field.splice(i, 1);
                                        const getId = r.id;
                                        const rid = document.getElementById(getId);
                                        p2Field.removeChild(rid);
                                    }
                                })

                                // removing the tab
                                p2Field.removeChild(tab);
                                fieldUpdate();
                                FieldDispaly();

                                // changing turns
                                if (p1roundender === false && p2roundender === false) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === false && p2roundender === true) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === true && p2roundender === false) {
                                    p1turn = false;
                                    p2turn = true;
                                }
                                else {
                                    p1turn = false;
                                    p2turn = false;
                                }
                                // updateing the the hands so they follow the new turn system
                                handUpdate();
                                handDisplay();

                                // update score
                                scoredisplay();
                                if (p2turn === true) {

                                    p2turnChangeAbility[0].FieldAbility()

                                }
                            } else {
                                // destroy opponet card
                                p1grave.push(p1field[index]);
                                p1field.splice(index, 1);
                                p1Field.removeChild(ids);

                                // finding cards id
                                const findingHound = p2field.filter(function (r, i) {
                                    if (r.dataNum === 41) {
                                        p2grave.push(p2field[i]);
                                        p2field.splice(i, 1);
                                        const getId = r.id;
                                        const rid = document.getElementById(getId);
                                        p2Field.removeChild(rid);
                                    }
                                })
                                // removing the tab
                                p2Field.removeChild(tab);
                                fieldUpdate();
                                FieldDispaly();
                                // changing turns
                                if (p1roundender === false && p2roundender === false) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === false && p2roundender === true) {
                                    p1turn = true;
                                    p2turn = false;
                                } else if (p1roundender === true && p2roundender === false) {
                                    p1turn = false;
                                    p2turn = true;
                                }
                                else {
                                    p1turn = false;
                                    p2turn = false;
                                }
                                // updateing the the hands so they follow the new turn system
                                handUpdate();
                                handDisplay();

                                // update score
                                scoredisplay();
                                if (p2turn === true) {

                                    p2turnChangeAbility[0].FieldAbility()

                                }
                            }

                        });
                    })



                })
            }
            else {
                if (p1roundender === false && p2roundender === false) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === false && p2roundender === true) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === true && p2roundender === false) {
                    p1turn = false;
                    p2turn = true;
                }
                else {
                    p1turn = false;
                    p2turn = false;
                }


                // updateing the the hands so they follow the new turn system
                handUpdate();
                handDisplay();

                // update score
                scoredisplay();
                if (p2turn === true) {

                    p2turnChangeAbility[0].FieldAbility()

                }
            }
        }
    }, // has ability
    {
        top: "hell hound",
        level: 2,
        center: "pic/p2hellHoundLv2.jpg",
        bottom: 6,
        basePower: 6,
        setPower: 6,
        type: "best",
        info: "every time you summond a card , deal damage = to the amount of cards in your grave",
        dataNum: 42,
        id: "hellhoundlvtwoone",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            // serching to see if there is a evolution match is on the field
            let evamatch = p2field.filter(function (creature) {
                if (creature.dataNum === 39 || creature.dataNum === 40 || creature.dataNum === 41) {
                    return creature
                }
            })

            // condishions to summpnd this card
            if (p2turn === true && evamatch.length >= 1) {

                // when i click on this card
                card.addEventListener("click", function () {

                    // if there is only one card that can be sarafise it will happend automatic
                    if (evamatch.length === 1) {

                        // get the id for the card i would like to evolve
                        const getId = evamatch.forEach(function (creature) {
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            //i would like to filter that card off the field
                            const sarifeCard = p2field.filter(function (c, index) {
                                // checking to see if that card dataNum is the same as the only in the evamatch
                                if (c.dataNum === evamatch[0].dataNum) {
                                    p2grave.push(p2field[index]);
                                    p2field.splice(index, 1);
                                    // removing the eliment
                                    p2Field.removeChild(createCardId);
                                    // evolveing star
                                    p2play(gettingCardData, card, gettingCardData.abilityOne);
                                   
                                }
                            })

                        })

                    }
                    else {
                        // creat a tab that tells me to sarafise a star basic card
                        const tab = document.createElement("div");
                        tab.setAttribute("class", "infoTab");
                        tab.innerHTML = "sacrifice a basic star card inorder to summond this one";

                        p2Field.appendChild(tab);

                        const getId = evamatch.forEach(function (creature) {
                            // i create a click advent for the cards i ca evolve
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            // clicking on the card i want to sarifise
                            createCardId.addEventListener("click", () => {
                                // this i want to push that card to the grave and remove the eliment
                                const clicked = creature.dataNum;
                                const sarifeCard = p2field.filter(function (c, index) {
                                    if (c.dataNum === clicked) {
                                        p2grave.push(p2field[index]);
                                        p2field.splice(index, 1);
                                        // removing the eliment
                                        p2Field.removeChild(createCardId);
                                        // evolveing star
                                        p2play(gettingCardData, card, gettingCardData.abilityOne);

                                    }
                                })
                            })

                        })
                    }






                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Field.appendChild(card);

           
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2GraveDisplay.appendChild(card);

        },
        abilityOne: function () {
            if (p1field.length >= 1) {

                // finding out if i want to use an ability 
                const tab = document.createElement("div");
                tab.setAttribute("class", "option");
                tab.innerHTML = "would you like to deal " + p2grave.length + " damage to target";
                // yes and no options
                const yes = document.createElement("div");
                yes.setAttribute("class", "yes");
                yes.innerHTML = "yes";
                const no = document.createElement("div");
                no.setAttribute("class", "no");
                no.innerHTML = "no";
                // appending eliments
                tab.appendChild(yes);
                tab.appendChild(no);
                p2Field.appendChild(tab);

                // picking no
                no.addEventListener("click", () => {
                    // im going to remove the option tab
                    p2Field.removeChild(tab);

                    if (p1roundender === false && p2roundender === false) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === false && p2roundender === true) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === true && p2roundender === false) {
                        p1turn = false;
                        p2turn = true;
                    }
                    else {
                        p1turn = false;
                        p2turn = false;
                    }


                    // updateing the the hands so they follow the new turn system
                    handUpdate();
                    handDisplay();

                    // update score
                    scoredisplay();
                    if (p2turn === true) {

                        p2turnChangeAbility[0].FieldAbility()

                    }
                })

                // picking yes
                yes.addEventListener("click", () => {
                    // removeing yes and no option
                    tab.removeChild(yes);
                    tab.removeChild(no);
                    // change text
                    tab.innerHTML = "select target";
                    // get opponets cards
                    const targets = p1field.map(function (t, index) {
                        const name = t.id;
                        const ids = document.getElementById(name);
                        ids.addEventListener("click", () => {
                            // dealing damange 
                            if (p2grave.length >= t.bottom) {
                                // killing target
                                p1grave.push(p1field[index]);
                                p1field.splice(index, 1);
                                p1Field.removeChild(ids);
                                // removeing tab
                                p2Field.removeChild(tab);
                                // update the field
                                fieldUpdate();
                                FieldDispaly();
                            } else {
                                t.bottom = t.bottom - p2grave.length;
                                t.basePower = t.bottom;
                                // removeing tab
                                p2Field.removeChild(tab);
                                // update the field
                                fieldUpdate();
                                FieldDispaly();
                            }
                            if (p1roundender === false && p2roundender === false) {
                                p1turn = true;
                                p2turn = false;
                            } else if (p1roundender === false && p2roundender === true) {
                                p1turn = true;
                                p2turn = false;
                            } else if (p1roundender === true && p2roundender === false) {
                                p1turn = false;
                                p2turn = true;
                            }
                            else {
                                p1turn = false;
                                p2turn = false;
                            }


                            // updateing the the hands so they follow the new turn system
                            handUpdate();
                            handDisplay();

                            // update score
                            scoredisplay();
                            if (p2turn === true) {

                                p2turnChangeAbility[0].FieldAbility()

                            }
                        })



                    })
                })
            } else {
                if (p1roundender === false && p2roundender === false) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === false && p2roundender === true) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === true && p2roundender === false) {
                    p1turn = false;
                    p2turn = true;
                }
                else {
                    p1turn = false;
                    p2turn = false;
                }


                // updateing the the hands so they follow the new turn system
                handUpdate();
                handDisplay();

                // update score
                scoredisplay();
                if (p2turn === true) {

                    p2turnChangeAbility[0].FieldAbility()

                }
            }
        }
    }, // has ability
    {
        top: "hell hound",
        level: 2,
        center: "pic/p2hellHoundLv2.jpg",
        bottom: 6,
        basePower: 6,
        setPower: 6,
        type: "best",
        info: "every time you summond a card , deal damage = to the amount of cards in your grave",
        dataNum: 43,
        id: "hellhoundlvtwotwo",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Hand.appendChild(card);
            // getting info to pass
            const gettingCardData = this;

            // serching to see if there is a evolution match is on the field
            let evamatch = p2field.filter(function (creature) {
                if (creature.dataNum === 39 || creature.dataNum === 40 || creature.dataNum === 41) {
                    return creature
                }
            })

            // condishions to summpnd this card
            if (p2turn === true && evamatch.length >= 1) {

                // when i click on this card
                card.addEventListener("click", function () {

                    // if there is only one card that can be sarafise it will happend automatic
                    if (evamatch.length === 1) {

                        // get the id for the card i would like to evolve
                        const getId = evamatch.forEach(function (creature) {
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            //i would like to filter that card off the field
                            const sarifeCard = p2field.filter(function (c, index) {
                                // checking to see if that card dataNum is the same as the only in the evamatch
                                if (c.dataNum === evamatch[0].dataNum) {
                                    p2grave.push(p2field[index]);
                                    p2field.splice(index, 1);
                                    // removing the eliment
                                    p2Field.removeChild(createCardId);
                                    // evolveing star
                                    p2play(gettingCardData, card, gettingCardData.abilityOne);
                                    
                                }
                            })

                        })

                    }
                    else {
                        // creat a tab that tells me to sarafise a star basic card
                        const tab = document.createElement("div");
                        tab.setAttribute("class", "infoTab");
                        tab.innerHTML = "sacrifice a basic star card inorder to summond this one";

                        p2Field.appendChild(tab);

                        const getId = evamatch.forEach(function (creature) {
                            // i create a click advent for the cards i ca evolve
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            // clicking on the card i want to sarifise
                            createCardId.addEventListener("click", () => {
                                // this i want to push that card to the grave and remove the eliment
                                const clicked = creature.dataNum;
                                const sarifeCard = p2field.filter(function (c, index) {
                                    if (c.dataNum === clicked) {
                                        p2grave.push(p2field[index]);
                                        p2field.splice(index, 1);
                                        // removing the eliment
                                        p2Field.removeChild(createCardId);
                                        // evolveing star
                                        p2play(gettingCardData, card, gettingCardData.abilityOne);

                                    }
                                })
                            })

                        })
                    }






                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2GraveDisplay.appendChild(card);

        },
        abilityOne: function () {
            if (p1field.length >= 1) {

                // finding out if i want to use an ability 
                const tab = document.createElement("div");
                tab.setAttribute("class", "option");
                tab.innerHTML = "would you like to deal " + p2grave.length + " damage to target";
                // yes and no options
                const yes = document.createElement("div");
                yes.setAttribute("class", "yes");
                yes.innerHTML = "yes";
                const no = document.createElement("div");
                no.setAttribute("class", "no");
                no.innerHTML = "no";
                // appending eliments
                tab.appendChild(yes);
                tab.appendChild(no);
                p2Field.appendChild(tab);

                // picking no
                no.addEventListener("click", () => {
                    // im going to remove the option tab
                    p2Field.removeChild(tab);

                    if (p1roundender === false && p2roundender === false) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === false && p2roundender === true) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === true && p2roundender === false) {
                        p1turn = false;
                        p2turn = true;
                    }
                    else {
                        p1turn = false;
                        p2turn = false;
                    }


                    // updateing the the hands so they follow the new turn system
                    handUpdate();
                    handDisplay();

                    // update score
                    scoredisplay();
                    if (p2turn === true) {

                        p2turnChangeAbility[0].FieldAbility()

                    }
                })

                // picking yes
                yes.addEventListener("click", () => {
                    // removeing yes and no option
                    tab.removeChild(yes);
                    tab.removeChild(no);
                    // change text
                    tab.innerHTML = "select target";
                    // get opponets cards
                    const targets = p1field.map(function (t, index) {
                        const name = t.id;
                        const ids = document.getElementById(name);
                        ids.addEventListener("click", () => {
                            // dealing damange 
                            if (p2grave.length >= t.bottom) {
                                // killing target
                                p1grave.push(p1field[index]);
                                p1field.splice(index, 1);
                                p1Field.removeChild(ids);
                                // removeing tab
                                p2Field.removeChild(tab);
                                // update the field
                                fieldUpdate();
                                FieldDispaly();
                            } else {
                                t.bottom = t.bottom - p2grave.length;
                                t.basePower = t.bottom;
                                // removeing tab
                                p2Field.removeChild(tab);
                                // update the field
                                fieldUpdate();
                                FieldDispaly();
                            }
                            if (p1roundender === false && p2roundender === false) {
                                p1turn = true;
                                p2turn = false;
                            } else if (p1roundender === false && p2roundender === true) {
                                p1turn = true;
                                p2turn = false;
                            } else if (p1roundender === true && p2roundender === false) {
                                p1turn = false;
                                p2turn = true;
                            }
                            else {
                                p1turn = false;
                                p2turn = false;
                            }


                            // updateing the the hands so they follow the new turn system
                            handUpdate();
                            handDisplay();

                            // update score
                            scoredisplay();
                            if (p2turn === true) {

                                p2turnChangeAbility[0].FieldAbility()

                            }
                        })



                    })
                })
            } else {
                if (p1roundender === false && p2roundender === false) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === false && p2roundender === true) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === true && p2roundender === false) {
                    p1turn = false;
                    p2turn = true;
                }
                else {
                    p1turn = false;
                    p2turn = false;
                }


                // updateing the the hands so they follow the new turn system
                handUpdate();
                handDisplay();

                // update score
                scoredisplay();
                if (p2turn === true) {

                    p2turnChangeAbility[0].FieldAbility()

                }
            }
        }
    }, // has ability
    {
        top: "hell hound",
        level: 2,
        center: "pic/p2hellHoundLv2.jpg",
        bottom: 6,
        basePower: 6,
        setPower: 6,
        type: "best",
        info: "every time you summond a card , deal damage = to the amount of cards in your grave",
        dataNum: 44,
        id: "hellhoundlvtwothree",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Hand.appendChild(card);
            // getting info to pass
            const gettingCardData = this;

            // serching to see if there is a evolution match is on the field
            let evamatch = p2field.filter(function (creature) {
                if (creature.dataNum === 39 || creature.dataNum === 40 || creature.dataNum === 41) {
                    return creature
                }
            })

            // condishions to summpnd this card
            if (p2turn === true && evamatch.length >= 1) {

                // when i click on this card
                card.addEventListener("click", function () {

                    // if there is only one card that can be sarafise it will happend automatic
                    if (evamatch.length === 1) {

                        // get the id for the card i would like to evolve
                        const getId = evamatch.forEach(function (creature) {
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            //i would like to filter that card off the field
                            const sarifeCard = p2field.filter(function (c, index) {
                                // checking to see if that card dataNum is the same as the only in the evamatch
                                if (c.dataNum === evamatch[0].dataNum) {
                                    p2grave.push(p2field[index]);
                                    p2field.splice(index, 1);
                                    // removing the eliment
                                    p2Field.removeChild(createCardId);
                                    // evolveing star
                                    p2play(gettingCardData, card, gettingCardData.abilityOne);
                                   
                                }
                            })

                        })

                    }
                    else {
                        // creat a tab that tells me to sarafise a star basic card
                        const tab = document.createElement("div");
                        tab.setAttribute("class", "infoTab");
                        tab.innerHTML = "sacrifice a basic star card inorder to summond this one";

                        p2Field.appendChild(tab);

                        const getId = evamatch.forEach(function (creature) {
                            // i create a click advent for the cards i ca evolve
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            // clicking on the card i want to sarifise
                            createCardId.addEventListener("click", () => {
                                // this i want to push that card to the grave and remove the eliment
                                const clicked = creature.dataNum;
                                const sarifeCard = p2field.filter(function (c, index) {
                                    if (c.dataNum === clicked) {
                                        p2grave.push(p2field[index]);
                                        p2field.splice(index, 1);
                                        // removing the eliment
                                        p2Field.removeChild(createCardId);
                                        // evolveing star
                                        p2play(gettingCardData, card,gettingCardData.abilityOne);

                                    }
                                })
                            })

                        })
                    }






                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2GraveDisplay.appendChild(card);

        },
        abilityOne: function () {
            if (p1field.length >= 1) {

                // finding out if i want to use an ability 
                const tab = document.createElement("div");
                tab.setAttribute("class", "option");
                tab.innerHTML = "would you like to deal " + p2grave.length + " damage to target";
                // yes and no options
                const yes = document.createElement("div");
                yes.setAttribute("class", "yes");
                yes.innerHTML = "yes";
                const no = document.createElement("div");
                no.setAttribute("class", "no");
                no.innerHTML = "no";
                // appending eliments
                tab.appendChild(yes);
                tab.appendChild(no);
                p2Field.appendChild(tab);

                // picking no
                no.addEventListener("click", () => {
                    // im going to remove the option tab
                    p2Field.removeChild(tab);

                    if (p1roundender === false && p2roundender === false) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === false && p2roundender === true) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === true && p2roundender === false) {
                        p1turn = false;
                        p2turn = true;
                    }
                    else {
                        p1turn = false;
                        p2turn = false;
                    }


                    // updateing the the hands so they follow the new turn system
                    handUpdate();
                    handDisplay();

                    // update score
                    scoredisplay();
                    if (p2turn === true) {

                        p2turnChangeAbility[0].FieldAbility()

                    }
                })

                // picking yes
                yes.addEventListener("click", () => {
                    // removeing yes and no option
                    tab.removeChild(yes);
                    tab.removeChild(no);
                    // change text
                    tab.innerHTML = "select target";
                    // get opponets cards
                    const targets = p1field.map(function (t, index) {
                        const name = t.id;
                        const ids = document.getElementById(name);
                        ids.addEventListener("click", () => {
                            // dealing damange 
                            if (p2grave.length >= t.bottom) {
                                // killing target
                                p1grave.push(p1field[index]);
                                p1field.splice(index, 1);
                                p1Field.removeChild(ids);
                                // removeing tab
                                p2Field.removeChild(tab);
                                // update the field
                                fieldUpdate();
                                FieldDispaly();
                            } else {
                                t.bottom = t.bottom - p2grave.length;
                                t.basePower = t.bottom;
                                // removeing tab
                                p2Field.removeChild(tab);
                                // update the field
                                fieldUpdate();
                                FieldDispaly();
                            }
                            if (p1roundender === false && p2roundender === false) {
                                p1turn = true;
                                p2turn = false;
                            } else if (p1roundender === false && p2roundender === true) {
                                p1turn = true;
                                p2turn = false;
                            } else if (p1roundender === true && p2roundender === false) {
                                p1turn = false;
                                p2turn = true;
                            }
                            else {
                                p1turn = false;
                                p2turn = false;
                            }


                            // updateing the the hands so they follow the new turn system
                            handUpdate();
                            handDisplay();

                            // update score
                            scoredisplay();
                            if (p2turn === true) {

                                p2turnChangeAbility[0].FieldAbility()

                            }
                        })



                    })
                })
            } else {
                if (p1roundender === false && p2roundender === false) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === false && p2roundender === true) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === true && p2roundender === false) {
                    p1turn = false;
                    p2turn = true;
                }
                else {
                    p1turn = false;
                    p2turn = false;
                }


                // updateing the the hands so they follow the new turn system
                handUpdate();
                handDisplay();

                // update score
                scoredisplay();
                if (p2turn === true) {

                    p2turnChangeAbility[0].FieldAbility()

                }
            }
        }
    }, // has ability
    {
        top: "mya",
        level: 1,
        center: "pic/p2mya.jpg",
        bottom: 4,
        basePower: 4,
        setPower: 4,
        type: "mother",
        info: "",
        dataNum: 45,
        id: "myabasicone",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            if (p2turn === true) {
                card.addEventListener("click", function () {

                    p2play(gettingCardData, this);
                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2GraveDisplay.appendChild(card);

        }
    }, // no ability
    {
        top: "mya",
        level: 1,
        center: "pic/p2mya.jpg",
        bottom: 4,
        basePower: 4,
        setPower: 4,
        type: "mother",
        info: "",
        dataNum: 46,
        id: "myabasictwo",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            if (p2turn === true) {
                card.addEventListener("click", function () {

                    p2play(gettingCardData, this);
                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2GraveDisplay.appendChild(card);

        }
    },// no ability
    {
        top: "mya",
        level: 1,
        center: "pic/p2mya.jpg",
        bottom: 4,
        basePower: 4,
        setPower: 4,
        type: "mother",
        info: "",
        dataNum: 47,
        id: "myabasicthree",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            if (p2turn === true) {
                card.addEventListener("click", function () {

                    p2play(gettingCardData, this);
                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2GraveDisplay.appendChild(card);

        }
    },// no ability
    {
        top: "mya",
        level: 2,
        center: "pic/p2myalv2.jpg",
        bottom: 5,
        basePower: 5,
        setPower: 5,
        type: "mother",
        info: "return a card from your grave to your hand",
        dataNum: 48,
        id: "myalvtwoone",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            // serching to see if there is a evolution match is on the field
            let evamatch = p2field.filter(function (creature) {
                if (creature.dataNum === 45 || creature.dataNum === 46 || creature.dataNum === 47) {
                    return creature
                }
            })

            // condishions to summpnd this card
            if (p2turn === true && evamatch.length >= 1) {

                // when i click on this card
                card.addEventListener("click", function () {

                    // if there is only one card that can be sarafise it will happend automatic
                    if (evamatch.length === 1) {

                        // get the id for the card i would like to evolve
                        const getId = evamatch.forEach(function (creature) {
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            //i would like to filter that card off the field
                            const sarifeCard = p2field.filter(function (c, index) {
                                // checking to see if that card dataNum is the same as the only in the evamatch
                                if (c.dataNum === evamatch[0].dataNum) {
                                    p2grave.push(p2field[index]);
                                    p2field.splice(index, 1);
                                    // removing the eliment
                                    p2Field.removeChild(createCardId);
                                    // evolveing star
                                    p2play(gettingCardData, card, gettingCardData.abilityOne);
                                   
                                }
                            })

                        })

                    }
                    else {
                        // creat a tab that tells me to sarafise a star basic card
                        const tab = document.createElement("div");
                        tab.setAttribute("class", "infoTab");
                        tab.innerHTML = "sacrifice a basic star card inorder to summond this one";

                        p2Field.appendChild(tab);

                        const getId = evamatch.forEach(function (creature) {
                            // i create a click advent for the cards i ca evolve
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            // clicking on the card i want to sarifise
                            createCardId.addEventListener("click", () => {
                                // this i want to push that card to the grave and remove the eliment
                                const clicked = creature.dataNum;
                                const sarifeCard = p2field.filter(function (c, index) {
                                    if (c.dataNum === clicked) {
                                        p2grave.push(p2field[index]);
                                        p2field.splice(index, 1);
                                        // removing the eliment
                                        p2Field.removeChild(createCardId);
                                        // evolveing star
                                        p2play(gettingCardData, card, gettingCardData.abilityOne);

                                    }
                                })
                            })

                        })
                    }






                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2GraveDisplay.appendChild(card);

        },
        abilityOne: function () {
            if (p2grave.length >= 1) {
                //create a tab 
                const tab = document.createElement("div");
                tab.setAttribute("class", "option");
                tab.innerHTML = "take card from the grave and place in in your hand"
                // yes and no options
                const yes = document.createElement("div");
                yes.setAttribute("class", "yes");
                yes.innerHTML = "yes";
                const no = document.createElement("div");
                no.setAttribute("class", "no");
                no.innerHTML = "no";

                tab.appendChild(yes);
                tab.appendChild(no);
                p2Field.appendChild(tab);

                // picking no
                no.addEventListener("click", () => {
                    // im going to remove the option tab
                    p2Field.removeChild(tab);
                    if (p1roundender === false && p2roundender === false) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === false && p2roundender === true) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === true && p2roundender === false) {
                        p1turn = false;
                        p2turn = true;
                    }
                    else {
                        p1turn = false;
                        p2turn = false;
                    }
                    // updateing the the hands so they follow the new turn system
                    handUpdate();
                    handDisplay();

                    // update score
                    scoredisplay();
                    if (p2turn === true) {

                        p2turnChangeAbility[0].FieldAbility()

                    }
                })

                // picking yes
                yes.addEventListener("click", () => {
                    checkInPower();
                    p2Field.removeChild(tab)
                    // displaying cards from my grave
                    playmat.appendChild(p2GraveDisplay);
                    p2graveDisplayAfterClick();
                    // i want to get the id of every card in my grave
                    const revive = p2grave.map(function (g, index) {
                        const name = g.id;
                        const ids = document.getElementById(name);
                        // clicking on the target
                        ids.addEventListener("click", () => {
                            p2GraveDisplay.removeChild(ids);
                            p2hand.push(p2grave[index]);
                            p2grave.splice(index, 1);

                            // remove the grave imange
                            playmat.removeChild(p2GraveDisplay);
                            p2graveUpdate();

                            if (p1roundender === false && p2roundender === false) {
                                p1turn = true;
                                p2turn = false;
                            } else if (p1roundender === false && p2roundender === true) {
                                p1turn = true;
                                p2turn = false;
                            } else if (p1roundender === true && p2roundender === false) {
                                p1turn = false;
                                p2turn = true;
                            }
                            else {
                                p1turn = false;
                                p2turn = false;
                            }
                            // updateing the the hands so they follow the new turn system
                            handUpdate();
                            handDisplay();

                            p2turnChangeAbility[1].FieldAbility();
                        })
                    })
                })
                
               
            }
        }
    }, // has ability
    {
        top: "mya",
        level: 2,
        center: "pic/p2myalv2.jpg",
        bottom: 5,
        basePower: 5,
        setPower: 5,
        type: "mother",
        info: "return a card from your grave to your hand",
        dataNum: 49,
        id: "myalvtwotwo",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            // serching to see if there is a evolution match is on the field
            let evamatch = p2field.filter(function (creature) {
                if (creature.dataNum === 45 || creature.dataNum === 46 || creature.dataNum === 47) {
                    return creature
                }
            })

            // condishions to summpnd this card
            if (p2turn === true && evamatch.length >= 1) {

                // when i click on this card
                card.addEventListener("click", function () {

                    // if there is only one card that can be sarafise it will happend automatic
                    if (evamatch.length === 1) {

                        // get the id for the card i would like to evolve
                        const getId = evamatch.forEach(function (creature) {
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            //i would like to filter that card off the field
                            const sarifeCard = p2field.filter(function (c, index) {
                                // checking to see if that card dataNum is the same as the only in the evamatch
                                if (c.dataNum === evamatch[0].dataNum) {
                                    p2grave.push(p2field[index]);
                                    p2field.splice(index, 1);
                                    // removing the eliment
                                    p2Field.removeChild(createCardId);
                                    // evolveing star
                                    p2play(gettingCardData, card, gettingCardData.abilityOne);
                                  
                                }
                            })

                        })

                    }
                    else {
                        // creat a tab that tells me to sarafise a star basic card
                        const tab = document.createElement("div");
                        tab.setAttribute("class", "infoTab");
                        tab.innerHTML = "sacrifice a basic star card inorder to summond this one";

                        p2Field.appendChild(tab);

                        const getId = evamatch.forEach(function (creature) {
                            // i create a click advent for the cards i ca evolve
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            // clicking on the card i want to sarifise
                            createCardId.addEventListener("click", () => {
                                // this i want to push that card to the grave and remove the eliment
                                const clicked = creature.dataNum;
                                const sarifeCard = p2field.filter(function (c, index) {
                                    if (c.dataNum === clicked) {
                                        p2grave.push(p2field[index]);
                                        p2field.splice(index, 1);
                                        // removing the eliment
                                        p2Field.removeChild(createCardId);
                                        // evolveing star
                                        p2play(gettingCardData, card, gettingCardData.abilityOne);

                                    }
                                })
                            })

                        })
                    }






                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2GraveDisplay.appendChild(card);

        },
        abilityOne: function () {
            if (p2grave.length >= 1) {
                //create a tab 
                const tab = document.createElement("div");
                tab.setAttribute("class", "option");
                tab.innerHTML = "take card from the grave and place in in your hand"
                // yes and no options
                const yes = document.createElement("div");
                yes.setAttribute("class", "yes");
                yes.innerHTML = "yes";
                const no = document.createElement("div");
                no.setAttribute("class", "no");
                no.innerHTML = "no";

                tab.appendChild(yes);
                tab.appendChild(no);
                p2Field.appendChild(tab);

                // picking no
                no.addEventListener("click", () => {
                    // im going to remove the option tab
                    p2Field.removeChild(tab);
                    if (p1roundender === false && p2roundender === false) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === false && p2roundender === true) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === true && p2roundender === false) {
                        p1turn = false;
                        p2turn = true;
                    }
                    else {
                        p1turn = false;
                        p2turn = false;
                    }
                    // updateing the the hands so they follow the new turn system
                    handUpdate();
                    handDisplay();

                    // update score
                    scoredisplay();
                    if (p2turn === true) {

                        p2turnChangeAbility[0].FieldAbility()

                    }
                })

                // picking yes
                yes.addEventListener("click", () => {
                    checkInPower();
                    p2Field.removeChild(tab)
                    // displaying cards from my grave
                    playmat.appendChild(p2GraveDisplay);
                    p2graveDisplayAfterClick();
                    // i want to get the id of every card in my grave
                    const revive = p2grave.map(function (g, index) {
                        const name = g.id;
                        const ids = document.getElementById(name);
                        // clicking on the target
                        ids.addEventListener("click", () => {
                            p2GraveDisplay.removeChild(ids);
                            p2hand.push(p2grave[index]);
                            p2grave.splice(index, 1);

                            // remove the grave imange
                            playmat.removeChild(p2GraveDisplay);
                            p2graveUpdate();

                            if (p1roundender === false && p2roundender === false) {
                                p1turn = true;
                                p2turn = false;
                            } else if (p1roundender === false && p2roundender === true) {
                                p1turn = true;
                                p2turn = false;
                            } else if (p1roundender === true && p2roundender === false) {
                                p1turn = false;
                                p2turn = true;
                            }
                            else {
                                p1turn = false;
                                p2turn = false;
                            }
                            // updateing the the hands so they follow the new turn system
                            handUpdate();
                            handDisplay();

                            p2turnChangeAbility[1].FieldAbility();
                        })
                    })
                })


            }
        }
    }, // has ability
    {
        top: "mya",
        level: 2,
        center: "pic/p2myalv2.jpg",
        bottom: 5,
        basePower: 5,
        setPower: 5,
        type: "mother",
        info: "return a card from your grave to your hand",
        dataNum: 50,
        id: "myalvtwothree",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            // serching to see if there is a evolution match is on the field
            let evamatch = p2field.filter(function (creature) {
                if (creature.dataNum === 45 || creature.dataNum === 46 || creature.dataNum === 47) {
                    return creature
                }
            })

            // condishions to summpnd this card
            if (p2turn === true && evamatch.length >= 1) {

                // when i click on this card
                card.addEventListener("click", function () {

                    // if there is only one card that can be sarafise it will happend automatic
                    if (evamatch.length === 1) {

                        // get the id for the card i would like to evolve
                        const getId = evamatch.forEach(function (creature) {
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            //i would like to filter that card off the field
                            const sarifeCard = p2field.filter(function (c, index) {
                                // checking to see if that card dataNum is the same as the only in the evamatch
                                if (c.dataNum === evamatch[0].dataNum) {
                                    p2grave.push(p2field[index]);
                                    p2field.splice(index, 1);
                                    // removing the eliment
                                    p2Field.removeChild(createCardId);
                                    // evolveing star
                                    p2play(gettingCardData, card, gettingCardData.abilityOne);
                                    
                                }
                            })

                        })

                    }
                    else {
                        // creat a tab that tells me to sarafise a star basic card
                        const tab = document.createElement("div");
                        tab.setAttribute("class", "infoTab");
                        tab.innerHTML = "sacrifice a basic star card inorder to summond this one";

                        p2Field.appendChild(tab);

                        const getId = evamatch.forEach(function (creature) {
                            // i create a click advent for the cards i ca evolve
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            // clicking on the card i want to sarifise
                            createCardId.addEventListener("click", () => {
                                // this i want to push that card to the grave and remove the eliment
                                const clicked = creature.dataNum;
                                const sarifeCard = p2field.filter(function (c, index) {
                                    if (c.dataNum === clicked) {
                                        p2grave.push(p2field[index]);
                                        p2field.splice(index, 1);
                                        // removing the eliment
                                        p2Field.removeChild(createCardId);
                                        // evolveing star
                                        p2play(gettingCardData, card, gettingCardData.abilityOne);

                                    }
                                })
                            })

                        })
                    }






                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2GraveDisplay.appendChild(card);

        },
        abilityOne: function () {
            if (p2grave.length >= 1) {
                //create a tab 
                const tab = document.createElement("div");
                tab.setAttribute("class", "option");
                tab.innerHTML = "take card from the grave and place in in your hand"
                // yes and no options
                const yes = document.createElement("div");
                yes.setAttribute("class", "yes");
                yes.innerHTML = "yes";
                const no = document.createElement("div");
                no.setAttribute("class", "no");
                no.innerHTML = "no";

                tab.appendChild(yes);
                tab.appendChild(no);
                p2Field.appendChild(tab);

                // picking no
                no.addEventListener("click", () => {
                    // im going to remove the option tab
                    p2Field.removeChild(tab);
                    if (p1roundender === false && p2roundender === false) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === false && p2roundender === true) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === true && p2roundender === false) {
                        p1turn = false;
                        p2turn = true;
                    }
                    else {
                        p1turn = false;
                        p2turn = false;
                    }
                    // updateing the the hands so they follow the new turn system
                    handUpdate();
                    handDisplay();

                    // update score
                    scoredisplay();
                    if (p2turn === true) {

                        p2turnChangeAbility[0].FieldAbility()

                    }
                })

                // picking yes
                yes.addEventListener("click", () => {
                    checkInPower();
                    p2Field.removeChild(tab)
                    // displaying cards from my grave
                    playmat.appendChild(p2GraveDisplay);
                    p2graveDisplayAfterClick();
                    // i want to get the id of every card in my grave
                    const revive = p2grave.map(function (g, index) {
                        const name = g.id;
                        const ids = document.getElementById(name);
                        // clicking on the target
                        ids.addEventListener("click", () => {
                            p2GraveDisplay.removeChild(ids);
                            p2hand.push(p2grave[index]);
                            p2grave.splice(index, 1);

                            // remove the grave imange
                            playmat.removeChild(p2GraveDisplay);
                            p2graveUpdate();

                            if (p1roundender === false && p2roundender === false) {
                                p1turn = true;
                                p2turn = false;
                            } else if (p1roundender === false && p2roundender === true) {
                                p1turn = true;
                                p2turn = false;
                            } else if (p1roundender === true && p2roundender === false) {
                                p1turn = false;
                                p2turn = true;
                            }
                            else {
                                p1turn = false;
                                p2turn = false;
                            }
                            // updateing the the hands so they follow the new turn system
                            handUpdate();
                            handDisplay();

                            p2turnChangeAbility[1].FieldAbility();
                        })
                    })
                })


            }
        }
    }, // has ability
    {
        top: "num",
        level: 1,
        center: "pic/p2num.jpg",
        bottom: 10,
        basePower: 10,
        setPower: 10,
        type: "seventh",
        info: "sarife a card on your side of the field to summond this one",
        dataNum: 51,
        id: "numbasicone",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;


            // condishions to summpnd this card
            if (p2turn === true && p2field.length >= 1) {

                // when i click on this card
                card.addEventListener("click", function () {

                    // if there is only one card that can be sarafise it will happend automatic
                    if (p2field.length === 1) {

                        // get the id for the card i would like to evolve
                        const getId = p2field.forEach(function (creature,index) {
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            p2Field.removeChild(createCardId);
                           // send card to the grave
                            p2grave.push(p2field[0]);
                            p2field.splice(0, 1);

                            // summond num
                            p2play(gettingCardData, card);

                        })

                    }
                    else if(p2field.length > 1) {
                        // creat a tab that tells me to sarafise a star basic card
                        const tab = document.createElement("div");
                        tab.setAttribute("class", "infoTab");
                        tab.innerHTML = "sacrifice a card inorder to summond this one";

                        p2Field.appendChild(tab);

                        const getId = p2field.forEach(function (creature, index) {
                            const name = creature.id;
                            const createCardId = document.getElementById(name);

                            createCardId.addEventListener("click", () => {

                                // send card to the grave
                                p2grave.push(p2field[index]);
                                p2field.splice(index, 1);
                                // remove card div
                                p2Field.removeChild(createCardId);
                                
                                // summond num
                                p2play(gettingCardData, card);
                            })
                           

                        })
                    }






                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2GraveDisplay.appendChild(card);

        },
       
    }, // has ability
    {
        top: "num",
        level: 1,
        center: "pic/p2num.jpg",
        bottom: 10,
        basePower: 10,
        setPower: 10,
        type: "seventh",
        info: "sarife a card on your side of the field to summond this one",
        dataNum: 52,
        id: "numbasictwo",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            if (p2turn === true) {
                // when i click on this card
                card.addEventListener("click", function () {

                    // if there is only one card that can be sarafise it will happend automatic
                    if (p2field.length === 1) {

                        // get the id for the card i would like to evolve
                        const getId = p2field.forEach(function (creature, index) {
                            const name = creature.id;
                            const createCardId = document.getElementById(name);
                            p2Field.removeChild(createCardId);
                            // send card to the grave
                            p2grave.push(p2field[0]);
                            p2field.splice(0, 1);

                            // summond num
                            p2play(gettingCardData, card);

                        })

                    }
                    else if (p2field.length > 1) {
                        // creat a tab that tells me to sarafise a star basic card
                        const tab = document.createElement("div");
                        tab.setAttribute("class", "infoTab");
                        tab.innerHTML = "sacrifice a card inorder to summond this one";

                        p2Field.appendChild(tab);

                        const getId = p2field.forEach(function (creature, index) {
                            const name = creature.id;
                            const createCardId = document.getElementById(name);

                            createCardId.addEventListener("click", () => {

                                // send card to the grave
                                p2grave.push(p2field[index]);
                                p2field.splice(index, 1);
                                // remove card div
                                p2Field.removeChild(createCardId);

                                // summond num
                                p2play(gettingCardData, card);
                            })


                        })
                    }






                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2GraveDisplay.appendChild(card);

        }
    }, // has ability
    {
        top: "bria",
        level: 1,
        center: "pic/plp2bria.jpg",
        bottom: 2,
        basePower: 2,
        setPower: 2,
        type: "seventh",
        info: "draw a card",
        dataNum: 53,
        id: "briabasicfour",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            if (p2turn === true) {
                card.addEventListener("click", function () {

                    p2play(gettingCardData, this, gettingCardData.abilityOne);
                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2GraveDisplay.appendChild(card);

        },
        abilityOne: function () {
            if (p1roundender === false && p2roundender === false) {
                p1turn = true;
                p2turn = false;
            } else if (p1roundender === false && p2roundender === true) {
                p1turn = true;
                p2turn = false;
            } else if (p1roundender === true && p2roundender === false) {
                p1turn = false;
                p2turn = true;

            }
            else {
                p1turn = false;
                p2turn = false;
            }
            draw(0, 1);
            // updateing the the hands so they follow the new turn system
            handUpdate();
            handDisplay();

            // update score
            scoredisplay();
            if (p2turn === true) {

                p2turnChangeAbility[0].FieldAbility()

            }
        }
    }, // has ability
    {
        top: "bria",
        level: 1,
        center: "pic/plp2bria.jpg",
        bottom: 2,
        basePower: 2,
        setPower: 2,
        type: "seventh",
        info: "draw a card",
        dataNum: 54,
        id: "briabasicfive",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            if (p2turn === true) {
                card.addEventListener("click", function () {

                    p2play(gettingCardData, this, gettingCardData.abilityOne);
                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2GraveDisplay.appendChild(card);

        },
        abilityOne: function () {
            if (p1roundender === false && p2roundender === false) {
                p1turn = true;
                p2turn = false;
            } else if (p1roundender === false && p2roundender === true) {
                p1turn = true;
                p2turn = false;
            } else if (p1roundender === true && p2roundender === false) {
                p1turn = false;
                p2turn = true;

            }
            else {
                p1turn = false;
                p2turn = false;
            }
            draw(0, 1);
            // updateing the the hands so they follow the new turn system
            handUpdate();
            handDisplay();

            // update score
            scoredisplay();
            if (p2turn === true) {

                p2turnChangeAbility[0].FieldAbility()

            }
        }
    }, // has ability
    {
        top: "agent mike",
        level: 1,
        center: "pic/p2agentMike.jpg",
        bottom: 3,
        basePower: 3,
        setPower: 3,
        type: "goverment",
        info: "put this card on your opponet side of the field and draw 2 card",
        dataNum: 55,
        id: "agentmikebasicone",
        spy: false,
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;
           
            if (p2turn === true ) {
                card.addEventListener("click", function () {

                    p2play(gettingCardData, this, gettingCardData.abilityOne);
                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            // checks to see if its on p1 side of the field
            const spy = p1field.filter(m => m.dataNum === 55);
            
            if (spy.length >= 1) {
                p1Field.appendChild(card);
            } else {
                p2Field.appendChild(card);
            }
           
           
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2GraveDisplay.appendChild(card);
        },
        abilityOne: function () {
            // option tab
            const tab = document.createElement("div");
            tab.setAttribute("class", "option");
            tab.innerHTML = "woudld u like to use spy- info gather"
            // yes and no options
            const yes = document.createElement("div");
            yes.setAttribute("class", "yes");
            yes.innerHTML = "yes";
            const no = document.createElement("div");
            no.setAttribute("class", "no");
            no.innerHTML = "no";
            // appending eliments
            tab.appendChild(yes);
            tab.appendChild(no);
            p2Field.appendChild(tab);
            // if i pick no
            no.addEventListener("click", () => {
                // im going to remove the option tab
                p2Field.removeChild(tab);
                if (p1roundender === false && p2roundender === false) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === false && p2roundender === true) {
                    p1turn = true;
                    p2turn = false;
                } else if (p1roundender === true && p2roundender === false) {
                    p1turn = false;
                    p2turn = true;
                }
                else {
                    p1turn = false;
                    p2turn = false;
                }
                // updateing the the hands so they follow the new turn system
                handUpdate();
                handDisplay();

                // update score
                scoredisplay();
                if (p2turn === true) {

                    p2turnChangeAbility[0].FieldAbility()

                }
            })
            yes.addEventListener("click", () => {
                p2Field.removeChild(tab);
                // get this card current position
                const spy = p2field.filter(function (findMike,index) {
                    if (findMike.dataNum === 55) {
                        p1field.push(p2field[index]);
                        p2field.splice(index, 1);

                        fieldUpdate();
                        FieldDispaly();

                        if (p1roundender === false && p2roundender === false) {
                            p1turn = true;
                            p2turn = false;
                        } else if (p1roundender === false && p2roundender === true) {
                            p1turn = true;
                            p2turn = false;
                        } else if (p1roundender === true && p2roundender === false) {
                            p1turn = false;
                            p2turn = true;
                        }
                        else {
                            p1turn = false;
                            p2turn = false;
                        }
                        // updateing the the hands so they follow the new turn system
                        handUpdate();
                        draw(0, 2);
                        handDisplay();

                        // update score
                        scoredisplay();
                        if (p2turn === true) {

                            p2turnChangeAbility[0].FieldAbility()

                        }
                    }
                })
            })
        }
    }, // has ability
    {
        top: "looking spell",
        level: 0,
        center: "pic/p2lookingSpell.jpg",
        bottom: "",
        type: "magic",
        info: "look at the top 3 cards in your deck a pick one",
        dataNum: 56,
        id: "lookingspellone",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            if (p2turn === true && p2deck.length >= 2) {
                card.addEventListener("click", function () {

                    p2play(gettingCardData, this,gettingCardData.abilityOne);
                })
            }
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2GraveDisplay.appendChild(card);

        },
        abilityOne: function () {
            // 1st im going to find out if i have3 remaining cards in my deck
            if (p2deck.length >= 3) {
                //remove cards from your hand
                p2turn = false;
                p2HandUpdate();
                // i want to see the top 3 cards in my deck on the field
                // and get there ids
                for (let x = 0; x < 3; x++) {
                    p2deck[x].Hand();
                    const name = p2deck[x].id;
                    const id = document.getElementById(name);
                    id.addEventListener("click", () => {
                        // add that crd to my hand
                        p2hand.push(p2deck[x]);
                        // remove it from the deck
                        p2deck.splice(x, 1);
                        // show hand again
                        p2turn = true;
                        handUpdate();
                        handDisplay();
                        // shuffel the deck
                        p2deck.sort(() => 0.5 - Math.random());
                        // change turns
                        if (p1roundender === false && p2roundender === false) {
                            p1turn = true;
                            p2turn = false;
                        } else if (p1roundender === false && p2roundender === true) {
                            p1turn = true;
                            p2turn = false;
                        } else if (p1roundender === true && p2roundender === false) {
                            p1turn = false;
                            p2turn = true;

                        }
                        else {
                            p1turn = false;
                            p2turn = false;
                        }

                        // updateing the the hands so they follow the new turn system
                        handUpdate();
                        handDisplay();

                        // update score
                        scoredisplay();
                        if (p2turn === true) {

                            p2turnChangeAbility[0].FieldAbility()

                        }
                    })
                }

            }
            else if (p2deck.length >= 2) {
                {
                    //remove cards from your hand
                    p2turn = false;
                    p2HandUpdate();
                    // i want to see the top 3 cards in my deck on the field
                    // and get there ids
                    for (let x = 0; x < 2; x++) {
                        p2deck[x].Hand();
                        const name = p2deck[x].id;
                        const id = document.getElementById(name);
                        id.addEventListener("click", () => {
                            // add that crd to my hand
                            p2hand.push(p2deck[x]);
                            // remove it from the deck
                            p2deck.splice(x, 1);
                            // show hand again
                            p2turn = true;
                            handUpdate();
                            handDisplay();
                            // shuffel the deck
                            p2deck.sort(() => 0.5 - Math.random());
                            // change turns
                            if (p1roundender === false && p2roundender === false) {
                                p1turn = true;
                                p2turn = false;
                            } else if (p1roundender === false && p2roundender === true) {
                                p1turn = true;
                                p2turn = false;
                            } else if (p1roundender === true && p2roundender === false) {
                                p1turn = false;
                                p2turn = true;

                            }
                            else {
                                p1turn = false;
                                p2turn = false;
                            }

                            // updateing the the hands so they follow the new turn system
                            handUpdate();
                            handDisplay();

                            // update score
                            scoredisplay();
                            if (p2turn === true) {

                                p2turnChangeAbility[0].FieldAbility()

                            }
                        })
                    }

                }
            }
           
            
        }
    }, // has ability
    {
        top: "reaper claw",
        level: 0,
        center: "pic/p2reaperclaw.jpg",
        bottom: "",
        type: "magic",
        info: "double the power of a reaper card on your side of the field",
        dataNum: 57,
        id: "reaperclawone",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            // checking for type reaper on your side of the field
            const isReaper = p2field.filter(ir => ir.type === "reaper");

            if (p2turn === true && isReaper.length >= 1) {
                card.addEventListener("click", function () {

                    p2play(gettingCardData, this, gettingCardData.abilityOne);
                })
            }
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2GraveDisplay.appendChild(card);

        },
        abilityOne: function () {

            // asking a player to select a card option
            const tab = document.createElement("div");
            tab.setAttribute("class", "option");
            tab.innerHTML = "select card to give a boost to"
            p2Field.appendChild(tab);

            // get  cards that can be selected
            const isReaper = p2field.filter(ir => ir.type === "reaper");

            // pick a card to boost
            isReaper.map(function (reapers) {
                // getting the id of all reaper cards on the field
                const name = reapers.id;
                const id = document.getElementById(name);

                id.addEventListener("click", () => {
                    reapers.bottom = reapers.bottom * 2;
                    reapers.basePower = reapers.bottom;
                    

                    fieldUpdate();
                    FieldDispaly();

                    if (p1roundender === false && p2roundender === false) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === false && p2roundender === true) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === true && p2roundender === false) {
                        p1turn = false;
                        p2turn = true;

                    }
                    else {
                        p1turn = false;
                        p2turn = false;
                    }
                   
                    // updateing the the hands so they follow the new turn system
                    handUpdate();
                    handDisplay();

                    // update score
                    scoredisplay();
                    if (p2turn === true) {

                        p2turnChangeAbility[0].FieldAbility()

                    }
                })

            })

        }

    }, // has ability
    {
        top: "home coming",
        level: 0,
        center: "pic/p1p2homecomeing.jpg",
        bottom: "",
        type: "magic",
        info: " return a card from the battle field to your hand",
        dataNum: 58,
        id: "homecomeingthree",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            if (p2turn === true && p2field.length >= 1) {
                card.addEventListener("click", function () {

                    p2play(gettingCardData, this,gettingCardData.abilityOne);
                })
            }
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2GraveDisplay.appendChild(card);

        },
        abilityOne: function () {

            // finding out if i want to use an ability 
            const tab = document.createElement("div");
            tab.setAttribute("class", "option");
            tab.innerHTML = "return target to your hand"
            p2Field.appendChild(tab);

            //getting card ids
            p2field.map(function (f, i) {
                const name = f.id;
                const getId = document.getElementById(name);

                getId.addEventListener("click", () => {
                    // return card to the hand
                    p2hand.push(p2field[i]);
                    p2field.splice(i, 1);
                    //remove the div
                    p2Field.removeChild(getId);
                    p2Field.removeChild(tab);

                    handPowercheck();
                    if (p1roundender === false && p2roundender === false) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === false && p2roundender === true) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === true && p2roundender === false) {
                        p1turn = false;
                        p2turn = true;
                    }
                    else {
                        p1turn = false;
                        p2turn = false;
                    }


                    // updateing the the hands so they follow the new turn system
                    handUpdate();
                    handDisplay();

                    // update score
                    scoredisplay();
                    if (p2turn === true) {

                        p2turnChangeAbility[0].FieldAbility()

                    }

                })
            })


        }
    }, // has ability
    {
        top: "despell",
        level: 0,
        center: "pic/p1p2remove field.jpg",
        bottom: "",
        type: "magic",
        info: " remove field card from the battle field",
        dataNum: 59,
        id: "despelltwo",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            if (p2turn === true && land.length >= 1) {
                card.addEventListener("click", function () {
                    // empyt out the land aaray
                    if (land[0].owner === "p1") {
                        p1grave.push(land[0]);
                        land.splice(0, 1);
                    } else if (land[0].owner === "p2") {
                        p2grave.push(land[0]);
                        land.splice(0, 1);
                    }
                    p2play(gettingCardData, this);
                })
            }
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2GraveDisplay.appendChild(card);

        }
    }, // has ability
    {
        top: "big city",
        level: 0,
        center: "pic/p2bigcity.jpg",
        bottom: "",
        type: "land",
        info: "each player can dicard a card from thier hand in order to draw a card on thire turn",
        dataNum: 60,
        id: "bigcityone",
        owner:"p2",
        Hand: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Hand.appendChild(card);

            // getting info to pass
            const gettingCardData = this;

            if (p2turn === true) {
                card.addEventListener("click", function () {
                    // empyt out the land aaray
                    if (land.length >= 1 && land[0].owner === "p1") {
                        p1grave.push(land[0]);
                        land.splice(0, 1);
                    } else if (land.length >= 1 && land[0].owner === "p2") {
                        p2grave.push(land[0]);
                        land.splice(0, 1);
                    }

                    p2play(gettingCardData, this,gettingCardData.abilityOne);
                })
            }
        },
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            Field.appendChild(card);
        },
        Grave: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2GraveDisplay.appendChild(card);

        },
        abilityOne: function () {

            console.log("just here so i dnt get fined");

            if (p1roundender === false && p2roundender === false) {
                p1turn = true;
                p2turn = false;
            } else if (p1roundender === false && p2roundender === true) {
                p1turn = true;
                p2turn = false;
            } else if (p1roundender === true && p2roundender === false) {
                p1turn = false;
                p2turn = true;
            }
            else {
                p1turn = false;
                p2turn = false;
            }


            // updateing the the hands so they follow the new turn system
            handUpdate();
            handDisplay();

            // update score
            scoredisplay();
            if (p2turn === true) {

                p2turnChangeAbility[0].FieldAbility()

            }
        }
    } // has ability
];
// tocken creatures
const p2tockens = [
    {
         
        top: "reaper tocken",
        level: 1,
        center: "pic/p2reapertocken.jpg",
        bottom: 0,
        basePower: 0,
        type: "reaper",
        info: "witch battle with healer, sarafie to use rebirth, dsicard a card in your hand and gain a + 1",
        dataNum: 0,
        id: "reapertockenone",
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Field.appendChild(card);


        }
    },
    {

        top: "reaper tocken",
        level: 1,
        center: "pic/p2reapertocken.jpg",
        bottom: 0,
        basePower: 0,
        type: "reaper",
        info: "witch battle with healer, sarafie to use rebirth, dsicard a card in your hand and gain a + 1",
        dataNum: 01,
        id: "reapertockentwo",
        Field: function () {
            // card it self
            const card = document.createElement("div");
            card.setAttribute("data-id", this.dataNum);
            card.setAttribute("class", this.type);
            card.setAttribute("id", this.id);
            // top of the card
            const top = document.createElement("h5");
            top.setAttribute("class", "top");
            top.innerHTML = this.top + " " + this.level;
            // card imange
            const center = document.createElement("img");
            center.setAttribute("src", this.center);
            const info = document.createElement("h6");
            info.setAttribute("class", "info");
            info.innerHTML = this.info;
            // bottom 
            const bottom = document.createElement("h5");
            bottom.setAttribute("class", "bottom");
            bottom.innerHTML = this.bottom;

            // put card togather
            card.appendChild(top);
            card.appendChild(center);
            card.appendChild(info);
            card.appendChild(bottom);

            p2Field.appendChild(card);


        }
    }
    
]

// field ability
const p1ability = [
    {
        FieldAbility: function (data, card,ability) {
            // find out if data num 7 is on the field
            const checkField = p1field.filter(datanum => datanum.dataNum === 7)
            if (checkField.length >= 1) {
                if (data.type === "mother" && data.dataNum !== 7) {
                    data.basePower = data.basePower * 2;
                    data.bottom = data.basePower;
                    fieldUpdate();
                    FieldDispaly();

                    p1ability[1].FieldAbility(data, card, ability);
                } else {
                    p1ability[1].FieldAbility(data, card, ability);
                }

            }
            else {
                p1ability[1].FieldAbility(data, card,ability);
            }

          
        },
    },
    {
        FieldAbility: function (data, card,ability) {
            // find out if data num 8 is on the field
            const checkField = p1field.filter(datanum => datanum.dataNum === 8)
            if (checkField.length >= 1) {
                if (data.type === "mother" && data.dataNum !== 8) {
                    data.basePower = data.basePower * 2;
                    data.bottom = data.basePower;
                    fieldUpdate();
                    FieldDispaly();

                    p1ability[2].FieldAbility(data, card, ability);
                }
                else {
                    p1ability[2].FieldAbility(data, card, ability);
                }

            }
            else {
                p1ability[2].FieldAbility(data, card, ability);
            }
          

        },
    },
    {
        FieldAbility: function (data, card,ability) {
           
            // find out if data num 4 is on the field
            let checkField = p1field.filter(datanum => datanum.dataNum === 4);
            // finding out how many cards on the field are mother types with out dataNum  4
            const motheramount = p1field.filter(function (mt) {
                if (mt.type === "mother" && mt.dataNum !== 4) {
                    return mt;
                }
            })
            
            // runing code if data number 4 is on the field
            if (checkField.length >= 1) {
                checkField[0].bottom = checkField[0].basePower;
                checkField[0].bottom = checkField[0].bottom + motheramount.length;
                fieldUpdate();
                FieldDispaly();
                p1ability[3].FieldAbility(data, card, ability);
            }
            else {
                p1ability[3].FieldAbility(data, card, ability);
            }
           
        }
    },
    {
        FieldAbility: function (data, card,ability) {

            // find out if data num 4 is on the field
            let checkField = p1field.filter(datanum => datanum.dataNum === 5);
            // finding out how many cards on the field are mother types with out dataNum  4
            const motheramount = p1field.filter(function (mt) {
                if (mt.type === "mother" && mt.dataNum !== 5) {
                    return mt;
                }
            })

            // runing code if data number 4 is on the field
            if (checkField.length >= 1) {
                checkField[0].bottom = checkField[0].basePower;
                checkField[0].bottom = checkField[0].bottom + motheramount.length;
                fieldUpdate();
                FieldDispaly();
                p1ability[4].FieldAbility(data, card, ability);
            }
            else {
                p1ability[4].FieldAbility(data, card, ability);
            }
            
        }
    },
    {
        FieldAbility: function (data, card,ability) {

            // find out if data num 4 is on the field
            let checkField = p1field.filter(datanum => datanum.dataNum === 6);
            // finding out how many cards on the field are mother types with out dataNum  4
            const motheramount = p1field.filter(function (mt) {
                if (mt.type === "mother" && mt.dataNum !== 6) {
                    return mt;
                }
            })

            // runing code if data number 4 is on the field
            if (checkField.length >= 1) {
                checkField[0].bottom = checkField[0].basePower;
                checkField[0].bottom = checkField[0].bottom + motheramount.length;
                fieldUpdate();
                FieldDispaly();
                // check for abilityOne
                if (ability) {
                    ability();

                } else {

                    // changing turns
                    if (p1roundender === false && p2roundender === false) {
                        p1turn = false;
                        p2turn = true;
                    } else if (p1roundender === false && p2roundender === true) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === true && p2roundender === false) {
                        p1turn = false;
                        p2turn = true;
                    }
                    else {
                        p1turn = false;
                        p2turn = false;
                    }
                    // updateing the the hands so they follow the new turn system
                    handUpdate();
                    handDisplay();

                    // update score
                    scoredisplay();
                    if (p2turn === true) {

                        p2turnChangeAbility[0].FieldAbility()

                    }
                }
            } else {
                // check for abilityOne
                if (ability) {
                    ability();

                } else {

                    // changing turns
                    if (p1roundender === false && p2roundender === false) {
                        p1turn = false;
                        p2turn = true;
                    } else if (p1roundender === false && p2roundender === true) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === true && p2roundender === false) {
                        p1turn = false;
                        p2turn = true;
                    }
                    else {
                        p1turn = false;
                        p2turn = false;
                    }
                    // updateing the the hands so they follow the new turn system
                    handUpdate();
                    handDisplay();

                    // update score
                    scoredisplay();
                    if (p2turn === true) {

                        p2turnChangeAbility[0].FieldAbility()

                    }
                }
            }
           
        }
    },
]
const p2ability = [
    
    {
        FieldAbility: function (card, eliment,ability) {
            
                // check for abilityOne
                if (ability) {
                    ability();


                } else {
                    // changing turns
                    if (p1roundender === false && p2roundender === false) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === false && p2roundender === true) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === true && p2roundender === false) {
                        p1turn = false;
                        p2turn = true;

                    }
                    else {
                        p1turn = false;
                        p2turn = false;
                    }
                    // updateing the the hands so they follow the new turn system
                    handUpdate();
                    handDisplay();

                    // update score
                    scoredisplay();
                    if (p2turn === true) {

                        p2turnChangeAbility[0].FieldAbility()

                    }

                }

               
            
          
        }
    }
]

const landAbility = [
    {
        FieldAbility: function (data, card, ability) {
            // see if mothers garten is in the land spot
            const mothersGarten = land.filter(img => img.dataNum === 29);

            if (mothersGarten.length >= 1) {
                // check if the card entering the battle is aof type mother 
                if (data.type === "mother") {
                    data.bottom = data.bottom + 1;
                    data.basePower = data.bottom;
                    fieldUpdate();
                    FieldDispaly();

                    if (p1turn === true) {
                        // checking for all fieldability
                        p1ability[0].FieldAbility(data, card, ability);
                    } else if (p2turn === true) {
                        // checking for all fieldability
                        p2ability[0].FieldAbility(data, card, ability);
                    }

                }
                else {
                    if (p1turn === true) {
                        // checking for all fieldability
                        p1ability[0].FieldAbility(data, card, ability);
                    } else if (p2turn === true) {
                        // checking for all fieldability
                        p2ability[0].FieldAbility(data, card, ability);
                    }
                }

            } else {
                landAbility[1].FieldAbility(data, card, ability);
            }
        }
    },
    {
        FieldAbility: function (data, card, ability) {
          // find out if big city is on the land spot
            const bigCity = land.filter(img => img.dataNum === 60);

            if (bigCity.length >= 1 && p1turn === true) {

                // now i cnt summod cards from my hand
                p1turn = false;
                p1HandUpdate();
                p1HandDisplay();
                
                // i want it to give you the options to dicard a card from your hand
                // option tab
                const tab = document.createElement("div");
                tab.setAttribute("class", "option");
                tab.innerHTML = "discard a card from your hand and draw a card from your deck"
                // yes and no options
                const yes = document.createElement("div");
                yes.setAttribute("class", "yes");
                yes.innerHTML = "yes";
                const no = document.createElement("div");
                no.setAttribute("class", "no");
                no.innerHTML = "no";
                // appending eliments
                tab.appendChild(yes);
                tab.appendChild(no);
                Field.appendChild(tab);

                no.addEventListener("click", () => {
                    p1turn = true;
                    handUpdate();
                    handDisplay();

                    Field.removeChild(tab);
                    if (p1turn === true) {
                        // checking for all fieldability
                        p1ability[0].FieldAbility(data, card, ability);
                    } else if (p2turn === true) {
                        // checking for all fieldability
                        p2ability[0].FieldAbility(data, card, ability);
                    }
                })

                if (p1hand.length >= 1) {
                    yes.addEventListener("click", () => {
                        // remove the yes and no option
                        tab.removeChild(yes);
                        tab.removeChild(no);
                        //changing tab text
                        tab.innerHTML = "discard a card in your hand";



                        // get id for every card in p1 hand
                        p1hand.map(function (card, index) {
                            const id = document.getElementById(card.id)
                            // chosing a card to remove
                            id.addEventListener("click", () => {
                                // remove card
                                p1grave.push(p1hand[index]);
                                p1hand.splice(index, 1);
                                // remove tab
                                Field.removeChild(tab);
                                // removeing id
                                p1Hand.removeChild(id);
                                draw(1, 0);

                                p1turn = true;
                                handUpdate();
                                handDisplay();
                                p1ability[0].FieldAbility(data, card, ability);
                            })

                        })
                    })
                } else {
                    p1turn = true;
                    handUpdate();
                    handDisplay();

                    Field.removeChild(tab);
                    if (p1turn === true) {
                        // checking for all fieldability
                        p1ability[0].FieldAbility(data, card, ability);
                    } else if (p2turn === true) {
                        // checking for all fieldability
                        p2ability[0].FieldAbility(data, card, ability);
                    }
                }
                
                
            }
            else if (bigCity.length >= 1 && p2turn === true) {

                // now i cnt summod cards from my hand
                p2turn = false;
                p2HandUpdate();
                p2HandDisplay();
                // i want it to give you the options to dicard a card from your hand
                // option tab
                const tab = document.createElement("div");
                tab.setAttribute("class", "option");
                tab.innerHTML = "discard a card from your hand and draw a card from your deck"
                // yes and no options
                const yes = document.createElement("div");
                yes.setAttribute("class", "yes");
                yes.innerHTML = "yes";
                const no = document.createElement("div");
                no.setAttribute("class", "no");
                no.innerHTML = "no";
                // appending eliments
                tab.appendChild(yes);
                tab.appendChild(no);
                Field.appendChild(tab);

                no.addEventListener("click", () => {
                    p2turn = true;
                    handUpdate();
                    handDisplay();

                    Field.removeChild(tab);
                    if (p1turn === true) {
                        // checking for all fieldability
                        p1ability[0].FieldAbility(data, card, ability);
                    } else if (p2turn === true) {
                        // checking for all fieldability
                        p2ability[0].FieldAbility(data, card, ability);
                    }
                })

                if (p2hand.length >= 1) {
                    yes.addEventListener("click", () => {
                        // remove the yes and no option
                        tab.removeChild(yes);
                        tab.removeChild(no);
                        //changing tab text
                        tab.innerHTML = "discard a card in your hand";



                        // get id for every card in p1 hand
                        p2hand.map(function (card, index) {
                            const id = document.getElementById(card.id)
                            // chosing a card to remove
                            id.addEventListener("click", () => {
                                // remove card
                                p2grave.push(p2hand[index]);
                                p2hand.splice(index, 1);
                                // remove tab
                                Field.removeChild(tab);
                                // removeing id
                                p2Hand.removeChild(id);
                                draw(0, 1);

                                p2turn = true;
                                handUpdate();
                                handDisplay();
                                p2ability[0].FieldAbility(data, card, ability);
                            })

                        })
                    })
                } else {
                    p2turn = true;
                    handUpdate();
                    handDisplay();

                    Field.removeChild(tab);
                    if (p1turn === true) {
                        // checking for all fieldability
                        p1ability[0].FieldAbility(data, card, ability);
                    } else if (p2turn === true) {
                        // checking for all fieldability
                        p2ability[0].FieldAbility(data, card, ability);
                    }
                }

            }
            else {
                if (p1turn === true) {
                    // checking for all fieldability
                    p1ability[0].FieldAbility(data, card, ability);
                } else if (p2turn === true) {
                    // checking for all fieldability
                    p2ability[0].FieldAbility(data, card, ability);
                }
            }
        }
    }
]

// 1st card responce abilityq
const p2turnChangeAbility = [
    {
        FieldAbility: function () {
            // check for reaper tocken
            const isReaperTocken = p2field.filter(cards => cards.dataNum === 0);
          
                    // if  reaper is on field
            if (isReaperTocken.length >= 1) {
                // pause the turns
                p1turn = false;
                p2turn = false;
                handUpdate();
                handDisplay();
                // show cards in your hand
                p2HandUpdate();
                p2HandDisplay();
                // finding out if i want to use an ability this turn
                const tab = document.createElement("div");
                tab.setAttribute("class", "option");
                tab.innerHTML = "would you like to use an ability this turn"
                // yes and no options
                const yes = document.createElement("div");
                yes.setAttribute("class", "yes");
                yes.innerHTML = "yes";
                const no = document.createElement("div");
                no.setAttribute("class", "no");
                no.innerHTML = "no";
                // appending eliments
                tab.appendChild(yes);
                tab.appendChild(no);
                p2Field.appendChild(tab);
                // if i pick no
                no.addEventListener("click", () => {
                    // im going to remove the option tab
                    p2Field.removeChild(tab);
                    if (p1roundender === false && p2roundender === false) {
                        p1turn = false;
                        p2turn = true;
                    } else if (p1roundender === false && p2roundender === true) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === true && p2roundender === false) {
                        p1turn = false;
                        p2turn = true;
                    }
                    else {
                        p1turn = false;
                        p2turn = false;
                    }
                    // updateing the the hands so they follow the new turn system
                    handUpdate();
                    handDisplay();

                    p2turnChangeAbility[1].FieldAbility();
                })
                // yes option
                yes.addEventListener("click", () => {
                    // removing yes and no form the tab
                    tab.removeChild(yes);
                    tab.removeChild(no);
                    tab.innerHTML = "";


                    // creating ability 1 
                    const destroyer = document.createElement("div");
                    destroyer.setAttribute("class", "destroyer");
                    destroyer.innerHTML = "witch battle";
                    tab.appendChild(destroyer);


                    // creating ability 2
                    const rebirth = document.createElement("div");
                    rebirth.setAttribute("class", "rebirth");
                    rebirth.innerHTML = "rebirth";
                    tab.appendChild(rebirth);


                    // creating ability 3
                    const powerUp = document.createElement("div");
                    powerUp.setAttribute("class", "powerUp");
                    powerUp.innerHTML = "power up";
                    tab.appendChild(powerUp);




                    // destroyer ability
                    destroyer.addEventListener("click", () => {
                        if (p1field.length >= 1) {
                            // remove othe optios
                            tab.removeChild(destroyer);
                            tab.removeChild(rebirth);
                            tab.removeChild(powerUp);
                            // change text
                            tab.innerHTML = "select target";
                            // get opponets cards
                            const targets = p1field.map(function (t, index) {
                                const name = t.id;
                                const ids = document.getElementById(name);
                                // selecting targe and finding out if its stronger or not
                                ids.addEventListener("click", () => {
                                    if (isReaperTocken[0].bottom > t.bottom) {
                                        isReaperTocken[0].bottom = isReaperTocken[0].bottom - t.bottom;
                                        isReaperTocken[0].basePower = isReaperTocken[0].bottom;
                                        // destroy opponet card
                                        p1grave.push(p1field[index]);
                                        p1field.splice(index, 1);
                                        p1Field.removeChild(ids);
                                        // removing the tab
                                        p2Field.removeChild(tab);
                                        fieldUpdate();
                                        FieldDispaly();


                                        if (p1roundender === false && p2roundender === false) {
                                            p1turn = false;
                                            p2turn = true;
                                        } else if (p1roundender === false && p2roundender === true) {
                                            p1turn = true;
                                            p2turn = false;
                                        } else if (p1roundender === true && p2roundender === false) {
                                            p1turn = false;
                                            p2turn = true;
                                        }
                                        else {
                                            p1turn = false;
                                            p2turn = false;
                                        }
                                        // updateing the the hands so they follow the new turn system
                                        handUpdate();
                                        handDisplay();
                                        p2turnChangeAbility[1].FieldAbility();
                                    }
                                    else if (isReaperTocken[0].bottom < t.bottom) {
                                        // subtracting damange
                                        t.bottom = t.bottom - isReaperTocken[0].bottom;
                                        t.basePower = t.basePower - isReaperTocken[0].bottom;

                                        // finding reaper id
                                        const findingReaper = p2field.filter(function (reaper, i) {
                                            if (reaper.dataNum === 0) {
                                                p2field.splice(i, 1);
                                                const getId = reaper.id;
                                                const reaperid = document.getElementById(getId);
                                                p2Field.removeChild(reaperid);
                                            }
                                        })

                                        // removing the tab
                                        p2Field.removeChild(tab);
                                        fieldUpdate();
                                        FieldDispaly();

                                        if (p1roundender === false && p2roundender === false) {
                                            p1turn = false;
                                            p2turn = true;
                                        } else if (p1roundender === false && p2roundender === true) {
                                            p1turn = true;
                                            p2turn = false;
                                        } else if (p1roundender === true && p2roundender === false) {
                                            p1turn = false;
                                            p2turn = true;
                                        }
                                        else {
                                            p1turn = false;
                                            p2turn = false;
                                        }
                                        // updateing the the hands so they follow the new turn system
                                        handUpdate();
                                        handDisplay();
                                        p2turnChangeAbility[1].FieldAbility();
                                    }
                                    else {
                                        // destroy opponet card
                                        p1grave.push(p1field[index]);
                                        p1field.splice(index, 1);
                                        p1Field.removeChild(ids);
                                        // finding reaper id
                                        const findingReaper = p2field.filter(function (reaper, i) {
                                            if (reaper.dataNum === 0) {
                                                p2field.splice(i, 1);
                                                const getId = reaper.id;
                                                const reaperid = document.getElementById(getId);
                                                p2Field.removeChild(reaperid);
                                            }
                                        })

                                        // removing the tab
                                        p2Field.removeChild(tab);
                                        fieldUpdate();
                                        FieldDispaly();

                                        // changing turns
                                        if (p1roundender === false && p2roundender === false) {
                                            p1turn = true;
                                            p2turn = false;
                                        } else if (p1roundender === false && p2roundender === true) {
                                            p1turn = true;
                                            p2turn = false;
                                        } else if (p1roundender === true && p2roundender === false) {
                                            p1turn = false;
                                            p2turn = true;
                                        }
                                        else {
                                            p1turn = false;
                                            p2turn = false;
                                        }
                                        // updateing the the hands so they follow the new turn system
                                        handUpdate();
                                        handDisplay();

                                        // update score
                                        scoredisplay();
                                        if (p2turn === true) {

                                            p2turnChangeAbility[0].FieldAbility()

                                        }
                                    }
                                });
                            })
                        }


                    })
                    // rebirth ability
                    rebirth.addEventListener("click", () => {
                        if (p2grave.length >= 1) {
                            checkInPower();
                            // remove othe optios
                            tab.removeChild(destroyer);
                            tab.removeChild(rebirth);
                            tab.removeChild(powerUp);
                            // change text
                            p2Field.removeChild(tab)
                            // displaying cards from my grave
                            playmat.appendChild(p2GraveDisplay);
                            p2graveDisplayAfterClick();
                            // i want to get the id of every card in my grave
                            const revive = p2grave.map(function (g, index) {
                                const name = g.id;
                                const ids = document.getElementById(name);
                                // clicking on the target
                                ids.addEventListener("click", () => {
                                    p2GraveDisplay.removeChild(ids);
                                    p2hand.push(p2grave[index]);
                                    p2grave.splice(index, 1);

                                    // remove the reaper
                                    const findingReaper = p2field.filter(function (reaper, i) {
                                        if (reaper.dataNum === 0) {
                                            p2field.splice(i, 1);
                                            const getId = reaper.id;
                                            const reaperid = document.getElementById(getId);
                                            p2Field.removeChild(reaperid);
                                        }
                                    })
                                    // remove the grave imange
                                    playmat.removeChild(p2GraveDisplay);
                                    p2graveUpdate();

                                    if (p1roundender === false && p2roundender === false) {
                                        p1turn = false;
                                        p2turn = true;
                                    } else if (p1roundender === false && p2roundender === true) {
                                        p1turn = true;
                                        p2turn = false;
                                    } else if (p1roundender === true && p2roundender === false) {
                                        p1turn = false;
                                        p2turn = true;
                                    }
                                    else {
                                        p1turn = false;
                                        p2turn = false;
                                    }
                                    // updateing the the hands so they follow the new turn system
                                    handUpdate();
                                    handDisplay();

                                    p2turnChangeAbility[1].FieldAbility();
                                })
                            })
                        }

                    })
                    // power up ability
                    powerUp.addEventListener("click", () => {
                        if (p2hand.length >= 1) {
                            // remove othe optios
                            tab.removeChild(destroyer);
                            tab.removeChild(rebirth);
                            tab.removeChild(powerUp);
                            // change text
                            tab.innerHTML = "discard a card in your hand";
                            // get the id of all cards in my hand
                            const getcards = p2hand.map(function (card, index) {
                                const id = document.getElementById(card.id)
                                // chosing a card to remove
                                id.addEventListener("click", () => {
                                    // remove card
                                    p2grave.push(p2hand[index]);
                                    p2hand.splice(index, 1);
                                    // remove tab
                                    p2Field.removeChild(tab);
                                    // removeing card
                                    p2Hand.removeChild(id);

                                    // giving the reaper tocken a +1
                                    const powerUpability = p2field.filter(rt => rt.dataNum === 0);
                                    powerUpability.map(power => power.bottom = power.bottom + 1);
                                    powerUpability.map(power => power.basePower = power.bottom);
                                    fieldUpdate();
                                    FieldDispaly();

                                    if (p1roundender === false && p2roundender === false) {
                                        p1turn = false;
                                        p2turn = true;
                                    } else if (p1roundender === false && p2roundender === true) {
                                        p1turn = true;
                                        p2turn = false;
                                    } else if (p1roundender === true && p2roundender === false) {
                                        p1turn = false;
                                        p2turn = true;
                                    }
                                    else {
                                        p1turn = false;
                                        p2turn = false;
                                    }
                                    // updateing the the hands so they follow the new turn system
                                    handUpdate();
                                    handDisplay();
                                    p2turnChangeAbility[1].FieldAbility();
                                })
                            })
                        }

                    })
                })
            } else {
                p2turnChangeAbility[1].FieldAbility();
            }
           
            
        }
    },
    {
        FieldAbility: function () {
            const isReaperTocken = p2field.filter(cards => cards.dataNum === 01);

            if (isReaperTocken.length >= 1) {
                // pause the turns
                p1turn = false;
                p2turn = false;
                handUpdate();
                handDisplay();
                // show cards in your hand
                p2HandUpdate();
                p2HandDisplay();
                // finding out if i want to use an ability this turn
                const tab = document.createElement("div");
                tab.setAttribute("class", "option");
                tab.innerHTML = "would you like to use an ability this turn"
                // yes and no options
                const yes = document.createElement("div");
                yes.setAttribute("class", "yes");
                yes.innerHTML = "yes";
                const no = document.createElement("div");
                no.setAttribute("class", "no");
                no.innerHTML = "no";
                // appending eliments
                tab.appendChild(yes);
                tab.appendChild(no);
                p2Field.appendChild(tab);
                // if i pick no
                no.addEventListener("click", () => {
                    // im going to remove the option tab
                    p2Field.removeChild(tab);
                    if (p1roundender === false && p2roundender === false) {
                        p1turn = false;
                        p2turn = true;
                    } else if (p1roundender === false && p2roundender === true) {
                        p1turn = true;
                        p2turn = false;
                    } else if (p1roundender === true && p2roundender === false) {
                        p1turn = false;
                        p2turn = true;
                    }
                    else {
                        p1turn = false;
                        p2turn = false;
                    }
                    // updateing the the hands so they follow the new turn system
                    handUpdate();
                    handDisplay();
                })
                // yes option
                yes.addEventListener("click", () => {
                    // removing yes and no form the tab
                    tab.removeChild(yes);
                    tab.removeChild(no);
                    tab.innerHTML = "";


                    // creating ability 1 
                    const destroyer = document.createElement("div");
                    destroyer.setAttribute("class", "destroyer");
                    destroyer.innerHTML = "witch battle";
                    tab.appendChild(destroyer);


                    // creating ability 2
                    const rebirth = document.createElement("div");
                    rebirth.setAttribute("class", "rebirth");
                    rebirth.innerHTML = "rebirth";
                    tab.appendChild(rebirth);


                    // creating ability 3
                    const powerUp = document.createElement("div");
                    powerUp.setAttribute("class", "powerUp");
                    powerUp.innerHTML = "power up";
                    tab.appendChild(powerUp);




                    // destroyer ability
                    destroyer.addEventListener("click", () => {
                        if (p1field.length >= 1) {
                            // remove othe optios
                            tab.removeChild(destroyer);
                            tab.removeChild(rebirth);
                            tab.removeChild(powerUp);
                            // change text
                            tab.innerHTML = "select target";
                            // get opponets cards
                            const targets = p1field.map(function (t, index) {
                                const name = t.id;
                                const ids = document.getElementById(name);
                                // selecting targe and finding out if its stronger or not
                                ids.addEventListener("click", () => {
                                    if (isReaperTocken[0].bottom > t.bottom) {
                                        isReaperTocken[0].bottom = isReaperTocken[0].bottom - t.bottom;
                                        isReaperTocken[0].basePower = isReaperTocken[0].bottom;
                                        // destroy opponet card
                                        p1grave.push(p1field[index]);
                                        p1field.splice(index, 1);
                                        p1Field.removeChild(ids);
                                        // removing the tab
                                        p2Field.removeChild(tab);
                                        fieldUpdate();
                                        FieldDispaly();

                                        if (p1roundender === false && p2roundender === false) {
                                            p1turn = false;
                                            p2turn = true;
                                        } else if (p1roundender === false && p2roundender === true) {
                                            p1turn = true;
                                            p2turn = false;
                                        } else if (p1roundender === true && p2roundender === false) {
                                            p1turn = false;
                                            p2turn = true;
                                        }
                                        else {
                                            p1turn = false;
                                            p2turn = false;
                                        }
                                        // updateing the the hands so they follow the new turn system
                                        handUpdate();
                                        handDisplay();
                                    }
                                    else if (isReaperTocken[0].bottom < t.bottom){
                                        // subtracting damange
                                        t.bottom = t.bottom - isReaperTocken[0].bottom;
                                        t.basePower = t.basePower - isReaperTocken[0].bottom;

                                        // finding reaper id
                                        const findingReaper = p2field.filter(function (reaper, i) {
                                            if (reaper.dataNum === 01) {
                                                p2field.splice(i, 1);
                                                const getId = reaper.id;
                                                const reaperid = document.getElementById(getId);
                                                p2Field.removeChild(reaperid);
                                            }
                                        })

                                        // removing the tab
                                        p2Field.removeChild(tab);
                                        fieldUpdate();
                                        FieldDispaly();

                                        if (p1roundender === false && p2roundender === false) {
                                            p1turn = false;
                                            p2turn = true;
                                        } else if (p1roundender === false && p2roundender === true) {
                                            p1turn = true;
                                            p2turn = false;
                                        } else if (p1roundender === true && p2roundender === false) {
                                            p1turn = false;
                                            p2turn = true;
                                        }
                                        else {
                                            p1turn = false;
                                            p2turn = false;
                                        }
                                        // updateing the the hands so they follow the new turn system
                                        handUpdate();
                                        handDisplay();
                                    }
                                     else {
                            // destroy opponet card
                            p1grave.push(p1field[index]);
                            p1field.splice(index, 1);
                            p1Field.removeChild(ids);
                            // finding reaper id
                            const findingReaper = p2field.filter(function (reaper, i) {
                                if (reaper.dataNum === 0) {
                                    p2field.splice(i, 1);
                                    const getId = reaper.id;
                                    const reaperid = document.getElementById(getId);
                                    p2Field.removeChild(reaperid);
                                }
                            })

                            // removing the tab
                            p2Field.removeChild(tab);
                            fieldUpdate();
                            FieldDispaly();

                            // changing turns
                            if (p1roundender === false && p2roundender === false) {
                                p1turn = true;
                                p2turn = false;
                            } else if (p1roundender === false && p2roundender === true) {
                                p1turn = true;
                                p2turn = false;
                            } else if (p1roundender === true && p2roundender === false) {
                                p1turn = false;
                                p2turn = true;
                            }
                            else {
                                p1turn = false;
                                p2turn = false;
                            }
                            // updateing the the hands so they follow the new turn system
                            handUpdate();
                            handDisplay();

                            // update score
                            scoredisplay();
                            if (p2turn === true) {

                                p2turnChangeAbility[0].FieldAbility()

                            }
                        }
                                });
                            })
                        }


                    })
                    // rebirth ability
                    rebirth.addEventListener("click", () => {
                        if (p2grave.length >= 1) {
                            checkInPower();
                            // remove othe optios
                            tab.removeChild(destroyer);
                            tab.removeChild(rebirth);
                            tab.removeChild(powerUp);
                            // change text
                            p2Field.removeChild(tab)
                            // displaying cards from my grave
                            playmat.appendChild(p2GraveDisplay);
                            p2graveDisplayAfterClick();
                            // i want to get the id of every card in my grave
                            const revive = p2grave.map(function (g, index) {
                                const name = g.id;
                                const ids = document.getElementById(name);
                                // clicking on the target
                                ids.addEventListener("click", () => {
                                    p2GraveDisplay.removeChild(ids);
                                    p2hand.push(p2grave[index]);
                                    p2grave.splice(index, 1);

                                    // remove the reaper
                                    const findingReaper = p2field.filter(function (reaper, i) {
                                        if (reaper.dataNum === 01) {
                                            p2field.splice(i, 1);
                                            const getId = reaper.id;
                                            const reaperid = document.getElementById(getId);
                                            p2Field.removeChild(reaperid);
                                        }
                                    })
                                    // remove the grave imange
                                    playmat.removeChild(p2GraveDisplay);
                                    p2graveUpdate();

                                    if (p1roundender === false && p2roundender === false) {
                                        p1turn = false;
                                        p2turn = true;
                                    } else if (p1roundender === false && p2roundender === true) {
                                        p1turn = true;
                                        p2turn = false;
                                    } else if (p1roundender === true && p2roundender === false) {
                                        p1turn = false;
                                        p2turn = true;
                                    }
                                    else {
                                        p1turn = false;
                                        p2turn = false;
                                    }
                                    // updateing the the hands so they follow the new turn system
                                    handUpdate();
                                    handDisplay();

                                })
                            })
                        }

                    })
                    // power up ability
                    powerUp.addEventListener("click", () => {
                        if (p2hand.length >= 1) {
                            // remove othe optios
                            tab.removeChild(destroyer);
                            tab.removeChild(rebirth);
                            tab.removeChild(powerUp);
                            // change text
                            tab.innerHTML = "discard a card in your hand";
                            // get the id of all cards in my hand
                            const getcards = p2hand.map(function (card, index) {
                                const id = document.getElementById(card.id)
                                // chosing a card to remove
                                id.addEventListener("click", () => {
                                    // remove card
                                    p2grave.push(p2hand[index]);
                                    p2hand.splice(index, 1);
                                    // remove tab
                                    p2Field.removeChild(tab);
                                    // removeing card
                                    p2Hand.removeChild(id);

                                    // giving the reaper tocken a +1
                                    const powerUpability = p2field.filter(rt => rt.dataNum === 01);
                                    powerUpability.map(power => power.bottom = power.bottom + 1);
                                    powerUpability.map(power => power.basePower = power.bottom);
                                    fieldUpdate();
                                    FieldDispaly();

                                    if (p1roundender === false && p2roundender === false) {
                                        p1turn = false;
                                        p2turn = true;
                                    } else if (p1roundender === false && p2roundender === true) {
                                        p1turn = true;
                                        p2turn = false;
                                    } else if (p1roundender === true && p2roundender === false) {
                                        p1turn = false;
                                        p2turn = true;
                                    }
                                    else {
                                        p1turn = false;
                                        p2turn = false;
                                    }
                                    // updateing the the hands so they follow the new turn system
                                    handUpdate();
                                    handDisplay();
                                })
                            })
                        }

                    })
                })
            }
        }
    }
   
]


// deck creation function
function deck() {
    // player one deck set up
    for (let x = 0; x < p1Cards.length; x++) {
        p1deck.push(p1Cards[x]);
    }
    // player two deck setup
    for (let y = 0; y < p2Cards.length; y++) {
        p2deck.push(p2Cards[y]);
    }
    // shuffing the decks
    p1deck.sort(() => 0.5 - Math.random());
    p2deck.sort(() => 0.5 - Math.random());
   
}
// draw function
function draw(num1, num2) {
    // player one draw
    for (let x = 0; x < num1; x++) {
        p1hand.push(p1deck[0]);
        p1deck.splice(0, 1);
    }
    // player 2 deaw
    for (let x = 0; x < num2; x++) {
        p2hand.push(p2deck[0]);
        p2deck.splice(0, 1);
    }
    // getting the amount of cards in each deck
    deckAmount();
}
// display hand 
const handDisplay = () => {
    
    for (let x = 0; x < p1hand.length; x++) {
        if (p1turn === true) {
            p1hand[x].Hand();
        } else {
            // creating backs of cards
            const cardBack = document.createElement("div");
            cardBack.setAttribute("class", "cardBack");
            p1Hand.appendChild(cardBack);
        }
       
    }
    for (let x = 0; x < p2hand.length; x++) {
        if (p2turn === true) {
            p2hand[x].Hand();
        }
        else {
            // creating backs of cards
            const cardBack = document.createElement("div");
            cardBack.setAttribute("class", "cardBack");
            p2Hand.appendChild(cardBack);
        }
    }  
}
// update hand
const handUpdate = () => {
    while (p1Hand.hasChildNodes()) {
        p1Hand.removeChild(p1Hand.lastChild);
    }
    while (p2Hand.hasChildNodes()) {
        p2Hand.removeChild(p2Hand.lastChild);
    }
}
// p1hand and p2 hand displays
const p1HandUpdate = () => {
    while (p1Hand.hasChildNodes()) {
        p1Hand.removeChild(p1Hand.lastChild);
    }
   
}
const p2HandUpdate = () => {
    while (p2Hand.hasChildNodes()) {
        p2Hand.removeChild(p2Hand.lastChild);
    }
}
const p1HandDisplay = () => {
    for (let x = 0; x < p1hand.length; x++) {
            p1hand[x].Hand();
    }
}
const p2HandDisplay = () => {
    for (let x = 0; x < p2hand.length; x++) {
        p2hand[x].Hand();
    }
}
// field display
function FieldDispaly() {
    for (let x = 0; x <  p1field.length; x++) {
        p1field[x].Field();
    }
    for (let x = 0; x < p2field.length; x++) {
        p2field[x].Field();
    }
    for (let x = 0; x < land.length; x++) {
        land[x].Field();
    }
}
// field update
function fieldUpdate() {
    while (p1Field.hasChildNodes()) {
        p1Field.removeChild(p1Field.lastChild);
    }
    while (p2Field.hasChildNodes()) {
        p2Field.removeChild(p2Field.lastChild);
    }
    while (Field.hasChildNodes()) {
        Field.removeChild(Field.lastChild);
    }
}
// game play
const p1play = (card, eliment,ability) => {
   
    graveCheck();

    // finding this card hand position then adding it to the field and removing it from the hand
    const mycard = p1hand.filter(function (cards, index) {
        if (cards.dataNum === card.dataNum && cards.type !== "magic") {
            // check to see if its a field card
            if (cards.type === 'land') {
                land.push(p1hand[index]);
                p1hand.splice(index, 1)
            }
            else {
                p1field.push(p1hand[index]);
                p1hand.splice(index, 1)
            }
           
        } else if (cards.dataNum === card.dataNum && cards.type === "magic") {
            p1grave.push(p1hand[index]);
            p1hand.splice(index, 1);
        }
    });

    // remove the card div from the hand
    p1Hand.removeChild(eliment);
    // update and displaying the current field
    fieldUpdate();
    FieldDispaly();

    if (land.length >= 1) {
        landAbility[0].FieldAbility(card, eliment, ability)
    } else {
        // checking for all fieldability
        p1ability[0].FieldAbility(card, eliment, ability);
    }
   
    
   

   
   
  
   
}
const p2play = (card, eliment, ability) => {

    graveCheck();

    // finding this card hand position then adding it to the field and removing it from the hand
    const mycard = p2hand.filter(function (cards, index) {
        if (cards.dataNum === card.dataNum && cards.type !== "magic") {

            // check to see if its a field card
            if (cards.type === 'land') {
                land.push(p2hand[index]);
                p2hand.splice(index, 1)
            } else {
                p2field.push(p2hand[index]);
                p2hand.splice(index, 1)
            }
           
        }
        else if (cards.dataNum === card.dataNum && cards.type === "magic") {
            p2grave.push(p2hand[index]);
            p2hand.splice(index, 1)
        }
    });

    // remove the card div from the hand
    p2Hand.removeChild(eliment);
    // update and displaying the current field
    fieldUpdate();
    FieldDispaly();

    if (land.length >= 1) {
        landAbility[0].FieldAbility(card, eliment, ability)
    } else {
        // calls p2ability 
        p2ability[0].FieldAbility(card, eliment, ability); 
    }
   
   
   
   
    
}

// grave click event
p1Grave.addEventListener("click", () => {
    // displaying the grave
    if (p1graveSwitch === false) {
        p1graveSwitch = true;
        playmat.appendChild(p1GraveDisplay);
        p1graveDisplayAfterClick();

    }// removing the display
    else {
        p1graveSwitch = false;
        playmat.removeChild(p1GraveDisplay);
        p1graveUpdate();
    }


});
p2Grave.addEventListener("click", () => {
    // displaying the grave
    if (p2graveSwitch === false) {
        p2graveSwitch = true;
        playmat.appendChild(p2GraveDisplay);
        p2graveDisplayAfterClick();

    }// removing the display
    else {
        p2graveSwitch = false;
        playmat.removeChild(p2GraveDisplay);
        p2graveUpdate();
    }
});


// grave disply after click
function p1graveDisplayAfterClick() {
    for (let y = 0; y < p1grave.length; y++) {
        p1grave[y].Grave();
    }
}
function p2graveDisplayAfterClick() {
    for (let y = 0; y < p2grave.length; y++) {
        p2grave[y].Grave();
    }
}
// grave update 
function p1graveUpdate() {
    while (p1GraveDisplay.hasChildNodes()) {
        p1GraveDisplay.removeChild(p1GraveDisplay.lastChild);
    }
}
function p2graveUpdate() {
    while (p2GraveDisplay.hasChildNodes()) {
        p2GraveDisplay.removeChild(p2GraveDisplay.lastChild);
    }
}
// score displays
function scoredisplay() {
    p1score = 0;
    p2score = 0;

    getp1score = p1field.forEach(c => p1score = p1score + c.bottom);
    p1Score.innerHTML = p1score;

   
    getp2score = p2field.forEach(c => p2score = p2score + c.bottom);
    p2Score.innerHTML = p2score;
}
// amount of cards in the decks
const  deckAmount = ()=> {
    p1Deck.innerHTML = p1deck.length;
    p2Deck.innerHTML = p2deck.length;
}
// round player round enders
p1RoundButton.addEventListener("click", () => {
    p1roundender = true;
    
    if (p1roundender === true && p2roundender === false) {
        p1turn = false;
        p2turn = true;
    }
    else {
        p1turn = false;
        p2turn = false;
    }

    handUpdate();
    handDisplay();
    // detecting if we should start a fresh round
    newRound();
})
p2RoundButton.addEventListener("click", () => {
    p2roundender = true;
    if (p2roundender === true && p1roundender === false) {
        p1turn = true;
        p2turn = false;
    }
    else {
        p1turn = false;
        p2turn = false;
    }

    handUpdate();
    handDisplay();
    // detecting if we should start a fresh round
    newRound();
})
//makeing sure all creatures in the graves or hands have thier starting power
const checkInPower = () => {
    //filter out magic cards
    const p2creatureCards = p2grave.filter(cc => cc.level >= 1);
    const p1creatureCards = p1grave.filter(cc => cc.level >= 1);

    // setting thier powers back to normaly
    const setPower = p1creatureCards.map(function (c) {
        c.bottom = c.setPower;
        c.basePower = c.setPower;
    })
    const setPower2 = p2creatureCards.map(function (c) {
        c.bottom = c.setPower;
        c.basePower = c.setPower;
    })
}
// grave check
const graveCheck = () => {
    // removing any reaper tockens that might be put in the graveyard
    reaperTocken = p2grave.filter(function (tocken,index) {
        if (tocken.dataNum === 0 || tocken.dataNum === 01) {
            p2grave.splice(index, 1);
        }
    })

    // making sure agent mike cant go in the oposeing players grave
    doubleAgent = p1grave.filter(function (agent, index) {
        if (agent.dataNum === 55) {
            p2grave.push(p1grave[index]);
            p1grave.splice(index, 1);
        }
    })
   
}
// hand check 
const handPowercheck = () => {
    // filtering out magic cards
    const p2creatureCards = p2hand.filter(cc => cc.level >= 1);
    const p1creatureCards = p1hand.filter(cc => cc.level >= 1);

    const setPower = p1creatureCards.map(function (c) {
        c.bottom = c.setPower;
        c.basePower = c.setPower;
    })
    const setPower2 = p2creatureCards.map(function (c) {
        c.bottom = c.setPower;
        c.basePower = c.setPower;
    })
}
// condishions for ending a round
function newRound() {
    // if condishions to start a new round have been meet
    if (round === 1 && p1roundender === true && p2roundender === true) {
        // i want to compare scores to see who won the round
        if (p1score > p2score) {
            // clear out both sides of the field
            fieldUpdate();
            p1wins = p1wins + 1;
            p1RoundsWon.innerHTML = p1wins;
            winScrean();
            NewRoundButton();
        }
        else if (p1score < p2score) {
            // clear out both sides of the field
            fieldUpdate();
            
            p2wins = p2wins + 1;
            p2RoundsWon.innerHTML = p2wins;
            winScrean();
            NewRoundButton();
        }
        else {
            // clear out both sides of the field
            fieldUpdate();
            
            p1wins = p1wins + 1;
            p2wins = p2wins + 1;

            p1RoundsWon.innerHTML = p1wins;
            p2RoundsWon.innerHTML = p2wins;
            winScrean();
            NewRoundButton();
        }
    }
    else if (round === 2 && p1roundender === true && p2roundender === true) {
        // i want to compare scores to see who won the round
        if (p1score > p2score) {
            // clear out both sides of the field
            fieldUpdate();
            p1wins = p1wins + 1;
            winScrean();
           
            p1RoundsWon.innerHTML = p1wins;
            if (p1wins < 2) {
                NewRoundButton();
            }
            
           
        }
        else if (p1score < p2score) {
            // clear out both sides of the field
            fieldUpdate();
            p2wins = p2wins + 1;
            winScrean();
            
            p2RoundsWon.innerHTML = p2wins;
            if (p2wins < 2) {
                NewRoundButton();
            }
        }
        else {
            // clear out both sides of the field
            fieldUpdate();
            
            p1wins = p1wins + 1;
            p2wins = p2wins + 1;
            winScrean();
            p1RoundsWon.innerHTML = p1wins;
            p2RoundsWon.innerHTML = p2wins;
            if (p1wins < 2 && p2wins < 2) {
                NewRoundButton();
            }
        }
    }
    else if (round === 3 && p1roundender === true && p2roundender === true) {
        // i want to compare scores to see who won the round
        if (p1score > p2score) {
            // clear out both sides of the field
            fieldUpdate();
            p1wins = p1wins + 1;
            winScrean();
           
            p1RoundsWon.innerHTML = p1wins;
            if (p1wins < 2) {
                NewRoundButton();
            }


        }
        else if (p1score < p2score) {
            // clear out both sides of the field
            fieldUpdate();
            p2wins = p2wins + 1;
            winScrean();
           
            p2RoundsWon.innerHTML = p2wins;
            if (p2wins < 2) {
                NewRoundButton();
            }
        }
        else {
            // clear out both sides of the field
            fieldUpdate();
            p1wins = p1wins + 1;
            p2wins = p2wins + 1;
            winScrean();
            
            p1RoundsWon.innerHTML = p1wins;
            p2RoundsWon.innerHTML = p2wins;
            if (p1wins < 2 && p2wins < 2) {
                NewRoundButton();
            }
        }
    }
}
// creating the next round start button
function NewRoundButton() {
    // creating a button
    const newRoundButton = document.createElement("div");
    newRoundButton.setAttribute("class", 'newRoundButton');
    newRoundButton.innerHTML = "start round 2";
    p2Field.appendChild(newRoundButton);

    // starting a new round
    newRoundButton.addEventListener("click",RoundDecitions);
}
// creating the next round win screem
function winScrean() {
    console.log(p1wins);
    console.log(p2wins);
    if (p1score > p2score) {
        if (p1wins >= 2) {
           
            const winStatement = document.createElement("h1");
            winStatement.setAttribute("class", 'winStatement');
            winStatement.innerHTML = "player 1 wins game";
            p1Field.appendChild(winStatement);
        } else {
            // creating a win screan
            const winStatement = document.createElement("h1");
            winStatement.setAttribute("class", 'winStatement');
            winStatement.innerHTML = "player 1 wins round";
            p1Field.appendChild(winStatement);
        }
        
    }
    else if (p1score < p2score) {
        if (p2wins >= 2) {
            // creating a win screan
            const winStatement = document.createElement("h1");
            winStatement.setAttribute("class", 'winStatement');
            winStatement.innerHTML = "player 2 wins Game";
            p1Field.appendChild(winStatement);
        } else {
            // creating a win screan
            const winStatement = document.createElement("h1");
            winStatement.setAttribute("class", 'winStatement');
            winStatement.innerHTML = "player 2 wins round";
            p1Field.appendChild(winStatement);
        }
       
    }
    else {
        if (p1wins === 2 && p2wins === 2) {
            // creating a win screan
            const winStatement = document.createElement("h1");
            winStatement.setAttribute("class", 'winStatement');
            winStatement.innerHTML = "tie game";
            p1Field.appendChild(winStatement);
        } else {
            // creating a win screan
            const winStatement = document.createElement("h1");
            winStatement.setAttribute("class", 'winStatement');
            winStatement.innerHTML = "tie game";
            p1Field.appendChild(winStatement);
        }
        
    }

}
// between round decitions
function RoundDecitions() {
    // remove both the win screen and the button on the field
    fieldUpdate();
   
    // i also dnt want the players to be able to click on the graves
    playmat.removeChild(p1Grave);
    playmat.removeChild(p2Grave);

    // makeing suren there are no tockens in the grave , that agent mike is in the right grave
    // all cards in the hand have the right power level
    // all cards in the grave have the right power level
    // if agent mike is on p1 side of the field i will send him to p2grave
    // filtering out a field spell if on the field
    graveCheck();
    handPowercheck();
    checkInPower();
    // checking if agent mike is on p1 field
    p1field.filter(function (hc,index) {
        if (hc.dataNum === 55) {
            p2grave.push(p1field[index]);
            p1field.splice(index, 1);
        }
    })
    // empyt out the land aaray
    if (land.length >= 1 && land[0].owner === "p1") {
        p1grave.push(land[0]);
        land.splice(0, 1);
    } else if (land.length >= 1 && land[0].owner === "p2") {
        p2grave.push(land[0]);
        land.splice(0, 1);
    }


    // i want all the cards on the field to be pushed to the grave
    for (let x = 0; x < p1field.length; x++) {
        p1grave.push(p1field[x]);
      
    }
    for (let x = 0; x < p2field.length; x++) {
        p2grave.push(p2field[x]);
       
    }
    // emptying the fildes
    p1field = [];
    p2field = [];

    // showing grave
    if (p1grave.length > 0) {
        playmat.appendChild(p1GraveDisplay);
        p1graveDisplayAfterClick();
    }
    if (p2grave.length > 0) {
        playmat.appendChild(p2GraveDisplay);
        p2graveDisplayAfterClick();
    }
   

    // making draft picks
    if (p1grave.length > 0) {
        p1grave.map(function (draft, index) {
            name = draft.id;
            id = document.getElementById(name);


            id.addEventListener("click", () => {


                p1deck.push(p1grave[index]);
                p1grave.splice(index, 1);
                p1graveUpdate();
                p1graveDisplayAfterClick();

                p1Deck.innerHTML = p1deck.length;

                if (p1grave.length > 0) {
                    p1grave.map(function (d, i) {
                        name = d.id;
                        id = document.getElementById(name);


                        id.addEventListener("click", () => {


                            p1deck.push(p1grave[i]);
                            p1grave.splice(i, 1);
                            p1graveUpdate();
                            p1graveDisplayAfterClick();

                            p1Deck.innerHTML = p1deck.length;

                            if (p1grave.length > 0) {
                                p1grave.map(function (draft, index) {
                                    name = draft.id;
                                    id = document.getElementById(name);


                                    id.addEventListener("click", () => {


                                        p1deck.push(p1grave[index]);
                                        p1grave.splice(index, 1);
                                        p1graveUpdate();
                                        p1graveDisplayAfterClick();

                                        p1Deck.innerHTML = p1deck.length;

                                        playmat.removeChild(p1GraveDisplay);
                                        p1graveUpdate();

                                        p1picks = true;
                                        if (p1picks === true && p2picks === true) {
                                            freshRound();
                                        }

                                    })


                                })
                            }
                            else {
                                playmat.removeChild(p1GraveDisplay);
                                p1graveUpdate();
                                p1picks = true;
                                if (p1picks === true && p2picks === true) {
                                    freshRound();
                                }
                            }
                        })


                    })
                }
                else {
                    playmat.removeChild(p1GraveDisplay);
                    p1graveUpdate();

                    p1picks = true;
                    if (p1picks === true && p2picks === true) {
                        freshRound();
                    }
                }
            })


        })
    } else {
        p1picks = true;
        if (p1picks === true && p2picks === true) {
            freshRound();
        }
    }


    if (p2grave.length > 0) {
        p2grave.map(function (draft, index) {
            name = draft.id;
            id = document.getElementById(name);


            id.addEventListener("click", () => {


                p2deck.push(p2grave[index]);
                p2grave.splice(index, 1);
                p2graveUpdate();
                p2graveDisplayAfterClick();

                p2Deck.innerHTML = p2deck.length;

                if (p2grave.length > 0) {
                    p2grave.map(function (d, i) {
                        name = d.id;
                        id = document.getElementById(name);


                        id.addEventListener("click", () => {


                            p2deck.push(p2grave[i]);
                            p2grave.splice(i, 1);
                            p2graveUpdate();
                            p2graveDisplayAfterClick();

                            p2Deck.innerHTML = p2deck.length;

                            if (p2grave.length > 0) {
                                p2grave.map(function (draft, index) {
                                    name = draft.id;
                                    id = document.getElementById(name);


                                    id.addEventListener("click", () => {


                                        p2deck.push(p2grave[index]);
                                        p2grave.splice(index, 1);
                                        p2graveUpdate();
                                        p2graveDisplayAfterClick();

                                        p2Deck.innerHTML = p2deck.length;

                                        playmat.removeChild(p2GraveDisplay);
                                        p2graveUpdate();
                                        p2picks = true;
                                        if (p1picks === true && p2picks === true) {
                                            freshRound();
                                        }

                                    })


                                })
                            }
                            else {
                                playmat.removeChild(p2GraveDisplay);
                                p2graveUpdate();
                                p2picks = true;
                                if (p1picks === true && p2picks === true) {
                                    freshRound();
                                }
                            }
                        })


                    })
                }
                else {
                    playmat.removeChild(p2GraveDisplay);
                    p2graveUpdate();
                    p2picks = true;
                    if (p1picks === true && p2picks === true) {
                        freshRound();
                    }
                }
            })


        })
    } else {
        p2picks = true;
        if (p1picks === true && p2picks === true) {
            freshRound();
        }
    }
    
   
    
}
// startiing a freash round
function freshRound() {
    // setting picks back to false
    p1picks = false;
    p2picks = false;

    // change round
    round = round + 1;
    roundDisplay.innerHTML = round;
    // put the graves back
    playmat.appendChild(p1Grave);
    playmat.appendChild(p2Grave);
    // im now going to get the amount of cards in my curent hands
    let p1RemainingHand = p1hand.length + 3;
    let p2RemainingHand = p2hand.length + 3;
    // im going put the cards in my hand inside my deck
    for (let x = 0; x < p1hand.length; x++) {
        p1deck.push(p1hand[x]);
    }
    for (let x = 0; x < p2hand.length; x++) {
        p2deck.push(p2hand[x]);
    }
    p2hand = [];
    p1hand = [];

    // shuffe my decks
    p1deck.sort(() => 0.5 - Math.random());
    p2deck.sort(() => 0.5 - Math.random());

    // deal a newhand
    draw(p1RemainingHand, p2RemainingHand);
    // turn off the turn over buttons
    p1roundender = false;
    p2roundender = false;
    // set turn to p1
    p1turn = true;

    handUpdate();
    handDisplay();
}

const game = () => { 
    // create decks
    deck();
    // seting players turn
    p1turn = true;
    p2turn = false;
    // starting hand
    draw(10, 10);
    handDisplay(); 
   
}

game();








// last thing i want to do is prevent ties
// in tie game i want to basicially redo the round 

