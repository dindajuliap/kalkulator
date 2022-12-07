var hasil     = document.getElementById('hasil');
var sementara = document.getElementById('sementara');
var op, hsl, x, y, z, panjang, akhir;

function ac(){
  sementara.innerHTML = '&nbsp;';
  hasil.innerHTML     = '0';
}

function tekan(a){
  if(hasil.innerHTML == '0'){ hasil.innerHTML = a; }
  else{ hasil.innerHTML += a; }
}

function koma(){
  hasil.innerHTML += '.';
}

function operator(b){
  hsl = hasil.innerHTML;

  if(b == 1){ op = '÷'; }
  else if(b == 2){ op = '×'; }
  else if(b == 3){ op = '+'; }
  else if(b == 4){ op = '-'; }

  if((hsl.substr(0,1) != '+') && (hsl.substr(0,1) != '-') && (hsl.substr(0,1) != '×') && (hsl.substr(0,1) != '÷')){
    if(hasil.innerHTML == '0'){
      if(op == '+'){
        hasil.innerHTML = '0';
      }
      else{
        sementara.innerHTML = hasil.innerHTML;
        hasil.innerHTML     = op;
        hasil.innerHTML    += ' ';
      }
    }
    else{
      sementara.innerHTML = hasil.innerHTML;
      hasil.innerHTML     = op;
      hasil.innerHTML    += ' ';
    }
  }
  else{
    x = parseFloat(hsl.slice(2));
    y = parseFloat(sementara.innerHTML);

    if(hsl.length <= 2){
      sementara.innerHTML = sementara.innerHTML;
      hasil.innerHTML     = op;
      hasil.innerHTML    += ' ';
    }
    else{
      if(hsl.substr(0,1) == '+'){ z = y + x; }
      else if(hsl.substr(0,1) == '-'){ z = y - x; }
      else if(hsl.substr(0,1) == '÷'){ z = y / x; }
      else if(hsl.substr(0,1) == '×'){ z = y * x; }

      panjang = String(z).slice(((String(z).search(".")) + 1)).length;

      if(panjang > 2){
        akhir = z.toFixed(3);
      }
      else{
        akhir = z;
      }

      if(b != 5){
        sementara.innerHTML = akhir;
        hasil.innerHTML     = op;
        hasil.innerHTML    += ' ';
      }
      else{
        sementara.innerHTML = '&nbsp;';
        hasil.innerHTML     = akhir;
      }
    }
  }
}
