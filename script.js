// 1 задание. Сделать аккардеон 
const accordion = [
  { name: 'Выплата неустойки по ДДУ' },
  { name: 'Компенсация морального вреда' },
  { name: 'Штраф в размере 50%' },
  { name: 'Компенсация расходов по аренде жилья' },
  { name: 'Компенсация убытков по ипотеке' },
  { name: 'Возмещение иных расходов' },
]

const accordionList = document.querySelector('.block__dropdown');

accordion.forEach(item => {
  const listItem = document.createElement('li');
  listItem.textContent = item.name;

  listItem.addEventListener('click', () => {
    listItem.classList.toggle('active');

    const blockInfo = document.querySelector('.block__content');
    blockInfo.style.display = blockInfo.style.display === 'none' ? 'block' : 'none';
  });

  accordionList.appendChild(listItem);
});
// конец 1 задания

// 2 задание. Сделать каталог с карточками стульев
const catalog = [
  { id: 0, image: './assets/task2/photo1.png', category: 'Кресла театральные', title: 'Театральное кресло Прайм', articul: '789-2341', price: '6 762' },
  { id: 1, image: './assets/task2/photo2.png', category: 'Кресла театральные', title: 'Театральное кресло Прайм', articul: '789-2341', price: '6 762' },
  { id: 2, image: './assets/task2/photo1.png', category: 'Кресла театральные', title: 'Театральное кресло Прайм', articul: '789-2341', price: '6 762' },
  { id: 3, image: './assets/task2/photo1.png', category: 'Кресла театральные', title: 'Театральное кресло Прайм', articul: '789-2341', price: '6 762' },
  { id: 4, image: './assets/task2/photo1.png', category: 'Кресла театральные', title: 'Театральное кресло Прайм', articul: '789-2341', price: '6 762' },
  { id: 5, image: './assets/task2/photo1.png', category: 'Кресла театральные', title: 'Театральное кресло Прайм', articul: '789-2341', price: '6 762' },
  { id: 6, image: './assets/task2/photo1.png', category: 'Кресла театральные', title: 'Театральное кресло Прайм', articul: '789-2341', price: '6 762' },
];

const catalogContainer = document.querySelector('.catalog');
const template = document.querySelector('.catalog__card');
template.remove();

catalog.forEach((item, index) => {
  const card = template.cloneNode(true);

  const img = card.querySelector('.catalog__img');
  img.src = item.image;

  const category = card.querySelector('.catalog__category');
  category.textContent = item.category;

  const title = card.querySelector('.catalog__title');
  title.textContent = item.title;

  const articul = card.querySelector('.catalog__article');
  articul.innerHTML += `<div> <span class="catalog__helpstyle">Артикул:</span>${item.articul}</div>`;

  const price = card.querySelector('.catalog__price');
  price.innerHTML += `<div><span class="catalog__helpstyle">от: </span>${item.price}<span class="catalog__helpstyle"> P</span></div>`;

  if (index < 3) {
    const instock = card.querySelector('.catalog__instock');
    instock.style.display = 'block';
    instock.innerHTML += '<span style="background-color: white; background-image: url(./assets/task2/complete.png); background-repeat: no-repeat; background-position: left; padding: 5px 5px 5px 10px;">В наличии</span>';
  }

  if (index < 3) {
    const help = card.querySelector('.catalog__help');
    help.style.display = 'block';

    if (index === 0) {
      help.innerHTML += '<span style="background-color:rgba(163, 32, 24, 1); padding: 5px 5px 5px 10px; background-image: url(./assets/task2/star.svg); background-repeat: no-repeat; background-position: left;" >Хит продаж</span>';
    } if (index === 1) {
      help.innerHTML += '<span style="background-color:rgba(224, 205, 28, 1);  padding: 5px 5px 5px 10px; background-image: url(./assets/task2/discount.svg); background-repeat: no-repeat; background-position: left;">Акция</span>';
    } if (index === 2) {
      help.innerHTML += '<span style="background-color:rgba(8, 122, 40, 1);  padding: 5px 5px 5px 10px; background-image: url(./assets/task2/rocket.svg); background-repeat: no-repeat; background-position: left;">Новинка</span>';
    }
  }
  catalogContainer.appendChild(card);
});
// конец 2 задания

// 4 задание. Сделать отправку формы
const form = document.getElementById('create-application-form');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;

  const phonePattern = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

  if (!phonePattern.test(phone)) {
    return alert('Пожалуйста, введите номер телефона в правильном формате!');
  }

  console.log(`Имя: ${name}`);
  console.log(`Телефон: ${phone}`);
  console.log(`Email: ${email}`);

  form.reset();
});
// конец 4 задания


