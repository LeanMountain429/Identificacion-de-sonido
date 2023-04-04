function oonncclliicckk(){
    navigator.mediaDevices.getUserMedia({audio:true})
    modelo= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/IxAgKvxBy/model.json",mmooddeelloo)
}
function mmooddeelloo(){
    modelo.classify(gotresults)
}
function gotresults(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results)
        if (results[0].label=="Ruido de fondo"){
            document.getElementById("ssppaann").innerHTML="Dragón"
        }
        else{
            document.getElementById("ssppaann").innerHTML=results[0].label
        }
        document.getElementById("ssspppaaannn").innerHTML=(results[0].confidence*100).toFixed(2)+"%"
        dragon= document.getElementById("ddrraaggoonn")
        espada= document.getElementById("eessppaaddaa")
        puño= document.getElementById("ppuuññoo")
        raton= document.getElementById("rraattoonn")
        if (results[0].label=="Ruido de fondo"){
            dragon.src="dragon.gif"
            espada.src="espada.png"
            puño.src="puño.png"
            raton.src="raton.jpg"
        }
        if (results[0].label=="ESPADA"){
            dragon.src="dragon.png"
            espada.src="espada.gif"
            puño.src="puño.png"
            raton.src="raton.jpg"
        }
        if (results[0].label=="GOLPES"){
            dragon.src="dragon.png"
            espada.src="espada.png"
            puño.src="puño.gif"
            raton.src="raton.jpg"
        }
        if (results[0].label=="CLICKS"){
            dragon.src="dragon.png"
            espada.src="espada.png"
            puño.src="puño.png"
            raton.src="raton.gif"
        }
    }
}