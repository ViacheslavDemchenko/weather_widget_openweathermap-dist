"use strict";

// Polyfill for forEach method
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
"use strict";

(function () {
  var cities = [{
    id: 524901,
    name: 'Москва'
  }, {
    id: 498817,
    name: 'Санкт-Петербург'
  }, {
    id: 501175,
    name: 'Ростов-на-Дону'
  }, {
    id: 576116,
    name: 'Благовещенск'
  }, {
    id: 580497,
    name: 'Астрахань'
  }, {
    id: 578072,
    name: 'Белгород'
  }, {
    id: 2026070,
    name: 'Брянск'
  }, {
    id: 473247,
    name: 'Владимир'
  }, {
    id: 472757,
    name: 'Волгоград'
  }, {
    id: 472459,
    name: 'Вологда'
  }, {
    id: 472045,
    name: 'Воронеж'
  }, {
    id: 555312,
    name: 'Иваново'
  }, {
    id: 2023469,
    name: 'Иркутск'
  }, {
    id: 554234,
    name: 'Калининград'
  }, {
    id: 553915,
    name: 'Калуга'
  }, {
    id: 1503901,
    name: 'Кемерово'
  }, {
    id: 548408,
    name: 'Киров'
  }, {
    id: 543878,
    name: 'Кострома'
  }, {
    id: 1501321,
    name: 'Курган'
  }, {
    id: 538560,
    name: 'Курск'
  }, {
    id: 535121,
    name: 'Липецк'
  }, {
    id: 2123628,
    name: 'Магадан'
  }, {
    id: 2124187,
    name: 'Красногорск'
  }, {
    id: 524305,
    name: 'Мурманск'
  }, {
    id: 520555,
    name: 'Нижний Новгород'
  }, {
    id: 519336,
    name: 'Великий Новгород'
  }, {
    id: 1496747,
    name: 'Новосибирск'
  }, {
    id: 1496153,
    name: 'Омск'
  }, {
    id: 515003,
    name: 'Оренбург'
  }, {
    id: 515012,
    name: 'Орел'
  }, {
    id: 519560,
    name: 'Пенза'
  }, {
    id: 504341,
    name: 'Псков'
  }, {
    id: 500095,
    name: 'Рязань'
  }, {
    id: 499099,
    name: 'Самара'
  }, {
    id: 498677,
    name: 'Саратов'
  }, {
    id: 2119441,
    name: 'Южно-Сахалинск'
  }, {
    id: 1486209,
    name: 'Екатеринбург'
  }, {
    id: 491687,
    name: 'Смоленск'
  }, {
    id: 484646,
    name: 'Тамбов'
  }, {
    id: 480060,
    name: 'Тверь'
  }, {
    id: 1489425,
    name: 'Томск'
  }, {
    id: 3165115,
    name: 'Тула'
  }, {
    id: 1488754,
    name: 'Тюмень'
  }, {
    id: 479123,
    name: 'Ульяновск'
  }, {
    id: 1508291,
    name: 'Челябинск'
  }, {
    id: 468902,
    name: 'Ярославль'
  }, {
    id: 2026643,
    name: 'Биробиджан'
  }, {
    id: 1503772,
    name: 'Ханты-Мансийск'
  }, {
    id: 2127202,
    name: 'Анадырь'
  }, {
    id: 1493197,
    name: 'Салехард'
  }, {
    id: 1510853,
    name: 'Барнаул'
  }, {
    id: 2025339,
    name: 'Чита'
  }, {
    id: 2122104,
    name: 'Петропавловск-Камчатский'
  }, {
    id: 542420,
    name: 'Краснодар'
  }, {
    id: 1502026,
    name: 'Красноярск'
  }, {
    id: 511196,
    name: 'Пермь'
  }, {
    id: 2013348,
    name: 'Владивосток'
  }, {
    id: 487846,
    name: 'Ставрополь'
  }, {
    id: 2022890,
    name: 'Хабаровск'
  }, {
    id: 528293,
    name: 'Майкоп'
  }, {
    id: 1506271,
    name: 'Горно-Алтайск'
  }, {
    id: 479561,
    name: 'Уфа'
  }, {
    id: 2014407,
    name: 'Улан-Удэ'
  }, {
    id: 532096,
    name: 'Махачкала'
  }, {
    id: 6313621,
    name: 'Магас'
  }, {
    id: 563514,
    name: 'Элиста'
  }, {
    id: 569154,
    name: 'Черкесск'
  }, {
    id: 509820,
    name: 'Петрозаводск'
  }, {
    id: 485239,
    name: 'Сыктывкар'
  }, {
    id: 466806,
    name: 'Йошкар-Ола'
  }, {
    id: 498698,
    name: 'Саранск'
  }, {
    id: 2013159,
    name: 'Якутск'
  }, {
    id: 473249,
    name: 'Владикавказ'
  }, {
    id: 551487,
    name: 'Казань'
  }, {
    id: 1500973,
    name: 'Кызыл'
  }, {
    id: 554840,
    name: 'Ижевск'
  }, {
    id: 1512236,
    name: 'Абакан'
  }, {
    id: 558418,
    name: 'Грозный'
  }, {
    id: 569696,
    name: 'Чебоксары'
  }, {
    id: 694423,
    name: 'Севастополь'
  }, {
    id: 693805,
    name: 'Симферополь'
  }, {
    id: 706524,
    name: 'Керч'
  }]; // Объект с настройками

  var options = {
    APIKey: '959d949ddcff86a99efc29f96ae96b38',
    // APIKey сервиса погоды
    lang: 'ru',
    // Язык получения данных
    pressureMMHg: 0.75006375541921,
    // Значение 1 мм рт.ст. в паскалях
    kelvin: 273.15,
    // Разница между температурой по Кельвину и по Цельсию
    initialCity: cities[0].id
  }; // Функция проверяет response.status и возвращает результат: Promise.resolve() или Promise.reject()

  function status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  } // Функция возвращает JSON объект в случае успешного обращения к серверу


  function json(response) {
    return response.json();
  } // Функция вывода первоначальных данных в виджет (Москва)


  function initialDataShow(initialCity, APIKey, lang) {
    fetch("https://api.openweathermap.org/data/2.5/weather?id=".concat(initialCity, "&appid=").concat(APIKey, "&lang=").concat(lang)).then(status).then(json).then(function (data) {
      showCities(data); // Передаем в функцию showCities полученные с сервера данные для последующей обработки
    })["catch"](function (error) {
      console.log(error.name);
      console.log('Ошибка: ' + error.message);
      console.log(error.response);
    });
  }

  initialDataShow(options.initialCity, options.APIKey, options.lang); // Функция создания массива городов на русском языке из массив cities, который она получает в качестве параметра

  function makeRussianCitiesArr(arr) {
    var citiesInRussian = []; // Создаем пустой массив

    arr.forEach(function (city) {
      // Перебираем массив cities
      citiesInRussian.push(city.name); // Выбираем названия городов на русском

      citiesInRussian.sort(); // Сортируем полученный массив по алфавиту
    });
    return citiesInRussian; // Функция возвращает полученный массив городов на русском
  } // Функция выбора города


  function cityListMake() {
    var autocompleteInput = document.getElementById('autocomplete'); // Получаем инпут

    var citiesList = document.querySelector('.cities-list'); // Получаем список (ul), в который будут выводиться подходящие города (li) из массива
    // Отслеживаем изменения value инпута

    autocompleteInput.addEventListener('input', function () {
      citiesList.innerHTML = ''; // Скрытие списка подходящих городов при изменении value инпута

      citiesList.classList.remove('cities-list--active'); // Удаление активного класса у подходящих городов при изменении value инпута

      var currentCity = autocompleteInput.value.trim(); // Обрезаем пробелы и присваиваем value инпута в переменную currentCity
      // Проверяем, не является ли инпут пустым

      if (currentCity != '') {
        autocompleteInput.value = autocompleteInput.value[0].toUpperCase() + autocompleteInput.value.slice(1); // Делаем первую букву в инпуте заглавной
        // Перебираем массив городов, который передаем из функции makeRussianCitiesArr

        makeRussianCitiesArr(cities).forEach(function (elem) {
          // Делаем value инпута и каждый элемент массива городов заглавными буквами (так как города написаны с заглавной буквы) для их сравнения и поиска подходящих
          if (currentCity.toUpperCase() == elem.substr(0, currentCity.length).toUpperCase()) {
            var li = document.createElement('li'); // Создаем тег li

            li.classList.add('cities__item'); // Присваиваем ему класс

            li.textContent = elem; // Вписываем в него название города, совпадающего по началу названия с введенным в инпут

            citiesList.classList.add('cities-list--active'); // Присваиваем списку подходящих городов активный класс для открытия выпадающего списка со скроллом

            citiesList.appendChild(li); // Прикрепляем каждый li с названеим подходящего города к списку
          }
        });
        var citiesItems = document.querySelectorAll('.cities__item'); // Выбираем коллекцию списка подходящих городов
        // Перебираем список подходящих городов

        citiesItems.forEach(function (city) {
          city.addEventListener('click', function () {
            autocompleteInput.value = city.textContent; // По клику на любой город в списке получаем его название и присваиваем его в value инпута

            findChoosenCityId(autocompleteInput.value); // Передаем в функцию поиска id выбранного города value инпута

            citiesList.innerHTML = ''; // Скрытие списка после выбора города

            citiesList.classList.remove('cities-list--active'); // Удаление активного класса у подходящих в массиве городов
          });
          city.addEventListener('touch', function () {
            autocompleteInput.value = city.textContent; // По клику на любой город в списке получаем его название и присваиваем его в value инпута

            findChoosenCityId(autocompleteInput.value); // Передаем в функцию поиска id выбранного города value инпута

            citiesList.innerHTML = ''; // Скрытие списка после выбора города

            citiesList.classList.remove('cities-list--active'); // Удаление активного класса у подходящих в массиве городов
          });
        });
      }
    });
  }

  cityListMake(); // Функция поиска id выбранного города, которая принимает параметром value инпута в функции cityListMake

  function findChoosenCityId(value) {
    var currentId;
    cities.forEach(function (city) {
      // Перебираем массив
      if (city.name == value) {
        // Находим в массиве город, соответствующий выбранному в инпуте
        currentId = city.id; // Получаем его Id

        getCities(city.id, options.APIKey, options.lang); // Передаем в функцию Id выбранного в инпуте города, APTKey и язык для запроса на сервер
      }
    });
    return currentId; // Функция возвращает полученный id выбранного в инпуте города
  } // Функция перевода направления ветра из градусов в части света


  function windDirectionCalc(deg) {
    var windDirection;

    if (function (deg) {
      return 0 && deg < 22;
    }) {
      windDirection = 'северный';
    }

    if (deg >= 22 && deg < 45) {
      windDirection = 'северо-северо-восточный';
    }

    if (deg >= 45 && deg < 67) {
      windDirection = 'северо-восточный';
    }

    if (deg >= 67 && deg < 90) {
      windDirection = 'востоко-северо-восточный';
    }

    if (deg >= 90 && deg < 112) {
      windDirection = 'восточный';
    }

    if (deg >= 112 && deg < 135) {
      windDirection = 'востоко-юго-восточный';
    }

    if (deg >= 135 && deg < 157) {
      windDirection = 'юго-восточный';
    }

    if (deg >= 157 && deg < 180) {
      windDirection = 'юго-юго-восточный';
    }

    if (deg >= 180 && deg < 202) {
      windDirection = 'южный';
    }

    if (deg >= 202 && deg < 225) {
      windDirection = 'юго-юго-западный';
    }

    if (deg >= 225 && deg < 247) {
      windDirection = 'юго-западный';
    }

    if (deg >= 247 && deg < 270) {
      windDirection = 'западо-юго-западный';
    }

    if (deg >= 270 && deg < 292) {
      windDirection = 'западный';
    }

    if (deg >= 292 && deg < 315) {
      windDirection = 'западо-северо-западный';
    }

    if (deg >= 315 && deg < 337) {
      windDirection = 'северо-западный';
    }

    if (deg >= 337 && deg < 359) {
      windDirection = 'северо-северо-западный';
    }

    return windDirection;
  } // Функция запроса на сервер, которая принимает параметрами id выбранного в инпуте города, APTKey и язык


  function getCities(id, apiKey, lang) {
    fetch("https://api.openweathermap.org/data/2.5/weather?id=".concat(id, "&appid=").concat(apiKey, "&lang=").concat(lang)).then(status).then(json).then(function (data) {
      showCities(data); // Передаем в функцию showCities полученные с сервера данные для последующей обработки
    })["catch"](function (error) {
      console.log(error.name);
      console.log('Ошибка: ' + error.message);
      console.log(error.response);
    });
  } // Функция заполнения виджета полученными по API запросу данными


  function showCities(data) {
    document.querySelector('.widgets-wrap').innerHTML = ''; // Очищаем блок виджета
    // Перебираем массив городов cities

    cities.forEach(function (city) {
      // Ищем город на английском, совпадающий с полученным по API и выводим его HTML
      if (city.name == data.name) {
        var cityName = "<div class=\"widget\">\n                      <div class=\"widget__city\">".concat(city.name, "</div>");
        var currentDate = "".concat(getAndShowTimeDate());
        var metaData = "<div class=\"widget__icon\"><img class=\"weather-icon\" src=\"https://openweathermap.org/img/wn/".concat(data.weather[0].icon, "@2x.png\"></div>\n                      <div class=\"widget__temp\">").concat(Math.round(data.main.temp - options.kelvin), "\xB0C</div>\n                      <div class=\"widget-data\">\n                        <div class=\"data-block\">\n                          <div class=\"data__title\">\u0414\u0430\u0432\u043B\u0435\u043D\u0438\u0435 (\u043C\u043C \u0440\u0442.\u0441\u0442.): </div>\n                          <div class=\"data__num pressure\">").concat(Math.round(data.main.pressure * options.pressureMMHg), "</div>\n                        </div>\n                        <div class=\"data-block\">\n                          <div class=\"data__title\">\u0412\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u044C: </div>\n                          <div class=\"data__num humidity\">").concat(data.main.humidity, "%</div>\n                        </div>\n                        <div class=\"data-block\">\n                          <div class=\"data__title\">\u041E\u0431\u043B\u0430\u0447\u043D\u043E\u0441\u0442\u044C: </div>\n                          <div class=\"data__num cloud\">").concat(data.clouds.all, "%</div>\n                        </div>\n                        <div class=\"data-block\">\n                          <div class=\"data__title\">\u041E\u0441\u0430\u0434\u043A\u0438: </div>\n                          <div class=\"data__num precipitation\">").concat(data.weather[0].description, "</div>\n                        </div>\n                        <div class=\"data-block\">\n                          <div class=\"data__title\">\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432\u0435\u0442\u0440\u0430: </div>\n                          <div class=\"data__num wind-direction\">").concat(windDirectionCalc(data.wind.deg), "</div>\n                        </div>\n                        <div class=\"data-block\">\n                          <div class=\"data__title\">\u0421\u0438\u043B\u0430 \u0432\u0435\u0442\u0440\u0430: </div>\n                          <div class=\"data__num wind-speed\">").concat(Math.round(data.wind.speed), " \u043C/\u0441</div>\n                        </div>\n                      </div>\n                    </div>");
        document.querySelector('.widgets-wrap').innerHTML += cityName + currentDate + metaData;
      }
    });
  } // Функция получения даты и времени и вывода его в виджет


  function getAndShowTimeDate() {
    var date = new Date();
    var hours = doubleDigit(date.getHours());
    var minutes = doubleDigit(date.getMinutes());
    var day = doubleDigit(date.getDate());
    var month = date.getMonth();
    if (month == 0) month = 'января';
    if (month == 1) month = 'февраля';
    if (month == 2) month = 'марта';
    if (month == 3) month = 'апреля';
    if (month == 4) month = 'мая';
    if (month == 5) month = 'июня';
    if (month == 6) month = 'июля';
    if (month == 7) month = 'августа';
    if (month == 8) month = 'сентября';
    if (month == 9) month = 'октября';
    if (month == 10) month = 'ноября';
    if (month == 11) month = 'декабря';
    var year = doubleDigit(date.getFullYear());
    var time = "<div class=\"widget__date-time\">\n                  <div class=\"widget__date\">".concat(day, " ").concat(month, " ").concat(year, "</div>\n                  <div class=\"widget__time\">").concat(hours, ":").concat(minutes, " (\u043C\u0441\u043A)</div>\n                </div>");
    return time;
  } // Функция добавления 0 к числам от 9 и менее


  function doubleDigit(num) {
    if (num <= 9) num = "0".concat(num);
    return num;
  }
})();
"use strict";

