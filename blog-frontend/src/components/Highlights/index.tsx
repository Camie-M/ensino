import React, { useEffect, useState } from 'react';
import * as S from './styled';
import Post from '@/components/Posts/Posts';
import { PostFetch, PostDataProp } from '@/utils/fetchPosts';

interface HighLightsProps {
    posts: Array<{
        image: string;
        author: string;
        title: string;
        text: string;
        createdAt: string;
    }>;
}

const HighLights: React.FC<HighLightsProps> = ({ posts }) => {

    return (
        <S.Container>
            <S.ContainerAbove>
                <S.LeftContent>
                    <Post {...posts[0]} type="column" />
                </S.LeftContent>
                <S.RightContent>
                    {posts.slice(1, 3).map((post, index) => (
                        <Post key={index} {...post} type="row" />
                    ))}
                </S.RightContent>
            </S.ContainerAbove>
            <S.ContainerBottom>
                {posts.length > 3 && <Post {...posts[3]} type="column" />}
            </S.ContainerBottom>
        </S.Container>
    );
};

export default HighLights;
