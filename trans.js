document.getElementById('translateBTn').addEventListener('click',function(){
const text = document.getElementById('textToTranslate').value;
const lang = document.getElementById('languageSelect').value;
const resultDisplay = document.getElementById('resultText');
if (!text){
    alert("veillez entrer du texte");
    return;
}
resultDisplay.innerText= "traduction en cours...";
const apiUrl = 'https://translated.net{encodeURLComponent(text)}&langpair=fr|${lang}';
fetch(apiUrl)
.then (response => response.json())
.then(data=>{
    if(data.responseData){resultDisplay.innerText= data.responseData.translatedText;
}
else{resultDisplay.innerTex = "Erreur fe traduction.";}
})
.catch(error =>{
    console.error("Erreur:",error);
resultDisplay.innerText="connexion impossible au serveur.";

});
});