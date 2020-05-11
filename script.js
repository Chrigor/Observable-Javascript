// algumas referências a elementos DOM
const input = document.querySelector('.js-input');
const p1 = document.querySelector('.js-p1');
const p2 = document.querySelector('.js-p2');
const p3 = document.querySelector('.js-p3');

// algumas ações para adicionar ao array de observadores
const updateP1 = text => p1.textContent = text;
const updateP2 = text => p2.textContent = text;
const updateP3 = text => p3.textContent = text;

// instanciando uma nova classe Observer
const headingsObserver = new Observable();

// criando inscrição para os observadores
headingsObserver.subscribe(updateP1);
headingsObserver.subscribe(updateP2);
headingsObserver.subscribe(updateP3);

// para "desescrever" algum elemento
// headingsObserver.unsubscribe(updateP3);

// notificando todos os observadores sobre os novos dados baseado no evento selecionado
input.addEventListener('keyup', e => {
  headingsObserver.notify(e.target.value);
});