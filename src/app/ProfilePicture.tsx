// components/ProfilePicture.tsx
import React from 'react';

interface ProfilePictureProps {
  src: string;
  alt: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} style={{ width: '150px', height: '150px', borderRadius: '50%', marginLeft:'44%'}} />;
};

export default ProfilePicture;
