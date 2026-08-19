import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Lock, CheckCircle2, Facebook, UserPlus, ArrowLeft, Loader2 } from 'lucide-react';
import { InstagramLogo } from './InstagramLogo';
import { Translation } from '../data/translations';

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translation;
}

export const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({
  isOpen,
  onClose,
  t,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSent(false);
    setInputVal('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="bg-white w-full max-w-sm rounded-[24px] overflow-hidden shadow-2xl border border-neutral-200 relative p-6 text-center"
          >
            <button
              onClick={handleReset}
              className="absolute top-4 right-4 p-1 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lock Graphic */}
            <div className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-neutral-900 flex items-center justify-center">
              <Lock className="w-10 h-10 text-neutral-900 stroke-[1.5]" />
            </div>

            <h3 className="text-base font-bold text-neutral-900 mb-2">
              {t.resetPasswordTitle}
            </h3>

            {isSent ? (
              <div className="py-4">
                <div className="flex items-center justify-center text-green-600 mb-2">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <p className="text-xs text-neutral-600 mb-6">
                  We've sent a link to <span className="font-semibold text-neutral-900">{inputVal}</span> to access your account.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full h-10 rounded-full bg-[#0095F6] text-white text-xs font-semibold hover:bg-[#1877F2] transition-colors"
                >
                  OK
                </button>
              </div>
            ) : (
              <>
                <p className="text-xs text-neutral-500 mb-6 leading-relaxed">
                  {t.resetPasswordDesc}
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="Email, phone, or username"
                    className="w-full h-11 px-3.5 bg-white border border-[#dbdbdb] rounded-xl text-xs text-neutral-900 focus:outline-none focus:border-neutral-400"
                    autoFocus
                  />

                  <button
                    type="submit"
                    disabled={!inputVal.trim() || isLoading}
                    className="w-full h-10 rounded-full bg-[#0095F6] text-white text-xs font-semibold hover:bg-[#1877F2] disabled:opacity-60 transition-colors flex items-center justify-center"
                  >
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : t.sendLoginLink}
                  </button>
                </form>
              </>
            )}

            <div className="mt-6 pt-4 border-t border-neutral-100">
              <button
                type="button"
                onClick={handleReset}
                className="text-xs font-semibold text-neutral-900 hover:text-neutral-600"
              >
                {t.backToLogin}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

interface CreateAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translation;
}

export const CreateAccountModal: React.FC<CreateAccountModalProps> = ({
  isOpen,
  onClose,
  t,
}) => {
  const [formData, setFormData] = useState({
    identifier: '',
    fullName: '',
    username: '',
    password: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setFormData({ identifier: '', fullName: '', username: '', password: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="bg-white w-full max-w-sm rounded-[24px] overflow-hidden shadow-2xl border border-neutral-200 relative p-6 text-center"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex justify-center mb-3">
              <InstagramLogo size={48} />
            </div>

            <h3 className="text-sm font-bold text-neutral-700 mb-2 leading-snug px-4">
              {t.signUpTitle}
            </h3>

            {isSuccess ? (
              <div className="py-6">
                <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <h4 className="text-base font-bold text-neutral-900 mb-1">Account Created!</h4>
                <p className="text-xs text-neutral-600 mb-6">
                  Welcome to Instagram, @{formData.username || 'new_user'}!
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full h-10 rounded-full bg-[#0095F6] text-white text-xs font-semibold hover:bg-[#1877F2]"
                >
                  Start Exploring
                </button>
              </div>
            ) : (
              <>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 mt-4 text-left">
                  <input
                    type="text"
                    required
                    placeholder={t.identifierPlaceholder}
                    value={formData.identifier}
                    onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
                    className="w-full h-10 px-3 bg-white border border-[#dbdbdb] rounded-xl text-xs text-neutral-900 focus:outline-none focus:border-neutral-400"
                  />
                  <input
                    type="text"
                    required
                    placeholder={t.fullNamePlaceholder}
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full h-10 px-3 bg-white border border-[#dbdbdb] rounded-xl text-xs text-neutral-900 focus:outline-none focus:border-neutral-400"
                  />
                  <input
                    type="text"
                    required
                    placeholder={t.usernamePlaceholder}
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    className="w-full h-10 px-3 bg-white border border-[#dbdbdb] rounded-xl text-xs text-neutral-900 focus:outline-none focus:border-neutral-400"
                  />
                  <input
                    type="password"
                    required
                    placeholder={t.passwordPlaceholder}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full h-10 px-3 bg-white border border-[#dbdbdb] rounded-xl text-xs text-neutral-900 focus:outline-none focus:border-neutral-400"
                  />

                  <p className="text-[10px] text-neutral-400 text-center my-1 leading-tight">
                    {t.signUpDesc}
                  </p>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-10 rounded-full bg-[#0095F6] text-white text-xs font-semibold hover:bg-[#1877F2] transition-colors flex items-center justify-center"
                  >
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : t.signUpButton}
                  </button>
                </form>

                <div className="mt-4 pt-3 border-t border-neutral-100 text-center">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="text-xs font-semibold text-[#0095F6] hover:underline"
                  >
                    {t.alreadyHaveAccount}
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

interface FacebookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FacebookModal: React.FC<FacebookModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<'prompt' | 'connecting' | 'success'>('prompt');

  const handleConnect = () => {
    setStep('connecting');
    setTimeout(() => {
      setStep('success');
    }, 1200);
  };

  const handleDone = () => {
    setStep('prompt');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white w-full max-w-sm rounded-[24px] overflow-hidden shadow-2xl border border-neutral-200 relative p-6 text-center"
          >
            <button
              onClick={handleDone}
              className="absolute top-4 right-4 p-1 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-14 h-14 bg-[#1877F2] rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-md">
              <Facebook className="w-8 h-8 fill-current" />
            </div>

            <h3 className="text-base font-bold text-neutral-900 mb-1">
              Log in with Facebook
            </h3>
            <p className="text-xs text-neutral-500 mb-6">
              Connect your Meta Facebook account to log in to Instagram seamlessly.
            </p>

            {step === 'prompt' && (
              <div className="flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={handleConnect}
                  className="w-full h-10 rounded-full bg-[#1877F2] text-white text-xs font-semibold hover:bg-[#166fe5] transition-colors"
                >
                  Continue as Facebook User
                </button>
                <button
                  type="button"
                  onClick={handleDone}
                  className="w-full h-10 rounded-full border border-neutral-200 text-neutral-700 text-xs font-semibold hover:bg-neutral-50"
                >
                  Cancel
                </button>
              </div>
            )}

            {step === 'connecting' && (
              <div className="py-4 flex flex-col items-center">
                <Loader2 className="w-8 h-8 animate-spin text-[#1877F2] mb-2" />
                <p className="text-xs font-medium text-neutral-600">Connecting to Meta Accounts Center...</p>
              </div>
            )}

            {step === 'success' && (
              <div className="py-2">
                <CheckCircle2 className="w-10 h-10 text-green-500 mx-auto mb-2" />
                <p className="text-xs font-bold text-neutral-800 mb-4">Facebook authentication successful!</p>
                <button
                  type="button"
                  onClick={handleDone}
                  className="w-full h-10 rounded-full bg-[#0095F6] text-white text-xs font-semibold hover:bg-[#1877F2]"
                >
                  Continue to Instagram
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
