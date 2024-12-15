import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { getAllPosts, PostDataProp, DeletePost } from '@/utils/fetchPosts';  
import { useRouter } from 'next/router';

const TabelaPost: React.FC = () => {
    const [posts, setPosts] = useState<PostDataProp[]>([]); 
    const [token, setToken] = useState<string>(""); 
    const router = useRouter();
    
    const fetchPosts = async () => {
        const data = await getAllPosts();
        if (data) {
            setPosts(data);
        }
    };

    const handleNavigation = (id: string) => {
        router.push(`/admin/${id}`);
    };

    const handleDelete = async (id: string) => {
        await DeletePost(id, token);
        setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
    };
    
    useEffect(() => {
        const tokenSes = localStorage.getItem("token")
        if (tokenSes) {
            setToken(tokenSes)
        }
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
                            <S.Anchor onClick={() => handleNavigation(post.id)}>Editar</S.Anchor>
                            <S.Anchor onClick={() => handleDelete(post.id)}>Excluir</S.Anchor>
                        </S.Td>
                    </S.Tr>
                ))}
            </S.Tbody>
        </S.Tabela>
    );
};

export default TabelaPost;
