<template>
  <section id="pricing" class="py-20 bg-muted/50">
    <div class="container mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Choose the Right Plan for You
        </h2>
        <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
          We offer flexible pricing plans to meet the needs of different learners
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <!-- Free Plan -->
        <div class="rounded-lg border bg-card shadow-sm">
          <div class="p-6 flex flex-col h-full">
            <div class="mb-6">
              <h3 class="text-2xl font-bold">
                Free Plan
              </h3>
              <div class="mt-2 flex items-baseline gap-1">
                <span class="text-3xl font-bold">$0</span>
                <span class="text-muted-foreground">/forever</span>
              </div>
              <p class="mt-3 text-muted-foreground">
                Perfect for beginners and those wanting to try the platform
              </p>
            </div>

            <ul class="space-y-3 my-6 flex-grow">
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary shrink-0">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>3 basic starter projects</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary shrink-0">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>20 AI assistant questions per month</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary shrink-0">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>Basic community access</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-muted-foreground shrink-0">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span class="text-muted-foreground">Advanced project access</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-muted-foreground shrink-0">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span class="text-muted-foreground">Project code download</span>
              </li>
            </ul>

            <Button variant="outline" class="w-full">
              Register for Free
            </Button>
          </div>
        </div>

        <!-- Advanced Plan -->
        <div class="rounded-lg border bg-card shadow-sm relative">
          <!-- Recommended tag -->
          <div class="absolute top-0 right-6 transform -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
            Recommended
          </div>

          <div class="p-6 pt-8 flex flex-col h-full">
            <div class="mb-6">
              <h3 class="text-2xl font-bold">
                Advanced Plan
              </h3>
              <div class="mt-2 flex items-baseline gap-1">
                <span class="text-3xl font-bold">$99</span>
                <span class="text-muted-foreground">/month</span>
              </div>
              <p class="mt-3 text-muted-foreground">
                For dedicated programmers serious about learning
              </p>
            </div>

            <ul class="space-y-3 my-6 flex-grow">
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary shrink-0">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>All Free Plan features</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary shrink-0">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>20+ advanced projects</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary shrink-0">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>Unlimited AI assistant questions</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary shrink-0">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>Project source code download</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary shrink-0">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>Weekly learning path planning</span>
              </li>
            </ul>

            <Button class="w-full">
              Get Started
            </Button>
          </div>
        </div>

        <!-- Professional Plan -->
        <div class="rounded-lg border bg-card shadow-sm">
          <div class="p-6 flex flex-col h-full">
            <div class="mb-6">
              <h3 class="text-2xl font-bold">
                Professional Plan
              </h3>
              <div class="mt-2 flex items-baseline gap-1">
                <span class="text-3xl font-bold">$299</span>
                <span class="text-muted-foreground">/month</span>
              </div>
              <p class="mt-3 text-muted-foreground">
                For developers looking to grow rapidly
              </p>
            </div>

            <ul class="space-y-3 my-6 flex-grow">
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary shrink-0">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>All Advanced Plan features</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary shrink-0">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>All premium projects (30+)</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary shrink-0">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>Weekly 1-on-1 mentor coaching</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary shrink-0">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>Code review for your projects</span>
              </li>
              <li class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary shrink-0">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>Career guidance and interview prep</span>
              </li>
            </ul>

            <Button variant="outline" class="w-full">
              Upgrade to Pro
            </Button>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center text-muted-foreground">
        <p>All plans come with a 7-day money-back guarantee. If you have any questions, please contact our support team.</p>
      </div>
    </div>
  </section>
</template>
