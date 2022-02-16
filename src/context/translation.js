import React from 'react';

import { PLACES_DATA_RU, PLACES_DATA_EN} from '../components/Places/places-data';

export const TranslationContext = React.createContext();

export const translations = {
  ru: {
    lead: {
      title: 'Путешествия по России',
      subtitle: 'Настоящая страна не в выпусках новостей, а здесь',
      imgAlt: 'Спящий перед окном в поезде человек',
      figcaption: 'ваша полка — верхняя',
    },
    intro : {
      title: 'Чего мы там не видели?',
      text:
        `По опросам ВЦИОМ, 95% россиян мечтают куда-нибудь поехать, но только 36% планируют провести отпуск в родной стране.
        Мол, чего мы тут, дома, не видели? На самом деле, Россия — это целая вселенная с ласковым морем юга, густыми лесами Саян и суровыми льдами плато Путорана.
        А ещё увидеть все эти красоты можно без миллионов на счету, загранпаспорта и многочасовых перелетов.
        Как, например, Вера Башмакова — смелая молодая мама, которая взяла в охапку троих детей, усадила их в свою «Ладу» и проехала 20 тысяч километров по родной стране.
        Мы выбрали и описали некоторые интересные места, достойные вашего отпуска.`,
      statistics: 
        `Часовых поясов 11
        Объектов природного наследия ЮНЕСКО 12
        Объектов культурного наследия ЮНЕСКО 16
        Природных заповедников 105
        Аэропортов 241`
    },
    photoGrid: [
      'Окно поезда',
      'Снежные вершины в облаках',
      'Собака на стогу сена в поле',
      'Туманный лес',
      'Голубой лед',
      'Песчаный пляж',
      'Горные вершины',
      'Знак пешеходного перехода',
      'Горы в тумане',
      'Равнина с гора вдалеке',
      'Горы с морем',
      'Зеленые горы, укутанные облаками',
    ],
    places: PLACES_DATA_RU,
  },
  en: {
    lead: {
      title: 'Travelling in Russia',
      subtitle: 'The real country is not in the news releases, but here',
      imgAlt: 'A man sleeping in front of a window on a train',
      figcaption: 'your shelf is the upper one',
    },
    intro : {
      title: 'What didn\'t we see there?',
      text:
        `According to All-Russian Center for the Study of Public Opinion polls, 95% of Russians dream of going somewhere, but only 36% plan to spend a vacation in their native country.
        Like, what haven't we seen here at home? In fact, Russia is a whole universe with the gentle sea of the south, the dense forests of the Sayan Mountains and the harsh ice of the Putorana plateau.
        And you can also see all these beauties without millions on your account, a passport and many hours of flights.
        Like, for example, Vera Bashmakova - a brave young mother who took three children in her arms, sat them in her Lada and drove 20 thousand kilometers across her native country.
        We have selected and described some interesting places worthy of your vacation.`,
      statistics: 
        `11 time zones
        UNESCO Natural Heritage Sites 12
        UNESCO Cultural Heritage Sites 16
        Nature reserves 105
        Airports 241`
    },
    photoGrid: [
      'Train window',
      'Snowy peaks in the clouds',
      'A dog on a haystack in a field',
      'Misty Forest',
      'Blue Ice',
      'Sandy beach',
      'Mountain peaks',
      'Pedestrian crossing sign',
      'Mountains in the fog',
      'A plain with a mountain in the distance',
      'Mountains with sea',
      'Green mountains wrapped in clouds',
    ],
    places: PLACES_DATA_EN,
  },
};