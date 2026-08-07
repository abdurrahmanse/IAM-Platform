export default function Home() {
  return (
    <main className="min-h-screen bg-brand-50 flex items-center justify-center p-8 relative overflow-hidden dark:bg-brand-950">
      {/* Decorative background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand-400/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-brand-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="glass p-12 rounded-2xl max-w-2xl w-full text-center relative z-10">
        <div className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-6 tracking-wide uppercase border border-brand-200 shadow-sm dark:bg-brand-900/50 dark:text-brand-300 dark:border-brand-800">
          Enterprise IAM Platform
        </div>
        
        <h1 className="text-5xl font-extrabold text-text-primary tracking-tight mb-6 leading-tight dark:text-white">
          Secure <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400 dark:from-brand-400 dark:to-brand-200">Identity</span> Management
        </h1>
        
        <p className="text-lg text-text-secondary mb-10 leading-relaxed max-w-xl mx-auto dark:text-gray-300">
          The foundation of your organization's security posture. Unified authentication, zero-trust authorization, and seamless user lifecycle management.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/admin" className="px-8 py-3.5 bg-brand-600 text-white rounded-lg font-medium shadow-md shadow-brand-500/30 hover:bg-brand-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 dark:bg-brand-500 dark:hover:bg-brand-600">
            Admin Console
          </a>
          <a href="/portal" className="px-8 py-3.5 bg-white text-brand-700 rounded-lg font-medium border border-gray-200 shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700">
            User Portal
          </a>
        </div>
      </div>
    </main>
  );
}
