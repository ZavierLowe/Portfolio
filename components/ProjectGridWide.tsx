import React from 'react'
import { Container } from './container.styled'
import { CardGridWide, CardGridWideDesc, CardGridWideHeading, CardGridWideHeadingWrapper, CardGridWideMeta, ProjectDivider, ProjectIcon, ProjectLinkWrapper } from './ProjectGridWide.styled'
import Image from 'next/image'
import Link from 'next/link'
import FullcourtImgTop from "../assets/images/Fullcourt-Project-Img2.png";


const ProjectGridWide = () => {
  return (
		<div>
			<Container>
				<CardGridWide>
                    {/* Project 1 */}
                    <ProjectLinkWrapper href='/fullcourt'margin="140px 0px">
					<ProjectDivider />

					
						<CardGridWideMeta> Product Design & Mobile Development</CardGridWideMeta>
						<CardGridWideHeadingWrapper>
							<CardGridWideHeading>Fullcourt</CardGridWideHeading>
							<CardGridWideDesc>
								{" "}
								A basketball app for the pickup community
							</CardGridWideDesc>
                                <ProjectIcon>
                                    
								<svg
									// className="project-img"
									width="42"
									height="42"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M6 6L18 18M18 18V10M18 18H10"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
                                </ProjectIcon>
							
						</CardGridWideHeadingWrapper>
					
					
						<Image className="img-hover" src={FullcourtImgTop} />
					
                    </ProjectLinkWrapper>
                 
				</CardGridWide>
			</Container>
		</div>
	);
}

export default ProjectGridWide
