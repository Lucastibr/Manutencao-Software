var inputText = "";
var outputTextBase64 ="";

function encodeText() {
    inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');

    if (!inputText) {
        outputText.textContent = 'Por favor, insira um texto.';
        return;
    }

    try {
        const encoded = btoa((encodeURIComponent(inputText)));
        outputTextBase64 = encoded;
        outputText.textContent = encoded;
    } catch (e) {
        outputText.textContent = 'Erro na codificação do texto.';
    }
}

function decodeText() {
    inputText = document.getElementById('inputText').value;
    const output = document.getElementById('outputText');
    const outputText = document.getElementById('outputText').textContent;

    if (!inputText) {
        outputText.textContent = 'Por favor, insira um texto codificado em Base64.';
        return;
    }

    try {
        if (inputText.trim() === '' || !/^[\w+/=]+$/.test(inputText)) {
            throw new Error('Texto inválido para decodificação.');
        }

        const decoded = decodeURIComponent(atob(inputText));
        var validateText = validateData(decoded);

        if (validateText === "")
            output.textContent = decoded;
        else
            output.innerHTML = validateText;
    } catch (e) {
        output.innerHTML = `
                    Vai ter que descobrir o motivo de não estar voltando ao texto original...
                    Que comecem os jogos!
                    <br>
                    <iframe src="https://giphy.com/embed/9J2MAnKcekHeM" width="480" height="360" style="" frameBorder="0" class="giphy-embed" allowFullScreen>
                `;
    }
}

function validateData(inputTextConvertible) {

    if (inputTextConvertible !== inputText)
        return `
                    Vai ter que descobrir o motivo de não estar voltando ao texto original...
                    Que comecem os jogos!
                    <br>
                    <iframe src="https://giphy.com/embed/9J2MAnKcekHeM" width="480" height="360" style="" frameBorder="0" class="giphy-embed" allowFullScreen>
                `;

    return "";

}