 
 let quotes=["Every moment is a fresh beginning.","Hide yourself in God, so when a man wants to find you he will have to go there first.","I would rather be an artist than a leader. Ironically, a leader has to follow the rules.","Change the world by being yourself.","Aspire to inspire before we expire.","A friend is not the shadow that mimics you, but the one who casts all shadows away.","Worry not that your child listens to you; worry most that they watch you.","Love For All, Hatred For None.","Never regret anything that made you smile.","Tough times never last but tough people do.","Problems are not stop signs, they are guidelines.","Hate comes from intimidation, love comes from appreciation.","I have nothing to lose but something to gain.","Embrace the glorious mess that you are.","When words fail, music speaks.","The meaning of life is to give life meaning.","I will remember and recover, not forgive and forget.","It hurt because it mattered.","Turn your wounds into wisdom."];

function newQuotes() {
    let random_quote=Math.floor(Math.random()*(quotes.length));
    document.getElementById('displayQuote').innerHTML=quotes[random_quote];
}
      