fetch('https://www.youtube.com/@FinanceWithMukulAgrawal')
  .then(r=>r.text())
  .then(t=>{
    let m = t.match(/"channelId":"(UC[^"]+)"/);
    console.log(m ? m[1] : 'not found');
  });
