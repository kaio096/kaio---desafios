window.addEventListener('DOMContentLoaded', () => {
    // Obtém referências para os elementos HTML relevantes
    const submitButton = document.getElementById('submit-button');
    const numbersInput = document.getElementById('numbers-input');
    const result = document.getElementById('result');

    // Adiciona um ouvinte de evento para o clique no botão "Calcular"
    submitButton.addEventListener('click', () => {
        const numbersString = numbersInput.value;
        const numbersArray = numbersString.split('/');

        // Utiliza o array.map() para converter cada elemento em um número inteiro
        const resultArray = numbersArray.map((number) => {
            return parseInt(number);
        });

        // Utiliza a função reduce() para somar todos os números do array resultante
        const sum = resultArray.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);

        // Exibe o resultado na div 'result' no HTML
        result.textContent = `A soma dos números é: ${sum}`;
    });
});
