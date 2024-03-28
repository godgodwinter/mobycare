import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card"


interface CardBookingStatsProps {
  title: string;
  stats: string;
  image: string; 
}

const CardBookingStats: React.FC<CardBookingStatsProps> = ({ title, stats, image }) => {
  return (
    <div className="w-full">
       <Card >
  <CardContent>
    <p>{stats}</p>
    <CardTitle>{title}</CardTitle>
      <img src={image} alt={title} />
  </CardContent>
</Card>
    </div>
  )
}

export default CardBookingStats