const frm = document.querySelector("form"); // Obtém elementos da página

const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

frm.addEventListener("submit", e => {
  e.preventDefault(); // Evita envio do form

  const saque = Number(frm.inSaque.value);
  if (saque % 10 != 0) {
    alert("Valor inválido para as notas disponíveis(R$ 10, 50 ,100)");

    frm.inSaque.focus();
    return;
  }

  const notasCem = Math.floor(saque / 100); // Calcula notas de 100
  let resto = saque % 100; // Calcula quanto sobra para pagar

  const notasCinquenta = Math.floor(resto / 50); // Calcula notas de 100
  resto = saque % 50; // Calcula quanto sobra para pagar

  const notasDez = Math.floor(resto / 10); // Calcula notas de 100
  if (notasCem > 0) {
    resp1.innerText = `Notas de 100 ${notasCem}`;
  }
  if (notasCinquenta > 0) {
    resp2.innerText = `Notas de 50 ${notasCinquenta}`;
  }
  if (notasDez > 0) {
    resp3.innerText = `Notas de 10 ${notasDez}`;
  }
});
