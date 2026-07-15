// 

// ========== CUSTOM NAV ICONS — change paths to your own images ==========
const NAV_ICONS = {
  profil: 'images/nav/profil.png',   // person icon
  home:   'images/nav/home.png',     // house icon
  harian: 'images/nav/harian.png',   // plate / utensils icon
};

// ========== GIZI HARIAN — one image: fork + plate + spoon together ==========
const PLATE_SCENE_IMAGE = 'images/plate/background.png';

// ===================== NUTRITION DATABASE =====================
const nutritionDB = {
  // === GRAINS & STARCHES (CARBS) ===
  rice:         { carb: 176, protein: 16,  fat: 4,   label: 'Rice',      img: 'images/foods/rice.png' },
  noodle:       { carb: 160, protein: 28,  fat: 18,  label: 'Noodle',    img: 'images/foods/noodle.png' },
  bread:        { carb: 48,  protein: 8,   fat: 9,   label: 'Bread',     img: 'images/foods/bread.png' },
  potato:       { carb: 104, protein: 12,  fat: 1,   label: 'Potato',    img: 'images/foods/potato.png' },
  corn:         { carb: 76,  protein: 12,  fat: 13,  label: 'Corn',      img: 'images/foods/corn.png' },

  // === MEAT & POULTRY ===
  chicken:      { carb: 0,   protein: 50,  fat: 36,  label: 'Chicken',   img: 'images/foods/chicken.png' },
  beef:         { carb: 0,   protein: 104, fat: 135, label: 'Beef',      img: 'images/foods/beef.png' },
  lamb:         { carb: 0,   protein: 100, fat: 99,  label: 'Lamb',      img: 'images/foods/lamb.png' },

  // === SEAFOOD ===
  fish:         { carb: 8,   protein: 84,  fat: 27,  label: 'Fish',      img: 'images/foods/fish.png' },
  oyster:       { carb: 20,  protein: 36,  fat: 23,  label: 'Oyster',    img: 'images/foods/oyster.png' },
  crab:         { carb: 0,   protein: 76,  fat: 14,  label: 'Crab',      img: 'images/foods/crab.png' },
  shrimp:       { carb: 1,   protein: 96,  fat: 3,   label: 'Shrimp',    img: 'images/foods/shrimp.png' },

  // === DAIRY & EGGS ===
  egg:          { carb: 2,   protein: 25,  fat: 48,  label: 'Egg',       img: 'images/foods/egg.png' },
  milk:         { carb: 48,  protein: 32,  fat: 72,  label: 'Milk',      img: 'images/foods/milk.png' },
  cheese:       { carb: 2,   protein: 28,  fat: 81,  label: 'Cheese',    img: 'images/foods/cheese.png' },

  // === PLANT-BASED PROTEINS ===
  tempe:        { carb: 38,  protein: 81,  fat: 97,  label: 'Tempe',     img: 'images/foods/tempe.png' },
  tofu:         { carb: 11,  protein: 32,  fat: 43,  label: 'Tofu',      img: 'images/foods/tofu.png' },

  // === VEGETABLES & HERBS ===
  vegetable:    { carb: 12,  protein: 12,  fat: 10,  label: 'Vegetable', img: 'images/foods/vegetable.png' },
  tomato:       { carb: 16,  protein: 4,   fat: 2,   label: 'Tomato' },
  eggplant:     { carb: 24,  protein: 4,   fat: 2,   label: 'Eggplant' },
  carrot:       { carb: 38,  protein: 4,   fat: 2,   label: 'Carrot' },
  chili_pepper: { carb: 16,  protein: 4,   fat: 2,   label: 'Chili' },
  bell_pepper:  { carb: 24,  protein: 4,   fat: 3,   label: 'Bell Pepper' },
  cucumber:     { carb: 14,  protein: 3,   fat: 1,   label: 'Cucumber' },
  broccoli:     { carb: 28,  protein: 11,  fat: 3,   label: 'Broccoli' },
  garlic:       { carb: 4,   protein: 1,   fat: 0,   label: 'Garlic' },
  onion:        { carb: 38,  protein: 4,   fat: 1,   label: 'Onion' },

  // === FRUITS ===
  banana:       { carb: 108, protein: 5,   fat: 4,   label: 'Banana',    img: 'images/foods/banana.png' },
  apple:        { carb: 100, protein: 2,   fat: 3,   label: 'Apple',     img: 'images/foods/apple.png' },
  grapes:       { carb: 68,  protein: 2,   fat: 2,   label: 'Grapes' },
  melon:        { carb: 32,  protein: 3,   fat: 2,   label: 'Melon' },
  watermelon:   { carb: 30,  protein: 2,   fat: 1,   label: 'Watermelon' },
  orange:       { carb: 48,  protein: 4,   fat: 1,   label: 'Orange' },
  lemon:        { carb: 37,  protein: 4,   fat: 3,   label: 'Lemon' },
  lime:         { carb: 42,  protein: 3,   fat: 2,   label: 'Lime' },
  pineapple:    { carb: 52,  protein: 2,   fat: 1,   label: 'Pineapple' },
  mango:        { carb: 60,  protein: 3,   fat: 4,   label: 'Mango' },
  pear:         { carb: 60,  protein: 2,   fat: 1,   label: 'Pear' },
  peach:        { carb: 40,  protein: 4,   fat: 3,   label: 'Peach' },
  cherries:     { carb: 64,  protein: 4,   fat: 2,   label: 'Cherries' },
  strawberry:   { carb: 31,  protein: 3,   fat: 3,   label: 'Strawberry' },
  blueberries:  { carb: 56,  protein: 3,   fat: 3,   label: 'Blueberries' },
  kiwi:         { carb: 60,  protein: 4,   fat: 5,   label: 'Kiwi' },
  olives:       { carb: 2,   protein: 1,   fat: 22,  label: 'Olives' },
  coconut:      { carb: 60,  protein: 13,  fat: 302, label: 'Coconut' },
  avocado:      { carb: 34,  protein: 8,   fat: 132, label: 'Avocado' },

  // === NUTS, FUNGI, LEGUMES & ROOTS ===
  peanuts:      { carb: 18,  protein: 29,  fat: 12,  label: 'Peanuts' },
  chestnuts:    { carb: 55,  protein: 3,   fat: 6,   label: 'Chestnuts' },
  green_peas:   { carb: 28,  protein: 11,  fat: 2,   label: 'Peas' },
  brown_shroom: { carb: 16,  protein: 10,  fat: 1,   label: 'Mushroom' },
  lotus_root:   { carb: 68,  protein: 10,  fat: 1,   label: 'Lotus Root' },
  ginger:       { carb: 72,  protein: 7,   fat: 7,   label: 'Ginger' },

  // === SWEETS, DESSERTS & CONDIMENTS ===
  ice_cream:    { carb: 96,  protein: 14,  fat: 99,  label: 'Ice Cream' },
  doughnut:     { carb: 204, protein: 20,  fat: 207, label: 'Doughnut' },
  cookie:       { carb: 268, protein: 24,  fat: 216, label: 'Cookie' },
  pie_apple:    { carb: 148, protein: 10,  fat: 99,  label: 'Apple Pie' },
  pudding:      { carb: 72,  protein: 12,  fat: 27,  label: 'Pudding' },
  candy_hard:   { carb: 59,  protein: 0,   fat: 0,   label: 'Candy' },
  chocolate:    { carb: 43,  protein: 6,   fat: 54,  label: 'Chocolate' },
  honey:        { carb: 328, protein: 1,   fat: 0,   label: 'Honey' }
};

