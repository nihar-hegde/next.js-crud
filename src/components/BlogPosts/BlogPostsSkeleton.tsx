import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function BlogPostsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {[...Array(8)].map((_, i) => (
        <Card key={i} className="flex flex-col">
          <CardHeader>
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </CardContent>
          <CardFooter>
            <div className="h-8 bg-gray-200 rounded w-24"></div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
