import { createFileRoute } from '@tanstack/react-router';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ButtonBabeng from '@/components/babeng/Atoms/ButtonBabeng';
import CardBookingStats from '@/components/babeng/Atoms/CardBookingStats';
import dex from '@/assets/png/dex.png'

export const Route = createFileRoute('/_layout-admin/admin/booking')({
  component: BookingPages,
})

function BookingPages() {
  return( <>
    <Button  variant="destructive">Click me</Button>
    <ButtonBabeng variant="destructive">destructive</ButtonBabeng>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-center space-x-3'>
  <CardBookingStats title="Total Booking" stats="714k" image={dex} />
  <CardBookingStats title="Total Booking" stats="714k" image={dex} />
  <CardBookingStats title="Total Booking" stats="714k" image={dex} />
  <CardBookingStats title="Total Booking" stats="714k" image={dex} />
</div>

    {/* <CardBookingStats
    className='py-2'
  title="Total Booking"
  stats="714k"
  image={dex}
/> */}
    {/* <button className='bg-info text-primary-foreground shadow hover:bg-primary/90'>aaa</button> */}
  <div>
    Booking
    <Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>   
    <Button  className="w-full">
          Mark all as readaa
        </Button>
  </CardFooter>
</Card>

    </div>
    </>)
}