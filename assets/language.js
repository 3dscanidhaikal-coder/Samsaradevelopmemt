'use strict';
// English source text is retained so switching language never replaces controls.
const russianText = Object.fromEntries(`
A valid passport is the only document required to begin the property purchase process.|Для начала процесса покупки недвижимости необходим только действующий паспорт.
We guide clients through every stage of the transaction and assist with preparing and completing all necessary documentation.|Мы сопровождаем клиентов на каждом этапе сделки и помогаем подготовить и оформить всю необходимую документацию.

03 / PROJECTS HIGHLIGHT|03 / ИЗБРАННЫЕ ПРОЕКТЫ
Two phases.|Два этапа.
One shared vision.|Единое видение.
Explore Solvyn City’s villas, apartments, and penthouses.|Откройте для себя виллы, апартаменты и пентхаусы Solvyn City.
Find your place in contemporary island living.|Найдите своё место в современной островной жизни.
Villas and apartments in Bukit, Bali.|Виллы и апартаменты на Буките, Бали.
Villas, studio apartments, and penthouses in Bukit, Bali.|Виллы, апартаменты-студии и пентхаусы на Буките, Бали.

Leasehold terms|Условия аренды
23+ years, with a guaranteed extension.|23+ года с гарантированным продлением.
80 years.|80 лет.
Leasehold terms depend on the project phase. Phase 1 offers 23+ years, with a guaranteed extension. Phase 2 offers 80 years. This grants owners a long-term right to use the property and supports long-term ownership planning.|Условия leasehold зависят от этапа проекта. Phase 1: 23+ года с гарантированным продлением. Phase 2: 80 лет. Это предоставляет владельцам долгосрочное право пользования недвижимостью и возможность долгосрочного планирования.
Innovative water purification system|Инновационная система очистки воды
Innovative water purification system: show details|Инновационная система очистки воды: подробнее
An innovative water purification system designed to support water quality throughout the development. Ask our team for the system specifications and maintenance details.|Инновационная система очистки воды для поддержания качества воды на территории комплекса. Уточните у нашей команды характеристики системы и условия обслуживания.
 
Melasti Beach|Пляж Меласти
Two-bedroom penthouse|Пентхаус с двумя спальнями
2 balconies · 3 penthouses|2 балкона · 3 пентхауса
109 m² · 2 bedrooms · 2 balconies|109 м² · 2 спальни · 2 балкона
A 109 m² two-bedroom penthouse at Solvyn City Phase 2, featuring a kitchen-living room, two bathrooms plus a guest WC and two balconies. This residence type comprises 3 penthouses.|Пентхаус площадью 109 м² с двумя спальнями в Solvyn City Phase 2: кухня-гостиная, 2 ванные комнаты и гостевой санузел, 2 балкона. Количество пентхаусов этого типа — 3.
Studio apartments|СТУДИЯ апартаменты
Studio|Студия
34.6 m² · Studio|34,6 м² · Студия
34.6 m² · Studio · Balcony|34,6 м² · Студия · Балкон
Balcony · 78 apartments|Балкон · 78 апартаментов
Studio apartments at Solvyn City Phase 2 offer 34.6 m², with a spacious bedroom and seating area, one bathroom and a balcony. This residence type comprises 78 apartments.|Апартаменты-студии площадью 34,6 м² в Solvyn City Phase 2: просторная спальня с зоной отдыха, ванная комната и балкон. Количество апартаментов этого типа — 78.
11.7 m² private pool · 1 villa|Частный бассейн 11,7 м² · 1 вилла
A 121 m² three-bedroom villa at Solvyn City Phase 2, arranged over two floors. The layout includes a kitchen-living room, three bathrooms plus a guest WC, and a terrace with a relaxation area. An 11.7 m² private pool and an ocean view complete the residence. This residence type comprises 1 villa.|Вилла площадью 121 м² с 3 спальнями в Solvyn City Phase 2, расположенная на 2 этажах. Кухня-гостиная, 3 ванные комнаты и гостевой санузел, терраса с зоной отдыха, частный бассейн площадью 11,7 м² и вид на океан. Количество вилл этого типа — 1.
3 + guest WC|3 + гостевой санузел
12 m² lower + 12.2 m² upper|12 м² на нижнем уровне + 12,2 м² на верхнем
Two private pools · 7 villas|Два частных бассейна · 7 вилл
167 m² · 3 bedrooms · Two private pools|167 м² · 3 спальни · Два частных бассейна
A 167 m² three-bedroom villa at Solvyn City Phase 2, arranged over three floors. The layout includes a kitchen-living room, three bathrooms plus a guest WC, a balcony and a terrace with a relaxation area. Two private pools provide 12 m² on the lower level and 12.2 m² on the upper level, with an ocean view. This residence type comprises 7 villas.|Вилла площадью 167 м² с 3 спальнями в Solvyn City Phase 2, расположенная на 3 этажах. Кухня-гостиная, 3 ванные комнаты и гостевой санузел, балкон, терраса с зоной отдыха, бассейн на нижнем уровне площадью 12 м², бассейн на верхнем уровне площадью 12,2 м² и вид на океан. Количество вилл этого типа — 7.
12.4 m² · upper level|12,4 м² · верхний уровень
12.4 m² private pool · 31 villas|Частный бассейн 12,4 м² · 31 вилла
A 109 m² two-bedroom villa at Solvyn City Phase 2, arranged over two floors. The layout includes a kitchen-living room, two bathrooms plus a guest WC, and a terrace with a relaxation area. A 12.4 m² private pool sits on the upper level, with an ocean view. This residence type comprises 31 villas.|Вилла площадью 109 м² с 2 спальнями в Solvyn City Phase 2, расположенная на 2 этажах. Кухня-гостиная, 2 ванные комнаты и гостевой санузел, терраса с зоной отдыха, бассейн на верхнем уровне площадью 12,4 м² и вид на океан. Количество вилл этого типа — 31.
One-bedroom villa|Вилла с одной спальней
47.7 m² · 1 bedroom|47,7 м² · 1 спальня
7.5 m² private pool · 14 villas|Частный бассейн 7,5 м² · 14 вилл
A 47.7 m² one-bedroom villa at Solvyn City Phase 2, with a spacious bedroom, one bathroom and a kitchen-living room. A terrace with a relaxation area, a 7.5 m² private pool and an ocean view complete the layout. This residence type comprises 14 villas.|Вилла площадью 47,7 м² с одной спальней в Solvyn City Phase 2. Просторная спальня, ванная комната, кухня-гостиная, терраса с зоной отдыха, частный бассейн площадью 7,5 м² и вид на океан. Количество вилл этого типа — 14.
2-bedroom villa · Type 1|Вилла с 2 спальнями · Тип 1
11.7 m² private pool · 11 villas|Частный бассейн 11,7 м² · 11 вилл
2 + guest WC|2 + гостевой санузел
11.7 m² · lower level|11,7 м² · нижний уровень
A 104 m² two-bedroom villa at Solvyn City Phase 2, arranged over two floors. The layout includes two bathrooms plus a guest WC, a kitchen-living room and a terrace with a relaxation area. An 11.7 m² private pool sits on the lower level, with an ocean view. This residence type comprises 11 villas.|Вилла площадью 104 м² с 2 спальнями в Solvyn City Phase 2, расположенная на 2 этажах. Включает 2 ванные комнаты и гостевой санузел, кухню-гостиную, террасу с зоной отдыха, бассейн на нижнем уровне площадью 11,7 м² и вид на океан. Количество вилл этого типа — 11.
Villa type 1 at Solvyn City Phase 1 offers 101 m², 2 bedrooms, 3 bathrooms and 2 floors. The layout includes a kitchen-living room, BBQ area, ocean view and a 15 m² private pool. This residence type comprises 36 villas.|Villa type 1 в Solvyn City Phase 1: 101 м², 2 спальни, 3 ванные комнаты и 2 этажа. Кухня-гостиная, зона BBQ, вид на океан и частный бассейн площадью 15 м². Количество вилл этого типа — 36.
15 m² private pool · 36 villas|Частный бассейн 15 м² · 36 вилл
Villa type 2 at Solvyn City Phase 1 offers 129 m², 3 bedrooms, 4 bathrooms and 2 floors. The layout includes a kitchen-living room, BBQ area, ocean view and a 15 m² private pool. This residence type comprises 20 villas.|Villa type 2 в Solvyn City Phase 1: 129 м², 3 спальни, 4 ванные комнаты и 2 этажа. Кухня-гостиная, зона BBQ, вид на океан и частный бассейн площадью 15 м². Количество вилл этого типа — 20.
Villa type 3 at Solvyn City Phase 1 offers 234 m² including rooftop, 3 bedrooms, 4 bathrooms and 3 floors. The layout includes a kitchen-living room, BBQ area, ocean view and a 18 m² private pool. This residence type comprises 8 villas.|Villa type 3 в Solvyn City Phase 1: 234 м² с руфтопом, 3 спальни, 4 ванные комнаты и 3 этажа. Кухня-гостиная, зона BBQ, вид на океан и частный бассейн площадью 18 м². Количество вилл этого типа — 8.
15 m² private pool · 20 villas|Частный бассейн 15 м² · 20 вилл
18 m² private pool · 8 villas|Частный бассейн 18 м² · 8 вилл
234 m² including rooftop · 3 bedrooms|234 м² с руфтопом · 3 спальни
18 m² private pool|Частный бассейн 18 м²
Communal pool · Balcony · Parking · Ocean view|Общий бассейн · Балкон · Парковка · Вид на океан
A 40 m² apartment at Solvyn City Phase 1 with one bedroom, one bathroom and a balcony. The residence includes parking, access to a shared pool and an ocean view.|Апартаменты площадью 40 м² в Solvyn City Phase 1: 1 спальня, 1 ванная комната и балкон. Включены парковка, доступ к общему бассейну и вид на океан.
A 50 m² apartment at Solvyn City Phase 1 with one bedroom, one bathroom and a balcony. The residence includes parking, access to a shared pool and an ocean view.|Апартаменты площадью 50 м² в Solvyn City Phase 1: 1 спальня, 1 ванная комната и балкон. Включены парковка, доступ к общему бассейну и вид на океан.
40 m² · 1 bedroom · Communal pool|40 м² · 1 спальня · Общий бассейн
50 m² · 1 bedroom · Communal pool|50 м² · 1 спальня · Общий бассейн
Space to unwind.|Пространство для отдыха.
Room to feel at home.|Место, где вы дома.
Explore thoughtfully arranged apartments with space for the everyday moments that matter.|Откройте для себя продуманные апартаменты, где есть место для важных повседневных моментов.
Solvyn City Phase 1.|Solvyn City Phase 1.
A more private retreat.|Ваше личное уединение.
Discover private villas and apartments, with room to relax and settle into life in Bali.|Откройте для себя частные виллы и апартаменты для отдыха и неспешной жизни на Бали.
Solvyn City.|Solvyn City.
A place to connect.|Место для общения.
Explore a collection of residences where contemporary spaces meet the rhythm of island life.|Откройте коллекцию резиденций, где современные пространства сочетаются с ритмом островной жизни.
02 / DISCOVER SOLVYN CITY|02 / ОТКРОЙТЕ SOLVYN CITY
Pool & social spaces|Бассейн и зоны отдыха
Solvyn City gallery|Галерея Solvyn City
Previous Solvyn City image|Предыдущее изображение Solvyn City
Next Solvyn City image|Следующее изображение Solvyn City
Solvyn Restaurant|Solvyn Restaurant
Solvyn Cafe|Solvyn Cafe
Solvyn Hall|Solvyn Hall
Solvyn Spa|Solvyn Spa
Solvyn River Surf|Solvyn River Surf
Good food.|Хорошая еда.
Time well spent.|Время с удовольствием.
A place to gather around the table, share flavours and enjoy unhurried moments together.|Место, где можно собраться за столом, открыть новые вкусы и провести время вместе без спешки.
Your daily pause.|Ваша ежедневная пауза.
An easy island rhythm.|Неспешный ритм острова.
From a morning coffee to an afternoon conversation, a welcoming space for the little rituals of everyday life.|От утреннего кофе до дневных бесед — уютное пространство для маленьких повседневных ритуалов.
Come together.|Собирайтесь вместе.
Make it memorable.|Создавайте воспоминания.
A dedicated setting for celebrations, gatherings and the occasions that bring people closer.|Особое пространство для праздников, встреч и событий, которые сближают людей.
Slow down.|Замедлитесь.
Return to yourself.|Вернитесь к себе.
A quieter side of Solvyn City, with space to step away from the everyday and make time for wellbeing.|Тихая сторона Solvyn City, где можно отвлечься от повседневных забот и уделить время себе.
Find your flow.|Найдите свой ритм.
Feel the energy.|Почувствуйте энергию.
A signature surf experience at the heart of the project, bringing movement and a new rhythm to island life.|Особое пространство для сёрфинга в центре проекта, наполняющее островную жизнь движением и новым ритмом.
Villas and apartments in Bukit. Surf, wellness and spaces to come together.|Виллы и апартаменты в Буките. Сёрфинг, забота о себе и пространства для встреч.
Apartment|Апартаменты
Villa 101|Вилла 101
Explore more|Подробнее
Explore apartment|Посмотреть апартаменты
Explore villa|Посмотреть виллу
Explore Solvyn City Apartment|Посмотреть апартаменты Solvyn City
Explore Solvyn City Villa 101|Посмотреть виллу 101 в Solvyn City
SOLVYN CITY / RESIDENCES|SOLVYN CITY / РЕЗИДЕНЦИИ
40 m² · 1 bedroom · Communal pool|40 м² · 1 спальня · Общий бассейн
101 m² · 2 bedrooms · Private pool|101 м² · 2 спальни · Частный бассейн
A one-bedroom apartment at Solvyn City, with space for everyday living.|Апартаменты с одной спальней в Solvyn City и пространством для повседневной жизни.
A two-bedroom villa at Solvyn City, with a private pool and room to unwind.|Вилла с двумя спальнями в Solvyn City, частным бассейном и пространством для отдыха.
Solvyn City Phase 1|Solvyn City — Фаза 1
Solvyn City Phase 2|Solvyn City — Фаза 2
Explore Solvyn City Phase 1|Подробнее о Solvyn City — Фаза 1
Explore Solvyn City Phase 2|Подробнее о Solvyn City — Фаза 2
Phase 1.|Фаза 1.
Phase 2.|Фаза 2.
SOLVYN CITY / BUKIT, BALI|SOLVYN CITY / БУКИТ, БАЛИ
Three villa layouts. One place to call home.|Три планировки вилл. Одно место, которое можно назвать домом.
Apartments, penthouses and villas. Find your space in Solvyn City.|Апартаменты, пентхаусы и виллы. Найдите своё пространство в Solvyn City.
All projects ↗|Все проекты ↗
3 residence types|3 типа резиденций
5 residence types|5 типов резиденций
Apartment + penthouse|Апартаменты + пентхаус
Apartments & penthouses|Апартаменты и пентхаусы
March 2027|Март 2027
Villa 104|Вилла 104
Villa 109|Вилла 109
Villa 121|Вилла 121
Villa 129|Вилла 129
Villa 153|Вилла 153
Villa 167|Вилла 167
Previous banner|Предыдущий баннер
Next banner|Следующий баннер
Pause banner slideshow|Приостановить показ баннеров
Play banner slideshow|Продолжить показ баннеров

OUR RESIDENCES|НАШИ РЕЗИДЕНЦИИ
Space to belong.|Место, где вы дома.
Room to live.|Пространство для жизни.
Discover residences, private villas and apartment layouts in Bali.|Откройте резиденции, частные виллы и планировки апартаментов на Бали.
Explore residences|Смотреть резиденции
View residence|Подробнее
Villas|Виллы
Apartments & rooms|Апартаменты и комнаты
Residence categories|Категории резиденций
01 / RESIDENCES|01 / РЕЗИДЕНЦИИ
Our collections.|Наши коллекции.
02 / VILLAS|02 / ВИЛЛЫ
YOUR PRIVATE RETREAT|ВАШЕ ЛИЧНОЕ ПРОСТРАНСТВО
A place of your own.|Ваш собственный дом.
03 / APARTMENTS & ROOMS|03 / АПАРТАМЕНТЫ И КОМНАТЫ
CONSIDERED EVERYDAY LIVING|ПРОДУМАННАЯ ПОВСЕДНЕВНОСТЬ
Room for the everyday.|Пространство для каждого дня.
Explore one-bedroom apartment layouts within our residence collections.|Изучите планировки апартаментов с одной спальней в наших резиденциях.

OUR PROJECTS|НАШИ ПРОЕКТЫ
Explore project|Подробнее о проекте
Discover all projects|Все проекты
Previous project|Предыдущий проект
Next project|Следующий проект
Pause project carousel|Приостановить показ проектов
Play project carousel|Продолжить показ проектов
01 / PROJECT COLLECTION|01 / КОЛЛЕКЦИЯ ПРОЕКТОВ
ROOTED IN BALI|ВДОХНОВЛЕНО БАЛИ
Distinct places.|Разные места.
A shared intention.|Общий замысел.
Explore our collection of residences in Bali.|Откройте для себя наши резиденции на Бали.
Find the setting for your next chapter.|Найдите место для новой главы вашей жизни.
A private retreat in Bukit.|Частное пространство для отдыха в Буките.
Apartments and villas for contemporary island living.|Апартаменты и виллы для современной жизни на острове.

02 / OUR TEAM|02 / НАША КОМАНДА
PEOPLE BEHIND THE PLACES|ЛЮДИ, СОЗДАЮЩИЕ ПРОСТРАНСТВА
A shared vision.|Общее видение.
A personal commitment.|Личная ответственность.
Meet the people behind Sansara Development.|Знакомьтесь с командой Sansara Development.
Team profiles will be introduced here soon.|Скоро здесь появятся профили участников команды.
Portrait coming soon|Фото скоро появится
Team member name|Имя участника команды
Role to be announced|Должность будет указана позже
Let’s start a conversation.|Давайте начнём разговор.

04 / FEATURES & AMENITIES|04 / ОСОБЕННОСТИ И ИНФРАСТРУКТУРА
More to experience.|Больше впечатлений.
More to enjoy.|Больше удовольствия.
Distinctive amenities and thoughtful design, bringing more to life at Solvyn City.|Уникальная инфраструктура и продуманный дизайн для насыщенной жизни в Solvyn City.
Project features and amenities|Особенности и инфраструктура проекта
Surf wave|Волна для сёрфинга
Cinema|Кинотеатр
Dedicated event venue|Площадка для мероприятий
A signature surf experience, bringing energy and activity into the project. A distinctive amenity for residents and guests, with operating details to be confirmed.|Особое пространство для сёрфинга, наполняющее проект энергией и движением. Уникальная возможность для жителей и гостей; режим работы будет уточнён.
A dedicated space for film nights and shared entertainment, adding another way to enjoy time within the project. Seating and programming details will follow.|Место для кинопросмотров и совместного отдыха — ещё один способ приятно провести время в проекте. Подробности о местах и программе появятся позже.
A setting for celebrations, private gatherings and memorable occasions. The venue adds a social dimension to the project, with capacity and booking arrangements to be confirmed.|Пространство для праздников, частных встреч и памятных событий. Вместимость и условия бронирования будут уточнены.
Contact us|Связаться с нами
Home|Главная
About|О нас
Projects|Проекты
Residences|Резиденции
Construction|Строительство
FAQ|Вопросы
Let’s talk|Связаться
Menu|Меню
Close|Закрыть
Language|Язык
Skip to content|Перейти к содержимому
Book a consultation ↗|Записаться на консультацию ↗
ROOTED IN BALI. DESIGNED TO LAST.|СОЗДАНО НА БАЛИ. НА ДОЛГИЕ ГОДЫ.
Architecture for|Архитектура для
 a life|жизни
well lived.|в гармонии.
Explore our projects|Посмотреть проекты
BALI, INDONESIA|БАЛИ, ИНДОНЕЗИЯ
01 / THE SANSARA WAY|01 / ФИЛОСОФИЯ SANSARA
ARCHITECTURE. LIFE. LONGEVITY.|АРХИТЕКТУРА. ЖИЗНЬ. ДОЛГОВЕЧНОСТЬ.
Not just a place.|Больше, чем место.
A way of living.|Образ жизни.
Thoughtful homes, natural materials, and space for the everyday. Designed around the way Bali is lived.|Продуманные дома, натуральные материалы и пространство для повседневной жизни. В ритме Бали.
Years of experience.|Лет опыта.
A lasting approach to building.|Строим с заботой о будущем.
Discover our projects|Наши проекты
02 / OUR FLAGSHIP|02 / ФЛАГМАНСКИЙ ПРОЕКТ
PROJECT DATE ·|ДАТА ПРОЕКТА ·
MARCH 2028|МАРТ 2028
A new expression of|Новый взгляд на
contemporary island living.|современную жизнь на острове.
Villas and apartments in Bukit.|Виллы и апартаменты на Буките.
Surf, wellness and spaces to come together.|Сёрфинг, велнес и пространства для общения.
VILLAS · APARTMENTS · SURF · WELLNESS|ВИЛЛЫ · АПАРТАМЕНТЫ · СЁРФИНГ · ВЕЛНЕС
Explore Solvyn City|Узнать о Solvyn City
03 / SELECTED RESIDENCES|03 / ИЗБРАННЫЕ РЕЗИДЕНЦИИ
FIND YOUR PLACE|НАЙДИТЕ СВОЙ ДОМ
Different spaces.|Разные пространства.
The same intention.|Единый замысел.
A private retreat or a connected community.|Уединённый дом или жизнь в сообществе.
Discover a place that feels like you.|Найдите место, близкое вам.
BUKIT, BALI|БУКИТ, БАЛИ
40–234 m² · 1–3 bedrooms · Apartments & villas|40–234 м² · 1–3 спальни · Апартаменты и виллы
34.6–165 m² · 1–3 bedrooms · Apartments & villas|34,6–165 м² · 1–3 спальни · Апартаменты и виллы
PROJECT DATE|ДАТА ПРОЕКТА
June 2028|Июнь 2028
March 2028|Март 2028
Explore residence|Подробнее о резиденции
SOLVYN CITY / KUTUH, BALI|SOLVYN CITY / КУТУХ, БАЛИ
An island of|Остров
possibilities.|возможностей.
Explore the places around your future home.|Откройте места рядом с вашим будущим домом.
Select a destination to discover its distance from Solvyn City.|Выберите место, чтобы узнать расстояние от Solvyn City.
DISTANCES FROM SOLVYN CITY|РАССТОЯНИЯ ОТ SOLVYN CITY
Approximate straight-line distances between map pins, not driving distances. Open directions for routes and current travel times.|Указаны примерные расстояния по прямой между точками на карте, а не по дороге. Откройте маршрут, чтобы узнать актуальное время в пути.
View Solvyn City|Solvyn City на карте
Loading the map…|Загрузка карты…
Show all locations ↗|Все места на карте ↗
Pandawa Beach|Пляж Пандава
Ocean & coast|Океан и побережье
GWK Cultural Park|Культурный парк GWK
Culture|Культура
Uluwatu Temple|Храм Улувату
Culture & sunset|Культура и закаты
Ngurah Rai Airport|Аэропорт Нгурах-Рай
International connections|Международные перелёты
Driving directions ↗|Автомобильный маршрут ↗
04 / BENEATH THE SURFACE|04 / ЧТО СКРЫТО ВНУТРИ
THOUGHTFUL BY DESIGN|ПРОДУМАНО ДО ДЕТАЛЕЙ
Technology built|Технологии, созданные
for Bali.|для Бали.
From the frame to the finishing details, built around Bali’s climate and everyday comfort.|От каркаса до отделки — с учётом климата Бали и повседневного комфорта.
Hover or tap a card to see what’s inside.|Наведите курсор или коснитесь карточки, чтобы узнать больше.
Lightweight steel frame|Лёгкий стальной каркас
Cold-formed steel framing provides the structure of each home. Explore how the frame, connections and layout come together in the design.|Каркас из холодногнутых стальных профилей составляет основу каждого дома. Узнайте, как каркас, соединения и планировка объединяются в проекте.
View projects|Смотреть проекты
Climate performance|Адаптация к климату
Materials and thermal profiles are selected for Bali’s tropical climate. The design considers shade, airflow and everyday comfort throughout the home.|Материалы и термопрофили подобраны для тропического климата Бали. При проектировании учитываются затенение, движение воздуха и повседневный комфорт в доме.
Acoustic comfort|Акустический комфорт
Layered wall assemblies help reduce sound transmission between spaces. Wall build-ups, finishes and room layout all contribute to a quieter living environment.|Многослойные стены помогают снизить передачу звука между помещениями. Конструкция стен, отделка и планировка вместе создают более спокойную обстановку.
Corrosion protection|Защита от коррозии
Galvanised coatings help protect the steel frame. Protective detailing and ongoing maintenance are considered alongside the materials selected for the home.|Оцинкованное покрытие помогает защитить стальной каркас. Наряду с выбором материалов учитываются защитные решения и последующее обслуживание дома.
Seismic consideration|Учёт сейсмики
Qualified engineers assess the structural design for each site. Foundations, framing and connections are considered together, with requirements specific to the project.|Квалифицированные инженеры оценивают конструктивные решения для каждого участка. Фундамент, каркас и соединения рассматриваются вместе с учётом требований конкретного проекта.
Flip it|Переверните
05 / THE MAKING OF A PLACE|05 / КАК СОЗДАЁТСЯ ДОМ
CLARITY AT EVERY STAGE|ЯСНОСТЬ НА КАЖДОМ ЭТАПЕ
From concept|От замысла
 to reality.|к воплощению.
Already in Bali? Arrange a personal tour of Solvyn City Phase 1 to see the project and discuss the latest construction updates with the team.|Уже на Бали? Запишитесь на личную экскурсию в Solvyn City Phase 1, чтобы увидеть проект и обсудить ход строительства с командой.
Arrange a Phase 1 tour|Посетить Solvyn City Phase 1
Planning|Планирование
Plans, proportions and materials.|Планы, пропорции и материалы.
Foundation|Фундамент
Preparing a solid base.|Создание прочной основы.
Structure|Каркас
The framework takes shape.|Дом обретает форму.
Interiors|Интерьеры
Bringing the details together.|Детали складываются в целое.
Completion|Завершение
A place ready for living.|Пространство, готовое к жизни.
From the first plans to the final details. Explore each stage above, or contact our team for the latest project updates. Images illustrate the process.|От первых планов до последних деталей. Изучите этапы выше или свяжитесь с командой, чтобы узнать новости проекта. Изображения иллюстрируют процесс.
06 / A LITTLE MORE CLARITY|06 / ОТВЕТЫ НА ВОПРОСЫ
Your questions,|Ваши вопросы —
considered.|наши ответы.
Who will be responsible for property management and maintenance?|Кто будет отвечать за управление и обслуживание недвижимости?
Contact our team for the proposed management provider, maintenance services and fees for your chosen residence. These arrangements will be set out in the project’s management agreement.|Уточните у нашей команды предполагаемую управляющую компанию, перечень услуг и стоимость обслуживания выбранной резиденции. Условия будут закреплены в договоре управления.
What is the ownership structure?|Какая предусмотрена форма владения?
Ask our team for the ownership structure and contract terms available for your chosen residence. The project documents will confirm the tenure, duration and any renewal provisions.|Уточните у нашей команды доступную форму владения и условия договора для выбранной резиденции. Документы проекта определяют вид права, срок и условия продления.
What infrastructure and facilities are included in the project?|Какая инфраструктура предусмотрена в проекте?
Solvyn City’s published plans include villas and apartments, a surf wave, a wellness cluster and event spaces. Facilities and delivery stages should be confirmed against the current project specification.|Опубликованные планы Solvyn City включают виллы и апартаменты, волну для сёрфинга, велнес-кластер и площадки для мероприятий. Состав инфраструктуры и сроки её готовности уточняются в актуальной спецификации проекта.
How far is the project from the ocean?|Как далеко проект находится от океана?
The published Solvyn City location guide indicates approximately two minutes from the ocean. Explore the map above for the distance to Pandawa Beach and open driving directions to check your route. Travel times vary with traffic and access.|В опубликованном описании Solvyn City указано около двух минут до океана. На карте выше можно узнать расстояние до пляжа Пандава и открыть автомобильный маршрут. Время в пути зависит от дорожной ситуации и подъезда.
Can owners live in their residences themselves, or are they intended exclusively for rental?|Могут ли владельцы жить в резиденциях сами или они предназначены только для аренды?
Please discuss your intended use with our team. Personal stays, rental participation and any occupancy conditions should be confirmed in the agreement for your chosen residence.|Обсудите с нашей командой, как вы планируете использовать резиденцию. Личное проживание, участие в аренде и условия размещения следует подтвердить в договоре.
What documents are required to purchase a property?|Какие документы необходимы для приобретения недвижимости?
Request a purchase-document checklist from our team for your circumstances and chosen ownership structure. The project’s notary or legal adviser can confirm the exact requirements before you proceed.|Запросите у нашей команды перечень документов с учётом ваших обстоятельств и выбранной формы владения. Нотариус или юридический консультант проекта уточнит требования до начала оформления.
YOUR NEXT CHAPTER STARTS HERE|ВАША НОВАЯ ГЛАВА НАЧИНАЕТСЯ ЗДЕСЬ
Let’s create|Давайте создадим
something|нечто
lasting.|долговечное.
Book a consultation|Записаться на консультацию
Considered architecture.|Продуманная архитектура.
A life well lived.|Жизнь в гармонии.
EXPLORE|УЗНАТЬ БОЛЬШЕ
Our philosophy|Наша философия
Our projects|Наши проекты
LET’S CONNECT|СВЯЖИТЕСЬ С НАМИ
Request the catalogue ↗|Запросить каталог ↗
Bali, Indonesia|Бали, Индонезия
FOLLOW OUR STORY|СЛЕДИТЕ ЗА НАМИ
Back to top ↑|Наверх ↑
Design preview · Concept imagery|Предварительный дизайн · Концептуальные изображения
Privacy|Конфиденциальность
LET’S BEGIN A CONVERSATION|ДАВАЙТЕ ПОЗНАКОМИМСЯ
Your place.|Ваш дом.
Your possibilities.|Ваши возможности.
Tell us a little about what you have in mind.|Расскажите немного о ваших планах.
Your name|Ваше имя
Email address|Электронная почта
I’m interested in|Меня интересует
Request the catalogue|Запрос каталога
Solvyn City presentation|Презентация Solvyn City
Solvyn City Phase 1 tour|Экскурсия в Solvyn City Phase 1
A general conversation|Общие вопросы
Anything else?|Хотите что-то добавить?
(optional)|(необязательно)
Prepare your enquiry, then open a WhatsApp draft for +62 822 3537 2572. You review and send it in WhatsApp. You can also download a copy.|Подготовьте запрос и откройте черновик в WhatsApp на номер +62 822 3537 2572. Вы сможете проверить и отправить его самостоятельно или скачать копию.
Prepare my enquiry|Подготовить запрос
Continue in WhatsApp ↗|Продолжить в WhatsApp ↗
Download your enquiry ↓|Скачать запрос ↓
Construction stage|Этап строительства
Illustrative construction rendering.|Иллюстрация этапа строительства.
ABOUT SANSARA DEVELOPMENT|О SANSARA DEVELOPMENT
A lasting intention.|С заботой о будущем.
Contemporary homes in Bali, shaped by thoughtful design, everyday comfort and a longer perspective.|Современные дома на Бали: продуманный дизайн, повседневный комфорт и взгляд в будущее.
Our commitment|Наши обязательства
A LONGER PERSPECTIVE|ВЗГЛЯД В БУДУЩЕЕ
Designed as an|Создано как
architectural legacy.|архитектурное наследие.
The details you notice. The comfort you feel. The quality that stays. We believe good architecture brings all three together — and becomes more meaningful with time.|Детали, которые вы замечаете. Комфорт, который чувствуете. Качество, которое остаётся. Хорошая архитектура объединяет всё это и со временем становится ещё ценнее.
LIGHT, MATERIAL, AND A SENSE OF PLACE|СВЕТ, МАТЕРИАЛЫ И ХАРАКТЕР МЕСТА
FIG. 01|ИЛЛ. 01
01 / OUR COMMITMENT|01 / НАШИ ОБЯЗАТЕЛЬСТВА
CONFIDENCE, CONSIDERED.|ПРОДУМАННАЯ УВЕРЕННОСТЬ.
Built on clarity.|Основано на ясности.
Grounded|Построено
in trust.|на доверии.
A home is a long-term decision.|Выбор дома — решение на годы.
Here’s what stands behind ours.|Вот что стоит за нашими проектами.
OUR PUBLISHED COMMITMENT|НАШИ ЗАЯВЛЕННЫЕ ОБЯЗАТЕЛЬСТВА
YEARS OF|ЛЕТ
STRUCTURAL WARRANTY|ГАРАНТИИ НА КОНСТРУКЦИИ
Made for today.|Создано для настоящего.
Backed for tomorrow.|С уверенностью в будущем.
Ask for the warranty scope and terms|Уточните объём и условия гарантии
for your chosen residence.|для выбранной резиденции.
THE DETAILS THAT MATTER|ВАЖНЫЕ ДЕТАЛИ
Protected from day one.|Под защитой с первого дня.
Our published commitment includes property insurance during construction and after completion, alongside a 25-year structural warranty.|Наши заявленные обязательства включают страхование недвижимости во время строительства и после завершения, а также 25-летнюю гарантию на конструкции.
Coverage and exclusions follow the project’s policy and warranty terms.|Покрытие и исключения определяются страховым полисом и условиями гарантии проекта.
Clarity at every step.|Ясность на каждом этапе.
Our published pre-construction requirements cover PBG approvals, due diligence, paid land and land-use suitability for daily rental.|Наши заявленные требования до начала строительства включают разрешения PBG, юридическую проверку, оплату земли и соответствие её назначения посуточной аренде.
Review the documentation for your chosen project with the team.|Ознакомьтесь с документами выбранного проекта вместе с нашей командой.
A longer perspective.|Взгляд в будущее.
Thoughtful layouts, material quality and everyday usability shape our approach. We consider how a home will be lived in, cared for and enjoyed over time.|Продуманные планировки, качество материалов и удобство определяют наш подход. Мы учитываем, как в доме будут жить, заботиться о нём и наслаждаться им долгие годы.
Considered architecture. Lasting intention.|Продуманная архитектура. С заботой о будущем.
Good questions deserve clear answers.|На важные вопросы нужны ясные ответы.
Talk to our team|Связаться с командой
Full name|Имя и фамилия
Your plans, questions, or preferred visit dates|Ваши планы, вопросы или удобные даты визита
Your enquiry is ready. Continue in WhatsApp to review and send it, or download a copy. Nothing has been sent yet.|Ваш запрос готов. Перейдите в WhatsApp, чтобы проверить и отправить его, или скачайте копию. Пока ничего не отправлено.
Open contact options|Открыть способы связи
Close contact options|Закрыть способы связи
Scroll to discover|Прокрутить дальше
Close consultation|Закрыть консультацию
Close project details|Закрыть сведения о проекте
Close image|Закрыть изображение
Flip card back|Перевернуть карточку обратно
`.trim().split('\n').map(line=>line.split('|').map(s=>s.trim())));

