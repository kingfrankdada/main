export default {
  setting: {
    nightMode: "Ночной режим",
    title: "Системные настройки",
    language: "Язык системы",
  },

  publicLogin: {
    logo: "S.O.L.A.R",
    changeReg: "Нет аккаунта? Зарегистрируйтесь сейчас",
    loginError: "Неверное имя пользователя или пароль",
  },

  publicReg: {
    logo: "S.O.L.A.R",
    changeLogin: "Уже есть аккаунт? Войдите сейчас",

    handleReg: {
      empty: "Имя пользователя и пароль не могут быть пустыми",
      short: "Длина пароля должна быть не менее 6 символов",
      notMatch: "Пароли не совпадают",
      success: "Регистрация прошла успешно, имя пользователя: {username}",
      fail: "Ошибка регистрации: {error}",
    }
  },

  publicLogout: {
    info: "Вы уверены, что хотите выйти из системы?",
    confirm: "Подтвердить",
    cancel: "Отменить",
  },

  headerGuide: {
    title: "S.O.L.A.R",
    home: "Главная",
    book: "Центр книг",
    forum: "Центр форума",
    user: "Личный кабинет",
    search: "Поиск книг",
    notice: "Уведомления",
    setting: "Настройки",
    admin: "Системные настройки",
    login: "Войти",
    logout: "Выйти",
  },

  publicSearch: {
    placeholder: "Введите название книги для поиска",
    alertMsg: "Поисковый запрос не может быть пустым",
  },

  publicNotice: {
    title: "Объявления",
    top: "[Закреплено]",
    empty: "Нет объявлений",
    error: "Не удалось загрузить объявления",
  },

  noticeBox: {
    adduser: "Автор:",
    adddate: "Дата публикации:",
    defaultMsg: {
      title: "Ошибка системы!",
      adduser: "Неизвестно",
      adddate: "Неизвестно",
      info: "Не удалось загрузить содержимое!",
    },
  },

  messageBox: {
    btnMsg: "Подтвердить",
    emptyCopyError: "Не найден текст для копирования",
    copySuccess: "Успешно скопировано",
    copyFail: "Ошибка копирования",
  },

  alertBox: {
    btnMsg: "Подтвердить",
  },

  editTag: {
    title: "Редактировать детали",
    placeholder: "Редактировать содержимое",
    btnMsg: "Отправить",
  },

  inputTag: {
    placeholder: "Введите тег",
    empty: "Тег не может быть пустым",
  },

  publicHome: {
    title_1: "Smart Organizational Library Assistant Resource",
    subtitle_1: "Современная платформа управления библиотекой, разработанная на основе Vue2 и Node.js. Решение для университетов с цифровым управлением библиотекой.",
    btnText_1: "Узнать больше",

    title_2: "Центр книг",
    subtitle_2: "Богатая онлайн-библиотека с возможностью мгновенного поиска и заимствования книг. Поддерживается поиск по ключевым словам.",
    btnText_2: "Начать использовать",

    title_3: "Форум",
    subtitle_3: "Место для обсуждения и обмена книгами и учебными ресурсами. Присоединяйтесь к обсуждениям и делитесь мнениями.",
    btnText_3: "Посмотреть форум",

    title_4: "Личный кабинет",
    subtitle_4: "Управляйте настройками аккаунта, репутацией, историей заимствований и коллекцией книг. Контролируйте конфиденциальность и безопасность аккаунта.",
    btnText_4: "Перейти к настройкам",

    title_5: "Проект и поддержка",
    subtitle_5: "Техническая поддержка и обновления проекта. Проект с открытым исходным кодом по лицензии MIT. Обратная связь доступна через GitHub.",
    btnText_5: "Перейти на GitHub",
  },

  userBook: {
    titleInfo: "Просмотр информации о книге",
    titleInfoDisabled: "Книга снята с продажи",
    boxMsg: "Данные отсутствуют...",
    imgAlt: "Обложка",
    num: "Количество на складе:",
    firstPage: "Первая",
    prevPage: "Предыдущая",
    nextPage: "Следующая",
    lastPage: "Последняя",
    pageInfo: "Страница {currentPage} из {totalPages}",
    btnMsg: "Взять в аренду",
    guideTitle: "Все книги",
    bookEmpty: "Информация о книгах не найдена",
    bookError: "Ошибка загрузки информации о книге, попробуйте позже",
    menuError: "Ошибка загрузки данных категории, попробуйте позже",
    searchResult: "Найдено {resultCount} книг, соответствующих условиям поиска",
    searchEmpty: "Книги, соответствующие условиям поиска, не найдены",
  },

  bookBox: {
    imgAlt: "Обложка",
    scoreTitle: "Рейтинг:",
    scoreInfo: "{score} из 5, оценили {numScore} пользователей",
    scoreNone: "Рейтинг отсутствует",
    author: "Автор:",
    menu: "Категория:",
    press: "Издательство:",
    price: "Цена:",
    info: "Подробнее:",
    num: "Количество на складе:",
    adddate: "Дата поступления:",
    messageTitle: "Отзывы читателей",
    messageNone: "Отзывов нет",
    btnMsg: "Взять в аренду",
    noneCredit: "Недостаточный рейтинг пользователя, операция невозможна",
    login: "Войдите в систему для выполнения операции",
    favorite: "Добавить в избранное",
    cancelFavorite: "Удалить из избранного",
    addFavoriteSuccess: "Успешно добавлено в избранное. Проверьте в разделе 'Мои избранные' в пользовательском центре",
    addFavoriteFail: "Ошибка добавления в избранное",
    cancelFavoriteSuccess: "Успешно удалено из избранного",
    cancelFavoriteFail: "Ошибка удаления из избранного",
    messageError: "Ошибка загрузки отзывов, попробуйте позже",
    userInfoNone: "Информация о пользователе не найдена",
    userInfoError: "Ошибка загрузки данных пользователя, попробуйте позже",
    borrow: "Взять в аренду",
    view: "Посмотреть в центре книг",
  },

  borrowBox: {
    imgAlt: "Обложка",
    author: "Автор:",
    menu: "Категория:",
    press: "Издательство:",
    price: "Цена:",
    info: "Подробнее:",
    num: "Количество на складе:",
    adddate: "Дата поступления:",
    borrowDays: "дней аренды (максимум 30 дней):",
    borrowDaysPlaceholder: "Введите количество дней:",
    overDate: "Предполагаемая дата:",
    handleBorrow: "Подтвердить аренду",
    handleCancel: "Отмена",
    loginError: "Сначала войдите в систему",
    formError: "Заполните количество дней аренды и дату возврата",
    emptyError: "Аренда невозможна, недостаточно книг на складе",
    overDaysError: "Количество дней аренды не может превышать 30",
    borrowSuccess: "Успешная аренда. Проверьте в разделе 'Мои аренды' в пользовательском центре",
    borrowRepeat: "Вы уже арендовали эту книгу",
    borrowFail: "Ошибка аренды, попробуйте позже",
  },

  userForum: {
    illegalTitle: "Нарушающий комментарий",
    illegalInfo: "[Этот комментарий был заблокирован из-за нарушения]",
    yourself: "Вы",
    anonymous: "Анонимный пользователь",
    title: "Введите заголовок вашего комментария",
    info: "Введите текст вашего комментария",
    submit: "Опубликовать",
    isAnonymous: "Опубликовать анонимно",
    borrowMsg: "Показать отзывы об аренде",
    loginFirst: "Сначала войдите в систему для публикации",
    defaultBoxMsg: "Загрузка комментариев форума...",
    emptyBoxMsg: "Комментарии форума не найдены",
    errorBoxMsg: "Ошибка загрузки комментариев форума",
    updateError: "Ошибка обновления данных форума",
    emptyError: "Заголовок или содержание комментария не заполнены",
    addError: "Ошибка добавления комментария форума",
    delSuccess: "Комментарий форума успешно удален",
    delError: "Ошибка удаления комментария форума",
  },

  userSetting: {
    personalInfo: "Основная информация учетной записи",
    personalInfoTip: "Информация, предоставленная вами при регистрации, включает имя пользователя, электронную почту и дату регистрации",
    username: "Имя пользователя:",
    superAdmin: "[Суперадминистратор]",
    admin: "[Администратор]",
    user: "[Пользователь]",
    email: "Электронная почта:",
    registerDate: "Дата регистрации:",
    edit: "Изменить информацию учетной записи",
    security: "Информация безопасности учетной записи",
    securityTip: "Для защиты вашей учетной записи рекомендуется регулярно менять пароль и управлять информацией",
    changePassword: "Изменить пароль",
    delAccount: "Удалить учетную запись",
    credit: "Рейтинг учетной записи",
    creditTip: "Ваши действия влияют на рейтинг. При низком рейтинге доступ к некоторым функциям будет ограничен",
    currentCredit: "Текущий рейтинг:",
    creditContent: "Система рейтинга стимулирует соблюдение правил и поддержание положительной среды. Рейтинг динамически изменяется на основе поведения пользователя, обеспечивая честность и безопасность.",
    goCredit: "Просмотреть детали рейтинга",
    guideTitle: "Центр пользователя",
    editUser: "Изменить данные учетной записи",
    editPassword: "Изменить пароль учетной записи",

    guideList: {
      collection: "Мои избранные",
      borrow: "Мои аренды",
      comment: "Мои комментарии",
      credit: "Мой рейтинг",
    },

    selectUsersByUserName: {
      empty: "Информация о пользователях не найдена",
      error: "Ошибка загрузки информации о пользователях, попробуйте позже",
    }
  },

  editUser: {
    title: "Изменить личную информацию",
    subTitle: "Дважды щелкните по элементу формы для редактирования",
    username: "Имя пользователя",
    email: "Электронная почта",
    tip: "Совет: дважды щелкните по элементу формы для редактирования, нажмите Enter для сохранения",
    submit: "Сохранить",

    selectUsersByUserName: {
      empty: "Информация о пользователях не найдена",
      error: "Ошибка загрузки информации о пользователях, попробуйте позже",
    },

    submitForm: {
      empty: "Имя пользователя и электронная почта не могут быть пустыми",
      success: "Информация о пользователе успешно обновлена",
      error: "Ошибка обновления информации, попробуйте позже",
    },
  },

  editPassword: {
    username: "Имя пользователя",
    oldPassword: "Старый пароль",
    oldPasswordPlaceholder: "Введите ваш старый пароль",
    newPassword: "Новый пароль",
    newPasswordPlaceholder: "Введите ваш новый пароль",
    confirmPassword: "Подтвердите пароль",
    confirmPasswordPlaceholder: "Введите ваш новый пароль еще раз",
    submit: "Сбросить пароль",

    submitForm: {
      empty: "Пожалуйста, заполните все поля",
      notMatch: "Пароли не совпадают",
      short: "Пароль должен быть не менее 6 символов",
      error: "Неверный старый пароль, попробуйте еще раз",
    }
  },

  delUser: {
    title: "Предупреждение",
    info: "Это действие выйдет из системы и удалит все ваши пользовательские данные",
    confirm: "Подтвердить",
    cancel: "Отмена",
    error: "Не удалось выйти из системы, попробуйте позже",
  },

  userCollection: {
    titleInfo: "Просмотр информации о книге",
    titleDisabled: "Книга снята с публикации",
    imgAlt: "Обложка",
    num: "Количество на складе:",
    firstPage: "Первая",
    prevPage: "Предыдущая",
    nextPage: "Следующая",
    lastPage: "Последняя",
    pageInfo: "Страница {currentPage} из {totalPages}",
    btnMsg: "Просмотреть в библиотечном центре",
    defaultBoxMsg: "Загрузка избранных книг...",

    selectFavorite: {
      empty: "Книги не найдены",
      error: "Не удалось загрузить информацию о книгах, попробуйте позже",
    },

    menuError: "Ошибка загрузки информации о категориях, попробуйте позже",
  },

  userBorrow: {
    searchPlaceholder: "Поиск по названию книги или дате заимствования",
    showRecentDays: "Только за последние семь дней",
    startDate: "Дата заимствования",
    overDate: "Ожидаемая дата возврата",
    days: "Предполагаемое количество дней заимствования",
    bookname: "Название книги",
    returnDate: "Фактическая дата возврата",
    recordDays: "Фактическое количество дней заимствования",
    creditDelta: "Изменение рейтинга",
    state: "Статус",
    actions: "Действия",
    borrowing: "В процессе заимствования",
    returned: "Возвращено",
    overdue: "Просрочено",
    return: "Вернуть",
    renew: "Продлить",
    pageSize: "Показывать по",
    firstPage: "Первая",
    prevPage: "Предыдущая",
    nextPage: "Следующая",
    lastPage: "Последняя",
    pageInfo: "Страница {currentPage} из {totalPages}",
    btnMsg: "Просмотреть в библиотечном центре",
    defaultBoxMsg: "Загрузка записей заимствования...",

    fetchBorrowBorrows: {
      empty: "Записи заимствования не найдены",
      error: "Ошибка загрузки записей заимствования, попробуйте позже",
    },

    selectUsersByUserName: {
      empty: "Информация о пользователе не найдена",
      error: "Ошибка загрузки информации о пользователях, попробуйте позже",
    },

    handleReturn: {
      login: "Пожалуйста, войдите в систему",
      success: "Успешно возвращено, пожалуйста, оцените заимствование",
      fail: "Ошибка возврата, попробуйте позже",
    },

    handleRenew: {
      login: "Пожалуйста, войдите в систему",
      credit: "Недостаточно рейтинга для продления",
      fail: "Ошибка продления, попробуйте позже",
    },
  },

  renewBox: {
    imgAlt: "Обложка",
    author: "Автор:",
    menu: "Категория:",
    press: "Издательство:",
    price: "Цена:",
    info: "Дополнительная информация:",
    num: "Количество на складе:",
    adddate: "Дата добавления:",
    renewDays: "Продление займа (максимум 7 дней):",
    renewDaysPlaceholder: "Введите количество дней:",
    overDate: "Ожидаемая дата возврата:",
    renew: "Подтвердить продление",
    cancel: "Отмена",

    handleRenew: {
      login: "Пожалуйста, войдите в систему",
      formEmpty: "Пожалуйста, заполните количество дней и ожидаемую дату возврата",
      bookEmpty: "Недостаточно книг на складе для продления",
      overDays: "Количество дней продления не может превышать 7 дней",
      success: "Успешное продление: {bookname}",
      bookRepeat: "Вы уже продлили эту книгу",
      fail: "Ошибка продления, попробуйте позже",
    },
  },

  returnBox: {
    messagePlaceholder: "Введите комментарий к заимствованию",
    btnMsg: "Подтвердить",

    submitRating: {
      empty: "Информация о книге или оценка не заполнены",
      fail: "Ошибка отправки оценки, попробуйте позже",
    },

    addMessage: {
      fail: "Ошибка добавления сообщения на форум, попробуйте позже",
    },
  },

  userComment: {
    searchPlaceholder: "Поиск по названию сообщения или содержанию",
    illegalTitle: "[Нарушение правил]",
    illegalInfo: "[Сообщение заблокировано за нарушение правил]",
    delBtn: "Удалить",
    emptyMsg: "Сообщения не найдены",

    selectMessageByUserName: {
      error: "Ошибка загрузки сообщений, попробуйте позже",
    },

    delComment: {
      success: "Сообщение успешно удалено",
      fail: "Ошибка удаления сообщения, попробуйте позже",
    },
  },

  userCredit: {
    searchPlaceholder: "Поиск по деталям рейтинга или дате",
    showRecentDays: "Только за последние семь дней",
    delete: "Очистить записи рейтинга",
    date: "Дата",
    creditCount: "Текущий рейтинг",
    info: "Детали",
    pageSize: "Показывать по",
    firstPage: "Первая",
    prevPage: "Предыдущая",
    nextPage: "Следующая",
    lastPage: "Последняя",
    pageInfo: "Страница {currentPage} из {totalPages}",
    defaultBoxMsg: "Загрузка данных рейтинга...",

    selectCredits: {
      empty: "Записи рейтинга не найдены",
      error: "Ошибка загрузки данных рейтинга, попробуйте позже",
    },

    deleteAll: {
      success: "Очистка данных рейтинга выполнена успешно",
      empty: "Записи рейтинга отсутствуют",
      fail: "Ошибка очистки данных рейтинга, попробуйте позже",
    },
  },

  adminHome: {
    realTimeData: "Данные в реальном времени",
    onlineUsers: "Онлайн пользователи",
    bookCount: "Книг в библиотеке",
    borrowCount: "Записи заимствования",
    logCount: "Журналы",
    cpuData: "Ресурсы CPU сервера",
    cpuType: "Модель CPU:",
    cpuSpeed: "Частота CPU (ГГц):",
    memData: "Ресурсы памяти сервера",
    memTotal: "Общая память:",
    memUsed: "Использовано:",
    userActivity: "Активность пользователей",
    borrowLog: "Записи заимствования",
    sysLog: "Системные журналы",

    getDailyUser: {
      empty: "Информация о пользовательской активности не найдена",
      error: "Ошибка загрузки активности пользователей, попробуйте позже",
    },

    selectBooks: {
      empty: "Записи о книгах не найдены",
      error: "Ошибка загрузки информации о книгах, попробуйте позже",
    },

    selectLogs: {
      empty: "Журналы не найдены",
      error: "Ошибка загрузки журналов, попробуйте позже",
    },
  },

  adminLeftGuide: {
    title: "Консоль администратора",

    menuList: {
      book: "Управление книгами",
      menu: "Управление категориями",
      borrow: "Управление заимствованиями",
      notice: "Управление объявлениями",
      forum: "Управление форумом",
      user: "Управление пользователями",
      log: "Управление журналами",
    },
  },

  adminBook: {
    searchPlaceholder: "Поиск по названию книги, автору, категории, издательству",
    addBook: "Добавить книгу",
    showRecentDays: "Показывать только за последние семь дней",
    enableSelection: "Включить флажки",
    selectAll: "Выбрать все",
    closeSelected: "Закрыть",
    openSelected: "Открыть",
    deleteSelected: "Удалить",
    name: "Название книги",
    author: "Автор",
    menu: "Категория",
    press: "Издательство",
    price: "Цена",
    num: "Количество в наличии",
    cover: "Обложка",
    info: "Подробнее",
    state: "Статус",
    score: "Оценка",
    adddate: "Дата добавления",
    delete: "Удалить",
    imgAlt: "Обложка",
    editTitle: "Дважды щелкните для редактирования",
    noBook: "Книги не найдены",
    open: "Открыто",
    close: "Закрыто",
    pageSize: "Количество на странице",
    firstPage: "Первая",
    prevPage: "Предыдущая",
    nextPage: "Следующая",
    lastPage: "Последняя",
    pageInfo: "Страница {currentPage} из {totalPages}",
    defaultBoxMsg: "Загрузка информации о книгах...",

    selectMenuTitles: {
      error: "Не удалось загрузить данные категорий, попробуйте позже",
    },

    selectBooks: {
      empty: "Книги не найдены",
      error: "Не удалось загрузить данные о книгах, попробуйте позже",
    },

    delBook: {
      success: "Книга успешно удалена",
      fail: "Не удалось удалить книгу, попробуйте позже",
    },

    deleteSelectedBooks: {
      success: "Выбранные книги успешно удалены",
      empty: "Не выбраны книги",
      fail: "Не удалось удалить книги, попробуйте позже",
    },

    openSelectedBooks: {
      success: "Выбранные книги успешно открыты",
      empty: "Не выбраны книги",
      fail: "Не удалось открыть книги, попробуйте позже",
    },

    closeSelectedBooks: {
      success: "Выбранные книги успешно закрыты",
      empty: "Не выбраны книги",
      fail: "Не удалось закрыть книги, попробуйте позже",
    },

    updateBook: {
      fail: "Не удалось обновить книгу, попробуйте позже",
    }
  },

  addBook: {
    title: "Поле",
    input: "Ввод",
    name: "Название книги",
    namePlaceholder: "Введите название книги",
    author: "Автор",
    authorPlaceholder: "Введите автора",
    menu: "Категория",
    menuPlaceholder: "Выберите категорию",
    price: "Цена",
    pricePlaceholder: "Введите цену",
    press: "Издательство",
    pressPlaceholder: "Введите издательство",
    num: "Количество в наличии",
    numPlaceholder: "Введите количество",
    cover: "Обложка",
    info: "Подробнее",
    infoPlaceholder: "Введите описание",
    state: "Статус",
    open: "Открыто",
    close: "Закрыто",
    autoPush: "Автоматическая публикация объявления",
    autoPushTip: "При включении объявления автоматически публикуются при добавлении книги, их можно просматривать в разделе \"Объявления\" на панели администратора.",
    adddate: "Дата добавления",
    submit: "Отправить",

    fetchMenuTitles: {
      fail: "Не удалось загрузить категории, попробуйте позже",
    },

    handleImageChange: {
      alert: "Загрузите изображение в формате (jpg, jpeg, png, gif)",
      fail: "Загрузка не удалась, попробуйте позже",
    },

    submitForm: {
      empty: "Информация о книге неполная",
      success: "Книга успешно добавлена",
      noticeFail: "Не удалось опубликовать объявление, попробуйте позже",
      fail: "Не удалось добавить книгу, попробуйте позже",
    }
  },

  adminMenu: {
    searchPlaceholder: "Поиск по названию категории",
    addMenu: "Добавить категорию",
    showRecentDays: "Показывать только за последние семь дней",
    enableSelection: "Включить флажки",
    selectAll: "Выбрать все",
    delete: "Удалить",
    title: "Название категории",
    pageSize: "Количество на странице",
    firstPage: "Первая",
    prevPage: "Предыдущая",
    nextPage: "Следующая",
    lastPage: "Последняя",
    pageInfo: "Страница {currentPage} из {totalPages}",
    defaultBoxMsg: "Загрузка информации о категориях...",
    noMenu: "Категории не найдены",

    selectMenus: {
      empty: "Категории не найдены",
      fail: "Не удалось загрузить данные категорий, попробуйте позже",
    },

    delMenu: {
      fail: "Не удалось удалить категорию, попробуйте позже",
    },

    deleteSelectedMenus: {
      empty: "Не выбраны категории",
      success: "Выбранные категории успешно удалены",
      fail: "Не удалось удалить категорию, попробуйте позже",
    },

    updateMenu: {
      fail: "Не удалось обновить категорию, попробуйте позже",
    }
  },

  addMenu: {
    title: "Поле",
    input: "Ввод",
    name: "Название категории",
    namePlaceholder: "Введите название категории",
    submit: "Отправить",

    submitForm: {
      empty: "Информация о категории неполная",
      success: "Категория успешно добавлена",
      fail: "Не удалось добавить категорию, попробуйте позже",
    }
  },

  adminBorrow: {
    searchPlaceholder: "Поиск по данным о заимствовании или имени пользователя",
    add: "Добавить заимствование",
    showRecentDays: "Показывать только за последние семь дней",
    enableSelection: "Включить флажки",
    selectAll: "Выбрать все",
    returnSelected: "Возвратить",
    delete: "Удалить",
    user: "Имя пользователя",
    book: "Название книги",
    startDate: "Дата заимствования",
    overDate: "Предполагаемая дата возврата",
    days: "Предполагаемое количество дней",
    returnDate: "Фактическая дата возврата",
    recordDays: "Фактическое количество дней",
    overtime: "Просрочка",
    state: "Статус заимствования",
    credit: "Кредитные баллы",
    adddate: "Дата добавления",
    overdue: "Просрочено",
    returned: "Возвращено",
    borrowing: "В процессе заимствования",
    pageSize: "Количество на странице",
    firstPage: "Первая",
    prevPage: "Предыдущая",
    nextPage: "Следующая",
    lastPage: "Последняя",
    pageInfo: "Страница {currentPage} из {totalPages}",
    defaultBoxMsg: "Загрузка данных о заимствованиях...",
    noBorrow: "Записи о заимствованиях не найдены",

    selectBorrows: {
      empty: "Записи о заимствованиях не найдены",
      fail: "Не удалось загрузить данные о заимствованиях, попробуйте позже",
    },

    delBorrow: {
      fail: "Не удалось удалить запись о заимствовании, попробуйте позже",
    },

    deleteSelectedBorrows: {
      empty: "Не выбраны записи",
      success: "Выбранные записи успешно удалены",
      fail: "Не удалось удалить записи о заимствованиях, попробуйте позже",
    },

    updateBorrow: {
      fail: "Не удалось обновить запись о заимствовании, попробуйте позже",
    },

    returnSelectedBorrows: {
      empty: "Не выбраны записи",
      success: "Выбранные записи успешно возвращены",
      fail: "Не удалось вернуть записи, попробуйте позже",
    }
  },

  addBorrow: {
    title: "Поле",
    input: "Ввод",
    username: "Пользователь для заимствования",
    usernamePlaceholder: "Выберите пользователя для заимствования",
    book: "Заимствованная книга",
    bookPlaceholder: "Выберите книгу для заимствования",
    startdate: "Дата заимствования",
    overdate: "Ожидаемая дата возврата",
    days: "Ожидаемое количество дней заимствования",
    daysPlaceholder: "Введите ожидаемое количество дней заимствования",
    adduser: "Добавить пользователя",
    adddate: "Добавить дату",
    submit: "Отправить",

    selectBooks: {
      empty: "Не найдено записей о книгах",
      fail: "Ошибка загрузки информации о книгах, попробуйте позже",
    },

    selectUsers: {
      fail: "Ошибка загрузки информации о пользователях, попробуйте позже",
    },

    submitForm: {
      empty: "Информация о заимствовании неполная",
      success: "Заимствование успешно добавлено",
      fail: "Не удалось добавить заимствование, попробуйте позже",
    }
  },

  adminNotice: {
    searchPlaceholder: "Поиск по названию объявления, роли или регистрационной информации",
    add: "Добавить объявление",
    showRecentDays: "Показывать только за последние семь дней",
    enableSelection: "Включить флажки",
    selectAll: "Выбрать все",
    top: "Закрепить",
    normal: "Обычный",
    untop: "Отменить закрепление",
    delete: "Удалить",
    title: "Заголовок объявления",
    info: "Содержимое",
    isTop: "Закрепить ли",
    infoTip: "Дважды щелкните, чтобы войти в режим редактирования",
    defaultBoxMsg: "Загрузка информации об объявлениях...",
    noNotice: "Объявлений не найдено",
    pageSize: "Записей на странице",
    firstPage: "Первая",
    prevPage: "Предыдущая",
    nextPage: "Следующая",
    lastPage: "Последняя",
    pageInfo: "Страница {currentPage} из {totalPages}",

    selectNotices: {
      empty: "Не найдено записей о объявлениях",
      fail: "Ошибка загрузки информации об объявлениях, попробуйте позже",
    },

    delNotice: {
      fail: "Не удалось удалить объявление, попробуйте позже",
    },

    deleteSelectedNotices: {
      empty: "Не выбрано ни одного объявления",
      success: "Удаление выбранных объявлений прошло успешно",
      fail: "Ошибка удаления объявления, попробуйте позже",
    },

    topSelectedNotices: {
      empty: "Не выбрано ни одного объявления",
      success: "Закрепление выбранных объявлений прошло успешно",
      fail: "Ошибка закрепления объявления, попробуйте позже",
    },

    untopSelectedNotices: {
      empty: "Не выбрано ни одного объявления",
      success: "Отмена закрепления выбранных объявлений прошла успешно",
      fail: "Ошибка отмены закрепления объявления, попробуйте позже",
    },

    updateNotice: {
      fail: "Ошибка обновления объявления, попробуйте позже",
    }
  },

  addNotice: {
    field: "Поле",
    input: "Ввод",
    title: "Заголовок объявления",
    titlePlaceholder: "Введите заголовок объявления",
    info: "Содержимое объявления",
    infoPlaceholder: "Введите содержимое объявления",
    adduser: "Добавить пользователя",
    adddate: "Добавить дату",
    isTop: "Закрепить ли",
    isTopPlaceholder: "Выберите, нужно ли закрепить",
    top: "Закрепить",
    normal: "Обычный",
    submit: "Отправить",

    submitForm: {
      empty: "Информация о объявлении неполная",
      success: "Объявление успешно добавлено",
      fail: "Не удалось добавить объявление, попробуйте позже",
    }
  },

  adminForum: {
    searchPlaceholder: "Поиск по названию сообщения, пользователю или дате",
    add: "Добавить сообщение",
    showRecentDays: "Показывать только за последние семь дней",
    enableSelection: "Включить флажки",
    selectAll: "Выбрать все",
    ban: "Заблокировать",
    unban: "Разблокировать",
    delete: "Удалить",
    title: "Заголовок сообщения",
    info: "Содержимое сообщения",
    adduser: "Пользователь, который написал",
    adddate: "Дата публикации",
    views: "Просмотры",
    likes: "Лайки",
    state: "Состояние",
    infoTip: "Дважды щелкните, чтобы войти в режим редактирования",
    normal: "Обычный",
    banned: "Заблокировано",
    defaultBoxMsg: "Загрузка информации о сообщениях...",
    noMessage: "Сообщений не найдено",
    pageSize: "Записей на странице",
    firstPage: "Первая",
    prevPage: "Предыдущая",
    nextPage: "Следующая",
    lastPage: "Последняя",
    pageInfo: "Страница {currentPage} из {totalPages}",

    selectMessages: {
      empty: "Не найдено записей о сообщениях",
      fail: "Ошибка загрузки информации о сообщениях, попробуйте позже",
    },

    delMessage: {
      fail: "Не удалось удалить сообщение, попробуйте позже",
    },

    deleteSelectedMessages: {
      empty: "Не выбрано ни одного сообщения",
      success: "Удаление выбранных сообщений прошло успешно",
      fail: "Ошибка удаления сообщения, попробуйте позже",
    },

    banSelectedMessages: {
      empty: "Не выбрано ни одного сообщения",
      success: "Блокировка выбранных сообщений прошла успешно",
      fail: "Ошибка блокировки сообщения, попробуйте позже",
    },

    unbanSelectedMessages: {
      empty: "Не выбрано ни одного сообщения",
      success: "Разблокировка выбранных сообщений прошла успешно",
      fail: "Ошибка разблокировки сообщения, попробуйте позже",
    },

    updateMessage: {
      fail: "Ошибка обновления сообщения, попробуйте позже",
    }
  },

  addMessage: {
    field: "Поле",
    input: "Ввод",
    title: "Заголовок сообщения",
    titlePlaceholder: "Введите заголовок сообщения",
    info: "Содержимое сообщения",
    infoPlaceholder: "Введите содержимое сообщения",
    adduser: "Добавить пользователя",
    adduserPlaceholder: "Введите добавленного пользователя",
    adddate: "Добавить дату",
    submit: "Отправить",

    submitForm: {
      empty: "Информация о сообщении неполная",
      success: "Сообщение успешно добавлено",
      fail: "Не удалось добавить сообщение, попробуйте позже",
    }
  },

  adminUser: {
    searchPlaceholder: "Поиск по имени пользователя, дате регистрации или роли",
    add: "Добавить пользователя",
    enableSelection: "Включить флажки",
    selectAll: "Выбрать все",
    ban: "Заблокировать",
    unban: "Разблокировать",
    delete: "Удалить",
    username: "Имя пользователя",
    role: "Роль",
    roleTip: "Эта настройка вступит в силу после повторного входа",
    email: "Электронная почта",
    state: "Состояние",
    credit: "Кредит",
    adddate: "Дата регистрации",
    superAdmin: "Суперадминистратор",
    admin: "Админ",
    user: "Пользователь",
    normal: "Обычный",
    banned: "Заблокирован",
    denied: "Доступ запрещен",
    defaultBoxMsg: "Загрузка информации о пользователях...",
    noUser: "Пользователи не найдены",
    pageSize: "Записей на странице",
    firstPage: "Первая",
    prevPage: "Предыдущая",
    nextPage: "Следующая",
    lastPage: "Последняя",
    pageInfo: "Страница {currentPage} из {totalPages}",

    selectUsers: {
      empty: "Не найдено записей о пользователях",
      fail: "Ошибка загрузки информации о пользователях, попробуйте позже",
    },

    delUser: {
      fail: "Не удалось удалить пользователя, попробуйте позже",
    },

    deleteSelectedUsers: {
      empty: "Не выбрано ни одного пользователя",
      denied: "Недостаточно прав",
      success: "Удаление выбранных пользователей прошло успешно",
      fail: "Ошибка удаления пользователя, попробуйте позже",
    },

    banSelectedUsers: {
      empty: "Не выбрано ни одного пользователя",
      denied: "Недостаточно прав",
      success: "Блокировка выбранных пользователей прошла успешно",
      fail: "Ошибка блокировки пользователя, попробуйте позже",
    },

    unbanSelectedUsers: {
      empty: "Не выбрано ни одного пользователя",
      denied: "Недостаточно прав",
      success: "Разблокировка выбранных пользователей прошла успешно",
      fail: "Ошибка разблокировки пользователя, попробуйте позже",
    },

    updateUser: {
      fail: "Ошибка обновления пользователя, попробуйте позже",
    }
  },

  addUser: {
    field: "Поле",
    input: "Ввод",
    username: "Имя пользователя",
    usernamePlaceholder: "Введите имя пользователя",
    state: "Состояние",
    normal: "Обычный",
    banned: "Заблокирован",
    email: "Электронная почта",
    emailPlaceholder: "Введите адрес электронной почты пользователя",
    adddate: "Дата регистрации",
    submit: "Отправить",

    submitForm: {
      empty: "Имя пользователя и электронная почта обязательны",
      success: "Пользователь успешно добавлен, начальный пароль：{password}",
      fail: "Не удалось добавить пользователя, попробуйте позже",
    }
  },

  adminLog: {
    searchPlaceholder: "Поиск по имени пользователя, IP, типу события, деталям или дате",
    enableLog: "Включить запись журналов",
    showRecentDays: "Показывать только за последние семь дней",
    enableSelection: "Включить флажки",
    selectAll: "Выбрать все",
    delete: "Удалить",
    username: "Имя пользователя",
    type: "Тип события",
    info: "Детали",
    adddate: "Дата",
    defaultBoxMsg: "Загрузка информации о журналах...",
    noLog: "Журналы не найдены",
    pageSize: "Записей на странице",
    firstPage: "Первая",
    prevPage: "Предыдущая",
    nextPage: "Следующая",
    lastPage: "Последняя",
    pageInfo: "Страница {currentPage} из {totalPages}",

    toggleLog: {
      response: "Запись журналов {status}",
      open: "Включить",
      close: "Отключить",
      fail: "Не удалось включить запись журналов, попробуйте позже",
    },

    selectLogs: {
      empty: "Не найдено записей в журналах",
      fail: "Ошибка загрузки информации о журналах, попробуйте позже",
    },

    delLog: {
      fail: "Не удалось удалить запись журнала, попробуйте позже",
    },

    deleteSelectedLogs: {
      empty: "Не выбрано ни одной записи журнала",
      success: "Удаление выбранных записей прошло успешно",
      fail: "Ошибка удаления записи журнала, попробуйте позже",
    },

    openInfo: {
      message: "Посмотреть детали：",
    }
  }
}