<script setup lang="ts">

</script>

<template>
  <div class="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container mx-auto flex items-center justify-between py-4">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center space-x-2">
        <div class="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          CodeVibe
        </div>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center space-x-6">
        <NuxtLink to="#features" class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          Features
        </NuxtLink>
        <NuxtLink to="#projects" class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          Projects
        </NuxtLink>
        <NuxtLink to="#pricing" class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          Pricing
        </NuxtLink>
        <NuxtLink to="/login" class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          Login
        </NuxtLink>
      </nav>

      <div class="flex items-center space-x-4">
        <!-- Theme Toggle -->
        <ModeToggle />

        <!-- CTA Button -->
        <Button as-child>
          <NuxtLink to="/register">
            Start Now
          </NuxtLink>
        </Button>

        <MobileNavigation />
      </div>
    </div>
  </div>
</template>
