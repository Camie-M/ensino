"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import BaseLayout from '@/components/BaseLayout';
import PostForm from '@/components/PostForm';


import { PostDataProp, getPostById } from '@/utils/fetchPosts';

const EditPostPage: React.FC = () => {
  const router = useRouter()
  const { id } = router.query
  const [isLoading, setIsLoading] = useState(true);
  const [postInfo, setPostInfo] = useState<PostDataProp>()

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role');
    if (!token || userRole !== 'admin') {
      router.replace('/home');
    } else {
      setIsLoading(false);
    }
    if (id) {
      const fetchPostInfo = async () => {
        const idString = id.toString()
        const data = await getPostById(idString);
        if (data) {
          setPostInfo(data);
        }
      };
      fetchPostInfo();
    }
  }, [id,router]);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <BaseLayout banner={false}>
      <h1 className='smallTitle'>{postInfo?.title}</h1>
      <PostForm isEdit={true} defaultValueText={postInfo?.text} defaultValueTitle={postInfo?.title} defaultValueImage={postInfo?.image} />
    </BaseLayout>
  );
};

export default EditPostPage;