Object.assign(russianText, {
  'BENEATH THE SURFACE': 'ЧТО СКРЫТО ВНУТРИ',
  'Technical details.': 'Технические детали.',
  'OUR FLAGSHIP / BUKIT, BALI': 'ФЛАГМАНСКИЙ ПРОЕКТ / БУКИТ, БАЛИ',
  'RESIDENCES / BUKIT, BALI': 'РЕЗИДЕНЦИИ / БУКИТ, БАЛИ',
  'A premium villa and apartment development with a planned surf wave, a wellness cluster focused on biohacking and preventive health, and an event space for weddings and gatherings.': 'Премиальный комплекс вилл и апартаментов с запланированной волной для сёрфинга, велнес-кластером с акцентом на биохакинг и профилактику здоровья, а также пространством для свадеб и встреч.',
  'Apartments and two- to three-bedroom villas in Bukit, with published layouts from 40 to 234 m². Visit the project in person with the Sansara Development team.': 'Апартаменты и виллы с двумя и тремя спальнями на Буките. Опубликованные планировки — от 40 до 234 м². Посетите проект вместе с командой Sansara Development.',
  'Published location guide · 2 minutes from the ocean': 'По опубликованным данным · 2 минуты до океана',
  'Published location guide · 20 minutes from Ngurah Rai Airport': 'По опубликованным данным · 20 минут от аэропорта Нгурах-Рай',
  'Travel times are indicative and vary with route and traffic.': 'Время в пути ориентировочное и зависит от маршрута и дорожной ситуации.',
  'Specifications are from the company website. Confirm current availability, pricing and final plans with the team. The image is a concept illustration, not an approved project rendering.': 'Характеристики взяты с сайта компании. Уточните актуальное наличие, цены и окончательные планы у команды. Изображение — концептуальная иллюстрация, а не утверждённая визуализация проекта.',
  'Apartments · Balcony, shared pool and parking': 'Апартаменты · Балкон, общий бассейн и парковка',
  'Villas · BBQ area and 15 m² private pools': 'Виллы · Зона барбекю и частные бассейны 15 м²',
  'Personal tours · Available by arrangement': 'Личные экскурсии · По предварительной записи',
  'Floor area': 'Площадь', 'Bedrooms': 'Спальни', 'Floors': 'Этажи', 'Bathrooms': 'Ванные комнаты', 'Pool': 'Бассейн',
  'Ask the team': 'Уточните у команды', 'Communal pool': 'Общий бассейн',
  'Enquire about this residence': 'Узнать об этой резиденции',
  'Request the project presentation ↗': 'Запросить презентацию проекта ↗',
  'Select a residence type': 'Выберите тип резиденции',
  'Apartments': 'Апартаменты',
  'Villa type 1': 'Вилла, тип 1', 'Villa type 2': 'Вилла, тип 2', 'Villa type 3': 'Вилла, тип 3',
  '1-bedroom apartment': 'Апартаменты с 1 спальней', '1-bedroom villa': 'Вилла с 1 спальней', '2-bedroom villa': 'Вилла с 2 спальнями',
  '3-bedroom villa · Type 1': 'Вилла с 3 спальнями · Тип 1', '3-bedroom villa · Type 2': 'Вилла с 3 спальнями · Тип 2',
  'Our construction approach uses lightweight steel framing (LGSF), formed from cold-formed steel profiles with stiffening ribs.': 'Мы используем лёгкий стальной каркас (LGSF) из холодногнутых стальных профилей с рёбрами жёсткости.',
  'Steel framing and a perforated thermal profile are selected to address decay, termite exposure, condensation and thermal bridging in Bali’s climate.': 'Стальной каркас и перфорированный термопрофиль подобраны с учётом гниения, воздействия термитов, конденсата и мостиков холода в климате Бали.',
  'Our published specification lists an Rw sound-insulation rating of 62–68 dB for assemblies using ECO concrete and gypsum fibreboard. Ask for the assembly details and test documentation.': 'В опубликованной спецификации указан индекс звукоизоляции Rw 62–68 дБ для конструкций с ECO-бетоном и гипсоволокнистыми плитами. Запросите состав конструкций и протоколы испытаний.',
  'The published system uses galvanised steel with 275–350 g/m² of zinc coating, with an optional zinc-aluminium-magnesium (ZAM) composition.': 'В опубликованной системе применяется оцинкованная сталь с покрытием 275–350 г/м²; возможен цинк-алюминий-магниевый состав (ZAM).',
  'Site-specific structural design must be assessed by qualified engineers. Project documentation provides the applicable engineering details.': 'Конструктивные решения для конкретного участка должны оценивать квалифицированные инженеры. Применимые технические детали указаны в документации проекта.',
  'Zoom in': 'Приблизить', 'Zoom out': 'Отдалить', 'Close popup': 'Закрыть подсказку',
  'Contact us on WhatsApp': 'Связаться в WhatsApp', 'Contact us on Telegram': 'Связаться в Telegram'
});

