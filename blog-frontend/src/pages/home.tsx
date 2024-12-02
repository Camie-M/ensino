// pages/index.tsx
import React, { useState } from "react";
import Link from "next/link";
import HighLights from "@/components/Highlights/";
import BaseLayout from "@/components/BaseLayout";
import { postList } from "@/utils/postTypes";
import Post from "@/components/Posts/Posts";
import PaginationList from "@/components/ListLayouts";
import Hero from "../components/Hero/index";

const HomePage: React.FC = () => {
  const [size] = useState("6");

  return (
    <BaseLayout>
      <Hero />
      <HighLights posts={postList} />
      <PaginationList>
        {postList.slice(0, Number(size)).map((post, index) => (
          <Link href={`/post/${index}`} key={index} legacyBehavior>
            <a style={{ cursor: "pointer" }}>
              <Post {...post} type="column" />
            </a>
          </Link>
        ))}
      </PaginationList>
    </BaseLayout>
  );
};

export default HomePage;
