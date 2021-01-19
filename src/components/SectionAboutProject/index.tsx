import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { sectionAboutProjectProps } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'


const SectionAboutProject = ({ title, description, image }: sectionAboutProjectProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image>
          <img
            src={getImageUrl(image.url)}
            loading="lazy"
            alt={image.alternativeText}
          />
        </S.Image>
        <div>
          <Heading>{title}</Heading>
          <S.Text dangerouslySetInnerHTML={{ __html: description }}/>
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
