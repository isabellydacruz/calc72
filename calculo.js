// Moved from calculo.html
function calcularRegra72() {
    const taxaInput = document.getElementById('taxa');
    const resultadoElem = document.getElementById('resultado');
    const taxa = parseFloat(taxaInput.value);

    if (!taxa || taxa <= 0) {
        resultadoElem.textContent = ' Por favor, insira uma taxa válida.';
        taxaInput.focus();
        resultadoElem.style.color = '#d32f2f';
        return;
    }

    const totalAnos = 72 / taxa;
    const anos = Math.floor(totalAnos);
    const meses = Math.round((totalAnos - anos) * 12);

    let resultado = ` Com uma taxa de ${taxa.toFixed(2)}% ao ano, o investimento dobra em `;
    if (anos > 0) {
        resultado += `${anos} ano${anos !== 1 ? 's' : ''}`;
        if (meses > 0) {
            resultado += ` e `;
        }
    }
    if (meses > 0) {
        resultado += `${meses} ${meses === 1 ? 'mês' : 'meses'}`;
    }
    resultado += '! ';

    // Efeito de fade no resultado
    resultadoElem.style.opacity = '0';
    resultadoElem.style.color = '#677e51';

    setTimeout(() => {
        resultadoElem.textContent = resultado;
        resultadoElem.style.opacity = '1';
    }, 200);

    // Destaca a linha da tabela mais próxima do resultado
    destacarLinhaTabela(taxa);
}

function destacarLinhaTabela(taxaAtual) {
    const linhas = document.querySelectorAll('table tr');
    let menorDiferenca = Infinity;
    let linhaMaisProxima = null;

    // Remove highlight anterior
    linhas.forEach(linha => linha.classList.remove('highlight'));

    // Procura a linha com a taxa mais próxima
    linhas.forEach(linha => {
        const taxaCelula = linha.cells?.[0]?.textContent;
        if (taxaCelula) {
            const taxa = parseFloat(taxaCelula);
            if (!isNaN(taxa)) {
                const diferenca = Math.abs(taxa - taxaAtual);
                if (diferenca < menorDiferenca) {
                    menorDiferenca = diferenca;
                    linhaMaisProxima = linha;
                }
            }
        }
    });

    // Aplica o highlight na linha mais próxima
    if (linhaMaisProxima) {
        linhaMaisProxima.classList.add('highlight');
    }
}

function limparCalculo() {
    const taxaInput = document.getElementById('taxa');
    const resultadoElem = document.getElementById('resultado');

    taxaInput.value = '';
    resultadoElem.textContent = '';
    taxaInput.focus();
}

document.addEventListener('DOMContentLoaded', () => {
    const taxaElem = document.getElementById('taxa');
    if (taxaElem) {
        taxaElem.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calcularRegra72();
            }
        });
    }

    const btnVoltar = document.getElementById('btnVoltar');
    if (btnVoltar) {
        btnVoltar.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
});
