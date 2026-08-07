import { Button, Input } from "@iam/ui"

export default function AdminConsole() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center p-8 relative overflow-hidden dark:bg-background">
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand-400/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-brand-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="glass p-12 rounded-2xl max-w-2xl w-full text-center relative z-10">
        <h1 className="text-4xl font-extrabold tracking-tight mb-8">
          Admin Login
        </h1>
        
        <div className="flex flex-col gap-4 max-w-sm mx-auto">
          <Input type="email" placeholder="Email address" />
          <Input type="password" placeholder="Password" />
          
          <Button className="w-full mt-4">
            Sign In
          </Button>
          
          <div className="flex justify-between mt-4">
            <Button variant="outline" className="w-full mr-2">SSO Login</Button>
            <Button variant="ghost" className="w-full ml-2">Forgot Password?</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
