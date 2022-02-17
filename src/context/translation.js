import React from 'react';

import { PLACES_DATA_RU, PLACES_DATA_EN } from '../components/Places/places-data';
import kamchatka from '../images/video/kamchatka.jpg';
import observatory from '../images/video/observatory.jpg';
import { COMMENTS_DATA_RU, COMMENTS_DATA_EN } from '../components/Comments/comment-data';

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
    video: {
      title: 'В глубины Земли и в дальний космос',
      subtitle: 'Видео от студии Stereotactic о местах в России, где ведутся фундаментальные исследования',
      videos: [
        {
          link: 'https://vimeo.com/81106671',
          linkTitle: 'vimeo.com/colors-of-Kamchatka',
          duration: '6:30',
          title: 'Colors of Kamchatka',
          subtitle: 'Режиссер: Павел Карыхалин',
          img: kamchatka,
          imgAlt: 'Берег Камчатки',
        },
        {
          link: 'https://vimeo.com/290675450',
          linkTitle: 'vimeo.com/observatory',
          duration: '24:45',
          title: 'Обсерватория | Observatory',
          subtitle: 'Режиссер: Александр Худоконь',
          img: observatory,
          imgAlt: 'Обсерватория под ночным небом',
        },
      ]
    },
    comments: {
      title: 'Фотографы, снимающие Россию',
      subtitle: 'Природа и люди вдохновили их работы, удостоенные наград на международных конкурсах',
      commentsItems: COMMENTS_DATA_RU,
    },
    cover: {
      linkTitle: 'На электричках до Байкала',
      title: 'До Байкала «на собаках»',
      subtitle: 'По мотивам учебной темы о Транссибе и iframes — путешествие от столицы до Байкала на электричках.',
    },
    footer: {
      links: [
        {
          link: 'https://yandex.ru/maps',
          text: 'Карты',
          title: 'Яндекс карты',
        },
        {
          link: 'https://yandex.ru/pogoda',
          text: 'Погода',
          title: 'Яндекс Погода',
        },
        {
          link: 'https://rasp.yandex.ru',
          text: 'Расписания',
          title: 'Яндекс Расписания',
        },
        {
          link: 'https://calendar.yandex.ru',
          text: 'Календарь',
          title: 'Яндекс Календарь',
        },
        {
          link: 'https://travel.yandex.ru',
          text: 'Путешествия',
          title: 'Яндекс Путешествия',
        },
      ],
      copyright: 'Бурлаков Андрей'
    }
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
    video: {
      title: 'Into the depths of the Earth and into deep space',
      subtitle: 'Video from Stereotactic studio about places in Russia where fundamental research is being conducted',
      videos: [
        {
          link: 'https://vimeo.com/81106671',
          linkTitle: 'vimeo.com/colors-of-Kamchatka',
          duration: '6:30',
          title: 'Colors of Kamchatka',
          subtitle: 'Director: Pavel Karykhalin',
          img: kamchatka,
          imgAlt: 'Kamchatka Coast',
        },
        {
          link: 'https://vimeo.com/290675450',
          linkTitle: 'vimeo.com/observatory',
          duration: '24:45',
          title: 'Обсерватория | Observatory',
          subtitle: 'Director: Alexander Khudokon',
          img: observatory,
          imgAlt: 'Observatory under the night sky',
        },
      ]
    },
    comments: {
      title: 'Photographers taking pictures of Russia',
      subtitle: 'Nature and people inspired their award-winning works at international competitions',
      commentsItems: COMMENTS_DATA_EN,
    },
    cover: {
      linkTitle: 'By train to Lake Baikal',
      title: 'To Baikal by train',
      subtitle: 'Based on the educational topic about the Trans-Siberian Railway and iframes - a journey from Moscow to Lake Baikal by train.',
    },
    footer: {
      links: [
        {
          link: 'https://yandex.ru/maps',
          text: 'Maps',
          title: 'Yandex Maps',
        },
        {
          link: 'https://yandex.ru/pogoda',
          text: 'Weather',
          title: 'Yandex Weather',
        },
        {
          link: 'https://rasp.yandex.ru',
          text: 'Schedules',
          title: 'Yandex Schedules',
        },
        {
          link: 'https://calendar.yandex.ru',
          text: 'Calendar',
          title: 'Yandex Calendar',
        },
        {
          link: 'https://travel.yandex.ru',
          text: 'Travel',
          title: 'Yandex Travel',
        },
      ],
      copyright: 'Burlakov Andrey'
    }
  },
};