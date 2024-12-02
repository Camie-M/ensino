import React, { useState } from "react";
import * as S from "./styled";
import PostCentral from "../PostCentral/postCentral";

interface Post {
  title: string;
  text: string;
  author: string;
  image: string;
  date: string;
}

interface PaginatedPostsProps {
  posts: Post[];
}

const PaginatedPosts: React.FC<PaginatedPostsProps> = ({ posts }) => {
  const postsPerPage = 6; // Mostra 6 posts por página (2 linhas de 3)
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <S.PaginatedPostsContainer>
      <S.PostsGrid>
        {currentPosts.map((post, index) => (
          <PostCentral key={index} {...post} />
        ))}
      </S.PostsGrid>
      <S.PaginationControls>
        <button onClick={handlePrevious} className={currentPage === 1 ? "disabled" : ""}>
          &lt; Anterior
        </button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <button onClick={handleNext} className={currentPage === totalPages ? "disabled" : ""}>
          Próxima &gt;
        </button>
      </S.PaginationControls>
    </S.PaginatedPostsContainer>
  );
};

export default PaginatedPosts;
