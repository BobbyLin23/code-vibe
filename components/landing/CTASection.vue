<script setup lang="ts">

</script>

<template>
  <section class="py-20 bg-muted/50">
    <div class="container mx-auto">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Ready to Start Your Coding Journey?
        </h2>
        <p class="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join CodeVibe and quickly master programming skills through real projects and AI assistance to launch your tech career.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" class="px-8">
            Start Free Trial Now
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>

        <div class="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary h-5 w-5">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span>7-day money-back guarantee</span>
          </div>

          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary h-5 w-5">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span>No credit card required</span>
          </div>

          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary h-5 w-5">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span>Cancel anytime</span>
          </div>
        </div>

        <!-- Email subscription form -->
        <div class="mt-12 max-w-md mx-auto">
          <div class="flex flex-col sm:flex-row gap-2">
            <Input type="email" placeholder="Enter your email" class="flex-grow" />
            <Button type="submit">
              Get Updates
            </Button>
          </div>
          <p class="text-xs text-muted-foreground mt-2">
            Subscribe to our newsletter for the latest courses and promotions. We respect your privacy.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