/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
(function () {
  if ("undefined" !== typeof window && window.addEventListener) {
    var e = Object.create(null),
        l,
        d = function d() {
      clearTimeout(l);
      l = setTimeout(n, 100);
    },
        m = function m() {},
        t = function t() {
      window.addEventListener("resize", d, !1);
      window.addEventListener("orientationchange", d, !1);

      if (window.MutationObserver) {
        var k = new MutationObserver(d);
        k.observe(document.documentElement, {
          childList: !0,
          subtree: !0,
          attributes: !0
        });

        m = function m() {
          try {
            k.disconnect(), window.removeEventListener("resize", d, !1), window.removeEventListener("orientationchange", d, !1);
          } catch (v) {}
        };
      } else document.documentElement.addEventListener("DOMSubtreeModified", d, !1), m = function m() {
        document.documentElement.removeEventListener("DOMSubtreeModified", d, !1);
        window.removeEventListener("resize", d, !1);
        window.removeEventListener("orientationchange", d, !1);
      };
    },
        u = function u(k) {
      function e(a) {
        if (void 0 !== a.protocol) var c = a;else c = document.createElement("a"), c.href = a;
        return c.protocol.replace(/:/g, "") + c.host;
      }

      if (window.XMLHttpRequest) {
        var d = new XMLHttpRequest();
        var m = e(location);
        k = e(k);
        d = void 0 === d.withCredentials && "" !== k && k !== m ? XDomainRequest || void 0 : XMLHttpRequest;
      }

      return d;
    };

    var n = function n() {
      function d() {
        --q;
        0 === q && (m(), t());
      }

      function l(a) {
        return function () {
          !0 !== e[a.base] && (a.useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + a.hash), a.useEl.hasAttribute("href") && a.useEl.setAttribute("href", "#" + a.hash));
        };
      }

      function p(a) {
        return function () {
          var c = document.body,
              b = document.createElement("x");
          a.onload = null;
          b.innerHTML = a.responseText;
          if (b = b.getElementsByTagName("svg")[0]) b.setAttribute("aria-hidden", "true"), b.style.position = "absolute", b.style.width = 0, b.style.height = 0, b.style.overflow = "hidden", c.insertBefore(b, c.firstChild);
          d();
        };
      }

      function n(a) {
        return function () {
          a.onerror = null;
          a.ontimeout = null;
          d();
        };
      }

      var a,
          c,
          q = 0;
      m();
      var f = document.getElementsByTagName("use");

      for (c = 0; c < f.length; c += 1) {
        try {
          var g = f[c].getBoundingClientRect();
        } catch (w) {
          g = !1;
        }

        var h = (a = f[c].getAttribute("href") || f[c].getAttributeNS("http://www.w3.org/1999/xlink", "href") || f[c].getAttribute("xlink:href")) && a.split ? a.split("#") : ["", ""];
        var b = h[0];
        h = h[1];
        var r = g && 0 === g.left && 0 === g.right && 0 === g.top && 0 === g.bottom;
        g && 0 === g.width && 0 === g.height && !r ? (f[c].hasAttribute("href") && f[c].setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), b.length && (a = e[b], !0 !== a && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0), void 0 === a && (h = u(b), void 0 !== h && (a = new h(), e[b] = a, a.onload = p(a), a.onerror = n(a), a.ontimeout = n(a), a.open("GET", b), a.send(), q += 1)))) : r ? b.length && e[b] && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0) : void 0 === e[b] ? e[b] = !0 : e[b].onload && (e[b].abort(), delete e[b].onload, e[b] = !0);
      }

      f = "";
      q += 1;
      d();
    };

    var p = function p() {
      window.removeEventListener("load", p, !1);
      l = setTimeout(n, 0);
    };

    "complete" !== document.readyState ? window.addEventListener("load", p, !1) : p();
  }
})();