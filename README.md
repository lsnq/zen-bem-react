# Реализация ленты Яндекс Дзен на bem-react-boilerplate
## Локальный запуск
```
git clone https://github.com/lsnq/zen-bem-react.git
yarn && yarn start
```
## Сборка
```
yarn build
```

## Реализация
* для смартфонов лента публикаций выводится в одну колонку
* для планшетов две колонки
* для ПК сетка публикаций формируется на основании красивенького (наверное) шаблона
* для каждого типа устройств генерируется свой бандл, содержащий логику офомрления исключительно для заданного типа устройств.
* для тач устройств (как планшетов, так и смартфонов), нажимаемые элементы имеют увеличенный размер
* дополнительные записи подгружаются при достижении определенного расстояния до края контента
* в зависимости от типа устройства загружается правильный тип сборки
* тип устройства определяется на стороне бэкенда. бэкенд — на rails. исходный код не публикуется из эстетических соображений.

## Что можно было сделать лучше (из известного)
- прелоадер изображений
- время до первого показа
- догружать разное количество записей для пк и мобильных устройств
- есть подозрение, что где-то переопределение избыточно. старался использовать только действительно необходимое для каждого уровня, честное слово.


## Структура проекта
```
├── blocks
│   ├── Button
│   │   ├── Button.css
│   │   ├── Button.js
│   │   ├── _type_details
│   │   │   ├── Button_type_details.css
│   │   │   └── icon_details.svg
│   │   └── _type_like
│   │       ├── Button_type_like.css
│   │       └── icon_like.svg
│   ├── Card
│   │   ├── Author
│   │   │   ├── Card-Author.css
│   │   │   └── Card-Author.js
│   │   ├── Card.css
│   │   ├── Card.js
│   │   ├── Tale
│   │   │   ├── Card-Tale.css
│   │   │   └── Card-Tale.js
│   │   ├── Thumbnail
│   │   │   ├── Card-Thumbnail.css
│   │   │   └── Card-Thumbnail.js
│   │   ├── Title
│   │   │   ├── Card-Title.css
│   │   │   └── Card-Title.js
│   │   ├── Tools
│   │   │   ├── Card-Tools.css
│   │   │   └── Card-Tools.js
│   │   ├── _size_l
│   │   │   └── Card_size_l.css
│   │   ├── _size_m
│   │   │   └── Card_size_m.css
│   │   ├── _size_s
│   │   │   └── Card_size_s.css
│   │   ├── _size_xl
│   │   │   └── Card_size_xl.css
│   │   ├── _without_description
│   │   │   ├── Card_without_description.css
│   │   │   └── Card_without_description.js
│   │   └── _without_image
│   │       ├── Card_without_image.css
│   │       └── Card_without_image.js
│   ├── Feed
│   │   ├── Feed.css
│   │   ├── Feed.js
│   │   ├── Header
│   │   │   ├── Feed-Header.css
│   │   │   └── Feed-Header.js
│   │   ├── List
│   │   │   ├── Feed-List.css
│   │   │   └── Feed-List.js
│   │   └── Logo
│   │       ├── Feed-Logo.css
│   │       └── Feed-Logo.js
│   └── Page
│       ├── Page.css
│       └── fonts
│           └── ...
├── blocks.desktop
│   ├── Button
│   │   └── Button.css
│   ├── Card
│   │   ├── Card.css
│   │   ├── Card.js
│   │   ├── Title
│   │   │   └── Card-Title.css
│   │   └── _without_image
│   │       └── Card_without_image.css
│   ├── Feed
│   │   └── List
│   │       ├── Feed-List.css
│   │       └── Feed-List.js
│   └── Page
│       └── Page.css
├── blocks.phone
│   ├── Card
│   │   └── Card.css
│   └── Feed
│       └── List
│           └── Feed-List.css
├── blocks.tablet
│   ├── Card
│   │   ├── Card.css
│   │   └── _without_image
│   │       └── Card_without_image.css
│   └── Feed
│       └── List
│           ├── Feed-List.css
│           └── Feed-List.js
├── blocks.touch
│   ├── Button
│   │   └── Button.css
│   └── Feed
│       └── List
│           └── Feed-List.css
├── db
│   ├── client.js
│   └── feed.json
└── index.js
```