const INGREDIENT_CATEGORIES = [
  {
    label: 'Grains & Starches',
    keys: ['rice', 'noodle', 'bread', 'potato', 'corn'],
  },
  {
    label: 'Meat & Poultry',
    keys: ['chicken', 'beef', 'lamb'],
  },
  {
    label: 'Seafood',
    keys: ['fish', 'oyster', 'crab', 'shrimp'],
  },
  {
    label: 'Dairy & Eggs',
    keys: ['egg', 'milk', 'cheese'],
  },
  {
    label: 'Plant-Based Protein',
    keys: ['tempe', 'tofu'],
  },
  {
    label: 'Vegetables & Herbs',
    keys: [
      'vegetable', 'tomato', 'eggplant', 'carrot', 'chili_pepper', 'bell_pepper',
      'cucumber', 'broccoli', 'garlic', 'onion',
    ],
  },
  {
    label: 'Fruits',
    keys: [
      'banana', 'apple', 'grapes', 'melon', 'watermelon', 'orange', 'lemon', 'lime',
      'pineapple', 'mango', 'pear', 'peach', 'cherries', 'strawberry', 'blueberries',
      'kiwi', 'olives', 'coconut', 'avocado',
    ],
  },
  {
    label: 'Nuts, Fungi & Legumes',
    keys: ['peanuts', 'chestnuts', 'green_peas', 'brown_shroom', 'lotus_root', 'ginger'],
  },
  {
    label: 'Sweets & Condiments',
    keys: [
      'ice_cream', 'doughnut', 'cookie', 'pie_apple', 'pudding', 'candy_hard',
      'chocolate', 'honey',
    ],
  },
];

const IDEAL = {
  carb: 1237.5,
  protein: { min: 300, max: 375, mid: 337.5 },
  fat: { min: 600, max: 750, mid: 675 },
}; 

const BMI_IMAGES = {
  female: {
    under:  'images/bmi/female-image1.png',
    normal: 'images/bmi/female-image2.png',
    obese:  'images/bmi/female-image3.png',
  },
  male: {
    under:  'images/bmi/male-image4.png',
    normal: 'images/bmi/male-image5.png',
    obese:  'images/bmi/male-image6.png',
  },
};

