export const navigationItems = [
  { label: 'Про проєкт', href: '#about' },
  { label: 'Мета і завдання', href: '#goals' },
  { label: 'Методологія', href: '#methodology' },
  { label: 'Результати', href: '#results' },
  { label: 'Контакти', href: '#contacts' },
]

export const landingContent = {
  hero: {
    id: 'hero',
    titleUa:
      'Веборієнтована інформаційна система персонального обліку доходів і витрат з аналітикою та бюджетуванням',
    titleEn:
      'Web-oriented information system for personal income and expense tracking with analytics and budgeting',
    description:
      'Односторінковий лендінг для представлення ключових ідей, структури та можливостей проєкту Finora.',
    actions: [
      { label: 'Перейти до опису', href: '#about' },
      { label: 'Контактна інформація', href: '#contacts' },
    ],
  },
  about: {
    id: 'about',
    title: 'Про проєкт',
    description:
      'Finora присвячений створенню веборієнтованої системи для обліку доходів і витрат користувача з інструментами аналітики, планування та бюджетування.',
    items: [
      'Облік фінансових операцій',
      'Аналітика доходів та витрат',
      'Планування бюджетів і цілей',
    ],
  },
  goals: {
    id: 'goals',
    title: 'Мета і завдання',
    description:
      'Метою проєкту є розробка зручного вебзастосунку для персонального фінансового контролю.',
    items: [
      'Проаналізувати предметну область',
      'Спроєктувати структуру системи',
      'Реалізувати основний функціонал обліку',
      'Додати аналітику та бюджетування',
    ],
  },
  methodology: {
    id: 'methodology',
    title: 'Методологія',
    description:
      'Для реалізації використовується компонентний підхід у React та поетапна розробка з контролем версій Git.',
    items: [
      'Модульна структура компонентів',
      'Поетапна реалізація функціоналу',
      'Використання Git Flow для розробки',
    ],
  },
  results: {
    id: 'results',
    title: 'Очікувані результати',
    description:
      'У результаті має бути створено інформаційну систему, що допомагає користувачу контролювати фінанси та приймати кращі рішення.',
    items: [
      'Зручний облік транзакцій',
      'Наочна аналітика',
      'Контроль бюджетів і фінансових цілей',
    ],
  },
  contacts: {
    id: 'contacts',
    title: 'Контакти',
    description:
      'Блок для контактної інформації та посилання на репозиторій проєкту.',
    links: [
      {
        label: 'Репозиторій',
        value: 'https://github.com/OleksandrBezverkhyi/finora-lending',
        href: 'https://github.com/OleksandrBezverkhyi/finora-lending',
      },
      {
        label: 'Email',
        value: 'bezverkhyi.ol@gmail.com',
        href: 'mailto:bezverkhyi.ol@gmail.com',
      },
    ],
  },
}
