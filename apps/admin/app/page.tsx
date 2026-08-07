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
import { Mail, Lock, ShieldCheck, KeyRound, Building2 } from "lucide-react"

export default function AdminConsole() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-8 relative overflow-hidden dark:bg-gray-950 font-sans">
      {/* Dynamic Background Orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-brand-500/15 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen dark:bg-brand-500/10 animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen dark:bg-blue-600/10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Main Login Card - Split Layout */}
      <div className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[2rem] shadow-2xl shadow-gray-900/10 w-full max-w-[1000px] relative z-10 dark:bg-gray-900/60 dark:border-gray-800/60 dark:shadow-black/50 overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side - Branding & Info */}
        <div className="hidden md:flex flex-col justify-between w-5/12 bg-gradient-to-br from-brand-600 to-brand-800 p-12 text-white relative overflow-hidden">
          {/* Subtle noise/pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center border border-white/20 shadow-inner">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">IAM Platform</span>
            </div>
            
            <h2 className="text-4xl font-extrabold leading-tight mb-6">
              Secure access,<br/>
              <span className="text-brand-200">simplified.</span>
            </h2>
            <p className="text-brand-100 text-lg font-medium leading-relaxed">
              Enterprise-grade identity management tailored for modern infrastructure.
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-4 text-sm text-brand-200/80 bg-black/10 p-4 rounded-2xl backdrop-blur-md border border-white/10">
            <KeyRound className="w-8 h-8 text-brand-200" />
            <p>Protected by zero-trust architecture and advanced encryption.</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-7/12 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <div className="max-w-[400px] mx-auto w-full">
            <div className="mb-10 text-center md:text-left">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-3">
                Welcome back
              </h1>
              <p className="text-base text-gray-500 dark:text-gray-400 font-medium">
                Please enter your credentials to access the admin console.
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 tracking-wide">
                  WORK EMAIL
                </label>
                <Input 
                  type="email" 
                  placeholder="name@enterprise.com" 
                  startIcon={<Mail className="w-5 h-5" />}
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 tracking-wide">
                    PASSWORD
                  </label>
                  <a href="#" className="text-sm font-semibold text-brand-600 hover:text-brand-500 dark:text-brand-400 transition-colors">
                    Forgot password?
                  </a>
                </div>
                <Input 
                  type="password" 
                  placeholder="••••••••••••" 
                  startIcon={<Lock className="w-5 h-5" />}
                />
              </div>
              
              <div className="flex items-center gap-2 mt-2">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="w-4 h-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:checked:bg-brand-500 transition-colors cursor-pointer"
                />
                <label htmlFor="remember" className="text-sm font-medium text-gray-600 dark:text-gray-400 cursor-pointer select-none">
                  Keep me signed in for 7 days
                </label>
              </div>

              <Button className="w-full mt-4 text-lg shadow-brand-500/25">
                Sign In to Console
              </Button>
              
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
                </div>
                <div className="relative flex justify-center text-sm font-medium">
                  <span className="bg-white px-4 text-gray-500 dark:bg-gray-900 dark:text-gray-400 rounded-full border border-gray-100 dark:border-gray-800 shadow-sm">
                    Enterprise
                  </span>
                </div>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary" className="w-full text-base group">
                    <Building2 className="w-5 h-5 mr-2 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition-colors" />
                    Sign in with SSO
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">Single Sign-On</DialogTitle>
                    <DialogDescription className="text-base pt-2">
                      Enter your corporate email address to authenticate via your identity provider (Okta, Entra ID, etc.).
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-6">
                    <div className="flex flex-col gap-3">
                      <label className="text-sm font-bold tracking-wide">ORGANIZATION EMAIL</label>
                      <Input 
                        id="sso-email" 
                        placeholder="jane.doe@company.com" 
                        startIcon={<Building2 className="w-5 h-5" />}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" className="w-full text-lg">Continue to IdP</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
