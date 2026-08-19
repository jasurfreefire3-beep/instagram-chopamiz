export type LanguageCode = 'en' | 'uz' | 'ru' | 'es' | 'tr';

export interface Translation {
  heroTitle1: string;
  heroYour: string;
  heroClose: string;
  heroFriends: string;
  loginTitle: string;
  identifierPlaceholder: string;
  passwordPlaceholder: string;
  show: string;
  hide: string;
  logIn: string;
  forgotPassword: string;
  logInWithFacebook: string;
  createNewAccount: string;
  copyright: string;
  // Modal texts
  resetPasswordTitle: string;
  resetPasswordDesc: string;
  sendLoginLink: string;
  backToLogin: string;
  signUpTitle: string;
  signUpDesc: string;
  fullNamePlaceholder: string;
  usernamePlaceholder: string;
  signUpButton: string;
  alreadyHaveAccount: string;
  successLogin: string;
}

export const translations: Record<LanguageCode, Translation> = {
  en: {
    heroTitle1: 'See everyday moments from',
    heroYour: 'your',
    heroClose: 'close',
    heroFriends: 'friends.',
    loginTitle: 'Log into Instagram',
    identifierPlaceholder: 'Mobile number, username or email',
    passwordPlaceholder: 'Password',
    show: 'Show',
    hide: 'Hide',
    logIn: 'Log in',
    forgotPassword: 'Forgot password?',
    logInWithFacebook: 'Log in with Facebook',
    createNewAccount: 'Create new account',
    copyright: '© 2026 Instagram from Meta',
    resetPasswordTitle: 'Trouble logging in?',
    resetPasswordDesc: "Enter your email, phone, or username and we'll send you a link to get back into your account.",
    sendLoginLink: 'Send login link',
    backToLogin: 'Back to login',
    signUpTitle: 'Sign up to see photos and videos from your friends.',
    signUpDesc: 'By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.',
    fullNamePlaceholder: 'Full Name',
    usernamePlaceholder: 'Username',
    signUpButton: 'Sign up',
    alreadyHaveAccount: 'Have an account? Log in',
    successLogin: 'Successfully logged in!',
  },
  uz: {
    heroTitle1: 'Eng yaqin do\'stlaringizning',
    heroYour: '',
    heroClose: 'kundalik',
    heroFriends: 'lahzalarini ko\'ring.',
    loginTitle: 'Instagramga kirish',
    identifierPlaceholder: 'Telefon raqami, foydalanuvchi nomi yoki email',
    passwordPlaceholder: 'Parol',
    show: 'Ko\'rsatish',
    hide: 'Yashirish',
    logIn: 'Kirish',
    forgotPassword: 'Parolni unutdingizmi?',
    logInWithFacebook: 'Facebook orqali kirish',
    createNewAccount: 'Yangi hisob yaratish',
    copyright: '© 2026 Instagram from Meta',
    resetPasswordTitle: 'Kirishda muammo bormi?',
    resetPasswordDesc: 'Email, telefon raqamingiz yoki foydalanuvchi nomingizni kiriting va biz hisobingizga kirish havolasini yuboramiz.',
    sendLoginLink: 'Kirish havolasini yuborish',
    backToLogin: 'Kirishga qaytish',
    signUpTitle: 'Do\'stlaringizning fotosuratlari va videolarini ko\'rish uchun ro\'yxatdan o\'ting.',
    signUpDesc: 'Ro\'yxatdan o\'tish orqali siz bizning Shartlar, Maxfiylik siyosati va Cookie fayllari siyosatiga rozilik bildirasiz.',
    fullNamePlaceholder: 'To\'liq ism',
    usernamePlaceholder: 'Foydalanuvchi nomi',
    signUpButton: 'Ro\'yxatdan o\'tish',
    alreadyHaveAccount: 'Hisobingiz bormi? Kirish',
    successLogin: 'Muvaffaqiyatli kirdingiz!',
  },
  ru: {
    heroTitle1: 'Смотрите моменты из жизни ваших',
    heroYour: '',
    heroClose: 'близких',
    heroFriends: 'друзей.',
    loginTitle: 'Вход в Instagram',
    identifierPlaceholder: 'Телефон, имя пользователя или эл. адрес',
    passwordPlaceholder: 'Пароль',
    show: 'Показать',
    hide: 'Скрыть',
    logIn: 'Войти',
    forgotPassword: 'Забыли пароль?',
    logInWithFacebook: 'Войти через Facebook',
    createNewAccount: 'Создать новый аккаунт',
    copyright: '© 2026 Instagram from Meta',
    resetPasswordTitle: 'Не удается войти?',
    resetPasswordDesc: 'Введите свой электронный адрес, номер телефона или имя пользователя, и мы отправим вам ссылку для восстановления доступа к аккаунту.',
    sendLoginLink: 'Отправить ссылку для входа',
    backToLogin: 'Вернуться к входу',
    signUpTitle: 'Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.',
    signUpDesc: 'Регистрируясь, вы принимаете наши Условия, Политику конфиденциальности и Политику в отношении файлов cookie.',
    fullNamePlaceholder: 'Имя и фамилия',
    usernamePlaceholder: 'Имя пользователя',
    signUpButton: 'Регистрация',
    alreadyHaveAccount: 'Есть аккаунт? Войти',
    successLogin: 'Успешный вход!',
  },
  es: {
    heroTitle1: 'Descubre los momentos de tus',
    heroYour: '',
    heroClose: 'mejores',
    heroFriends: 'amigos.',
    loginTitle: 'Iniciar sesión en Instagram',
    identifierPlaceholder: 'Número de celular, usuario o correo',
    passwordPlaceholder: 'Contraseña',
    show: 'Mostrar',
    hide: 'Ocultar',
    logIn: 'Iniciar sesión',
    forgotPassword: '¿Olvidaste tu contraseña?',
    logInWithFacebook: 'Iniciar sesión con Facebook',
    createNewAccount: 'Crear cuenta nueva',
    copyright: '© 2026 Instagram from Meta',
    resetPasswordTitle: '¿Tienes problemas para iniciar sesión?',
    resetPasswordDesc: 'Ingresa tu correo, teléfono o usuario y te enviaremos un enlace para recuperar el acceso a tu cuenta.',
    sendLoginLink: 'Enviar enlace de acceso',
    backToLogin: 'Volver a iniciar sesión',
    signUpTitle: 'Regístrate para ver fotos y videos de tus amigos.',
    signUpDesc: 'Al registrarte, aceptas nuestras Condiciones, la Política de privacidad y la Política de cookies.',
    fullNamePlaceholder: 'Nombre completo',
    usernamePlaceholder: 'Nombre de usuario',
    signUpButton: 'Registrarte',
    alreadyHaveAccount: '¿Tienes una cuenta? Inicia sesión',
    successLogin: '¡Inicio de sesión exitoso!',
  },
  tr: {
    heroTitle1: 'Yakın arkadaşlarınızın',
    heroYour: '',
    heroClose: 'günlük',
    heroFriends: 'anlarını görün.',
    loginTitle: 'Instagram\'a Giriş Yap',
    identifierPlaceholder: 'Telefon numarası, kullanıcı adı veya e-posta',
    passwordPlaceholder: 'Şifre',
    show: 'Göster',
    hide: 'Gizle',
    logIn: 'Giriş Yap',
    forgotPassword: 'Şifreni mi unuttun?',
    logInWithFacebook: 'Facebook ile Giriş Yap',
    createNewAccount: 'Yeni hesap oluştur',
    copyright: '© 2026 Instagram from Meta',
    resetPasswordTitle: 'Giriş Yaparken Sorun mu Yaşıyorsun?',
    resetPasswordDesc: 'E-posta adresini, telefon numaranı veya kullanıcı adını gir ve hesabına yeniden erişebilmen için sana bir bağlantı gönderelim.',
    sendLoginLink: 'Giriş Bağlantısı Gönder',
    backToLogin: 'Giriş ekranına dön',
    signUpTitle: 'Arkadaşlarının fotoğraf ve videolarını görmek için kaydol.',
    signUpDesc: 'Kaydolarak Koşullarımızı, Gizlilik İlkemizi ve Çerezler İlkemizi kabul etmiş olursun.',
    fullNamePlaceholder: 'Adı Soyadı',
    usernamePlaceholder: 'Kullanıcı Adı',
    signUpButton: 'Kaydol',
    alreadyHaveAccount: 'Hesabın var mı? Giriş Yap',
    successLogin: 'Giriş başarılı!',
  },
};
