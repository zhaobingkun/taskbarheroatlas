const lookupForm = document.querySelector('#lookup-form');
const lookupInput = document.querySelector('#lookup');
const lookupResult = document.querySelector('#lookup-result');

const routes = [
  { terms: ['rune', 'tree'], label: 'Rune Tree & route notes', href: '/rune-tree/' },
  { terms: ['chest', 'timer'], label: 'Chest Timer', href: '/calculators/chest-timer/' },
  { terms: ['farm', 'exp', 'gold'], label: 'Farming field notes', href: '/guides/exp-farm/' },
  { terms: ['drop', 'item', 'gear'], label: 'Drop finder desk', href: '/drop-rates/' },
  { terms: ['build', 'tier', 'hero'], label: 'Build and tier notes', href: '/tier-list/' }
];

lookupForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = lookupInput.value.trim().toLowerCase();
  const route = routes.find(({ terms }) => terms.some((term) => query.includes(term)));
  if (!query) {
    lookupResult.textContent = 'Try a goal, system or item—such as rune tree, EXP farm or chest timer.';
    return;
  }
  if (route) {
    lookupResult.innerHTML = `Closest first-release route: <a href="${route.href}">${route.label}</a>.`;
  } else {
    lookupResult.textContent = `“${lookupInput.value.trim()}” is not in the first-release desk yet. Use the database shelf or field notes to start.`;
  }
});

const timerValue = document.querySelector('#timer-value');
const timerStatus = document.querySelector('#timer-status');
const timerToggle = document.querySelector('#timer-toggle');
let remaining = 1800;
let timerId = null;

function renderTimer() {
  if (!timerValue) return;
  const hours = String(Math.floor(remaining / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((remaining % 3600) / 60)).padStart(2, '0');
  const seconds = String(remaining % 60).padStart(2, '0');
  timerValue.textContent = `${hours}:${minutes}:${seconds}`;
}

function stopTimer(message = 'paused locally') {
  window.clearInterval(timerId);
  timerId = null;
  timerToggle.textContent = 'Start';
  timerStatus.textContent = message;
}

document.querySelectorAll('[data-timer]').forEach((button) => {
  button.addEventListener('click', () => {
    remaining = Number(button.dataset.timer);
    renderTimer();
    stopTimer('ready when you are');
  });
});

timerToggle?.addEventListener('click', () => {
  if (timerId) {
    stopTimer();
    return;
  }
  timerToggle.textContent = 'Pause';
  timerStatus.textContent = 'counting down in this tab';
  timerId = window.setInterval(() => {
    if (remaining <= 0) {
      stopTimer('chest window reached');
      timerValue.textContent = '00:00:00';
      return;
    }
    remaining -= 1;
    renderTimer();
  }, 1000);
});

const runeAnswers = {
  'Clear speed': 'Start with routes that improve repeatable wave clear, then check whether your current stage becomes the next bottleneck.',
  'Boss damage': 'Start with single-target value and cooldown reliability; rerun the comparison after a meaningful gear upgrade.',
  'Survival': 'Start with the defensive branch that saves the failure point, then return to damage once the route is stable.'
};

document.querySelectorAll('[data-rune]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-rune]').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    document.querySelector('#rune-answer').textContent = runeAnswers[button.dataset.rune];
  });
});

renderTimer();
