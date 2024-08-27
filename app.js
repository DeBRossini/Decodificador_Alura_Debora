const base_conversao = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
  };

function  converterTexto(){
    let textoCriptografado = "";

    var textoEntrada = document.getElementById('textoEntrada').value;
    for (let letra of textoEntrada.toLowerCase()){
        if (letra in base_conversao){
            textoCriptografado += base_conversao[letra];
        }else{
            textoCriptografado += letra;
        }
    }
    if (textoEntrada != ""){
        document.getElementById('imagem_div').style.display = 'none';
        document.getElementById('div_titulo').innerHTML = "";
        document.getElementById('div_texto').style.display = 'none';
        document.getElementById('textoConvertido').innerHTML = textoCriptografado;
        document.getElementById('textoConvertido').style.display = 'flex';
        document.getElementById('Copiar').style.display = 'flex';
    }
}

function descriptografarTexto() {
    const campoTexto = document.getElementById('textoEntrada').value;
    let textoDescriptografado = campoTexto;
    
    const base_conversaoOrdenado = Object.entries(base_conversao)
        .sort((a, b) => b[1].length - a[1].length);

   for (const [original, cripto] of base_conversaoOrdenado) {
        const regex = new RegExp(cripto, 'g');
        textoDescriptografado = textoDescriptografado.replace(regex, original);
    }
    if (textoDescriptografado != ""){
        document.getElementById('imagem_div').style.display = 'none';
        document.getElementById('div_titulo').innerHTML = "";
        document.getElementById('div_texto').style.display = 'none';
        document.getElementById('textoConvertido').innerHTML = textoDescriptografado;
        document.getElementById('textoConvertido').style.display = 'flex';
        document.getElementById('Copiar').style.display = 'flex';
    }
}

function copiarTexto() {
    const texto = document.getElementById('textoConvertido').innerText;

    const input = document.createElement('input');
    input.value = texto;
    document.body.appendChild(input);

    input.select();
    document.execCommand('copy');
    
    document.body.removeChild(input);

}