<template>
  <footer class="border-t py-12">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Logo and brief intro -->
        <div class="space-y-4 md:col-span-2">
          <div class="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            CodeVibe
          </div>
          <p class="text-muted-foreground max-w-xs">
            Make programming learning more efficient and enjoyable through project-driven learning methods and AI assistance.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="logos:facebook" class="h-5 w-5" />
            </a>
            <a href="#" class="text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="logos:twitter" class="h-5 w-5" />
            </a>
            <a href="#" class="text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="logos:instagram" class="h-5 w-5" />
            </a>
            <a href="#" class="text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="logos:linkedin" class="h-5 w-5" />
            </a>
          </div>
        </div>

        <!-- Navigation links -->
        <div>
          <h3 class="font-medium mb-4">
            Platform
          </h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/projects" class="text-muted-foreground hover:text-foreground transition-colors">
                Projects Library
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/roadmap" class="text-muted-foreground hover:text-foreground transition-colors">
                Learning Paths
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/community" class="text-muted-foreground hover:text-foreground transition-colors">
                Community
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/pricing" class="text-muted-foreground hover:text-foreground transition-colors">
                Pricing Plans
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Resource links -->
        <div>
          <h3 class="font-medium mb-4">
            Resources
          </h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/blog" class="text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs" class="text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/faq" class="text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
        <p class="text-sm text-muted-foreground mb-4 md:mb-0">
          &copy; {{ new Date().getFullYear() }} CodeVibe. All rights reserved.
        </p>
        <div class="flex space-x-6">
          <NuxtLink to="/terms" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Terms of Service
          </NuxtLink>
          <NuxtLink to="/privacy" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Privacy Policy
          </NuxtLink>
          <NuxtLink to="/cookies" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Cookie Policy
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
