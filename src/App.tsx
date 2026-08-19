import React, { useState } from 'react';
import { InstagramLogo } from './components/InstagramLogo';
import { HeroVisual } from './components/HeroVisual';
import { LoginForm } from './components/LoginForm';
import { Footer } from './components/Footer';
import {
  ForgotPasswordModal,
  CreateAccountModal,
  FacebookModal,
} from './components/Modals';
import { translations, LanguageCode } from './data/translations';

export default function App() {
  const [currentLang, setCurrentLang] = useState<LanguageCode>('en');
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [isCreateAccountOpen, setIsCreateAccountOpen] = useState(false);
  const [isFacebookOpen, setIsFacebookOpen] = useState(false);

  const t = translations[currentLang];

  return (
    <div
      id="instagram-app-root"
      className="min-h-screen bg-white text-neutral-900 flex flex-col justify-between selection:bg-pink-100 selection:text-pink-900 transition-colors duration-200"
    >
      {/* Top Header with Instagram Logo: on desktop top-left, on mobile centered */}
      <header className="w-full max-w-7xl mx-auto px-6 sm:px-12 pt-8 sm:pt-10 flex justify-center lg:justify-start">
        <InstagramLogo size={64} />
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-8 py-6 w-full">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Official Hero Artwork (visible on desktop/tablet lg+ screens, exactly like Screenshot 1) */}
          <div className="hidden lg:flex lg:col-span-7 justify-center items-center">
            <HeroVisual t={t} />
          </div>

          {/* Right Column: Login Form Container (centered on mobile, column on desktop) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start items-center w-full py-4">
            <div className="w-full max-w-[360px]">
              <LoginForm
                t={t}
                onForgotPassword={() => setIsForgotPasswordOpen(true)}
                onCreateAccount={() => setIsCreateAccountOpen(true)}
                onFacebookLogin={() => setIsFacebookOpen(true)}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onLanguageChange={(lang) => setCurrentLang(lang)}
        t={t}
      />

      {/* Interactive Modals */}
      <ForgotPasswordModal
        isOpen={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
        t={t}
      />

      <CreateAccountModal
        isOpen={isCreateAccountOpen}
        onClose={() => setIsCreateAccountOpen(false)}
        t={t}
      />

      <FacebookModal
        isOpen={isFacebookOpen}
        onClose={() => setIsFacebookOpen(false)}
      />
    </div>
  );
}
