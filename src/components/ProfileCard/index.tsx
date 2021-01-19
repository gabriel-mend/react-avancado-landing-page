import React from 'react'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'

import * as S from './styles'
import { getImageUrl } from 'utils/getImageUrl'

const icons = {
  twitter: <FaTwitter />,
  github: <GrGithub />,
  dribbble: <FaDribbble />
}

type Props = {
  name: string
  role: string
  photo: {
    alternativeText: string
    url: string
  }
  socialLinks?: [{
    url: string
    title: string
  }]
  description: string
}

const ProfileCard: React.FC<Props> = ({
  name,
  role,
  photo,
  description
}) => (
  <S.Card key={name}>
    <S.Image>
      <img
        src={getImageUrl(photo.url)}
        loading="lazy"
        alt={photo.alternativeText}
      />
    </S.Image>
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    {/* <S.SocialLinks>
      {socialLinks.map((item) => (
        <S.Link key={item.title}>
          <a href={item.url} title={item.title}>
            {icons[item.title]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks> */}
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
