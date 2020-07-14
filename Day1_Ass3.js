var today = new Date();
  var dd = today.getDate();
  var mm=today.getMonth()+1;
  var yyyy=today.getFullYear();

  dd = dd < 10 ? '0'+dd : dd;
  mm = mm < 10 ? '0'+mm : mm;
  
  document.write(mm+"-"+dd+"-"+yyyy+".<br>");
  document.write(mm+"/"+dd+"/"+yyyy+".<br>");
  document.write(dd+"-"+mm+"-"+yyyy+".<br>");
  document.write(dd+"/"+mm+"/"+yyyy+".<br>");
 