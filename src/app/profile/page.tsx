import { SignedIn, SignedOut, RedirectToSignIn, UserProfile } from '@clerk/nextjs';
import Link from 'next/link';
import Logo from '@/components/logo';

export default function ProfilePage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#18181b] via-[#232136] to-[#fef9c3] flex flex-col">
      {/* Header with logo and blog name */}
      <header className="w-full flex items-center gap-3 px-6 py-4 bg-black/80 shadow-md sticky top-0 z-10">
        <span className="h-8 w-8 flex items-center justify-center"><Logo /></span>
        <span className="font-extrabold text-2xl tracking-tight text-purple-400 font-serif">Moikas Blog</span>
      </header>
      {/* Main content area with sidebar and profile card */}
      <div className="flex-1 w-full flex flex-col md:flex-row md:items-stretch md:justify-center md:gap-8 px-2 md:px-8 py-6">
        {/* Sidebar */}
        <aside className="w-full md:w-64 mb-6 md:mb-0 md:mr-0 flex-shrink-0">
          <div className="bg-white/90 rounded-2xl shadow-lg border border-green-400 p-6 flex flex-col gap-2 sticky top-24">
            <nav className="menu w-full">
              <ul className="space-y-2">
                <li>
                  <Link href="/profile" className="block font-bold text-lg px-3 py-2 rounded-lg transition-colors profile-menu-link font-serif text-purple-700 hover:bg-purple-50 focus:bg-purple-100 focus:outline-none [&.active]:bg-purple-100 [&.active]:text-gold-400" aria-current="page">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="block font-bold text-lg px-3 py-2 rounded-lg transition-colors profile-menu-link font-serif text-purple-700 hover:bg-purple-50 focus:bg-purple-100 focus:outline-none">
                    Posts
                  </Link>
                </li>
                <li>
                  <Link href="/settings" className="block font-bold text-lg px-3 py-2 rounded-lg transition-colors profile-menu-link font-serif text-purple-700 hover:bg-purple-50 focus:bg-purple-100 focus:outline-none">
                    Settings
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center w-full p-4">
          <SignedIn>
            <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
              <UserProfile
                appearance={{
                  elements: {
                    card: 'bg-white/95 rounded-2xl shadow-lg w-full max-w-full',
                    headerTitle: 'font-serif text-2xl text-purple-700 font-bold',
                    headerSubtitle: 'text-gray-500 font-sans',
                    formFieldLabel: 'font-serif text-purple-700',
                    formFieldInput: 'profile-input',
                    formButtonPrimary: 'profile-btn',
                    profileSectionPrimaryButton: 'profile-btn',
                    profileSectionSecondaryButton: 'profile-btn',
                    profileSectionTitle: 'font-serif text-purple-700',
                    profileSectionContent: 'text-gray-900 font-sans',
                    profileSectionContentText: 'text-gray-900 font-sans',
                  },
                }}
                routing="hash"
              />
            </div>
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn redirectUrl="/profile" />
          </SignedOut>
        </main>
      </div>
    </div>
  );
} 