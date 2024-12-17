import React, { useState, useEffect } from "react";
import * as S from "./styled";
import Post from "../Posts";

interface PostData {
  id: string;
  title: string;
  text: string;
  author: string;
  image: string;
  createdAt: string;
}

interface PaginatedPostsProps {
  posts: PostData[];
}

const PaginatedPosts: React.FC<PaginatedPostsProps> = ({ posts }) => {
  const postsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages || 1);
    }
  }, [posts, currentPage, totalPages]);

  const handlePrevious = () =>
    currentPage > 1 && setCurrentPage(currentPage - 1);

  const handleNext = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);

  return (
    <S.PaginatedPostsContainer>
      {posts.length === 0 ? (
        <S.EmptyMessage>
          Nenhum post encontrado para esta pesquisa.
        </S.EmptyMessage>
      ) : (
        <>
          <S.PostsGrid>
            {currentPosts.map((post) => (
              <div key={post.id}>
                <Post {...post} type="column" />
              </div>
            ))}
          </S.PostsGrid>

          <S.PaginationControls>
            <button onClick={handlePrevious} disabled={currentPage === 1}>
              &lt; Anterior
            </button>
            <span>
              Página {currentPage} de {totalPages || 1}
            </span>
            <button onClick={handleNext} disabled={currentPage === totalPages}>
              Próxima &gt;
            </button>
          </S.PaginationControls>
        </>
      )}
    </S.PaginatedPostsContainer>
  );
};

export default PaginatedPosts;
