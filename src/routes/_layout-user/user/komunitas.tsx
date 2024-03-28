import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout-user/user/komunitas')({
  component: LayoutAComponent,
})

function LayoutAComponent() {
  return <div>Komunitas

  </div>
}
