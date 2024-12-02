import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { PostFetch, PostDataProp } from '@/utils/fetchPosts';  // Certifique-se de que esse caminho esteja correto

const TabelaPost: React.FC = () => {
    const [posts, setPosts] = useState<PostDataProp[]>([]); // Ajuste para o tipo correto

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await PostFetch();
            if (data) {
                setPosts(data);
            }
        };
        fetchPosts();
    }, []);

    return (
        <S.Tabela>
            <S.Thead>
                <S.Tr>
                    <S.Th>Author</S.Th>
                    <S.Th>Titulo</S.Th>
                    <S.Th>Post</S.Th>
                    {/* <S.Th>Role</S.Th> */}
                    <S.Th>Ações</S.Th>
                </S.Tr>
            </S.Thead>
            <S.Tbody>
                {posts.map((post) => (
                    <S.Tr key={post.id}>
                        <S.Td>{post.author}</S.Td>
                        <S.Td>{post.title}</S.Td>
                        <S.Td>
                            <S.Span>{post.text}</S.Span>
                        </S.Td>
                        {/* <S.Td>
                            <S.Span>{post.role}</S.Span>
                        </S.Td> */}
                        <S.Td>
                            <S.Anchor href={`/admin/${post.id}`}>Editar</S.Anchor>
                        </S.Td>
                    </S.Tr>
                ))}
            </S.Tbody>
        </S.Tabela>
    );
};

export default TabelaPost;
