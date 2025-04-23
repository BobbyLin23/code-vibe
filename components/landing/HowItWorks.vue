<template>
  <section class="py-20 bg-muted/50">
    <div class="container mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          How IDE Vibe Coding Works
        </h2>
        <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
          Learn how to harness the power of AI-driven IDEs like Cursor and Windsurf to transform your coding experience
        </p>
      </div>

      <div class="relative">
        <!-- Connection line (desktop) -->
        <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

        <!-- Step 1 -->
        <div class="relative md:grid md:grid-cols-2 md:gap-8 md:items-center mb-12 md:mb-24">
          <div class="md:col-start-2">
            <div class="relative p-6 rounded-lg bg-background border shadow-sm">
              <!-- Step marker (desktop) -->
              <div class="hidden md:flex absolute top-1/2 -left-12 -translate-y-1/2 items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground z-10 font-medium">
                1
              </div>

              <div class="flex items-center gap-4 md:gap-6 mb-4">
                <!-- Step marker (mobile) -->
                <div class="flex md:hidden items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-medium shrink-0">
                  1
                </div>

                <h3 class="text-xl font-semibold">
                  Set Up Your AI-Powered Environment
                </h3>
              </div>
              <p class="text-muted-foreground">
                Install Cursor or Windsurf IDE and connect it to your preferred AI model. Our tutorials guide you through optimizing your settings for the most efficient AI-assisted coding experience, including keyboard shortcuts and personalization options.
              </p>
            </div>
          </div>

          <div class="hidden md:block md:col-start-1 md:row-start-1">
            <div class="aspect-video rounded-lg overflow-hidden border">
              <img src="https://placehold.co/600x400/3b82f6/ffffff?text=AI+IDE+Setup" alt="AI IDE Setup" class="w-full h-full object-cover">
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="relative md:grid md:grid-cols-2 md:gap-8 md:items-center mb-12 md:mb-24">
          <div class="md:col-start-1">
            <div class="relative p-6 rounded-lg bg-background border shadow-sm">
              <!-- Step marker (desktop) -->
              <div class="hidden md:flex absolute top-1/2 -right-12 -translate-y-1/2 items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground z-10 font-medium">
                2
              </div>

              <div class="flex items-center gap-4 md:gap-6 mb-4">
                <!-- Step marker (mobile) -->
                <div class="flex md:hidden items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-medium shrink-0">
                  2
                </div>

                <h3 class="text-xl font-semibold">
                  Learn Conversational Coding Techniques
                </h3>
              </div>
              <p class="text-muted-foreground">
                Master the art of communicating effectively with your AI coding assistant. Our tutorials teach you specific prompting strategies, how to describe features clearly, and techniques for guiding the AI to generate exactly the code you need.
              </p>
            </div>
          </div>

          <div class="hidden md:block md:col-start-2 md:row-start-1">
            <div class="aspect-video rounded-lg overflow-hidden border">
              <img src="https://placehold.co/600x400/3b82f6/ffffff?text=Conversational+Coding" alt="Conversational Coding" class="w-full h-full object-cover">
            </div>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="relative md:grid md:grid-cols-2 md:gap-8 md:items-center mb-12 md:mb-24">
          <div class="md:col-start-2">
            <div class="relative p-6 rounded-lg bg-background border shadow-sm">
              <!-- Step marker (desktop) -->
              <div class="hidden md:flex absolute top-1/2 -left-12 -translate-y-1/2 items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground z-10 font-medium">
                3
              </div>

              <div class="flex items-center gap-4 md:gap-6 mb-4">
                <!-- Step marker (mobile) -->
                <div class="flex md:hidden items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-medium shrink-0">
                  3
                </div>

                <h3 class="text-xl font-semibold">
                  Apply AI-Driven Development Patterns
                </h3>
              </div>
              <p class="text-muted-foreground">
                Discover new workflows that leverage AI capabilities. Learn how to rapidly prototype features, use AI for code refactoring, and implement test-driven development with automated test generation. Build complete applications in a fraction of the time.
              </p>
            </div>
          </div>

          <div class="hidden md:block md:col-start-1 md:row-start-1">
            <div class="aspect-video rounded-lg overflow-hidden border">
              <img src="https://placehold.co/600x400/3b82f6/ffffff?text=AI+Development+Patterns" alt="AI Development Patterns" class="w-full h-full object-cover">
            </div>
          </div>
        </div>

        <!-- Step 4 -->
        <div class="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
          <div class="md:col-start-1">
            <div class="relative p-6 rounded-lg bg-background border shadow-sm">
              <!-- Step marker (desktop) -->
              <div class="hidden md:flex absolute top-1/2 -right-12 -translate-y-1/2 items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground z-10 font-medium">
                4
              </div>

              <div class="flex items-center gap-4 md:gap-6 mb-4">
                <!-- Step marker (mobile) -->
                <div class="flex md:hidden items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-medium shrink-0">
                  4
                </div>

                <h3 class="text-xl font-semibold">
                  Master Advanced IDE Techniques
                </h3>
              </div>
              <p class="text-muted-foreground">
                Take your skills to the next level with advanced features like AI-powered debugging, codebase analysis, and automated documentation generation. Learn to combine keyboard shortcuts with AI commands for ultra-rapid development.
              </p>
            </div>
          </div>

          <div class="hidden md:block md:col-start-2 md:row-start-1">
            <div class="aspect-video rounded-lg overflow-hidden border">
              <img src="https://placehold.co/600x400/3b82f6/ffffff?text=Advanced+IDE+Techniques" alt="Advanced IDE Techniques" class="w-full h-full object-cover">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
