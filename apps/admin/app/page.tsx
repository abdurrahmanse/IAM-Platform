import { LoginForm } from "@/features/auth/components/LoginForm"
import {
  ShieldCheck,
  CheckCircle2,
  Fingerprint,
  Building2,
  ArrowRight,
} from "lucide-react"
import { Button } from "@iam/ui"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@iam/ui"
import { Input } from "@iam/ui"

const features = [
  "Multi-factor authentication built in",
  "Role-based access control (RBAC)",
  "Real-time audit logs & compliance",
]

export default function AdminLoginPage() {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-gray-950">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-indigo-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-violet-600/15 blur-[120px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />

      {/* Left panel — branding (desktop only) */}
      <aside className="hidden lg:flex lg:w-[480px] xl:w-[560px] flex-col justify-between p-12 xl:p-16 relative shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 shadow-lg shadow-indigo-600/30">
            <ShieldCheck className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold text-white tracking-tight">IAM Platform</span>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300 tracking-widest uppercase">
              Enterprise Identity
            </div>
            <h1 className="text-4xl xl:text-5xl font-extrabold leading-[1.1] text-white tracking-tight">
              Secure access.<br />
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Zero compromise.
              </span>
            </h1>
            <p className="text-base text-gray-400 leading-relaxed max-w-sm">
              Enterprise-grade identity and access management designed for modern cloud infrastructure.
            </p>
          </div>

          <ul className="space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-sm text-gray-400">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-indigo-400" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3">
            <Fingerprint className="h-5 w-5 shrink-0 text-indigo-400" aria-hidden="true" />
            <p className="text-xs text-gray-500 leading-snug">
              Protected by zero-trust architecture and AES-256 encryption. SOC 2 Type II compliant.
            </p>
          </div>
        </div>

        <p className="text-xs text-gray-700">
          &copy; {new Date().getFullYear()} IAM Platform. Enterprise Edition.
        </p>
      </aside>

      {/* Right panel — login form */}
      <div className="flex flex-1 items-center justify-center px-4 py-12 sm:px-8">
        <div className="w-full max-w-[420px]">
          {/* Mobile logo */}
          <div className="mb-8 flex items-center gap-2.5 lg:hidden">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
              <ShieldCheck className="h-4 w-4 text-white" />
            </div>
            <span className="text-base font-bold text-white tracking-tight">IAM Platform</span>
          </div>

          <div className="rounded-2xl border border-white/8 bg-gray-900 p-8 shadow-2xl shadow-black/50">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-1.5 tracking-tight">Admin Console</h2>
              <p className="text-sm text-gray-500">Sign in with your admin credentials to continue.</p>
            </div>

            {/* ← All form logic lives in LoginForm */}
            <LoginForm />

            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-800" />
              <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Enterprise SSO</span>
              <div className="h-px flex-1 bg-gray-800" />
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary" className="w-full">
                  <Building2 className="h-4 w-4" aria-hidden="true" />
                  Continue with SSO
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Single Sign-On</DialogTitle>
                  <DialogDescription>
                    Enter your corporate email to authenticate via your identity provider (Okta, Microsoft Entra ID, etc.).
                  </DialogDescription>
                </DialogHeader>
                <div className="py-2">
                  <Input
                    id="sso-email"
                    type="email"
                    label="Organization Email"
                    placeholder="you@company.com"
                    startIcon={<Building2 className="h-4 w-4" />}
                  />
                </div>
                <DialogFooter>
                  <Button type="submit" className="w-full">
                    Continue to Identity Provider
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <p className="mt-6 text-center text-xs text-gray-700">
            By signing in you agree to our{" "}
            <a href="/terms" className="text-gray-600 underline-offset-2 hover:underline hover:text-gray-400 transition-colors">Terms</a>
            {" "}and{" "}
            <a href="/privacy" className="text-gray-600 underline-offset-2 hover:underline hover:text-gray-400 transition-colors">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </main>
  )
}
