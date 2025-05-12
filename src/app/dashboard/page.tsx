import Link from 'next/link';
import { SignedIn, SignedOut } from '@clerk/nextjs';

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100">
      <h1 className="text-3xl font-bold text-purple-700 mb-8">Dashboard</h1>
      <SignedIn>
        <div className="flex flex-col gap-4 w-full max-w-md">
          <Link href="/dashboard/create-post" className="btn btn-primary w-full">
            Create New Post
          </Link>
          <Link href="/dashboard/edit-post/example" className="btn btn-secondary w-full">
            Edit Example Post
          </Link>
          {/* Future: Add analytics, post list, etc. */}
        </div>
      </SignedIn>
      <SignedOut>
        <div className="alert bg-purple-100 text-purple-700 border-purple-400 max-w-md mx-auto mt-8">
          <span className="font-bold">Please sign in to access the dashboard.</span>
        </div>
      </SignedOut>
    </div>
  );
} 