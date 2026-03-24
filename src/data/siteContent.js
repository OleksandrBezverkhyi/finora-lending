export const localizedSiteContent = {
  uk: {
    ui: {
      locale: 'uk',
      skipLink: 'Перейти до основного вмісту',
      languageSwitcherLabel: 'Перемикання мови',
      languages: {
        uk: 'UA',
        en: 'EN',
      },
      languageButtonLabels: {
        uk: 'Перемкнути сторінку на українську',
        en: 'Перемкнути сторінку на англійську',
      },
      navAriaLabel: 'Основна навігація',
      brandAriaLabel: 'Finora — перейти до початку сторінки',
      logoAlt: 'Логотип СумДУ',
      mainActionsAriaLabel: 'Основні дії сторінки',
      footerAriaLabel: 'Нижній колонтитул сайту',
      meta: {
        title: 'Finora — персональний облік доходів і витрат',
        description:
          'Веборієнтований проєкт для персонального обліку доходів і витрат з аналітикою, бюджетуванням та плануванням фінансових цілей.',
      },
    },
    navigationItems: [
      { label: 'Про проєкт', href: '#about' },
      { label: 'Мета і завдання', href: '#goals' },
      { label: 'Методологія', href: '#methodology' },
      { label: 'Результати', href: '#results' },
      { label: 'Контакти', href: '#contacts' },
    ],
    hero: {
      id: 'hero',
      kicker: 'Проєкт Finora',
      title:
        'Веборієнтована інформаційна система персонального обліку доходів і витрат',
      subtitle: 'з аналітикою та бюджетуванням',
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
    footer: {
      title: 'Finora',
      text: 'Лендінг проєкту з персонального обліку доходів і витрат, аналітики та бюджетування.',
    },
  },
  en: {
    ui: {
      locale: 'en',
      skipLink: 'Skip to main content',
      languageSwitcherLabel: 'Language switcher',
      languages: {
        uk: 'UA',
        en: 'EN',
      },
      languageButtonLabels: {
        uk: 'Switch page to Ukrainian',
        en: 'Switch page to English',
      },
      navAriaLabel: 'Primary navigation',
      brandAriaLabel: 'Finora — go to the top of the page',
      logoAlt: 'SumDU logo',
      mainActionsAriaLabel: 'Primary page actions',
      footerAriaLabel: 'Site footer',
      meta: {
        title: 'Finora — personal income and expense tracking',
        description:
          'A web-oriented project for personal income and expense tracking with analytics, budgeting, and financial goal planning.',
      },
    },
    navigationItems: [
      { label: 'About', href: '#about' },
      { label: 'Goals', href: '#goals' },
      { label: 'Methodology', href: '#methodology' },
      { label: 'Results', href: '#results' },
      { label: 'Contacts', href: '#contacts' },
    ],
    hero: {
      id: 'hero',
      kicker: 'Finora Project',
      title: 'Web-oriented information system for personal income and expense tracking',
      subtitle: 'with analytics and budgeting',
      description:
        'A one-page landing site that presents the key ideas, structure, and capabilities of the Finora project.',
      actions: [
        { label: 'Explore the project', href: '#about' },
        { label: 'Contact information', href: '#contacts' },
      ],
    },
    about: {
      id: 'about',
      title: 'About the project',
      description:
        'Finora focuses on building a web-oriented system for tracking personal income and expenses with tools for analytics, planning, and budgeting.',
      items: [
        'Financial transaction tracking',
        'Income and expense analytics',
        'Budget and savings goal planning',
      ],
    },
    goals: {
      id: 'goals',
      title: 'Purpose and objectives',
      description:
        'The goal of the project is to create a convenient web application for personal financial control.',
      items: [
        'Analyze the problem domain',
        'Design the system structure',
        'Implement the core accounting functionality',
        'Add analytics and budgeting features',
      ],
    },
    methodology: {
      id: 'methodology',
      title: 'Methodology',
      description:
        'The implementation is based on a component-driven approach in React and incremental development with Git version control.',
      items: [
        'Modular component structure',
        'Incremental feature delivery',
        'Git Flow based development process',
      ],
    },
    results: {
      id: 'results',
      title: 'Expected results',
      description:
        'The final outcome is intended to be an information system that helps users control their finances and make better decisions.',
      items: [
        'Convenient transaction tracking',
        'Clear visual analytics',
        'Control over budgets and financial goals',
      ],
    },
    contacts: {
      id: 'contacts',
      title: 'Contacts',
      description:
        'A section for contact information and a link to the project repository.',
      links: [
        {
          label: 'Repository',
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
    footer: {
      title: 'Finora',
      text: 'A project landing page focused on personal income and expense tracking, analytics, and budgeting.',
    },
  },
}

export const defaultLocale = 'uk'
export const supportedLocales = ['uk', 'en']
