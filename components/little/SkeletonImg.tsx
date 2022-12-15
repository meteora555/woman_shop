import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonImg: React.FC = () => {
  return (
    <ContentLoader
      speed={2.5}
      width={240}
      height={315}
      viewBox="0 0 240 315"
      backgroundColor="#f3f3f3"
      foregroundColor="#aea444">
      <rect x="0" y="0" rx="5" ry="5" width="240" height="315" />
    </ContentLoader>
  );
};

export default SkeletonImg;
