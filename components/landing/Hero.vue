<script setup>

</script>

<template>
  <section class="pt-20 pb-16 md:py-24 lg:py-32 overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left side - Text content -->
        <div class="space-y-8">
          <div class="space-y-6">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Elevate your coding <br class="hidden sm:block">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600">experience</span> with vibe coding.
            </h1>
            <p class="text-xl text-muted-foreground max-w-[600px]">
              Master Cursor, Windsurf and other next-gen IDEs to transform your coding workflow.
              Enhance productivity with AI assistance and unlock a new level of coding joy.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-4">
            <Button size="lg" as-child>
              <NuxtLink to="/projects">
                Explore Tutorials
              </NuxtLink>
            </Button>
            <Button size="lg" variant="outline" as-child>
              <a href="#how-it-works">
                See Magic
              </a>
            </Button>
          </div>
        </div>

        <!-- Right side - Illustration -->
        <div class="relative h-[500px] md:h-[600px] flex items-center justify-center rounded-lg">
          <!-- Decorative background elements -->
          <div class="absolute inset-0 w-full h-full">
            <div class="absolute top-0 left-0 w-full h-full rounded-lg opacity-30 bg-gradient-to-br from-primary/20 to-indigo-500/20" />
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 rounded-full bg-primary/10 blur-3xl" />
          </div>

          <!-- Main illustration -->
          <div class="relative z-10 rounded-lg overflow-hidden border shadow-lg w-full max-w-[500px] h-[400px] md:h-[480px] bg-background">
            <!-- Code editor mockup -->
            <div class="rounded-t-lg bg-muted h-8 flex items-center px-3 border-b">
              <div class="flex items-center gap-1.5">
                <div class="w-3 h-3 rounded-full bg-red-500" />
                <div class="w-3 h-3 rounded-full bg-yellow-500" />
                <div class="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div class="ml-4 text-xs text-muted-foreground">
                Cursor IDE - Vibe Coding Session
              </div>
            </div>

            <div class="h-full relative">
              <div class="absolute inset-0 bg-black bg-opacity-80 p-4 font-mono text-xs text-[#A3FFEC] overflow-hidden">
                <pre class="leading-relaxed"><span class="text-blue-400">import</span> { useState, useEffect } <span class="text-blue-400">from</span> <span class="text-green-400">'react'</span>;
<span class="text-blue-400">import</span> axios <span class="text-blue-400">from</span> <span class="text-green-400">'axios'</span>;
<span class="text-blue-400">import</span> <span class="text-green-400">'./MovieList.css'</span>;

<span class="text-purple-400">const</span> <span class="text-yellow-400">MovieList</span> = () <span class="text-purple-400">=></span> {
  <span class="text-purple-400">const</span> [<span class="text-yellow-400">movies</span>, <span class="text-yellow-400">setMovies</span>] = <span class="text-yellow-400">useState</span>([]);
  <span class="text-purple-400">const</span> [<span class="text-yellow-400">loading</span>, <span class="text-yellow-400">setLoading</span>] = <span class="text-yellow-400">useState</span>(<span class="text-blue-400">true</span>);

  <span class="text-yellow-400">useEffect</span>(() <span class="text-purple-400">=></span> {
    <span class="text-purple-400">const</span> <span class="text-yellow-400">fetchMovies</span> = <span class="text-purple-400">async</span> () <span class="text-purple-400">=></span> {
      <span class="text-purple-400">try</span> {
        <span class="text-yellow-400">setLoading</span>(<span class="text-blue-400">true</span>);
        <span class="text-purple-400">const</span> <span class="text-yellow-400">response</span> = <span class="text-purple-400">await</span> <span class="text-yellow-400">axios</span>.<span class="text-yellow-400">get</span>(
          <span class="text-green-400">'https://api.themoviedb.org/3/trending/all/week'</span>,
          {
            <span class="text-yellow-400">params</span>: {
              <span class="text-yellow-400">api_key</span>: <span class="text-green-400">process.env.REACT_APP_TMDB_API_KEY</span>
            }
          }
        );

        <span class="text-yellow-400">setMovies</span>(<span class="text-yellow-400">response</span>.<span class="text-yellow-400">data</span>.<span class="text-yellow-400">results</span>);
        <span class="text-yellow-400">setLoading</span>(<span class="text-blue-400">false</span>);
      } <span class="text-purple-400">catch</span> (<span class="text-yellow-400">error</span>) {
        <span class="text-yellow-400">console</span>.<span class="text-yellow-400">error</span>(<span class="text-green-400">'Error fetching data:'</span>, <span class="text-yellow-400">error</span>);
        <span class="text-yellow-400">setLoading</span>(<span class="text-blue-400">false</span>);
      }
    };

    <span class="text-yellow-400">fetchMovies</span>();
  }, []);</pre>
              </div>

              <!-- AI assistance overlay -->
              <div class="absolute bottom-0 right-0 left-0 p-4 bg-background border-t z-20">
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="heroicons:sparkles" class="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div class="text-xs text-muted-foreground">
                    <p><span class="font-medium text-foreground">Cursor AI:</span> Want to optimize this API call with caching? I can help you implement React Query to improve performance and user experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
