<template>
  <section id="features" class="py-20 bg-muted/50">
    <div class="container mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Modern IDE Features
        </h2>
        <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover how AI-powered IDEs like Cursor and Windsurf can revolutionize your coding workflow and productivity
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Feature Card 1 -->
        <div class="group relative rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
          <div class="flex items-center gap-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 3c.53 0 1.039.211 1.414.586l7 7 .002-.001a2 2 0 0 1 0 2.83l-7 7a2 2 0 0 1-2.83 0l-7-7a2 2 0 0 1 0-2.83l7-7A1.997 1.997 0 0 1 12 3z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold">
              AI-Powered Code Completion
            </h3>
          </div>
          <p class="mt-4 text-muted-foreground">
            Experience intelligent code suggestions that understand your project context. Advanced AI models help you write better code faster, with fewer errors and more elegant solutions.
          </p>
        </div>

        <!-- Feature Card 2 -->
        <div class="group relative rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
          <div class="flex items-center gap-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold">
              Conversational Coding
            </h3>
          </div>
          <p class="mt-4 text-muted-foreground">
            Chat directly with your IDE to explain what you want to build. Ask questions about your codebase, request refactoring suggestions, or generate new features through natural language conversation.
          </p>
        </div>

        <!-- Feature Card 3 -->
        <div class="group relative rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
          <div class="flex items-center gap-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="9" y1="15" x2="15" y2="15" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold">
              Codebase Understanding
            </h3>
          </div>
          <p class="mt-4 text-muted-foreground">
            Modern IDEs can read and understand your entire codebase, providing context-aware suggestions and helping new team members quickly get up to speed with existing projects.
          </p>
        </div>

        <!-- Feature Card 4 -->
        <div class="group relative rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
          <div class="flex items-center gap-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold">
              Personalized Experience
            </h3>
          </div>
          <p class="mt-4 text-muted-foreground">
            These IDEs learn your coding style and preferences over time, adapting to your workflow and offering increasingly personalized suggestions that match your coding patterns.
          </p>
        </div>

        <!-- Feature Card 5 -->
        <div class="group relative rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
          <div class="flex items-center gap-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                <line x1="4" y1="22" x2="4" y2="15" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold">
              Automated Refactoring
            </h3>
          </div>
          <p class="mt-4 text-muted-foreground">
            Instantly improve your code quality with AI-powered refactoring tools. Clean up legacy code, optimize performance, and modernize outdated patterns with intelligent suggestions.
          </p>
        </div>

        <!-- Feature Card 6 -->
        <div class="group relative rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
          <div class="flex items-center gap-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold">
              Real-time Code Analysis
            </h3>
          </div>
          <p class="mt-4 text-muted-foreground">
            Get instant feedback on code quality, potential bugs, and security vulnerabilities as you type. Advanced static analysis helps you write more robust and secure applications.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
