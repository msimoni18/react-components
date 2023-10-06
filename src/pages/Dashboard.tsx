import React from 'react';
import StaticPlot from '@/components/StaticPlot';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Dashboard = () => {
  return (
    <div className="p-10 flex flex-col gap-8">
      <div className="flex gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Title 1</CardTitle>
            <CardDescription>Description of card one</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content of the card</p>
          </CardContent>
          <CardFooter>
            <p>Footer of the card</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Title 2</CardTitle>
            <CardDescription>Description of card two</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content of the card</p>
          </CardContent>
          <CardFooter>
            <p>Footer of the card</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Title 3</CardTitle>
            <CardDescription>Description of card three</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content of the card</p>
          </CardContent>
          <CardFooter>
            <p>Footer of the card</p>
          </CardFooter>
        </Card>
      </div>
      <div className="flex gap-8 xl:flex-row sm:flex-col">
        <StaticPlot />
        <StaticPlot />
      </div>
      <div className="flex gap-8 xl:flex-row sm:flex-col">
        <StaticPlot />
        <StaticPlot />
        <StaticPlot />
      </div>
    </div>
  );
};

export default Dashboard;
