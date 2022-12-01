const token = "token=907790bcfd47baca9b393d17f64e818882175cbd05e746725852d373d5ce9c9c";
const idSerie = 'SF63528';

let today = new Date();
let fIni = 1000*60*60*24*1;
let fAyer = today.getTime()-fIni;
let fechaFin1 = new Date(fAyer);
const yesterdayY = fechaFin1.getFullYear();
const yesterdayM = fechaFin1.getMonth()+1;
const yesterdayD = fechaFin1.getDate();
const fechaFin = yesterdayY + "-" + yesterdayM + "-" + yesterdayD;

let fCinco = today.getTime() - (fIni*5);
let fechaIni1 = new Date(fCinco);
const CincoY = fechaIni1.getFullYear();
const CincoM = fechaIni1.getMonth()+1;
const CincoD = fechaIni1.getDate();
const fechaIni = CincoY + "-" + CincoM + "-" + CincoD;

const API_URL = 'https://www.banxico.org.mx/SieAPIRest/service/v1/series/'+idSerie+'/datos/'+fechaIni+'/'+fechaFin+'?'+token;

$(function ConsumeAPI(){
	$.ajax({
		url : API_URL,
        jsonp : 'callback',
		dataType : 'jsonp', //Se utiliza JSONP para realizar la consulta cross-site
		success : function(response) {  //Handler de la respuesta
			var series=response.bmx.series;
			//Se carga una tabla con los registros obtenidos
			//for (var i in series) {
            for (var i in series) {
				  var serie = series[i];
                for(j=0;j<5;j++){
                    var reg = '<tr><td>'+serie.datos[j].fecha+'</td><td>'+serie.datos[j].dato+'</td></tr>'
				    $('#ApiBank').append(reg);
                }
				  
			}
		}
	});
})