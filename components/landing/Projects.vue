<template>
  <section id="projects" class="py-20">
    <div class="container mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          What You Can Build
        </h2>
        <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore how modern AI-powered IDEs like Cursor and Windsurf can accelerate and enhance your development process
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Project Card 1 -->
        <div class="group relative overflow-hidden rounded-lg border">
          <div class="aspect-video overflow-hidden">
            <img src="https://placehold.co/600x400/3b82f6/ffffff?text=Cursor+Powered+App" alt="Cursor Powered App" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105">
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">
              AI-Assisted Web App
            </h3>
            <p class="text-muted-foreground mb-4">
              Build a complete React application with Cursor IDE's AI pair programming. Generate components, implement features, and debug with conversational AI assistance.
            </p>
            <div class="flex flex-wrap gap-2 mt-4">
              <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20 dark:bg-blue-900/30 dark:text-blue-400">Cursor IDE</span>
              <span class="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-600/20 dark:bg-purple-900/30 dark:text-purple-400">React</span>
              <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-900/30 dark:text-green-400">AI Coding</span>
            </div>
          </div>
        </div>

        <!-- Project Card 2 -->
        <div class="group relative overflow-hidden rounded-lg border">
          <div class="aspect-video overflow-hidden">
            <img src="https://placehold.co/600x400/3b82f6/ffffff?text=Windsurf+Backend" alt="Windsurf Backend" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105">
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">
              Intelligent API Development
            </h3>
            <p class="text-muted-foreground mb-4">
              Create robust backend services using Windsurf IDE. Generate complex API endpoints, database models, and authentication systems with AI assistance.
            </p>
            <div class="flex flex-wrap gap-2 mt-4">
              <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20 dark:bg-blue-900/30 dark:text-blue-400">Windsurf IDE</span>
              <span class="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-600/20 dark:bg-purple-900/30 dark:text-purple-400">Node.js</span>
              <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-900/30 dark:text-green-400">Express</span>
            </div>
          </div>
        </div>

        <!-- Project Card 3 -->
        <div class="group relative overflow-hidden rounded-lg border">
          <div class="aspect-video overflow-hidden">
            <img src="https://placehold.co/600x400/3b82f6/ffffff?text=AI+Code+Refactoring" alt="AI Code Refactoring" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105">
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">
              Legacy Code Modernization
            </h3>
            <p class="text-muted-foreground mb-4">
              Transform outdated codebases into modern, maintainable applications using AI-assisted refactoring tools. Upgrade patterns, improve performance, and add new features.
            </p>
            <div class="flex flex-wrap gap-2 mt-4">
              <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20 dark:bg-blue-900/30 dark:text-blue-400">Cursor IDE</span>
              <span class="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-600/20 dark:bg-purple-900/30 dark:text-purple-400">Refactoring</span>
              <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-900/30 dark:text-green-400">TypeScript</span>
            </div>
          </div>
        </div>

        <!-- Project Card 4 (only visible on large screens) -->
        <div class="hidden lg:block group relative overflow-hidden rounded-lg border">
          <div class="aspect-video overflow-hidden">
            <img src="https://placehold.co/600x400/3b82f6/ffffff?text=AI+Testing+Suite" alt="AI Testing Suite" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105">
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">
              Automated Test Generation
            </h3>
            <p class="text-muted-foreground mb-4">
              Create comprehensive test suites for your applications with AI assistance. Generate unit tests, integration tests, and end-to-end tests that ensure code quality.
            </p>
            <div class="flex flex-wrap gap-2 mt-4">
              <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20 dark:bg-blue-900/30 dark:text-blue-400">Windsurf IDE</span>
              <span class="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-600/20 dark:bg-purple-900/30 dark:text-purple-400">Jest</span>
              <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-900/30 dark:text-green-400">Cypress</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-12">
        <Button variant="outline" size="lg">
          Explore All IDE Tutorials
        </Button>
      </div>
    </div>
  </section>
</template>
