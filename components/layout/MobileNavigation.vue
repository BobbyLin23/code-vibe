<script lang="ts" setup>

</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button variant="ghost" size="icon" class="md:hidden block">
        <Icon name="heroicons:bars-2-solid" class="h-5 w-5" />
      </Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>
          Menu
        </SheetTitle>
      </SheetHeader>
      <nav class="flex flex-col space-y-4 p-4">
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
    </SheetContent>
  </Sheet>
</template>
