import React, { useState } from 'react';
import * as S from './styled';
import Image from 'next/image'
export interface PostImg {
    image: string,
}

const ImgContainer: React.FC<PostImg> = ({ image }) => {
    return (
        <S.ContainerImg>
            <Image
                src={image}
                alt="Picture of the author"
                width={400}
                height={200}
                style={{
                    width: "100%",
                    height: "18rem",
                    objectFit: "cover",
                }}
            // placeholder="blur"
            />
            {/* <S.img src={image} /> */}
        </S.ContainerImg>
    );
};

export default ImgContainer;