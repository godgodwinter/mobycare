import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout_guest/blog')({
  component: LayoutAComponent,
})

function LayoutAComponent() {
  return <div>I'm BLOG!</div>
}
