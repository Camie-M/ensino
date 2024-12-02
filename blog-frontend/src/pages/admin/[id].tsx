import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import BaseLayout from '@/components/BaseLayout';
import PostForm from '@/components/PostForm';


import { PostDataProp, PostFetchById } from '@/utils/fetchPosts';

const EditPostPage: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  const [postInfo, setPostInfo] = useState<PostDataProp>()

  useEffect(() => {
    if (id) {
      const fetchPostInfo = async () => {
        const idString = id.toString()
          const data = await PostFetchById(idString);
          if (data) {
            setPostInfo(data);
          }
      };
      fetchPostInfo();
    }
}, [id]);

  return (
    <BaseLayout banner={false}>
      <h1 className='smallTitle'>{postInfo?.title}</h1>
      <PostForm isEdit={true} defaultValueText='Post 1' defaultValueTitle='Post 1' />
    </BaseLayout>
  );
};

export default EditPostPage;