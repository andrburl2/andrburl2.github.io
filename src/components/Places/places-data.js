import kurhskay_kosa from '../../images/places/kurhskay_kosa.jpg';
import kolskiy from '../../images/places/kolskiy.jpg';
import altay from '../../images/places/altay.jpg';
import baikal from '../../images/places/baikal.jpg';
import karelia from '../../images/places/karelia.jpg';

const PLACES_DATA_RU = [
  {
    title: 'Куршская коса',
    link: 'http://park-kosa.ru',
    linkText: 'park-kosa.ru',
    image: kurhskay_kosa,
    alt: 'Куршская коса',
    text: [
      'Здесь, посреди лесов и песчаных дюн, вы сможете увидеть два водных горизонта — спокойного Куршского залива с одной стороны и подёрнутого рябью волн Балтийского моря с другой. Уникальная природная зона на краю российского анклава.',
      'На этом Калининградская область не заканчивается. Для путешественника и исследователя там же по соседству — самая западная точка России, Балтийская коса, — и немецкое наследие россыпи небольших приморских городов. Атмосфера здешних мест исключает суету, окуная в спокойствие природы и запах стального, прохладного моря.',
    ],
  },
  {
    title: 'Кольский',
    link: 'https://onetwotrip.com/ru/blog/russian-federation/kola-peninsula-accessible-arctic-region',
    linkText: 'onetwotrip.com',
    image: kolskiy,
    alt: 'Гора на Кольском полуострове',
    text: [
      'Почти весь полуостров находится за Полярным кругом. Саамская тундра, от которой на юг — тайга, а на север — Ледовитый океан, прикидывающийся Баренцевым морем.',
      'Возможно, вы смотрели Звягинцева и даже слышали историю арктического фестиваля в Териберке. Возможно, слово «Хибины» не осталось под снегом школьных воспоминаний об уроках географии. Возможно, вы не интересовались пронизывающей земную кору сверхглубокой скважиной, а от апатитов вас давно накрывает апатия. Но ваша мечта увидеть северное сияние начинает сбываться с билетом в Мурманск.',
    ],
  },
  {
    title: 'Алтай',
    link: 'https://www.tripadvisor.ru/Attractions-g1833666-Activities-Republic_of_Altai_Siberian_District.html',
    linkText: 'tripadvisor.ru',
    image: altay,
    alt: 'Алтайский лес',
    text: [
      'Алтай — одно из красивейших мест в России. В первую очередь из-за гор: если ехать вдоль хребта, вы увидите склоны, усыпанные соснами, горные реки и озёра. А если вы откроете в автомобиле окна, сможете познакомиться с невидимым чудом здешних мест — горным воздухом.',
      'Климат на Алтае умеренный, поэтому ехать сюда лучше всего летом. Так вы увидите всё разнообразие местной флоры и фауны. По лесам Алтая бродят лоси, над хребтами летают орлы, а на равнинах пасутся косули. И знаменитые манулы — тоже обитатели Алтайского края.',
    ],
  },
  {
    title: 'Зимний Байкал',
    link: 'https://vk.com/baikalmile',
    linkText: 'Байкальская Миля',
    image: baikal,
    alt: 'Замерзший Байкал',
    text: [
      'Всем известен Байкал как крупнейшее озеро в мире. Многие также знают, что это самый большой источник пресной воды и одно из красивейших мест в России.',
      'Конечно, это всё так. Но Байкал ещё идеальное место для соревнований по скийорингу. Это такой вид спорта, когда лыжник привязывает себя к мотоциклу, и тандем старается развить как можно бóльшую скорость на льду. В марте 2019 года на фестивале «Байкальская миля» был поставлен мировой рекорд — 197.011 км/ч.',
    ],
  },
  {
    title: 'Карелия',
    link: 'http://vodlozero.ru',
    linkText: 'vodlozero.ru',
    image: karelia,
    alt: 'Водлозеро',
    text: [
      'Сибирь заканчивается не на Урале, а в Карелии: образующая тайгу сибирская лиственница не растёт западнее Водлозера. Зато здесь она вымахивает на 30 метров — леса карельских национальных парков из-за непроходимых болот никогда не знали топора.',
      'Некоторым соснам уже больше чем полтысячелетия. Прикоснитесь к живому существу, видевшему солнце раньше, чем увидал его Иван Грозный. В девственном лесу на сотню километров не встретишь тропы. А на редких тропинках деревья в паре метров от земли помечены медвежьими когтями. Чтобы все знали, кто тут хозяин.',
    ],
  },
];

