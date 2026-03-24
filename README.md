# Finora Landing Page

Односторінковий вебсайт для представлення проєкту `Finora` — веборієнтованої інформаційної системи персонального обліку доходів і витрат з аналітикою та бюджетуванням.

Лендінг реалізовано на `React` та `JavaScript` з використанням `Vite`. Проєкт містить двомовний інтерфейс (`українська / англійська`), адаптивний дизайн, базову SEO-оптимізацію та семантичну розмітку.

## Функціональні можливості

- односторінковий лендінг з секціями про проєкт, мету, методологію, результати та контакти
- перемикання мов `UA / EN`
- адаптивне меню та коректне відображення на різних розмірах екранів
- SEO-метадані, `Open Graph`, `Schema.org`, `robots.txt`, `sitemap.xml`
- favicon-набір для різних пристроїв
- семантична HTML-структура та базова доступність

## Технології

- `React`
- `JavaScript`
- `Vite`
- `CSS`
- `ESLint`

## Запуск проєкту

1. Встановити залежності:

```bash
npm install
```

2. Запустити локальний сервер розробки:

```bash
npm run dev
```

3. Зібрати production-версію:

```bash
npm run build
```

4. Переглянути production preview:

```bash
npm run preview
```

## Структура проєкту

```text
finora-lending/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Основні файли

- `src/App.jsx` — основна структура сторінки та логіка перемикання мови
- `src/components/SiteHeader.jsx` — header, навігація, перемикач мов
- `src/components/HeroSection.jsx` — головний блок лендінгу
- `src/components/ContentSection.jsx` — універсальна секція для контентних блоків
- `src/components/ContactSection.jsx` — секція контактів
- `src/data/siteContent.js` — локалізований контент для `uk/en`
- `src/App.css` — стилі секцій та адаптивність
- `src/index.css` — глобальні стилі, reset і типографіка

## Git Flow

У проєкті використовується стратегія `Git Flow`.

Основні гілки:

- `main` — стабільна версія проєкту
- `develop` — основна гілка розробки
- `feature/*` — окремі функціональні гілки для нових етапів роботи
- `release/*` — підготовка релізу
- `hotfix/*` — термінові виправлення після релізу

Кожен етап розробки оформлювався окремими змістовними комітами відповідно до лабораторної роботи.

## Репозиторій

Публічний репозиторій проєкту:

[https://github.com/OleksandrBezverkhyi/finora-lending](https://github.com/OleksandrBezverkhyi/finora-lending)

## Автор

Oleksandr Bezverkhyi
