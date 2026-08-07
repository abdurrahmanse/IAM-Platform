import { Button, Input } from "@iam/ui"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@iam/ui"

export default function AdminConsole() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8 relative overflow-hidden dark:bg-gray-950">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-400/20 rounded-full blur-[100px] pointer-events-none dark:bg-brand-500/10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none dark:bg-blue-600/10" />

      {/* Login Card */}
      <div className="bg-white/70 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-[420px] w-full text-center relative z-10 dark:bg-gray-900/50 dark:border-gray-800/50 dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
        
        <div className="mb-10">
          <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl mx-auto mb-6 shadow-lg shadow-brand-500/30 flex items-center justify-center">
            {/* Using a simple SVG icon as a placeholder for a logo */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
            Admin Portal
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Sign in to manage identity and access
          </p>
        </div>
        
        <div className="flex flex-col gap-5 text-left">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Email</label>
            <Input type="email" placeholder="name@enterprise.com" />
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between ml-1">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
              <a href="#" className="text-xs text-brand-600 hover:text-brand-500 dark:text-brand-400">Forgot password?</a>
            </div>
            <Input type="password" placeholder="••••••••" />
          </div>
          
          <Button className="w-full mt-2 font-semibold">
            Sign In
          </Button>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-2 text-gray-500 dark:bg-gray-900 dark:text-gray-400 rounded-full">Or continue with</span>
            </div>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" className="w-full font-semibold">Single Sign-On (SSO)</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Enterprise SSO Provider</DialogTitle>
                <DialogDescription>
                  Enter your corporate email address to authenticate via your identity provider.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="flex flex-col gap-2">
                  <Input id="sso-email" placeholder="jane.doe@company.com" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Continue with SAML</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </main>
  );
}