const PLACES_DATA_EN = [
  {
    title: 'Curonian Spit',
    link: 'http://park-kosa.ru',
    linkText: 'park-kosa.ru',
    image: kurhskay_kosa,
    alt: 'Curonian Spit',
    text: [
      'Here, in the middle of forests and sand dunes, you can see two water horizons - the calm Curonian Lagoon on one side and the rippling waves of the Baltic Sea on the other. A unique natural area on the edge of the Russian enclave.',
      'The Kaliningrad Region does not end there. For the traveler and explorer, there is the westernmost point of Russia, the Baltic Spit, in the same neighborhood, and the German heritage of placers of small seaside towns. The atmosphere of these places eliminates the hustle and bustle, plunging into the tranquility of nature and the smell of the steel, cool sea.',
    ],
  },
  {
    title: 'The Kola Peninsula',
    link: 'https://onetwotrip.com/ru/blog/russian-federation/kola-peninsula-accessible-arctic-region',
    linkText: 'onetwotrip.com',
    image: kolskiy,
    alt: 'A mountain on the Kola Peninsula',
    text: [
      'Almost the entire peninsula is located beyond the Arctic Circle. The Sami tundra, from which to the south is the taiga, and to the north is the Arctic Ocean, pretending to be the Barents Sea.',
      'You may have watched Zvyagintsev and even heard the story of the Arctic festival in Teriberka. Perhaps the word "Khibiny" did not remain under the snow of school memories of geography lessons. Perhaps you were not interested in the ultra-deep well penetrating the earth\'s crust, and apathy has been covering you for a long time from apatites. But your dream of seeing the Northern lights begins to come true with a ticket to Murmansk.',
    ],
  },
  {
    title: 'Altai',
    link: 'https://www.tripadvisor.ru/Attractions-g1833666-Activities-Republic_of_Altai_Siberian_District.html',
    linkText: 'tripadvisor.ru',
    image: altay,
    alt: 'Altai Forest',
    text: [
      'Altai is one of the most beautiful places in Russia. First of all, because of the mountains: if you drive along the ridge, you will see slopes strewn with pine trees, mountain rivers and lakes. And if you open the windows in the car, you can get acquainted with the invisible miracle of these places - mountain air.',
      'The climate in Altai is temperate, so it\'s best to go here in summer. So you will see all the diversity of the local flora and fauna. Moose roam the forests of Altai, eagles fly over the ridges, and roe deer graze on the plains. And the famous manuls are also inhabitants of the Altai Territory.',
    ],
  },
  {
    title: 'Winter Baikal',
    link: 'https://vk.com/baikalmile',
    linkText: 'Baikal Mile',
    image: baikal,
    alt: 'Winter Baikal',
    text: [
      'Everyone knows Baikal as the largest lake in the world. Many also know that this is the largest source of fresh water and one of the most beautiful places in Russia.',
      'Of course, this is all true. But Baikal is still an ideal place for skioring competitions. This is a kind of sport when a skier ties himself to a motorcycle, and the tandem tries to develop as much speed as possible on the ice. In March 2019, a world record of 197.011 km/h was set at the Baikal Mile Festival.',
    ],
  },
  {
    title: 'Karelia',
    link: 'http://vodlozero.ru',
    linkText: 'vodlozero.ru',
    image: karelia,
    alt: 'Vodlozero',
    text: [
      'Siberia does not end in the Urals, but in Karelia: Siberian larch, which forms the taiga, does not grow west of the Water Lake. But here it reaches 30 meters — the forests of Karelian national parks have never known an axe because of impassable swamps.',
      'Some pines are already more than half a millennium old. Touch a living being who saw the sun before Ivan the Terrible saw it. In the virgin forest for a hundred kilometers you will not find a trail. And on rare paths, trees a couple of meters from the ground are marked with bear claws. So that everyone knows who is the boss here.',
    ],
  },
];

export { PLACES_DATA_RU, PLACES_DATA_EN };