// ===================== STATE =====================
let currentPage = 'home';
let selectedIngredients = [];
let plateIngredients = [];
let popupShown = { harian: false, profil: false };
let selectedProfileId = null;
let dbReady = false;

// ===================== INIT =====================
document.addEventListener('DOMContentLoaded', async () => {
  setupNavIcons();
  setupPlateAssets();
  renderIngredientList();
  try {
    await initDatabase();
    dbReady = true;
    renderProfileList();
    renderCalorieChart();
  } catch (e) {
    console.error('SQLite init failed:', e);
  }
  navigateTo('home');
});

function setupPlateAssets() {
  const img = document.getElementById('plate-scene-img');
  if (img && PLATE_SCENE_IMAGE) {
    img.src = PLATE_SCENE_IMAGE;
  }
}

function setupNavIcons() {
  Object.entries(NAV_ICONS).forEach(([key, src]) => {
    const img = document.getElementById(`nav-icon-${key}`);
    const fallback = document.getElementById(`nav-fallback-${key}`);
    if (!img) return;
    img.src = src;
    img.onload = () => {
      img.classList.remove('hidden');
      fallback?.classList.add('hidden');
    };
    img.onerror = () => {
      img.classList.add('hidden');
      fallback?.classList.remove('hidden');
    };
  });
}

// ===================== NAVIGATION =====================
function navigateTo(page) {
  if (page === 'harian' && !popupShown.harian) {
    showPopup("Hi! This is Gizi Harian's side, make sure to input your meal for today only.");
    popupShown.harian = true;
  }
  if (page === 'profil' && !popupShown.profil) {
    showPopup("Hi! This is Profil Gizi's side, make sure to input your real conditions.");
    popupShown.profil = true;
  }

  currentPage = page;
  document.querySelectorAll('.page').forEach((el) => el.classList.add('hidden'));
  document.getElementById('page-' + page).classList.remove('hidden');

  document.querySelectorAll('.nav-btn').forEach((btn) => {
    btn.classList.remove('text-sage');
    btn.classList.add('text-gray-500');
    btn.querySelector('.nav-icon-wrap')?.classList.remove('bg-sage/15');
    btn.querySelector('.nav-home-circle')?.classList.remove('border-sage', 'bg-sage/10', 'scale-105');
  });

  const activeNav = document.getElementById('nav-' + page);
  if (activeNav) {
    activeNav.classList.remove('text-gray-500');
    activeNav.classList.add('text-sage');
    if (page === 'home') {
      activeNav.querySelector('.nav-home-circle')?.classList.add('border-sage', 'bg-sage/10', 'scale-105');
    } else {
      activeNav.querySelector('.nav-icon-wrap')?.classList.add('bg-sage/15');
    }
  }
}

function showPopup(message) {
  document.getElementById('popup-message').textContent = message;
  const overlay = document.getElementById('popup-overlay');
  overlay.classList.remove('hidden');
  overlay.classList.add('flex');
}

function closePopup() {
  const overlay = document.getElementById('popup-overlay');
  overlay.classList.add('hidden');
  overlay.classList.remove('flex');
}

// ===================== GIZI HARIAN =====================
function renderIngredientList() {
  const container = document.getElementById('ingredient-list');
  container.innerHTML = '';

  INGREDIENT_CATEGORIES.forEach((category, index) => {
    const section = document.createElement('div');
    section.className = 'ingredient-category' + (index > 0 ? ' pt-3 mt-3 border-t border-green-200/70' : '');

    const header = document.createElement('div');
    header.className = 'flex items-center gap-2 mb-2';
    header.innerHTML =
      '<span class="text-[10px] font-semibold uppercase tracking-wide text-sage whitespace-nowrap">' +
      category.label +
      '</span><span class="flex-1 h-px bg-green-200/80" aria-hidden="true"></span>';

    const chips = document.createElement('div');
    chips.className = 'flex flex-wrap gap-2';

    category.keys.forEach((key) => {
      if (!nutritionDB[key]) return;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = nutritionDB[key].label;
      btn.className =
        'ingredient-btn px-3 py-1.5 rounded-full text-xs font-medium border border-green-200/80 bg-white text-gray-700 hover:border-sage hover:bg-green-50 transition-all shadow-sm';
      btn.dataset.key = key;
      btn.onclick = () => toggleIngredient(key);
      chips.appendChild(btn);
    });

    section.appendChild(header);
    section.appendChild(chips);
    container.appendChild(section);
  });
}

function toggleIngredient(key) {
  const idx = selectedIngredients.indexOf(key);
  if (idx >= 0) selectedIngredients.splice(idx, 1);
  else selectedIngredients.push(key);
  updateSelectedUI();
}

