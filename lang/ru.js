export default {
  common: {
    buttons: {
      close: 'Закрыть',
      exit: 'Выход',
      language: 'Язык',
      selectFromTemplate: 'Выбрать по шаблону',
      saveAsTemplate: 'Сохранить как шаблон',
      next: 'Следующий',
      newForm: 'Новая форма',
      sentForms: 'Отправленные бланки',
      save: 'Сохранить',
      cancel: 'Отменить',
      send: 'Отправить',
      preview: 'Просмотр PDF',
      download: 'Скачать PDF',
      generatingPdf: 'Генерирование PDF...',
      search: 'Поиск',
      apply: 'Применить',
      date: 'Дата',
      dateRange: 'Диапазон дат',
      fromDate: 'Дата от',
      toDate: 'Дата до',
      select: 'Выберите',
      login: 'Вход',
      logout: 'Выход',
      allForms: 'Все формы'
    },
    titles: {
      invoiceAddress: 'Адрес счёта-фактуры',
      upperTeeth: 'Верхние зубы',
      lowerTeeth: 'Нижние зубы',
      sentForms: 'Отправленные формы',
      templates: 'Шаблоны',
      sendForm: 'Отправить форму',
      orderForms: 'Формы заказов',
      login: 'Вход'
    },
    headlines: {
      newForm: 'Создать новую форму',
      sentForms: 'Получите обзор всех отправленных на данный момент форм',
      emptyOrderForms: 'У Вас нет отправленных бланков.',
      emptyOrderFormsSearch: 'Соответствующие формы не найдены.',
      emptyTemplates: 'У Вас нет сохраненных шаблонов.',
      orderSent: 'Форма успешно сохранена и отправлена!'
    },
    labels: {
      expansion: '',
      compression: '',
      sectionType1: 'SE-NiTi',
      sectionType2: 'сталь',
      sectionType3: 'ß-Ti',
      templateTitle: 'Название шаблона',
      searchPlaceholder: 'Поиск...',
      username: 'Имя пользователя',
      password: 'Пароль'
    },
    notifications: {
      savedOrderForm: 'Форма была сохранена.',
      savedTemplate: 'Шаблон был сохранен.',
      deletedTemplate: 'Шаблон был удален.',
      error: 'Ошибка, пожалуйста, попробуйте еще раз.',
      errorLogin: '<strong>Ошибка:</strong> Имя пользователя или пароль недействительны.'
    }
  },
  section: {
    h_1: {
      contact: {
        title: 'Оттиски отправьте, пожалуйста, по адресу:',
        streetHouse: 'Lindenstrasse 44',
        zipCityCountry: '49152 Bad Essen – Германия',
        telephone: 'Тел.: +49 (0) 54 72-95 444-257',
        email: 'info@lingualsystems.ru'
      },
      address: {
        name: 'Бизнес-Центр „Шухова-Плаза“',
        address: 'ул.Шухова, д.14 (метро „Шаболовская“)',
        zipCity: '115162, г.Москва',
        telephone: 'Тел. / Факс: 8 (495) 64 03 487'
      }
    },
    h_2: {
      invoiceAddress: '',
      practice: 'Клиника',
      orthodontist: 'Лечащий врач',
      address: 'Улица / № дома',
      postalcodeTownShort: 'Индекс / город',
      telephone: 'Телефон',
      telefax: 'Факс',
      email: 'Эл. почта',
      idVat: '',
      patient: {
        lastName: 'Фамилия пациента',
        firstName: 'Имя пациента',
        number: 'Код пациента',
        dateOfBonding: 'Предполагаемый срок установки'
      }
    },
    h_3: {
      standardSetup: '',
      standardSetupPlus: '',
      premiumSetupPlus: '',
      stateOrthodontistNameOnInvoice: '',
      patientConsent: `
        Для передачи данных о состоянии
        здоровья пациента требуется его
        письменное разрешение!
      `,
      shippingAddress: ''
    },
    u_1: {
      onlySetup: 'Только cетап',
      euroTypeInfo: ''
    },
    u_2: {
      strippingTitle: '',
      boltonDiscrepancy: '',
      resolveCrowding: '',
      rcMm: '',
      rcWhere: '',
      reduceOverjet: '',
      roMm: '',
      roWhere: '',
      upperInfo: '',
      upperInfoLegend: '',
      notes: {
        title: 'Примечания:',
        stripping: 'Сепарация',
        strippingMm: 'мм',
        where: 'где:',
        boltonDiscrepancy: 'только при несоответствии по Болтону',
        boxTitle: 'примечания:'
      }
    },
    u_3: {
      title: 'Дуги для верхней челюсти',
      pleaseTick: 'Отметьте дугу Х',
      straight: 'бок. прям.',
      individual: 'бок. индив.'
    },
    m_1: {
      notes: 'примечания',
      remarksTitle: 'Примечания:',
      threeDSetup: '3D фото сетапа',
      tpa: 'нёбный расширитель (TPA)',
      herbst: 'аппарат Гербста',
      bondableHGTube: 'Трубка для лицевой дуги',
      bondableHGTubeWithShell: 'Трубка для лицевой дуги c композитным креплением',
      superpositionPhoto: '',
      dlcSteelWire: '',
      upperJaw: '',
      lowerJaw: '',
      keyInfoColors: [ '#72FBFD', '#909090', '#EB3423', '#74FBB7', '#75FA4F', '#A12CF6', '#000000', '#EA37C4' ],
      keyInfo: `
        <strong>Пожалуйста укажите:</strong> В случаях с удалением, будет ли закрыто пространство.v
      `,
      // Key Info for the PDF
      keyInfoLegendPDF: `
        <div><strong>B</strong> = брекет</div>&nbsp;|&nbsp;
        <div><strong>T</strong> = замок</div>&nbsp;|&nbsp;
        <div><strong>TL</strong> = удлиненный замок</div>&nbsp;|&nbsp;
        <div><strong>TLH</strong> = удлиненный замок с крючком</div>&nbsp;|&nbsp;
        <div><strong>Ex</strong> = подлежащий удалению</div>&nbsp;|&nbsp;
        <div><strong>X</strong> = отсутствующий зуб</div>&nbsp;|&nbsp;
        <div><strong>BA</strong> = Кольцо</div>&nbsp;|&nbsp;
        <div><strong>P</strong> = Основание, заходящее на окклюзионную поверхность</div>
      `,
      // Key Info for the TeethCanvas Component
      keyInfoLegend: [
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--b"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>B</strong>&nbsp;= брекет</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--t"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>T</strong>&nbsp;= замок</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--tl"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>TL</strong>&nbsp;= удлиненный замок</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--tlh"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>TLH</strong>&nbsp;= удлиненный замок с крючком</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--ex"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>Ex</strong>&nbsp;= подлежащий удалению</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--x"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>X</strong>&nbsp;= отсутствующий зуб</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--ba"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>BA</strong>&nbsp;= Кольцо</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--p"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>P</strong>&nbsp;= Основание, заходящее на окклюзионную поверхность</div>'
      ],
      keyInfoLegendLeft: [
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--b"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>B</strong>&nbsp;= брекет</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--t"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>T</strong>&nbsp;= замок</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--tl"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>TL</strong>&nbsp;= удлиненный замок</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--tlh"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>TLH</strong>&nbsp;= удлиненный замок с крючком</div>'
      ],
      keyInfoLegendRight: [
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--ex"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>Ex</strong>&nbsp;= подлежащий удалению</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--x"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>X</strong>&nbsp;= отсутствующий зуб</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--ba"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>BA</strong>&nbsp;= Кольцо</div>',
        '<div class="lof-teeth-canvas__info-legend__color lof-teeth-canvas__info-legend__color--p"></div><div class="lof-teeth-canvas__info-legend__divider">|</div><div><strong>P</strong>&nbsp;= Основание, заходящее на окклюзионную поверхность</div>'
      ]
    },
    m_2: {
      noCorrectionOfBite: '',
      differingFromOneClassTitle: 'В случае отклонения сетапа от I-го класса:',
      rightCanine: 'слева (3-й)',
      rightMolar: 'слева (6-й)',
      leftCanine: 'справа (3-й)',
      leftMolar: 'справа (6-й)'
    },
    m_3: {
      tray: {
        title: 'Переносная каппа',
        nonTransparent: 'Непрозрачная',
        trayTrimmed3_3: 'Срез каппы 3-3',
        transparent: 'Прозрачная'
      }
    },
    l_1: {
      onlySetup: 'Только cетап',
      euroTypeInfo: ''
    },
    l_2: {
      strippingTitle: '',
      boltonDiscrepancy: '',
      resolveCrowding: '',
      rcMm: '',
      rcWhere: '',
      reduceOverjet: '',
      roMm: '',
      roWhere: '',
      lowerInfo: '',
      lowerInfoLegend: '',
      notes: {
        title: 'Примечания:',
        stripping: 'Сепарация',
        strippingMm: 'мм',
        where: 'где:',
        boltonDiscrepancy: 'только при несоответствии по Болтону',
        boxTitle: 'примечания:'
      }
    },
    l_3: {
      title: 'Дуги для нихней челюсти',
      pleaseTick: 'Отметьте дугу Х',
      straight: 'бок. прям.',
      individual: 'бок. индив.'
    },
    f_1: {
      generalTerms: 'Я согласен с условиями заключения сделок, приведенными на обороте',
      signature: '(Подпись/печать)',
      date: '(Дата)',
      version: 'TD-3.2_Rev.5.1i'
    }
  },
  agbs: {
    title: 'Общие условия приобретения товара',
    content: `
      В случае фактической возможности поставить товар Поставщиком (ООО «ДиВиЛингвал Системс Ру», ОГРН 1137746040123), Покупатель (наименование которого указано в настоящем бланке заказа) подтверждает, что он согласен с настоящими Общими условиями приобретения товара в случае начала фактического исполнения Поставщиком настоящего бланка заказа в течение 14 календарных дней с момента получения им его оригинала, подписанного уполномоченным лицом Покупателя, и оттиска челюстей, на которые будут поставлены брекеты.
      <br><br>
      <strong>§ 1 Цена и оплата</strong>
      <br>
      Цена определяется Покупателем на основании действующего на момент размещения заказа прейскуранта цен, утвержденного Поставщиком. Поставщик выставляет Покупателю счет в рублях. В счете указываются стоимость изделия, стоимость доставки. Выставленный Покупателю счет подлежит оплате в течение 5 (Пяти) календарных дней со дня его выставления Покупателю.
      <br>
      Зачет встречных требований Покупателя или удержание платежей в силу таких требований допустимо только в том случае, если встречные требования неоспоримы или имеют законную силу.
      <br><br>
      <strong>§ 2 Поставка и сроки поставки</strong>
      <br>
      Поставка товара, указанного в бланк-заказе, осуществляется Поставщиком путем отгрузки с использованием услуг, предоставляемых службой экспресс доставки по выбору Поставщика. По отдельной договоренности сторон товар может быть поставлен транспортом Покупателя путем самовывоза. Стороны договорились, что срок поставки товара составляет 8 недель с момента получения Поставщиком подписанного уполномоченным лицом Покупателя оригинала бланка заказа (во избежание сомнений, вместе с оттиском челюстей, на которые будут ставиться брекеты). Без ущерба для прав Поставщика, в связи с просрочкой Покупателя сроки поставки продлеваются на срок, в течение которого Покупатель не выполняет свои договорные обязанности или обязательства перед Поставщиком. При несоблюдении согласованного в бланке заказа срока поставки более чем на 5 календарных дней, просрочка со стороны Поставщика наступает лишь после истечения приемлемого для Покупателя срока, дополнительно установленного им в письменном виде. По истечении такого приемлемого для Покупателя срока, он имеет право расторгнуть договор в одностороннем внесудебном порядке, незамедлительно письменно уведомив Поставщика об этом. Поставщик не отвечает за невозможность поставки или за задержки поставок, если они были вызваны обстоятельствами непреодолимой силы или прочими чрезвычайными событиями любого рода, которые невозможно было предвидеть на момент заключения договора и ответственность за которые Поставщик не несет (например: наводнения, землетрясения, забастовки, и.т.д.). Если такие события существенно затрудняют или делают невозможными поставку и при этом затруднение не носит временный характер, т.е. длится менее 2 месяцев, то Поставщик и Покупатель имеют право расторгнуть договор в одностороннем внесудебном порядке. В случае временных затруднений сроки поставки продлеваются или смещаются на время затруднения с прибавлением части срока, оставшегося неистекшим к моменту наступления временного затруднения.
      <br><br>
      <strong>§ 3 Переход риска, передача товара, отгрузка, упаковка</strong>
      <br>
      Риск переходит к Покупателю не позже момента передачи товара путем сдачи товара экспедитору, перевозчику или третьему лицу, назначенному Поставщиком для осуществления доставки Покупателю, или указанному им третьему лицу или момента предоставления товара в распоряжение Покупателя в месте нахождения товара. Если отгрузка или передача задерживается вследствие обстоятельства, ответственность за которое несет Покупатель, товар считается переданным, а риск переходит к Покупателю с момента, когда товар готов к отгрузке, и Поставщик сообщил Покупателю об этом или сообщил Покупателю о готовности передачи товара в месте его нахождения, включая посредством сообщения по электронной почте. Способ отгрузки и упаковка определяются Поставщиком с соблюдением должной осмотрительности. Поставленный Поставщиком товар следует рассматривать как нестерильный.
      <br><br>
      <strong>§ 4 Гарантия, дефекты</strong>
      <br>
      Точное соответствие индивидуальных брекетов гарантируется только в отношении геометрии зубов, полученной на основании представленных Покупателем оттисков челюстей. Необходимо изготавливать силиконовый оттиск для каждой челюсти, на которой планируется установка брекетов. Если на противоположной челюсти лечение не планируется, то, тем не менее, потребуется предоставление ее гипсовой модели. Если позиционированию подлежит только одна челюсть, то, тем не менее, необходимо сообщить, запланировано ли лечение на противоположной челюсти, в том числе и вестибулярное. Можно переслать уже имеющиеся сетап-модели. Все оттиски и модели должны быть перед пересылкой продезинфицированы. Поставщик должен обеспечить правильность аппаратуры в целом и всех её компонентов, которые были изготовлены индивидуально по его указанию, ответственность за вред, причиненный вследствие недостатков работы по установке брекетов и оказанию услуг по лечению, несет исполнитель данных работ или услуг. Поставленный товар сразу после фактического получения Покупателем необходимо тщательно обследовать. Он считается одобренным, если Поставщик не получил письменную рекламацию на явные или иные дефекты, которые можно было обнаружить при незамедлительном тщательном обследовании в течение пяти дней после доставки товара или его самовывоза транспортом Покупателя, в ином случае, в течение пяти рабочих дней после обнаружения дефекта, или ранее, когда Покупатель мог обнаружить дефект при нормальном использовании предмета поставки без более детального обследования.
      <br><br>
      При наличии дефектов поставленного товара Поставщик обязан и имеет право по своему выбору попытаться устранить дефекты или поставить другие изделия взамен дефектных в течение соразмерного срока. В случае невозможности, неспособности, отказа или неадекватной задержки устранения дефектов или поставки с целью замены, Покупатель может расторгнуть договор в одностороннем внесудебном порядке или соответствующим образом уменьшить покупную цену. Покупатель также может потребовать возмещения убытков на условиях ограничения ответственности, определенных в §5. Гарантия утрачивает силу, если Покупатель без разрешения Поставщика изменяет товар или поручает изменить его третьему лицу, в результате чего устранение дефектов становится невозможным или недопустимо затрудняется.
      <br><br>
      Срок гарантии составляет один год с момента фактической передачи Товара Покупателю: при доставке Товара экспедитором, перевозчиком или третьим лицом в момент подписания Покупателем квитанции перевозчика о получении Товара; при самовывозе в месте нахождения товара в момент подписания представителем Покупателя отгрузочной накладной.
      <br><br>
      <strong>§ 5 Ответственность по возмещению ущерба в случае невыполнения обязательств</strong>
      <br>
      Ответственность Поставщика ограничена ответственностью за реальный ущерб, который Покупатель понес в результате неисполнения или ненадлежащего исполнения Поставщиком своих обязательств, включая ущерб, который является следствием дефекта товара, если такой ущерб обычно можно ожидать при использовании товара по назначению. Вышеуказанное ограничение ответственности в равной мере распространяются на органы, законных представителей, сотрудников, а также в случае возложения исполнения Поставщиком на третьих лиц. Ограничение ответственности не распространяются на ответственность Поставщика за умышленные действия, за причинение ущерба жизни или здоровью или ответственность в соответствии с Законом о защите прав потребителей No 2300-1 от 7 февраля 1992 года (с последующими изменениями). Косвенные убытки (упущенная выгода или неполучение прибыли) Поставщиком не возмещаются.
      <br><br>
      <strong>§ 6 Разрешение споров</strong>
      <br>
      В случае неисполнения или ненадлежащего исполнения своих обязанностей по настоящему Договору Стороны несут ответственность в соответствии с действующим законодательством Российской Федерации. Все споры по настоящему Договору разрешаются в соответствии действующим законодательством РФ в Арбитражном суде г. Москвы.
      <br><br>
      <strong>§ 7 Защита персональных данных</strong>
      <br>
      Покупатель отвечает за то, чтобы передача всех данных заказа, в особенности данных о состоянии здоровья пациента, соответствовала нормам применимого законодательства.
    `
  }
}
