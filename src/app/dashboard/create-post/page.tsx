import Link from 'next/link';
import { SignedIn, SignedOut } from '@clerk/nextjs';

export default function CreatePostPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100">
      <div className="w-full max-w-lg flex justify-start mb-4">
        <Link href="/dashboard" className="btn btn-outline btn-primary">
          ← Back to Dashboard
        </Link>
      </div>
      <SignedIn>
        <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg border-2 border-green-400">
          <h1 className="text-2xl font-bold text-purple-700 mb-4">Create Post</h1>
          {/* Post creation form goes here */}
          <p className="text-gray-700">(Post creation form placeholder)</p>
        </div>
      </SignedIn>
      <SignedOut>
        <div className="alert bg-purple-100 text-purple-700 border-purple-400 max-w-md mx-auto mt-8">
          <span className="font-bold">Please sign in to create a post.</span>
        </div>
      </SignedOut>
    </div>
  );
} 