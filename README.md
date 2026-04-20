# Study Project

Учебный фронтенд-проект для углубленного изучения современного React/TypeScript стека на практике.
Здесь я закрепляю знания с курса и отрабатываю подходы, которые применяются в реальной разработке:
архитектура, качество кода, тестирование, изоляция UI и удобные developer-инструменты.

## Что внутри

- Архитектура по **FSD** (Feature-Sliced Design): `app`, `pages`, `widgets`, `features`, `entities`, `shared`
- React + TypeScript
- Redux Toolkit для управления состоянием
- React Router для маршрутизации
- i18n через `i18next` / `react-i18next`
- SCSS Modules
- Storybook для UI-компонентов
- Jest + Testing Library для unit-тестов
- Линтеры и форматирование (ESLint, Stylelint, Prettier)
- Mock API на `json-server`
- Генераторы кода на `plop`

## Технологический стек

### Основной

- `react`, `react-dom`
- `typescript`
- `@reduxjs/toolkit`, `react-redux`
- `react-router-dom`
- `axios`
- `i18next`, `react-i18next`

### Инфраструктура и сборка

- `webpack` (основная учебная конфигурация)
- `vite` (альтернативный быстрый dev-старт)
- `babel`
- `storybook`

### Качество и тесты

- `eslint` (flat config)
- `stylelint`
- `prettier`
- `jest`, `@testing-library/react`
- `husky`

## Особенности проекта

- Используется **кастомный ESLint-плагин** `eslint-plugin-path-checker-kaidarka`, который проверяет:
  - корректность импортов через alias `@`
  - импорты только через public API
  - ограничения межслойных импортов по FSD
- В сборке включен `CircularDependencyPlugin` с `failOnError: true` для контроля циклических зависимостей.
- Есть генераторы `plop` для ускорения создания компонентов и страниц в нужной структуре.
- Для локальной разработки API поднимается mock-сервер (`json-server`) с задержкой ответа (имитация реального API).

## Структура проекта

Ключевые директории:

- `src/` - исходный код приложения (FSD)
- `config/` - конфиги сборки, тестов и Storybook
- `json-server/` - локальный mock API (`db.json`, сервер)
- `plop-templates/` - шаблоны для генераторов
- `public/` - статические файлы

## Быстрый старт

### 1) Установка зависимостей

```bash
npm install
```

### 2) Запуск приложения

Вариант 1 (Webpack dev server):

```bash
npm start
```

Вариант 2 (Vite dev server):

```bash
npm run start:vite
```

### 3) Запуск приложения вместе с mock API

Webpack + API:

```bash
npm run start:dev
```

Vite + API:

```bash
npm run start:dev:vite
```

Отдельно только mock API:

```bash
npm run start:dev:server
```

## Скрипты npm

### Запуск и сборка

- `npm start` - dev сервер на Webpack (`port=3000`)
- `npm run start:dev` - Webpack + mock API параллельно
- `npm run start:vite` - dev сервер на Vite
- `npm run start:dev:vite` - Vite + mock API параллельно
- `npm run start:dev:server` - только mock API (`json-server`, порт `8000`)
- `npm run build:dev` - dev-сборка Webpack
- `npm run build:prod` - production-сборка Webpack

### Качество кода

- `npm run lint:ts` - проверка TS/JS файлов через ESLint
- `npm run lint:ts:fix` - автоисправление ESLint-замечаний
- `npm run lint:scss` - проверка SCSS через Stylelint
- `npm run lint:scss:fix` - автоисправление Stylelint-замечаний

### Тесты и UI

- `npm run test:unit` - unit-тесты (Jest)
- `npm run storybook` - локальный запуск Storybook (`6006`)
- `npm run storybook:build` - production-сборка Storybook

### Инструменты разработки

- `npm run plop` - генерация компонентов/страниц по шаблонам
- `npm run prepare` - установка Husky hooks

## Линтинг и форматирование

- ESLint конфиг: `eslint.config.mjs`
- Stylelint конфиг: `.stylelintrc.json`
- Prettier конфиг: `.prettierrc.json`

В проекте применяется строгая дисциплина импортов и слоев FSD через правила ESLint.
Это помогает держать архитектуру чистой даже при росте количества фич.

## Тестирование

- Unit-тесты запускаются через Jest с `jsdom` окружением.
- Используется `@testing-library/react`.
- Для отчетов подключен `jest-html-reporters`.

## Storybook

Storybook вынесен в отдельную конфигурацию в `config/storybook`.
Используется для разработки и проверки UI-компонентов изолированно от приложения.

## Mock API

Mock-сервер находится в `json-server/index.js` и запускается на `http://localhost:8000`.
Реализован тестовый эндпоинт логина и базовая авторизационная проверка для запросов.
