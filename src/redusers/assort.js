
import walnut from '../components/Layers/Asortiment/Walnut/img/walnut__item_1.png';
import hazelnut from '../components/Layers/Asortiment/Hazelnut/img/hazelnut__item_1.png';
import applePear from '../components/Layers/Asortiment/Apple-Pear/img/apple-pear__item_1.png';
import raspberryBlackberry from '../components/Layers/Asortiment/Raspberry-Blackberry/img/raspberry-blackberry__item_1.png';

const initState = {
    menu: [{
        title: "Грецкий орех",
        type: "walnut"
    },
    {
        title: "Фундук",
        type: "hazelnut"
    },
    {
        title: "Яблони/Груши",
        type: "apple-pear"
    },
    {
        title: "Малина/Ежевика",
        type: "raspberry-blackberry"
    }],
    items: [
        //  Грецкий орех
        {
            title: "Песчанский (Peschanscii)",
            type: "walnut",
            img: `${walnut}`,
            text: `Описание растения: Дерево средних размеров, крона округлой формы, средней густоты. Угол отхождения ветвей близкий к прямому, ветви располагаются довольно редко. Кора штамба и скелетных ветвей слабо трещиноватая. Ветви средних размеров, прямые, коричневого цвета. Листья продолговатые, матовые, черешок среднего размера, край листа ровный. Цветки средние, кувшинообразные, розоватые. Тип цветения протогинический. Скороплодность, сроки созревания, урожайность: Сроки цветения женских цветков начало мая,что дает возможность уйти от ранневесенних заморозков. Сорт частично самофертилен, лучшие опылители: Казаку, Скиносский, Когылничану, Бричанский. Цветы и плоды: Плоды средних размеров, округло-овальной формы без ребер. Скорлупа тонкая, плотная, незначительно шероховатая, матовая. Ядро кремового цвета, плотное. Выполненность ядра 85%. Отделимость ядра лёгкая, выход ядра выше 69%. Пригоден для механизированного извлечения ядра. Отличается исключительно приятным десертным вкусом, соломенно-желтой окраской плодов придающей им хороший товарный вид. Сорт универсальный, пригоден для переработки и для употребления в свежем виде. Сроки уборки 3 декада сентября – 1 декада октября. Сорт засухоустойчивый, жаростойкий, зимостойкий, при -30С, подмерзали только верхушки невызревших побегов. Периодичность плодоношения не выражена. Устойчивость к марсониозу выше средней.`
        },
        {
            title: "Супер Чиф",
            type: "walnut",
            img: `${applePear}`,
            text: `Описание плода: Средняя масса плодов – 180-200 г. Мякоть светло-кремовая, малосочная, плотная, кисловато-сладкая, немного пресноватая, с приятным и сильным сортовым ароматом. Цвет плодов - насыщенно красный. За 10 дней до созревания приобретает интенсивный красный окрас. Иногда плоды могут быть маленькими из-за избыточного урожая на дереве. Поэтому рекомендуется прореживать плоды, чтобы получить желаемый размер фруктов при сборе урожая. Дегустационная оценка плодов составляет – 4,8 баллов. Описание растения: Деревья среднерослые. Образует компактную крону, сила роста средняя. Сроки созревания: Зимний, конец сентября. Устойчивость к заболеваниям и климату: Имеет средний иммунитет к парше и пятнистости, но имеет хорошую устойчивость к мучнистой росе. Если вовремя проводить профилактические опрыскивания фунгицидами проблем с сортом не возникает. Зимостойкость и засухоустойчивость хорошая.`
        },
        {
            title: "Черкесский 1-2",
            type: "walnut",
            img: `${hazelnut}`,
            text: `Описание растения: Фундук 'Черкесский 2' — местный адыгейский сорт. Оригинатор не зарегистрирован. Сорт принят на государственное испытание в 1950 году. Включен в государственный реестр в 1959 году по Северо-Кавказскому региону (Краснодарский край и Республика Адыгея, Кабардино-Балкарская Республика). Сорт обладает средней засухоустойчивостью. Размеры и форма роста: Куст сильнорослый с раскидистой кроной. Цветы и плоды: У представителей сорта 'Черкесский 2' плоды массой 1.6 г., широкоовальные, слегка сплюснутые, заостренные. Обертка цельная, длиннее ореха, разделена на неровные зубчатые доли. Скорлупа тонкая, коричневая, со слегка выраженными продольными полосками. Выход ядра 45.2 %. Содержание жира около 70 %. Дегустационная оценка 4.5 балла. Назначение плодов универсальное. Скороплодность, сроки созревания, урожайность: Относится к сортам раннего срока созревания. Средняя урожайность составляет 0.22 кг/м2. Зимостойкость: Сорт отличается средней зимостойкостью. Устойчивость к болезням: Фундук 'Черкесский 2' характеризуется относительной устойчивостью к болезням и вредителям.`
        },
        // Фундук
        {
            title: "Черкесский 1-2",
            type: "hazelnut",
            img: `${hazelnut}`,
            text: `Описание растения: Фундук 'Черкесский 2' — местный адыгейский сорт. Оригинатор не зарегистрирован. Сорт принят на государственное испытание в 1950 году. Включен в государственный реестр в 1959 году по Северо-Кавказскому региону (Краснодарский край и Республика Адыгея, Кабардино-Балкарская Республика). Сорт обладает средней засухоустойчивостью. Размеры и форма роста: Куст сильнорослый с раскидистой кроной. Цветы и плоды: У представителей сорта 'Черкесский 2' плоды массой 1.6 г., широкоовальные, слегка сплюснутые, заостренные. Обертка цельная, длиннее ореха, разделена на неровные зубчатые доли. Скорлупа тонкая, коричневая, со слегка выраженными продольными полосками. Выход ядра 45.2 %. Содержание жира около 70 %. Дегустационная оценка 4.5 балла. Назначение плодов универсальное. Скороплодность, сроки созревания, урожайность: Относится к сортам раннего срока созревания. Средняя урожайность составляет 0.22 кг/м2. Зимостойкость: Сорт отличается средней зимостойкостью. Устойчивость к болезням: Фундук 'Черкесский 2' характеризуется относительной устойчивостью к болезням и вредителям.`
        },
        {
            title: "Супер Чиф",
            type: "hazelnut",
            img: `${applePear}`,
            text: `Описание плода: Средняя масса плодов – 180-200 г. Мякоть светло-кремовая, малосочная, плотная, кисловато-сладкая, немного пресноватая, с приятным и сильным сортовым ароматом. Цвет плодов - насыщенно красный. За 10 дней до созревания приобретает интенсивный красный окрас. Иногда плоды могут быть маленькими из-за избыточного урожая на дереве. Поэтому рекомендуется прореживать плоды, чтобы получить желаемый размер фруктов при сборе урожая. Дегустационная оценка плодов составляет – 4,8 баллов. Описание растения: Деревья среднерослые. Образует компактную крону, сила роста средняя. Сроки созревания: Зимний, конец сентября. Устойчивость к заболеваниям и климату: Имеет средний иммунитет к парше и пятнистости, но имеет хорошую устойчивость к мучнистой росе. Если вовремя проводить профилактические опрыскивания фунгицидами проблем с сортом не возникает. Зимостойкость и засухоустойчивость хорошая.`
        },
        // Яблони/Груши
        {
            title: "Супер Чиф",
            type: "apple-pear",
            img: `${applePear}`,
            text: `Описание плода: Средняя масса плодов – 180-200 г. Мякоть светло-кремовая, малосочная, плотная, кисловато-сладкая, немного пресноватая, с приятным и сильным сортовым ароматом. Цвет плодов - насыщенно красный. За 10 дней до созревания приобретает интенсивный красный окрас. Иногда плоды могут быть маленькими из-за избыточного урожая на дереве. Поэтому рекомендуется прореживать плоды, чтобы получить желаемый размер фруктов при сборе урожая. Дегустационная оценка плодов составляет – 4,8 баллов. Описание растения: Деревья среднерослые. Образует компактную крону, сила роста средняя. Сроки созревания: Зимний, конец сентября. Устойчивость к заболеваниям и климату: Имеет средний иммунитет к парше и пятнистости, но имеет хорошую устойчивость к мучнистой росе. Если вовремя проводить профилактические опрыскивания фунгицидами проблем с сортом не возникает. Зимостойкость и засухоустойчивость хорошая.`
        },

        //    Малина/Ежевика
        {
            title: "Малина Геракл ремонтантная",
            type: "raspberry-blackberry",
            img: `${raspberryBlackberry}`,
            text: `Описание сорта : Сорт малины Геракл рекомендован для выращивания в Центрально- Черноземном и Центральном регионах России. Куст даёт только 5-6 побегов, высота растения от 150 до 200 см. Побеги мощные, прямые, не склонные к сгибанию под весом ягод. С одного куста при благоприятных погодных условиях и грамотной агротехнике удаётся получить до 10 кг. ягод. Зона плодоношения захватывает треть стебля. На ветках многочисленные шипы, что делает сбор ягод несколько некомфортным. Листья морщинистые насыщенно-зелёного окраса. Ягоды конусообразные, яркого рубинового цвета. Их средний вес около 10 г. Отдельные самые большие ягоды до 15 г. Мякоть очень сочная. Вкус десертный кисло-сладкий. Аромат насыщенный. Транспортабельность сорта высокая, и ягоды при правильном хранении в течение длительного времени не теряют товарного вида. Перед покупкой саженцев ремонтантной малины Геракл стоит ознакомиться с сильными и слабыми сторонами сорта. Преимущества сорта: - высокая урожайность; • 2 волны урожая – первая на прошлогодних побегах, а вторая на побегах текущего года; • отличная транспортабельность; • первый урожай уже в год посадки; • выгодность при выращивании в коммерческих целях, так как ягоды продолжают созревать до заморозков, когда другие сорта уже не плодоносят; • нетребовательность к уходу; • стойкость к основным заболеваниям малины; • достаточная морозоустойчивость – средняя при сохранении надземной части растения и высокая при её срезке; • возможность выращивания с минимумом минеральных удобрений. Недостатки сорта • кислота во вкусе – из-за этого ягоды не всегда нравятся детям (недостаток условный, так как зависит от отношения к нему потребителя); • обилие шипов – при сборе урожая легко поранить руки; • малое количество корневых отпрысков, что не выгодно для тех, кто выращивает кусты для продажи; • к моменту заморозков на побегах остаётся часть зелёных ягод. Плюсов у малины Геракл значительно больше, чем минусов. Разведение данного сорта, без всяких сомнений, придётся по душе тем садоводам, которые хотят иметь обильный урожай при минимуме ухода за малинником. Посадка Оптимально сажать малину Геракл осенью, чтобы уже предстоящим летом получить обильное плодоношение. Время высадки – октябрь, а на юге еще и ноябрь. Если высадить саженцы раньше, то из-за повышенных температур,они перенесут стресс и могут плохо перезимовать, также нельзя высаживать растение меньше чем за месяц до возможных заморозков, Геракл должен успеть укорениться. Когда требуется посадить малину весной, то важно успеть сделать это до начала вегетации. Как только заморозки полностью пройдут, саженцы сразу высаживают в подготовленные с осени лунки. Почва для Геракла большого значения не имеет, но всё же лучшие урожаи получают с кустов, растущих на суглинках и супесчаных почвах, которые имеют незначительный показатель кислотности. Участок должен быть солнечный, с залеганием грунтовых вод не ближе чем 150 см. от поверхности почвы. Сажать сорт Геракл удобнее в лунки, которые делают размером 50Х50Х50 см. Между кустами интервал должен составлять 80 см., а между рядами – 150 см. На 1/3 посадочные ямы наполняются питательной почвой. Из неё формируют холмик, на который и сажают растение, равномерно распределяя его корни по скатам. Затем осторожно засыпают саженец таким образом, чтобы грунт равномерно закрывал его корни. Почву вокруг малины уплотняют и производят полив. На 1 растение требуется 10 л. воды. Корневая шейка должна остаться на 5 см выше уровня грунта. В заключение проводят мульчирование торфом. Слой его должен быть в районе 5 см. Выращивание и уход Неприхотливость ремонтантной малины Геракл не означает, что за ней можно вовсе не ухаживать. Только грамотная агротехника обеспечит высокие урожаи. Полив Поливать малину сорта Геракл следует первый раз в последние дни мая, далее – по два раза в июне и июле, после – в начале августа. В октябре поливка последняя и самая обильная для того, чтобы растение могло получить достаточно влаги, которой хватит на всю зиму. Лучше всего устроить поливные борозды, которые прокапываются с обеих сторон вдоль рядов на расстоянии 40 см. от растений. Глубина их должна быть 10 см. Борозды наполняют водой в объеме 40 литров на один куст. Обрезка Малину сорта Геракл обрезают осенью в самом конце октября или даже в ноябре. Удаляют под корень побеги прошлого года, которые отплодоносили, урожай от них уже не получить, а оставленные в малиннике они только ослабят его. Если зимы очень холодные, то можно срезать полностью всю надземную часть куста. В этом случае ремонтантный сорт даст только один урожай на побегах, которые появятся весной, но качество ягод будет особенно высоким. Весной после зимы приводится санитарная обрезка, во время которой срезаются все засохшие и поврежденные побеги. Если задета только макушка побега, то его укорачивают до первой здоровой почки. Подкорма Ремонтантный сорт Геракл требует 3 подкормки за сезон. Первая проводится в мае, вторая – в июле и третья – в самом конце августа или первой декаде сентября. 1. майская подкорма. Под малину вносится раствор коровяка концентрацией 500 мл./10л. воды. На один куст его требуется 5 литров; 2. июльская подкормка. Кусты опрыскиваются поздно вечером составом, который приготовлен из 50 г. мочевины, 70 г. калия сернокислого, 250 г. суперфосфата и 10 г. борной кислоты, растворенных в 10 литрах воды. 3. последняя подкормка осуществляется комплексным минеральным удобрением (по нормам, указанным в инструкции на упаковке). Излишнее применение удобрений, особенно азотных, пойдет растению только во вред. Подготовка к зиме Если ветки Геракла срезают полностью, то нет необходимости в укрытии, так как корни благополучно перезимуют в земле, даже при сильных морозах. Если же надземная часть малины остается, то следует обмотать куст мешковиной или, пригнув к земле, присыпать торфом и накрыть лапником. Раскрывать малину весной необходимо сразу, как только с нее сойдёт снег.`
        },
    ],
    getItems: [],
    getItemId: {},

    // Отдельные продукты на странице "Продукция"
    getItemSelect: [
        // Яблони/Груши
        {
            title: "Супер Чиф",
            type: "apple-pear",
            img: `${applePear}`,
            text: `Описание плода: Средняя масса плодов – 180-200 г. Мякоть светло-кремовая, малосочная, плотная, кисловато-сладкая, немного пресноватая, с приятным и сильным сортовым ароматом. Цвет плодов - насыщенно красный. За 10 дней до созревания приобретает интенсивный красный окрас. Иногда плоды могут быть маленькими из-за избыточного урожая на дереве. Поэтому рекомендуется прореживать плоды, чтобы получить желаемый размер фруктов при сборе урожая. Дегустационная оценка плодов составляет – 4,8 баллов. Описание растения: Деревья среднерослые. Образует компактную крону, сила роста средняя. Сроки созревания: Зимний, конец сентября. Устойчивость к заболеваниям и климату: Имеет средний иммунитет к парше и пятнистости, но имеет хорошую устойчивость к мучнистой росе. Если вовремя проводить профилактические опрыскивания фунгицидами проблем с сортом не возникает. Зимостойкость и засухоустойчивость хорошая.`
        },

        //    Малина/Ежевика
        {
            title: "Малина Геракл ремонтантная",
            type: "raspberry-blackberry",
            img: `${raspberryBlackberry}`,
            text: `Описание сорта : Сорт малины Геракл рекомендован для выращивания в Центрально- Черноземном и Центральном регионах России. Куст даёт только 5-6 побегов, высота растения от 150 до 200 см. Побеги мощные, прямые, не склонные к сгибанию под весом ягод. С одного куста при благоприятных погодных условиях и грамотной агротехнике удаётся получить до 10 кг. ягод. Зона плодоношения захватывает треть стебля. На ветках многочисленные шипы, что делает сбор ягод несколько некомфортным. Листья морщинистые насыщенно-зелёного окраса. Ягоды конусообразные, яркого рубинового цвета. Их средний вес около 10 г. Отдельные самые большие ягоды до 15 г. Мякоть очень сочная. Вкус десертный кисло-сладкий. Аромат насыщенный. Транспортабельность сорта высокая, и ягоды при правильном хранении в течение длительного времени не теряют товарного вида. Перед покупкой саженцев ремонтантной малины Геракл стоит ознакомиться с сильными и слабыми сторонами сорта. Преимущества сорта: - высокая урожайность; • 2 волны урожая – первая на прошлогодних побегах, а вторая на побегах текущего года; • отличная транспортабельность; • первый урожай уже в год посадки; • выгодность при выращивании в коммерческих целях, так как ягоды продолжают созревать до заморозков, когда другие сорта уже не плодоносят; • нетребовательность к уходу; • стойкость к основным заболеваниям малины; • достаточная морозоустойчивость – средняя при сохранении надземной части растения и высокая при её срезке; • возможность выращивания с минимумом минеральных удобрений. Недостатки сорта • кислота во вкусе – из-за этого ягоды не всегда нравятся детям (недостаток условный, так как зависит от отношения к нему потребителя); • обилие шипов – при сборе урожая легко поранить руки; • малое количество корневых отпрысков, что не выгодно для тех, кто выращивает кусты для продажи; • к моменту заморозков на побегах остаётся часть зелёных ягод. Плюсов у малины Геракл значительно больше, чем минусов. Разведение данного сорта, без всяких сомнений, придётся по душе тем садоводам, которые хотят иметь обильный урожай при минимуме ухода за малинником. Посадка Оптимально сажать малину Геракл осенью, чтобы уже предстоящим летом получить обильное плодоношение. Время высадки – октябрь, а на юге еще и ноябрь. Если высадить саженцы раньше, то из-за повышенных температур,они перенесут стресс и могут плохо перезимовать, также нельзя высаживать растение меньше чем за месяц до возможных заморозков, Геракл должен успеть укорениться. Когда требуется посадить малину весной, то важно успеть сделать это до начала вегетации. Как только заморозки полностью пройдут, саженцы сразу высаживают в подготовленные с осени лунки. Почва для Геракла большого значения не имеет, но всё же лучшие урожаи получают с кустов, растущих на суглинках и супесчаных почвах, которые имеют незначительный показатель кислотности. Участок должен быть солнечный, с залеганием грунтовых вод не ближе чем 150 см. от поверхности почвы. Сажать сорт Геракл удобнее в лунки, которые делают размером 50Х50Х50 см. Между кустами интервал должен составлять 80 см., а между рядами – 150 см. На 1/3 посадочные ямы наполняются питательной почвой. Из неё формируют холмик, на который и сажают растение, равномерно распределяя его корни по скатам. Затем осторожно засыпают саженец таким образом, чтобы грунт равномерно закрывал его корни. Почву вокруг малины уплотняют и производят полив. На 1 растение требуется 10 л. воды. Корневая шейка должна остаться на 5 см выше уровня грунта. В заключение проводят мульчирование торфом. Слой его должен быть в районе 5 см. Выращивание и уход Неприхотливость ремонтантной малины Геракл не означает, что за ней можно вовсе не ухаживать. Только грамотная агротехника обеспечит высокие урожаи. Полив Поливать малину сорта Геракл следует первый раз в последние дни мая, далее – по два раза в июне и июле, после – в начале августа. В октябре поливка последняя и самая обильная для того, чтобы растение могло получить достаточно влаги, которой хватит на всю зиму. Лучше всего устроить поливные борозды, которые прокапываются с обеих сторон вдоль рядов на расстоянии 40 см. от растений. Глубина их должна быть 10 см. Борозды наполняют водой в объеме 40 литров на один куст. Обрезка Малину сорта Геракл обрезают осенью в самом конце октября или даже в ноябре. Удаляют под корень побеги прошлого года, которые отплодоносили, урожай от них уже не получить, а оставленные в малиннике они только ослабят его. Если зимы очень холодные, то можно срезать полностью всю надземную часть куста. В этом случае ремонтантный сорт даст только один урожай на побегах, которые появятся весной, но качество ягод будет особенно высоким. Весной после зимы приводится санитарная обрезка, во время которой срезаются все засохшие и поврежденные побеги. Если задета только макушка побега, то его укорачивают до первой здоровой почки. Подкорма Ремонтантный сорт Геракл требует 3 подкормки за сезон. Первая проводится в мае, вторая – в июле и третья – в самом конце августа или первой декаде сентября. 1. майская подкорма. Под малину вносится раствор коровяка концентрацией 500 мл./10л. воды. На один куст его требуется 5 литров; 2. июльская подкормка. Кусты опрыскиваются поздно вечером составом, который приготовлен из 50 г. мочевины, 70 г. калия сернокислого, 250 г. суперфосфата и 10 г. борной кислоты, растворенных в 10 литрах воды. 3. последняя подкормка осуществляется комплексным минеральным удобрением (по нормам, указанным в инструкции на упаковке). Излишнее применение удобрений, особенно азотных, пойдет растению только во вред. Подготовка к зиме Если ветки Геракла срезают полностью, то нет необходимости в укрытии, так как корни благополучно перезимуют в земле, даже при сильных морозах. Если же надземная часть малины остается, то следует обмотать куст мешковиной или, пригнув к земле, присыпать торфом и накрыть лапником. Раскрывать малину весной необходимо сразу, как только с нее сойдёт снег.`
        },
    ],
    // По умолчанию выводим первый продукт
    getItemsSelectId:         
    // Яблони/Груши
    {
        title: "Супер Чиф",
        type: "apple-pear",
        img: `${applePear}`,
        text: `Описание плода: Средняя масса плодов – 180-200 г. Мякоть светло-кремовая, малосочная, плотная, кисловато-сладкая, немного пресноватая, с приятным и сильным сортовым ароматом. Цвет плодов - насыщенно красный. За 10 дней до созревания приобретает интенсивный красный окрас. Иногда плоды могут быть маленькими из-за избыточного урожая на дереве. Поэтому рекомендуется прореживать плоды, чтобы получить желаемый размер фруктов при сборе урожая. Дегустационная оценка плодов составляет – 4,8 баллов. Описание растения: Деревья среднерослые. Образует компактную крону, сила роста средняя. Сроки созревания: Зимний, конец сентября. Устойчивость к заболеваниям и климату: Имеет средний иммунитет к парше и пятнистости, но имеет хорошую устойчивость к мучнистой росе. Если вовремя проводить профилактические опрыскивания фунгицидами проблем с сортом не возникает. Зимостойкость и засухоустойчивость хорошая.`
    },
}

const assort = (state = initState, action) => {

    switch (action.type) {
        case 'GET_PROD_ITEM':

            const items = state.items.filter((item, i) => {

                if (item.type === action.param) {
                    return item;
                }
            });

            return {
                ...state,
                getItems: items,
                getItemId: items[0]
            }

        case 'GET_PROD_ITEM_ID':

            const itemId = state.items.find((item, i) => {

                if (item.title === action.param) {
                    return item;
                }
            });

            return {
                ...state,
                getItemId: itemId
            }

        case 'GET_PROD_SELECT':

            const itemSelect = state.items.find((item, i) => {

                if (item.title === action.param) {
                    return item;
                }
            });

            return {
                ...state,
                getItemsSelectId: itemSelect,
            }
    }

    return {
        ...state
    }
}

export default assort;