let selectedLanguage = 'en';
try { selectedLanguage = localStorage.getItem('sansara-language') === 'ru' ? 'ru' : 'en'; } catch {}
const originalText = new WeakMap();
const originalAttributes = new WeakMap();
const translate = value => {
  if (russianText[value]) return russianText[value];
  if (/^\d+(\.\d+)? km$/.test(value)) return value.replace(' km',' км');
  if (value.includes(' km straight-line from Solvyn City')) return value.replace(' km straight-line from Solvyn City',' км по прямой от Solvyn City');
  if (value.endsWith(': show details')) return (russianText[value.slice(0,-14)] || value.slice(0,-14)) + ': подробнее';
  return value;
};
// Preserve option values used by enquiry logic before translating visible labels.
document.querySelectorAll('option:not([value])').forEach(option=>option.value=option.textContent);
const languageObserver = new MutationObserver(()=>applyLanguage());
function applyLanguage() {
  languageObserver.disconnect();
  document.querySelectorAll('option:not([value])').forEach(option=>option.value=option.textContent);
  const walker = document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node=walker.currentNode;
    if (node.parentElement.closest('script,style,.language-control,.leaflet-control-attribution')) continue;
    const current=node.textContent;
    const saved=originalText.get(node);
    const original=saved && (current===saved || current.trim()===translate(saved.trim())) ? saved : current;
    originalText.set(node,original);
    const translated=selectedLanguage==='ru' ? original.replace(original.trim(),translate(original.trim())) : original;
    if(current!==translated) node.textContent=translated;
  }
  document.querySelectorAll('[aria-label],[placeholder]').forEach(element=>{
    let values=originalAttributes.get(element)||{};
    for(const name of ['aria-label','placeholder']) {
      if(!element.hasAttribute(name)) continue;
      const current=element.getAttribute(name);
      if(!values[name] || (current!==values[name] && current!==translate(values[name]))) values[name]=current;
      const next=selectedLanguage==='ru'?translate(values[name]):values[name];
      if(current!==next) element.setAttribute(name,next);
    }
    originalAttributes.set(element,values);
  });
  document.documentElement.lang=selectedLanguage;
  document.querySelectorAll('.language-current').forEach(label=>{if(label.textContent!==selectedLanguage.toUpperCase()) label.textContent=selectedLanguage.toUpperCase();});
  document.querySelectorAll('[data-language]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.language===selectedLanguage)));
  document.title=document.body.dataset.phase ? (selectedLanguage==='ru'?'Solvyn City — Фаза ':'Solvyn City Phase ')+document.body.dataset.phase+' — Sansara Development' : document.body.classList.contains('residences-page') ? (selectedLanguage==='ru'?'Резиденции — Sansara Development':'Residences — Sansara Development') : document.body.classList.contains('projects-page') ? (selectedLanguage==='ru'?'Проекты — Sansara Development':'Projects — Sansara Development') : (selectedLanguage==='ru' ? (document.body.classList.contains('about-page')?'О нас — Sansara Development':'Sansara Development — Жизнь в гармонии.') : (document.body.classList.contains('about-page')?'About Us — Sansara Development':'Sansara Development — A life well lived.'));
  languageObserver.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-label','placeholder']});
}
document.querySelectorAll('.language-control').forEach(control => {
  const toggle = control.querySelector('.language-toggle');
  const panel = control.querySelector('.language-options');
  const choices = [...panel.querySelectorAll('[data-language]')];
  const setOpen = open => {
    control.dataset.open = String(open);
    toggle.setAttribute('aria-expanded',String(open));
    panel.inert = !open;
  };
  toggle.addEventListener('click',()=>setOpen(control.dataset.open!=='true'));
  toggle.addEventListener('keydown',event=>{
    if(event.key==='ArrowDown') {event.preventDefault();setOpen(true);choices.find(b=>b.dataset.language===selectedLanguage).focus();}
  });
  choices.forEach(button=>button.addEventListener('click',()=>{
    selectedLanguage=button.dataset.language;
    try {localStorage.setItem('sansara-language',selectedLanguage);} catch {}
    setOpen(false);toggle.focus({preventScroll:true});applyLanguage();
  }));
  control.addEventListener('keydown',event=>{
    if(event.key==='Escape') {event.preventDefault();setOpen(false);toggle.focus({preventScroll:true});}
    const index=choices.indexOf(document.activeElement);
    if(index>=0 && ['ArrowDown','ArrowUp','Home','End'].includes(event.key)) {
      event.preventDefault();
      const next=event.key==='Home'?0:event.key==='End'?choices.length-1:(index+(event.key==='ArrowDown'?1:-1)+choices.length)%choices.length;
      choices[next].focus();
    }
  });
  document.addEventListener('pointerdown',event=>{if(!control.contains(event.target)) setOpen(false);});
  control.addEventListener('focusout',event=>{if(!control.contains(event.relatedTarget))setOpen(false);});
});
applyLanguage();
