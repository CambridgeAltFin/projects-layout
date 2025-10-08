// composables/useBreakpoint.ts
import { ref, onMounted, onUnmounted, computed } from 'vue'

export function useBreakpoint() {
  const width = ref(0)

  const onResize = () => {
    width.value = window.innerWidth
  }

  onMounted(() => {
    width.value = window.innerWidth
    window.addEventListener('resize', onResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
  })

  const xs = computed(() => width.value < 600)
  const sm = computed(() => width.value >= 600 && width.value < 960)
  const md = computed(() => width.value >= 960 && width.value < 1280)
  const lg = computed(() => width.value >= 1280 && width.value < 1920)
  const xl = computed(() => width.value >= 1920)

  const smAndDown = computed(() => xs.value || sm.value)
  const mdAndUp = computed(() => md.value || lg.value || xl.value)
  const lgAndUp = computed(() => lg.value || xl.value)

  return {
    width,
    xs,
    sm,
    md,
    lg,
    xl,
    smAndDown,
    mdAndUp,
    lgAndUp
  }
}
