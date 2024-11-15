import React from 'react';
import * as S from './styled';
import Post from '@/components/Posts/Posts';

interface HighLightsProps {
    posts: Array<{
        image: string;
        author: string;
        title: string;
        text: string;
    }>;
}

const HighLights: React.FC<HighLightsProps> = ({ posts }) => {
    if (!posts || posts.length === 0) return null;

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
