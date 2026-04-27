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

## Feature Flags: правила использования и удаления

В проекте feature flags реализованы через:

- тип флагов `src/shared/types/featureFlags.ts`
- функции `setFeatureFlags` / `getFeatureFlag` / `toggleFeatures` из `src/shared/lib/features`

### Как добавлять новую функцию под флаг

1. Добавить новый флаг в `FeatureFlags`:

```ts
export type FeatureFlags = {
    isArticleRatingEnabled?: boolean;
    isArticleCounterEnabled?: boolean;
    isNewFeatureEnabled?: boolean;
};
```

2. В точке использования обернуть поведение в `toggleFeatures`:

```tsx
const newBlock = toggleFeatures({
    name: 'isNewFeatureEnabled',
    on: () => <NewFeatureComponent />,
    off: () => <OldFeatureComponent />,
});
```

3. Соблюдать правила применения:
- имя флага в формате `is<Name>Enabled`
- `on` и `off` должны содержать только взаимозаменяемые варианты одной и той же бизнес-функции
- не вкладывать флаги друг в друга без явной необходимости
- временные флаги должны быть локальными для конкретной фичи и удаляться после принятия решения

### Как удалять новую функцию после решения

После того как принято решение оставить только один вариант (`on` или `off`), флаг нужно удалить из кода.

1. Запустить скрипт удаления флага:

```bash
npx tsx ./scripts/remove-feature.ts isNewFeatureEnabled on
```

Где:
- `isNewFeatureEnabled` - имя флага
- `on` - какой вариант оставить (`on` или `off`)

2. Нормализовать абсолютные импорты после рефакторинга:

```bash
npx tsx ./scripts/refactor/updateImports.ts
```

3. Удалить сам флаг из `src/shared/types/featureFlags.ts`.
4. Прогнать проверки:

```bash
npm run lint:ts
npm run test:unit
```

Это обязательный финальный шаг для любой временной фичи: после релизного решения в проекте не должно оставаться "мертвых" флагов.

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
