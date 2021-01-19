import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import * as S from './styles'
import { sectionAboutUsProps } from 'types/api'


const SectionAboutUs = ({ title, authors }: sectionAboutUsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {authors.map(({ name, role, description, socialLinks, photo }) => {
        return (
          <ProfileCard
            key={name}
            name={name}
            role={role}
            photo={photo}
            socialLinks={socialLinks}
            description={description} />
        )
      })}
    </S.Content>
  </Container>
)

export default SectionAboutUs
