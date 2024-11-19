import { list } from "postcss";
import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();

  return (
    <div className="flex flex-col my-2">
      <h2 className="font-semibold mb-3">Dragon news Home</h2>
      <p className="text-gray-400 text-sm">
        {news.length} News found on this category
      </p>
      <div className="space-y-4">
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
