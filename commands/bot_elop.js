module.exports = {
  name: 'elöp',
  description: 'yazılan kişinin elini öper',
  args:false,
  cooldown: 0,  //5 sec cooldown
  execute(msg, args) {    
    let sMesaj=` kişisi, ÖMER HOCA' NIN elini öptü `;
    let rndSayi=this.getRandomInt(7);
    if (rndSayi==0) {
      sMesaj+=":candy:";
    }
    else if (rndSayi==1) {
      sMesaj+=":lollipop:";
    }
    else if (rndSayi==2) {
      sMesaj+=":moneybag:";
    }
    else if (rndSayi==3) {
      sMesaj+=":chocolate_bar:";
    }
    else if (rndSayi==4) {
      sMesaj+=":pound:";
    }
    else if (rndSayi==5) {
      sMesaj+=":euro:";
    }
    else if (rndSayi==6) {
      sMesaj+=":dollar:";
    }
    msg.reply(sMesaj);    

  },
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  },
}