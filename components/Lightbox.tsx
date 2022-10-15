import { useState ,useEffect} from "react"
import useLockBodyScroll from "./hooks/use-lock-scroll"
import React from 'react'
import Image from "next/image"

const Lightbox = ({ children, src, alt, Wrapper ='div', zIndex=100 , }) => {

    const [isOpen , setIsOpen ] = useState(false)







    const toggleIsOpen = () =>{
	
		
		setIsOpen(!isOpen);
		
		}
		

		return (
			<Wrapper onClick={() => toggleIsOpen()}>
				{children}
				{isOpen ? (
					<div
						style={{
							position: "fixed",
							top: "0",
							left: "0",
							height: "100vh",
							width: "100vw",
							backgroundColor: "rgba(0,0,0,0.7)",
							overflow: "hidden ",
							zIndex,
						}}>
						<div className="lightbox-img" onClick={() => toggleIsOpen()}>
							<svg
								style={{
									position: "fixed",
									top: "0",
									cursor: "pointer",
									right: "0",
									padding: "24px",
									zIndex,
								}}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								width="24px"
								height="24px">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>

							<Image
								src={src}
								alt={alt}
								layout="fixed"
								width={970}
								height={900}
							/>
						</div>
					</div>
				) : null}
			</Wrapper>
		);
}

export default Lightbox
