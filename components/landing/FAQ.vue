<script setup lang="ts">

</script>

<template>
  <section class="py-20">
    <div class="container mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Frequently Asked Questions
        </h2>
        <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
          Common questions and answers about the CodeVibe platform
        </p>
      </div>

      <div class="max-w-3xl mx-auto">
        <Accordion type="single" collapsible class="w-full">
          <!-- Question 1 -->
          <AccordionItem value="item-1">
            <AccordionTrigger>Is CodeVibe suitable for absolute beginners?</AccordionTrigger>
            <AccordionContent>
              Yes, CodeVibe is perfectly suited for beginners with no prior experience. Our courses start with fundamental concepts and gradually progress deeper, helping you understand and apply programming knowledge through practical projects. Each project comes with detailed step-by-step instructions, complemented by our AI assistant to answer your questions, making it easy for beginners to get started.
            </AccordionContent>
          </AccordionItem>

          <!-- Question 2 -->
          <AccordionItem value="item-2">
            <AccordionTrigger>What programming technologies and languages does the platform cover?</AccordionTrigger>
            <AccordionContent>
              Our platform covers a wide range of front-end, back-end, and full-stack development technologies, including but not limited to: HTML, CSS, JavaScript, TypeScript, React, Vue, Angular, Node.js, Express, Django, Flask, MongoDB, MySQL, PostgreSQL, AWS, Docker, and more. We continuously update and add new technology courses based on industry trends.
            </AccordionContent>
          </AccordionItem>

          <!-- Question 3 -->
          <AccordionItem value="item-3">
            <AccordionTrigger>How does the AI assistant help me learn?</AccordionTrigger>
            <AccordionContent>
              The AI assistant is your programming learning companion that can answer your programming questions, explain code logic, help debug errors, provide programming suggestions, and even generate code examples. You can ask questions in natural language, and the AI assistant will give clear explanations and guidance, helping you overcome learning difficulties and deepen your understanding of programming concepts.
            </AccordionContent>
          </AccordionItem>

          <!-- Question 4 -->
          <AccordionItem value="item-4">
            <AccordionTrigger>Can I cancel my subscription at any time?</AccordionTrigger>
            <AccordionContent>
              Yes, you can cancel your subscription at any time. We use a flexible monthly payment model with no long-term contract requirements. After canceling, you can continue to use the service until the end of your current billing cycle. Additionally, we offer a 7-day money-back guarantee, allowing you to try our service risk-free.
            </AccordionContent>
          </AccordionItem>

          <!-- Question 5 -->
          <AccordionItem value="item-5">
            <AccordionTrigger>How long does it take to master a skill?</AccordionTrigger>
            <AccordionContent>
              Learning time varies from person to person, depending on your learning frequency, existing foundation, and learning goals. Generally speaking, if you invest 15-20 hours per week, most learners can master the basics of a technology stack and build independent projects within 3-6 months. Our project-based learning method and clear learning paths help you learn more efficiently and shorten the time needed to acquire skills.
            </AccordionContent>
          </AccordionItem>

          <!-- Question 6 -->
          <AccordionItem value="item-6">
            <AccordionTrigger>What do I gain after completing projects?</AccordionTrigger>
            <AccordionContent>
              After completing projects, you not only master the relevant technical skills but also have actual projects that you can showcase in your portfolio. These projects demonstrate your programming abilities and problem-solving skills, which are very helpful for job seeking. Additionally, you can share your projects with our community to receive feedback and suggestions to further improve the quality of your work.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div class="mt-8 text-center">
          <p class="text-muted-foreground">
            Have more questions? <NuxtLink to="/contact" class="text-primary underline underline-offset-4">
              Contact us
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
