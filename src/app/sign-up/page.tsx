"use client";
import { SignUp } from "@clerk/nextjs";
    
export default function SignUpPage() {

  return (
    <main className="flex h-screen flex-col items-center justify-center bg-black text-purple-500">
      <div className="w-full max-w-md p-8 rounded-lg border-2 border-green-400 shadow-lg flex flex-col items-center">
        <SignUp
          path="/sign-up"
          routing="path"
          signInUrl="/sign-in"
          afterSignUpUrl="/"
          appearance={{
            elements: {
              formButtonPrimary: "btn bg-yellow-400 text-black font-bold border-none hover:bg-purple-500 hover:text-yellow-400",
              card: "bg-black border-green-400 border-2",
              headerTitle: "text-purple-500",
              headerSubtitle: "text-purple-400",
              socialButtonsBlockButton: "btn bg-yellow-400 text-black font-bold border-none hover:bg-purple-500 hover:text-yellow-400",
              dividerText: "text-green-400",
              footerActionText: "text-purple-400",
              footerActionLink: "text-yellow-400 hover:text-purple-500",
              formFieldInput: "input input-bordered border-green-400 text-purple-500 bg-black",
              formFieldLabel: "text-green-400",
              formFieldErrorText: "text-purple-400",
            },
          }}
        />
      </div>
    </main>
  );
} 