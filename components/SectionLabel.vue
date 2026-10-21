<template>
  <div class="section-label reveal">
    <span class="mono section-label__index">({{ index }})</span>
    <span class="mono">{{ label }}</span>
    <span class="section-label__rule" aria-hidden="true" />
    <span v-if="meta" class="mono section-label__meta">{{ meta }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  index: string
  label: string
  meta?: string
}>()
</script>

<style lang="scss">
.section-label {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
  color: var(--muted);

  &__index {
    color: var(--accent);
  }

  &__rule {
    flex: 1;
    height: 1px;
    background: var(--rule-strong);
    transform-origin: left;
    transition: transform 1.4s var(--ease-out) 0.2s;
  }
}

.js .section-label:not(.is-visible) .section-label__rule {
  transform: scaleX(0);
}
</style>
