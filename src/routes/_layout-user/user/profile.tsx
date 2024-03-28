import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout-user/user/profile')({
  component: LayoutAComponent,
})

function LayoutAComponent() {
  return <div>Profile

  </div>
}