function updateSelectedUI() {
  const frame = document.getElementById('selected-ingredients');
  frame.innerHTML = '';
  if (selectedIngredients.length === 0) {
    frame.innerHTML = '<span class="text-gray-300 text-xs">—</span>';
  } else {
    selectedIngredients.forEach((key) => {
      const span = document.createElement('span');
      span.className = 'bg-sage/15 text-sage px-2 py-0.5 rounded-lg text-xs font-medium';
      span.textContent = nutritionDB[key].label;
      frame.appendChild(span);
    });
  }

  document.querySelectorAll('.ingredient-btn').forEach((btn) => {
    const key = btn.dataset.key;
    const on = selectedIngredients.includes(key);
    btn.classList.toggle('bg-sage', on);
    btn.classList.toggle('text-white', on);
    btn.classList.toggle('border-sage', on);
    btn.classList.toggle('bg-white', !on);
    btn.classList.toggle('text-gray-700', !on);
  });
}

function addToPlate() {
  if (selectedIngredients.length === 0) return;
  selectedIngredients.forEach((key) => {
    plateIngredients.push(key);
  });
  selectedIngredients = [];
  updateSelectedUI();
  renderPlate();
}

function renderPlate() {
  const plate = document.getElementById('plate-foods');
  const empty = document.getElementById('plate-empty');
  plate.innerHTML = '';

  if (plateIngredients.length === 0) {
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');

  plateIngredients.forEach((key) => {
    const item = nutritionDB[key];
    const wrapper = document.createElement('div');
    wrapper.className =
      'w-15 h-15 rounded-full overflow-hidden border-white shadow-sm bg-white flex items-center justify-center';
    wrapper.title = item.label;

    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.label;
    img.className = 'w-full h-full object-cover';
    img.onerror = () => {
      img.remove();
      wrapper.innerHTML = `<span class="text-base">${getFoodEmoji(key)}</span>`;
    };
    wrapper.appendChild(img);
    plate.appendChild(wrapper);
  });
}

function getFoodEmoji(key) {
  const emojis = {
    rice: '🍚', noodle: '🍜', chicken: '🍗', beef: '🥩', fish: '🐟',
    oyster: '🦪', crab: '🦀', lamb: '🍖', tempe: '🫘', tofu: '🧈',
    vegetable: '🥬', egg: '🥚', shrimp: '🦐', potato: '🥔', corn: '🌽',
    milk: '🥛', cheese: '🧀', bread: '🍞', banana: '🍌', apple: '🍎',
    avocado: '🥑', eggplant: '🍆', carrot: '🥕', chili_pepper: '🌶️', bell_pepper: '🫑',
    cucumber: '🥒', leafy_greens: '🥬', broccoli: '🥦', garlic: '🧄', onion: '🧅',
    peanuts: '🥜', chestnuts: '🌰', ginger: '🫚', green_peas: '🫛', brown_shroom: '🍄‍🟫',
    lotus_root: '🫜', ice_cream: '🍦', doughnut: '🍩', cookie: '🍪', pie_apple: '🥧',
    honey: '🍯', pudding: '🍮', candy_hard: '🍬', chocolate: '🍫', apple: '🍎',
    grapes: '🍇', melon: '🍈', watermelon: '🍉', orange: '🍊', lemon: '🍋',
    lime: '🍋‍🟩', pineapple: '🍍', mango: '🥭', pear: '🍐', peach: '🍑',
    cherries: '🍒', strawberry: '🍓', blueberries: '🫐', kiwi: '🥝', tomato: '🍅',
    olives: '🫒', coconut: '🥥'
  };
  return emojis[key] || '🍽️';
}

function calculateNutrition() {
  const totals = { carb: 0, protein: 0, fat: 0 };
  plateIngredients.forEach((key) => {
    const n = nutritionDB[key];
    if (n) {
      totals.carb += n.carb;
      totals.protein += n.protein;
      totals.fat += n.fat;
    }
  });

  document.getElementById('out-carb').textContent = totals.carb.toFixed(1);
  document.getElementById('out-protein').textContent = totals.protein.toFixed(1);
  document.getElementById('out-fat').textContent = totals.fat.toFixed(1);
  renderComparison(totals);

  const sum = totals.carb + totals.protein + totals.fat;
  if (dbReady && sum > 0) {
    insertDailyCalories(sum, totals.carb, totals.protein, totals.fat);
    renderCalorieChart();
  }
}

function renderComparison(totals) {
  const sum = totals.carb + totals.protein + totals.fat;

  const overallEl = document.getElementById('overall-calories');
  overallEl.textContent = `Your Overall Calories for Today: ${sum.toFixed(1)} kcal`;
  overallEl.classList.remove('hidden');

  const msgContainer = document.getElementById('comparison-messages');
  let message;
  let colorClass;
  if (sum >= 2000 && sum <= 2500) {
    message = 'Yeayy 😊~! Keep up the good work!';
    colorClass = 'text-green-600';
  } else if (sum < 2000) {
    message = "Oh no! You're falling way behind 😢.";
    colorClass = 'text-red-600';
  } else {
    message = 'Oh no! You need to slow down 😢.';
    colorClass = 'text-red-600';
  }
  msgContainer.innerHTML = `<p class="${colorClass}">${message}</p>`;

  const comparisons = [
    { key: 'carb', label: 'Carbohydrate', output: totals.carb, ideal: IDEAL.carb },
    { key: 'protein', label: 'Protein', output: totals.protein, ideal: IDEAL.protein.mid },
    { key: 'fat', label: 'Fat', output: totals.fat, ideal: IDEAL.fat.mid },
  ];

  const percentEls = document.getElementById('comparison-percentages');
  percentEls.innerHTML = '';

  comparisons.forEach((c) => {
    const pct = ((c.ideal - c.output) / c.ideal) * 100;
    const sign = pct >= 0 ? 'below ideal' : 'above ideal';
    const absPct = Math.abs(pct).toFixed(1);

    const row = document.createElement('div');
    row.className = 'flex justify-between items-center bg-gray-50 rounded-lg px-3 py-2';
    row.innerHTML = `
      <span class="font-medium text-gray-700">${c.label}</span>
      <span class="text-gray-600">${absPct}% <span class="text-xs text-gray-400">${sign}</span></span>
    `;
    percentEls.appendChild(row);
  });

  renderBarGraph(comparisons);
}

function renderBarGraph(comparisons) {
  const container = document.getElementById('bar-graph');
  container.innerHTML = '';
  const colors = { carb: '#ea580c', protein: '#2563eb', fat: '#ca8a04' };

  comparisons.forEach((c) => {
    const maxVal = Math.max(c.ideal, c.output, 1);
    const idealPct = (c.ideal / maxVal) * 100;
    const outputPct = (c.output / maxVal) * 100;

    const block = document.createElement('div');
    block.className = 'bg-gray-50/80 rounded-xl p-3';
    block.innerHTML = `
      <p class="text-xs font-semibold text-gray-600 mb-2">${c.label}</p>
      <div class="space-y-1.5">
        <div class="flex items-center gap-2">
          <span class="text-[10px] w-10 text-gray-400">Ideal</span>
          <div class="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
            <div class="h-full rounded-full" style="width:${idealPct}%;background:${colors[c.key]};opacity:0.35"></div>
          </div>
          <span class="text-[10px] w-14 text-right text-gray-500">${c.ideal} kal</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-[10px] w-10 text-gray-400">Yours</span>
          <div class="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
            <div class="h-full rounded-full transition-all duration-500" style="width:${outputPct}%;background:${colors[c.key]}"></div>
          </div>
          <span class="text-[10px] w-14 text-right font-semibold" style="color:${colors[c.key]}">${c.output.toFixed(1)}</span>
        </div>
      </div>
    `;
    container.appendChild(block);
  });
}

function resetGiziHarian() {
  selectedIngredients = [];
  plateIngredients = [];
  updateSelectedUI();
  renderPlate();

  document.getElementById('out-carb').textContent = '0';
  document.getElementById('out-protein').textContent = '0';
  document.getElementById('out-fat').textContent = '0';
  document.getElementById('overall-calories').classList.add('hidden');
  document.getElementById('overall-calories').textContent = '';
  document.getElementById('comparison-messages').innerHTML = '';
  document.getElementById('comparison-percentages').innerHTML = '';
  document.getElementById('bar-graph').innerHTML = '';
}

function formatCalorieDateTime(dateStr) {
  if (!dateStr) return '—';
  const normalized = String(dateStr).includes('T') ? dateStr : String(dateStr).replace(' ', 'T');
  const date = new Date(normalized);
  if (Number.isNaN(date.getTime())) return '—';
  const datePart = date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
  const timePart = date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  return `${datePart}\n${timePart}`;
}

function getCalorieBarColor(total) {
  // Match comparison messages: green when ideal, red when behind or over
  if (total >= 2000 && total <= 2500) return '#16a34a';
  return '#dc2626';
}

function deleteCalorieRecord(id) {
  if (!dbReady || !id) return;
  if (!confirm('Hapus data kalori ini dari grafik?')) return;
  deleteDailyCalories(id);
  renderCalorieChart();
}

function renderCalorieChart() {
  const chart = document.getElementById('calorie-chart');
  const empty = document.getElementById('calorie-chart-empty');
  if (!chart || !empty || !dbReady) return;

  const records = getAllDailyCalories();

  if (!records.length) {
    chart.classList.add('hidden');
    chart.innerHTML = '';
    empty.classList.remove('hidden');
    return;
  }

  empty.classList.add('hidden');
  chart.classList.remove('hidden');

  const plotHeight = 176;
  const calorieValues = records.map((r) => Number(r.total_calories) || 0);
  const yMax = Math.ceil(Math.max(...calorieValues, 500) / 100) * 100;
  const yMin = 0;
  const yRange = yMax - yMin || 1;

  const ticks = [];
  const step = yMax <= 1000 ? 200 : yMax <= 3000 ? 500 : 1000;
  for (let v = yMin; v <= yMax; v += step) ticks.push(v);
  if (ticks[ticks.length - 1] !== yMax) ticks.push(yMax);

  const yAxisHtml = ticks
    .map((v) => {
      const pct = ((v - yMin) / yRange) * 100;
      return `<span class="absolute right-0 -translate-y-1/2 text-[9px] text-gray-400 leading-none" style="bottom:${pct}%">${v}</span>`;
    })
    .join('');

  const barsHtml = records
    .map((r) => {
      const total = Number(r.total_calories) || 0;
      const barPx = Math.max(6, Math.round(((total - yMin) / yRange) * plotHeight));
      const color = getCalorieBarColor(total);
      const status =
        total >= 2000 && total <= 2500
          ? 'Ideal'
          : total < 2000
            ? 'Di bawah ideal'
            : 'Di atas ideal';
      return `
        <div class="flex flex-col items-center justify-end shrink-0 w-14 h-full">
          <span class="text-[9px] font-semibold mb-1 leading-none" style="color:${color}">${total.toFixed(0)}</span>
          <div class="w-7 rounded-t-md shadow-sm transition-all duration-500"
            style="height:${barPx}px;background:${color}"
            title="${total.toFixed(1)} kcal · ${status} · ${String(r.created_at || '')}"></div>
        </div>
      `;
    })
    .join('');

  const labelsHtml = records
    .map((r) => {
      const dateLabel = formatCalorieDateTime(r.created_at);
      const labelHtml = dateLabel
        .split('\n')
        .map((line) => `<span class="block truncate">${line}</span>`)
        .join('');
      return `
        <div class="flex flex-col items-center shrink-0 w-14 gap-1">
          <span class="text-[8px] text-gray-500 text-center leading-tight w-full px-0.5 min-h-[1.6rem]">${labelHtml}</span>
          <button type="button" onclick="deleteCalorieRecord(${Number(r.id)})"
            class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 border border-red-300 text-red-600 text-sm font-bold leading-none hover:bg-red-200 active:scale-95 transition-all shadow-sm"
            title="Hapus data ${String(r.created_at || '')}"
            aria-label="Hapus data kalori">×</button>
        </div>
      `;
    })
    .join('');

  const gridLinesHtml = ticks
    .map((v) => {
      const pct = ((v - yMin) / yRange) * 100;
      return `<div class="absolute left-0 right-0 border-t border-gray-100 pointer-events-none" style="bottom:${pct}%"></div>`;
    })
    .join('');

  const justifyClass = records.length > 4 ? 'justify-start' : 'justify-around';

  chart.innerHTML = `
    <div class="flex gap-2">
      <div class="relative w-9 shrink-0" style="height:${plotHeight}px">
        <span class="absolute -left-2 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-medium text-sage whitespace-nowrap origin-center">kcal</span>
        ${yAxisHtml}
      </div>
      <div class="flex-1 min-w-0 overflow-x-auto">
        <div class="min-w-full">
          <div class="relative border-l border-b border-gray-300 pl-2 pr-1" style="height:${plotHeight}px">
            <div class="absolute inset-0 pl-2 pr-1 pointer-events-none">${gridLinesHtml}</div>
            <div class="relative flex items-end ${justifyClass} gap-2 h-full pl-1">${barsHtml}</div>
          </div>
          <div class="flex ${justifyClass} gap-2 mt-1.5 pl-3 pr-1 items-start">${labelsHtml}</div>
        </div>
        <p class="text-[10px] text-center text-gray-400 mt-2 font-medium">Tanggal & Waktu</p>
      </div>
    </div>
  `;
}

// ===================== PROFIL GIZI + SQLite =====================
function getFormData() {
  const name = document.getElementById('input-name').value.trim();
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const weight = parseFloat(document.getElementById('input-weight').value);
  const height = parseFloat(document.getElementById('input-height').value);
  return { name, gender, weight, height };
}

function saveAndCalculateBMI() {
  const { name, gender, weight, height } = getFormData();

  if (!name || !gender) {
    alert('Please fill in your name and gender.');
    return;
  }
  if (!weight || !height || height <= 0) {
    document.getElementById('bmi-output').textContent = 'Please enter valid weight and height.';
    return;
  }

  if (dbReady) {
    // Avoid same-day duplicates only. Same name/gender/weight/height on a
    // different day is allowed so BMI history can be tracked over time.
    const roundW = (v) => Math.round(Number(v) * 10) / 10;
    const roundH = (v) => Math.round(Number(v) * 100) / 100;
    const toDateKey = (dateStr) => {
      if (dateStr) {
        const m = String(dateStr).match(/^(\d{4}-\d{2}-\d{2})/);
        if (m) return m[1];
      }
      const d = new Date();
      const y = d.getFullYear();
      const mth = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${y}-${mth}-${day}`;
    };

    const wRounded = roundW(weight);
    const hRounded = roundH(height);
    const todayKey = toDateKey();

    const profiles = getAllProfiles();
    const existing = profiles.find((p) => {
      return (
        String(p.name).trim() === String(name).trim() &&
        String(p.gender) === String(gender) &&
        roundW(p.weight) === wRounded &&
        roundH(p.height) === hRounded &&
        toDateKey(p.created_at) === todayKey
      );
    });

    if (existing) {
      selectedProfileId = existing.id;
    } else {
      selectedProfileId = insertProfile(name, gender, wRounded, hRounded);
    }
    renderProfileList();
  }

  const bmi = weight / (height * height);
  document.getElementById('bmi-output').textContent =
    `Your Body Mass Index is ${bmi.toFixed(1)} ${getBMICategory(bmi)}`;
  document.getElementById('bmi-message').textContent = getBMIMessage(bmi);
  showBMIImage(gender, bmi);
}

function renderProfileList() {
  const container = document.getElementById('profile-list');
  if (!dbReady) return;

  const profiles = getAllProfiles();
  if (!profiles.length) {
    container.innerHTML = '<p class="text-gray-400 text-sm text-center py-6">Belum ada data</p>';
    setProfileActionButtons(false);
    renderBMIChart();
    return;
  }

  container.innerHTML = '';
  profiles.forEach((p) => {
    const row = document.createElement('button');
    row.type = 'button';
    row.className =
      'w-full text-left px-4 py-3 hover:bg-green-50/80 transition-colors profile-row' +
      (selectedProfileId === p.id ? ' bg-sage/15 ring-1 ring-inset ring-sage/30' : '');
    row.dataset.id = p.id;
    row.onclick = () => selectProfile(p.id);

    const genderLabel = p.gender === 'female' ? 'Female' : 'Male';
    row.innerHTML = `
      <p class="font-medium text-gray-800 text-sm">${escapeHtml(p.name)}</p>
      <p class="text-xs text-gray-500 mt-0.5">
        ${genderLabel} · ${p.weight} kg · ${p.height} m
      </p>
    `;
    container.appendChild(row);
  });

  setProfileActionButtons(!!selectedProfileId);
  renderBMIChart();
}

function calcBMI(weight, height) {
  return weight / (height * height);
}

function formatProfileDate(dateStr) {
  if (!dateStr) return '—';
  const normalized = String(dateStr).includes('T') ? dateStr : dateStr.replace(' ', 'T');
  const date = new Date(normalized);
  if (Number.isNaN(date.getTime())) return '—';
  return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: '2-digit' });
}

function getBMIBarColor(bmi) {
  if (bmi < 18.5) return '#60a5fa';
  if (bmi <= 24.9) return '#477f3d';
  if (bmi <= 29.9) return '#f59e0b';
  return '#ef4444';
}

function renderBMIChart() {
  const chart = document.getElementById('bmi-chart');
  const empty = document.getElementById('bmi-chart-empty');
  if (!chart || !empty || !dbReady) return;

  const profiles = getAllProfiles()
    .map((p) => ({ ...p, bmi: calcBMI(p.weight, p.height) }))
    .sort((a, b) => {
      const da = a.created_at ? new Date(String(a.created_at).replace(' ', 'T')).getTime() : a.id;
      const db = b.created_at ? new Date(String(b.created_at).replace(' ', 'T')).getTime() : b.id;
      return da - db;
    });

  if (!profiles.length) {
    chart.classList.add('hidden');
    chart.innerHTML = '';
    empty.classList.remove('hidden');
    return;
  }

  empty.classList.add('hidden');
  chart.classList.remove('hidden');

  const plotHeight = 176;
  const bmiValues = profiles.map((p) => p.bmi);
  const yMax = Math.ceil(Math.max(...bmiValues, 25) + 2);
  const yMin = Math.max(0, Math.floor(Math.min(...bmiValues, 18) - 2));
  const yRange = yMax - yMin || 1;

  const ticks = [];
  const step = yRange <= 10 ? 2 : 5;
  for (let v = yMin; v <= yMax; v += step) ticks.push(v);
  if (ticks[ticks.length - 1] !== yMax) ticks.push(yMax);

  const yAxisHtml = ticks
    .map((v) => {
      const pct = ((v - yMin) / yRange) * 100;
      return `<span class="absolute right-0 -translate-y-1/2 text-[10px] text-gray-400 leading-none" style="bottom:${pct}%">${v}</span>`;
    })
    .join('');

  const barsHtml = profiles
    .map((p) => {
      const barPx = Math.max(6, Math.round(((p.bmi - yMin) / yRange) * plotHeight));
      const color = getBMIBarColor(p.bmi);
      const dateLabel = formatProfileDate(p.created_at);
      return `
        <div class="flex flex-col items-center shrink-0 w-12">
          <div class="flex flex-col justify-end items-center w-full" style="height:${plotHeight}px">
            <span class="text-[9px] font-semibold text-gray-600 mb-1 leading-none">${p.bmi.toFixed(1)}</span>
            <div class="w-7 rounded-t-md shadow-sm transition-all duration-500"
              style="height:${barPx}px;background:${color}"
              title="${escapeHtml(p.name)} · BMI ${p.bmi.toFixed(1)} · ${dateLabel}"></div>
          </div>
          <span class="text-[9px] text-gray-500 mt-1.5 text-center leading-tight w-full truncate px-0.5">${dateLabel}</span>
        </div>
      `;
    })
    .join('');

  const gridLinesHtml = ticks
    .map((v) => {
      const pct = ((v - yMin) / yRange) * 100;
      return `<div class="absolute left-0 right-0 border-t border-gray-100 pointer-events-none" style="bottom:${pct}%"></div>`;
    })
    .join('');

  const barsRowClass =
    profiles.length > 5
      ? 'relative flex items-end justify-start gap-2 h-full pl-1 overflow-x-auto'
      : 'relative flex items-end justify-around gap-2 h-full pl-1';

  chart.innerHTML = `
    <div class="flex gap-2">
      <div class="relative w-8 shrink-0" style="height:${plotHeight}px">
        <span class="absolute -left-1 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-medium text-sage whitespace-nowrap origin-center">BMI</span>
        ${yAxisHtml}
      </div>
      <div class="flex-1 min-w-0">
        <div class="relative border-l border-b border-gray-300 pl-2 pr-1" style="height:${plotHeight}px">
          <div class="absolute inset-0 pl-2 pr-1 pointer-events-none">${gridLinesHtml}</div>
          <div class="${barsRowClass}">${barsHtml}</div>
        </div>
        <p class="text-[10px] text-center text-gray-400 mt-2 font-medium">Tanggal</p>
      </div>
    </div>
  `;
}

function selectProfile(id) {
  selectedProfileId = id;
  const p = getProfileById(id);
  if (!p) return;

  document.getElementById('input-name').value = p.name;
  document.querySelector(`input[name="gender"][value="${p.gender}"]`).checked = true;
  document.getElementById('input-weight').value = p.weight;
  document.getElementById('input-height').value = p.height;

  renderProfileList();
}

function updateSelectedProfile() {
  if (!selectedProfileId || !dbReady) return;
  const { name, gender, weight, height } = getFormData();
  if (!name || !gender || !weight || !height) {
    alert('Please complete all fields before updating.');
    return;
  }
  updateProfile(selectedProfileId, name, gender, weight, height);
  renderProfileList();
  alert('Profile updated.');
}

function deleteSelectedProfile() {
  if (!selectedProfileId || !dbReady) return;
  if (!confirm('Delete this profile?')) return;
  deleteProfile(selectedProfileId);
  selectedProfileId = null;
  clearProfileForm();
  renderProfileList();
  document.getElementById('bmi-output').textContent = 'Your Body Mass Index is —';
  document.getElementById('bmi-message').textContent = '';
  document.getElementById('bmi-image').classList.add('hidden');
  document.getElementById('bmi-image-placeholder').classList.remove('hidden');
}

function clearProfileForm() {
  document.getElementById('input-name').value = '';
  document.querySelectorAll('input[name="gender"]').forEach((r) => (r.checked = false));
  document.getElementById('input-weight').value = '';
  document.getElementById('input-height').value = '';
}

function setProfileActionButtons(enabled) {
  document.getElementById('btn-update-profile').disabled = !enabled;
  document.getElementById('btn-delete-profile').disabled = !enabled;
}

function escapeHtml(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function getBMICategory(bmi) {
  if (bmi < 18.5) return '(Underweight)';
  if (bmi <= 24.9) return '(Normal)';
  if (bmi <= 29.9) return '(Overweight)';
  if (bmi <= 34.9) return '(Obesity I)';
  if (bmi <= 39.9) return '(Obesity II)';
  return '(Obesity III)';
}

function getBMIMessage(bmi) {
  if (bmi < 18.5) return "Oh no! You're falling behind 😢.";
  if (bmi <= 24.9) return "Wow~! You're on the right pace!";
  if (bmi <= 29.9) return "That's a little bit much. Please keep track of your meals.";
  if (bmi <= 34.9) return "You can do this! Please consult with your doctor and keep track of your meals.";
  if (bmi <= 39.9) return "Fighting! Please consult with your doctor and keep track of your meals.";
  return "You're not alone! Please consult with your doctor and keep track of your meals.";
}

function showBMIImage(gender, bmi) {
  const imgs = BMI_IMAGES[gender];
  let src = imgs.under;
  if (bmi >= 30) src = imgs.obese;
  else if (bmi >= 18.5 && bmi <= 24.9) src = imgs.normal;
  else if (bmi > 18.5) src = imgs.under;

  const imgEl = document.getElementById('bmi-image');
  const placeholder = document.getElementById('bmi-image-placeholder');
  imgEl.src = src;
  imgEl.classList.remove('hidden');
  placeholder.classList.add('hidden');
  imgEl.onerror = () => {
    imgEl.classList.add('hidden');
    placeholder.classList.remove('hidden');
    // placeholder.textContent = `Place image at: ${src}`;
  };
}
