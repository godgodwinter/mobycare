import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout-user/user/diary')({
  component: LayoutAComponent,
})

function LayoutAComponent() {
  return <div>Diary

  </div>
}
