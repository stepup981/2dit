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
      help.innerHTML += '<span class="catalog__helpspan1">Хит продаж</span>';
    } if (index === 1) {
      help.innerHTML += '<span class="catalog__helpspan2">Акция</span>';
    } if (index === 2) {
      help.innerHTML += '<span class="catalog__helpspan3">Новинка</span>';
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


// начало 5 задания, диаграммы
function createDiagrams(countryCanvasId, cityCanvasId, countryCenterText, countryScale = 1, cityScale = 1) {
  const country = document.getElementById(countryCanvasId).getContext('2d');
  const gradient1 = country.createRadialGradient(50.09, 50.14, 180, 50.09, 50.14, 65);
  gradient1.addColorStop(0, '#9D121A');
  gradient1.addColorStop(0.6, '#E83C46');
  gradient1.addColorStop(1, '#9D121A');

  const gradient2 = country.createRadialGradient(50.09, 50.14, 0, 50.09, 50.14, 65);
  gradient2.addColorStop(0, '#DD9622');
  gradient2.addColorStop(0.6, '#F9A620');
  gradient2.addColorStop(1, '#DD9622');

  const gradient3 = country.createRadialGradient(50.09, 50.14, 0, 50.09, 50.14, 65);
  gradient3.addColorStop(0, '#262424');
  gradient3.addColorStop(0.6, '#474444');
  gradient3.addColorStop(1, '#262424');

  const gradient4 = country.createRadialGradient(50.09, 50.14, 0, 50.09, 50.14, 65);
  gradient4.addColorStop(0, '#676767');
  gradient4.addColorStop((57.96 - (-230.93)) / (417.96 - (-230.93)), '#808080');
  gradient4.addColorStop((129.07 - (-230.93)) / (417.96 - (-230.93)), '#676767');
  gradient4.addColorStop(1, '#808080');

  const totalCountPlugin = {
    id: 'totalCountLabels',
    afterDraw: (chart, args, options) => {
      const ctx = chart.ctx;
      ctx.save();
      let total = chart.data.datasets[0].data.reduce((a, b) => a + b, 0);

      if (chart.canvas.id === countryCanvasId) {
        total *= countryScale;
      } else if (chart.canvas.id === cityCanvasId) {
        total *= cityScale;
      }

      const numberWithDollarSign = chart.canvas.id.includes("2") ? `$${total}` : total;

      ctx.font = `${options.font.weight} ${options.font.size}px "${options.font.family}"`;
      ctx.fillStyle = options.centerFontColor;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const x = chart.canvas.clientWidth / 2;
      const y = chart.canvas.clientHeight / 2.2;
      ctx.fillText(numberWithDollarSign, x, y);

      const offsetY = 35;
      const customFontSize = 16;
      const customFontWeight = 400;
      ctx.font = `${customFontWeight} ${customFontSize}px "${options.font.family}"`;
      ctx.fillText(countryCenterText, x, y + offsetY);
      ctx.restore();
    },
  };


  const countryDiagramm = new Chart(country, {
    type: 'doughnut',
    data: {
      labels: [' - Россия', ' - Казахстан', ' - Узбекистан'],
      datasets: [
        {
          label: 'Количество шт.',
          data: [170, 125, 40],
          backgroundColor: [gradient1, gradient2, gradient3],
          borderWidth: 0,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          position: 'bottom',
          align: 'start',
          labels: {
            padding: 20,
            usePointStyle: true,
            pointStyle: 'circle',
            boxWidth: 35,
            font: {
              family: 'Mail Sans',
              size: 12,
              weight: 400,
              lineHeight: 1.2,
              letterSpacing: '-4%',
            },
          },
        },
        title: {
          display: true,
          text: '     Страны',
          position: 'top',
          align: 'start',
          font: {
            size: 14,
            weight: 500,
            lineHeight: 1.57,
            family: 'Mail Sans',
          },
          color: 'rgba(167, 167, 167, 1)',
          padding: { top: 25 },
        },
        totalCountLabels: {
          text: 'шт.',
          centerFontColor: 'rgba(38, 36, 36, 1)',
          font: {
            family: 'Mail Sans',
            size: 38,
            weight: 600,
          },
        },
      },
      cutout: '78%',
      rotation: -29 * Math.PI,
    },
    plugins: [totalCountPlugin],
  });

  const city = document.getElementById(cityCanvasId).getContext('2d');

  const cityDiagramm = new Chart(city, {
    type: 'doughnut',
    data: {
      labels: [' - Тюмень', ' - Петербург', ' - Нур-Султан', ' - Алма-Аты', ' - Ташкент'],
      datasets: [
        {
          label: 'Количество шт.',
          data: [200, 380, 200, 200, 170],
          backgroundColor: [
            gradient1,
            'rgba(0, 95, 167, 1)',
            gradient2,
            gradient4,
            gradient3,
          ],
          borderWidth: 0,
        },
      ],
    },
    options: {
      rotation: -29 * Math.PI,
      legend: {
        position: 'bottom',
      },
      plugins: {
        legend: {
          position: 'bottom',
          align: 'start',
          labels: {
            padding: 10,
            usePointStyle: true,
            pointStyle: 'circle',
            boxWidth: 35,
            font: {
              family: 'Mail Sans',
              size: 12,
              weight: 400,
              lineHeight: 1.2,
              letterSpacing: '-4%',
            },
          },
        },
        title: {
          display: true,
          text: '     Города',
          position: 'top',
          align: 'start',
          font: {
            size: 14,
            textAlign: 'left',
            weight: 500,
            lineHeight: 1.57,
            family: 'Mail Sans',
          },
          color: 'rgba(167, 167, 167, 1)',
          padding: { top: 25 },
        },
        totalCountLabels: {
          text: 'шт.',
          centerFontColor: 'rgba(38, 36, 36, 1)',
          font: {
            family: 'Mail Sans',
            size: 38,
            weight: 600,
          },
        },
      },
      cutout: '78%',
      rotation: -29 * Math.PI,
    },
    plugins: [totalCountPlugin],
  });
}

createDiagrams('create-country-diagramm', 'create-city-diagramm', 'шт.');
createDiagrams('create-country-diagramm-2', 'create-city-diagramm-2', ' млн.', 130 / 335, 130 / 1150);
// конец 5 задания



